"""Build the exact-grid board and web exports for M03A review artwork.

Run from the project root with Pillow available on PYTHONPATH.
This script writes only the new European intro files named below.
"""

from pathlib import Path
from random import Random

from PIL import Image, ImageDraw, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[3]
MASTERS = ROOT / "assets/generated/home"
EXPORTS = ROOT / "public/images/home"
PREVIEWS = ROOT / "assets/previews/M03A"
EXPORTS.mkdir(parents=True, exist_ok=True)


def point(u, v, corners):
    back_left, back_right, front_right, front_left = corners
    x = ((1 - u) * (1 - v) * back_left[0] + u * (1 - v) * back_right[0]
         + u * v * front_right[0] + (1 - u) * v * front_left[0])
    y = ((1 - u) * (1 - v) * back_left[1] + u * (1 - v) * back_right[1]
         + u * v * front_right[1] + (1 - u) * v * front_left[1])
    return round(x), round(y)


def draw_board():
    size = 2000, 1000
    outer = ((260, 174), (1740, 174), (1900, 807), (100, 807))
    inner = ((315, 228), (1685, 228), (1838, 749), (162, 749))
    shadow = Image.new("RGBA", size)
    sd = ImageDraw.Draw(shadow)
    sd.polygon([(x + 10, y + 26) for x, y in outer], fill=(28, 17, 11, 115))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    board = Image.new("RGBA", size)
    draw = ImageDraw.Draw(board)

    # A shallow wood edge, with a continuous dark frame and restrained gold inlay.
    draw.polygon([(x, y + 22) for x, y in outer], fill=(41, 22, 12, 255))
    draw.line([outer[3], (outer[3][0], outer[3][1] + 22),
               (outer[2][0], outer[2][1] + 22), outer[2]],
              fill=(96, 54, 24, 255), width=8)
    draw.polygon(outer, fill=(65, 34, 17, 255))
    draw.line(list(outer) + [outer[0]], fill=(187, 127, 48, 255), width=12, joint="curve")
    draw.line([(x + (1000 - x) * .012, y + (470 - y) * .012) for x, y in outer] +
              [(outer[0][0] + (1000 - outer[0][0]) * .012,
                outer[0][1] + (470 - outer[0][1]) * .012)],
              fill=(242, 192, 94, 255), width=3, joint="curve")
    draw.line(list(inner) + [inner[0]], fill=(17, 11, 8, 255), width=12, joint="curve")
    draw.line(list(inner) + [inner[0]], fill=(211, 148, 62, 255), width=4, joint="curve")

    rng = Random(310)
    cells = []
    for row in range(10):
        for col in range(10):
            u0, u1 = col / 10, (col + 1) / 10
            v0, v1 = row / 10, (row + 1) / 10
            polygon = [point(u0, v0, inner), point(u1, v0, inner),
                       point(u1, v1, inner), point(u0, v1, inner)]
            tint = rng.randrange(-8, 9)
            if (row + col) % 2:
                color = (100 + tint, 66 + tint // 2, 40 + tint // 3, 255)
            else:
                color = (220 + tint, 199 + tint, 159 + tint, 255)
            draw.polygon(polygon, fill=color)
            cells.append((row, col, polygon))

    for index in range(11):
        t = index / 10
        draw.line([point(t, 0, inner), point(t, 1, inner)], fill=(48, 31, 20, 180), width=3)
        draw.line([point(0, t, inner), point(1, t, inner)], fill=(48, 31, 20, 180), width=3)

    # Tiny gilt flourishes stay on the frame. No square symbols are invented.
    for side in (0, 1):
        for index in range(1, 29):
            u = index / 29
            edge = tuple(round(outer[side][axis] * (1 - u) + outer[side + 1][axis] * u)
                         for axis in (0, 1))
            if side == 0:
                edge = (edge[0], edge[1] + 23)
            else:
                edge = (edge[0] - 25, edge[1])
            x, y = edge
            draw.line([(x - 5, y), (x, y - 4), (x + 5, y), (x, y + 4), (x - 5, y)],
                      fill=(211, 159, 78, 180), width=2)

    image = Image.alpha_composite(shadow, board)
    assert len(cells) == 100
    assert len({row for row, _, _ in cells}) == 10
    assert len({col for _, col, _ in cells}) == 10
    master = MASTERS / "european-intro-board-master.png"
    image.save(master, optimize=True)
    image.save(EXPORTS / "european-intro-board.webp", "WEBP", quality=91, method=6)

    # Separate construction overlay for visual counting; never used on the site.
    check = image.copy()
    cd = ImageDraw.Draw(check)
    for index in range(11):
        t = index / 10
        cd.line([point(t, 0, inner), point(t, 1, inner)], fill=(255, 38, 24, 255), width=4)
        cd.line([point(0, t, inner), point(1, t, inner)], fill=(27, 110, 250, 255), width=4)
    check.save(PREVIEWS / "board-grid-check.png", optimize=True)


def export_illustration(name):
    source = Image.open(MASTERS / f"european-intro-{name}-master.png").convert("RGBA")
    alpha = source.getchannel("A")
    hard = alpha.point(lambda value: 255 if value > 10 else 0)
    bounds = hard.getbbox()
    assert bounds, name
    pad = 34
    crop = (max(0, bounds[0] - pad), max(0, bounds[1] - pad),
            min(source.width, bounds[2] + pad), min(source.height, bounds[3] + pad))
    source.crop(crop).save(EXPORTS / f"european-intro-{name}.webp", "WEBP", quality=92, method=6)
    return bounds, crop


def main():
    draw_board()
    for name in ("background-desktop", "background-mobile"):
        source = Image.open(MASTERS / f"european-intro-{name}-master.png").convert("RGB")
        source.save(EXPORTS / f"european-intro-{name}.webp", "WEBP", quality=87, method=6)
        if name == "background-mobile":
            quiet = source.crop((320, 730, 620, 1030))
            tile = Image.new("RGB", (600, 600))
            tile.paste(quiet, (0, 0))
            tile.paste(ImageOps.mirror(quiet), (300, 0))
            tile.paste(ImageOps.flip(quiet), (0, 300))
            tile.paste(ImageOps.flip(ImageOps.mirror(quiet)), (300, 300))
            tile.save(EXPORTS / "european-intro-paper-tile.webp", "WEBP", quality=85, method=6)
    for name in ("pieces", "resources"):
        print(name, export_illustration(name))
    edge_check()
    print("board: 10 rows × 10 columns = 100 cells")


def edge_check():
    sheet = Image.new("RGBA", (1440, 1250), (239, 214, 174, 255))
    draw = ImageDraw.Draw(sheet)
    draw.rectangle((0, 0, 719, 1249), fill=(23, 19, 17, 255))
    for row, (name, target_width) in enumerate((("board", 640), ("pieces", 480), ("resources", 510))):
        image = Image.open(EXPORTS / f"european-intro-{name}.webp").convert("RGBA")
        target_height = round(image.height * target_width / image.width)
        image = image.resize((target_width, target_height), Image.Resampling.LANCZOS)
        y = (45, 420, 820)[row]
        for x in (360 - target_width // 2, 1080 - target_width // 2):
            sheet.alpha_composite(image, (x, y))
    sheet.convert("RGB").save(PREVIEWS / "transparent-edge-check.jpg", quality=94)


if __name__ == "__main__":
    main()
