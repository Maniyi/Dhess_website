"""Convert the two product PNG masters to WebP with macOS's bundled libwebp.

This avoids a project dependency. Run from the repository root with Python 3.
"""

from __future__ import annotations

import ctypes
from pathlib import Path
import struct
import zlib

ROOT = Path(__file__).resolve().parents[3]
LIBWEBP = "/Applications/Inkscape.app/Contents/Resources/lib/libwebp.7.dylib"


def read_png(path: Path) -> tuple[int, int, bytes]:
    data = path.read_bytes()
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"Not PNG: {path}")
    offset = 8
    compressed = bytearray()
    width = height = channels = 0
    while offset < len(data):
        size = struct.unpack_from(">I", data, offset)[0]
        kind = data[offset + 4 : offset + 8]
        payload = data[offset + 8 : offset + 8 + size]
        offset += size + 12
        if kind == b"IHDR":
            width, height, depth, color, compression, filtering, interlace = struct.unpack(">IIBBBBB", payload)
            if depth != 8 or color not in (2, 6) or compression or filtering or interlace:
                raise ValueError(f"Unsupported PNG format: {path}")
            channels = 4 if color == 6 else 3
        elif kind == b"IDAT":
            compressed.extend(payload)
        elif kind == b"IEND":
            break
    raw = zlib.decompress(compressed)
    stride = width * channels
    rgba = bytearray(width * height * 4)
    previous = bytearray(stride)
    offset = 0
    for y in range(height):
        filter_type = raw[offset]
        offset += 1
        row = bytearray(raw[offset : offset + stride])
        offset += stride
        for x in range(stride):
            left = row[x - channels] if x >= channels else 0
            up = previous[x]
            upper_left = previous[x - channels] if x >= channels else 0
            if filter_type == 1:
                predictor = left
            elif filter_type == 2:
                predictor = up
            elif filter_type == 3:
                predictor = (left + up) // 2
            elif filter_type == 4:
                p = left + up - upper_left
                distances = (abs(p - left), abs(p - up), abs(p - upper_left))
                predictor = (left, up, upper_left)[distances.index(min(distances))]
            elif filter_type == 0:
                predictor = 0
            else:
                raise ValueError(f"Unsupported PNG filter {filter_type}: {path}")
            row[x] = (row[x] + predictor) & 255
        for x in range(width):
            start = y * width * 4 + x * 4
            pixel = x * channels
            rgba[start : start + 3] = row[pixel : pixel + 3]
            rgba[start + 3] = row[pixel + 3] if channels == 4 else 255
        previous = row
    return width, height, bytes(rgba)


def write_webp(path: Path, width: int, height: int, pixels: bytes) -> None:
    lib = ctypes.CDLL(LIBWEBP)
    lib.WebPEncodeRGBA.argtypes = [ctypes.c_void_p, ctypes.c_int, ctypes.c_int, ctypes.c_int, ctypes.c_float, ctypes.POINTER(ctypes.c_void_p)]
    lib.WebPEncodeRGBA.restype = ctypes.c_size_t
    lib.WebPFree.argtypes = [ctypes.c_void_p]
    source = ctypes.create_string_buffer(pixels)
    result = ctypes.c_void_p()
    size = lib.WebPEncodeRGBA(source, width, height, width * 4, 88.0, ctypes.byref(result))
    if not size:
        raise RuntimeError(f"WebP encoding failed: {path}")
    try:
        path.write_bytes(ctypes.string_at(result, size))
    finally:
        lib.WebPFree(result)


for name in ("box-concept", "background"):
    source = ROOT / f"assets/generated/home/product-{name}-master.png"
    target = ROOT / f"public/images/home/product-{name}.webp"
    width, height, pixels = read_png(source)
    write_webp(target, width, height, pixels)
    print(f"{target.relative_to(ROOT)}: {width} × {height}, {target.stat().st_size:,} bytes")
