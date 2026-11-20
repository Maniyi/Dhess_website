"""Export the selected transparent masters and build the edge review sheet."""

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[3]
PREVIEW = Path(__file__).resolve().parent
MASTER = ROOT / "assets/generated/learn"
EXPORT = ROOT / "public/images/learn/pieces"
PIECES = ("king", "queen", "bishop", "rook", "mystic", "knight", "pawn")
CLEAN_ALPHA = [0 if value <= 3 else 255 if value >= 248 else value for value in range(256)]


def export_piece(piece):
    source = MASTER / f"{piece}-master.png"
    destination = EXPORT / f"{piece}.webp"
    sculpture = Image.open(source).convert("RGBA")
    alpha = sculpture.getchannel("A").point(CLEAN_ALPHA)
    sculpture.putalpha(alpha)
    sculpture = sculpture.crop(alpha.getbbox())
    sculpture.thumbnail((720, 720), Image.Resampling.LANCZOS)
    padding = 8
    canvas = Image.new("RGBA", (sculpture.width + 2 * padding, sculpture.height + 2 * padding))
    canvas.paste(sculpture, (padding, padding))
    canvas.save(destination, "WEBP", quality=89, method=6)
    return Image.open(destination).convert("RGBA")


def make_review_sheet(exports):
    tile_width, tile_height = 186, 290
    sheet = Image.new("RGB", (tile_width * len(exports), tile_height * 2))
    draw = ImageDraw.Draw(sheet)
    for row, (paper, ink) in enumerate((("#141210", "#f8e5c5"), ("#f3e9d8", "#302015"))):
        for column, (piece, sculpture) in enumerate(exports.items()):
            x, y = column * tile_width, row * tile_height
            draw.rectangle((x, y, x + tile_width - 1, y + tile_height - 1), fill=paper)
            thumbnail = sculpture.copy()
            thumbnail.thumbnail((tile_width - 22, tile_height - 44), Image.Resampling.LANCZOS)
            sheet.paste(thumbnail, (x + (tile_width - thumbnail.width) // 2, y + 255 - thumbnail.height), thumbnail)
            draw.text((x + tile_width // 2, y + 272), piece.title(), fill=ink, anchor="mm")
    sheet.save(PREVIEW / "transparent-edge-check.jpg", quality=92, subsampling=0)


if __name__ == "__main__":
    EXPORT.mkdir(parents=True, exist_ok=True)
    make_review_sheet({piece: export_piece(piece) for piece in PIECES})
