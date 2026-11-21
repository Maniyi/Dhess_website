"""Export the About details from approved artwork. Run with Python and Pillow."""

from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[3]
PUBLIC = ROOT / "public/images"
OUTPUT = PUBLIC / "about"
SIZE = (832, 468)
TILE = 160

# Measured boundaries of the playing surface on the approved Learn master.
# The row edges are horizontal and the columns taper toward the back rail.
ROW_EDGES = (64, 153, 243, 334, 429, 524, 620, 716)
COLUMN_EDGES = (
    (174, 277, 377, 477, 577, 680, 784, 888, 989, 1091, 1189),
    (165, 270, 373, 476, 576, 680, 784, 888, 991, 1093, 1195),
    (156, 264, 369, 474, 576, 680, 785, 890, 994, 1099, 1206),
    (146, 258, 366, 472, 575, 680, 786, 893, 997, 1105, 1216),
    (137, 252, 362, 469, 574, 680, 788, 896, 1001, 1111, 1224),
    (128, 246, 355, 466, 573, 680, 789, 899, 1004, 1118, 1234),
    (118, 240, 353, 464, 572, 680, 791, 901, 1009, 1122, 1246),
    (108, 234, 349, 461, 571, 680, 793, 904, 1014, 1128, 1255),
)


def board_tile(board, row, column):
    # Inset the sample slightly so seams never duplicate a neighbouring tile.
    left, right = COLUMN_EDGES[row][column:column + 2]
    lower_left, lower_right = COLUMN_EDGES[row + 1][column:column + 2]
    top, bottom = ROW_EDGES[row:row + 2]
    corners = (
        left + 2, top + 2,
        lower_left + 2, bottom - 2,
        lower_right - 2, bottom - 2,
        right - 2, top + 2,
    )
    return board.transform(
        (TILE, TILE), Image.Transform.QUAD, corners, Image.Resampling.BICUBIC
    )


def board_detail(board, row_start, column_start, substitutions, crop):
    # Keep each tile square on the intermediate surface. One shared transform
    # sets the angle for all the tiles in the finished picture.
    surface = Image.new("RGB", (TILE * 5, TILE * 5))
    for row in range(5):
        for column in range(5):
            source = substitutions.get((row, column), (row + row_start, column + column_start))
            surface.paste(board_tile(board, *source), (column * TILE, row * TILE))
    return surface.transform(SIZE, Image.Transform.QUAD, crop, Image.Resampling.BICUBIC)


def characters():
    plate = Image.open(PUBLIC / "home/next-move-background.webp").convert("RGB")
    plate = ImageOps.fit(plate, SIZE, method=Image.Resampling.LANCZOS, centering=(0.32, 0.43))
    scene = Image.blend(plate, Image.new("RGB", SIZE, "#21160f"), 0.34).convert("RGBA")

    for name, center, top, height in (
        ("queen", 424, 48, 580),
        ("mystic", 671, 81, 554),
        ("king", 159, 15, 620),
    ):
        piece = Image.open(PUBLIC / f"learn/pieces/{name}.webp").convert("RGBA")
        piece = piece.resize(
            (round(piece.width * height / piece.height), height), Image.Resampling.LANCZOS
        )
        scene.alpha_composite(piece, (center - piece.width // 2, top))
    return scene.convert("RGB")


def main():
    board = Image.open(
        ROOT / "assets/generated/learn/learn-board-illustrated-master.png"
    ).convert("RGB")
    landmarks = board_detail(
        board, 0, 2, {(1, 1): (0, 0), (2, 2): (5, 5)},
        (103, 104, 42, 488, 693, 604, 651, 181),
    )
    resources = board_detail(
        board, 0, 2,
        {
            (1, 1): (4, 0), (1, 3): (4, 2), (2, 2): (4, 4),
            (3, 1): (4, 6), (3, 3): (4, 8),
            (4, 0): (6, 2), (4, 2): (6, 4), (4, 4): (6, 6),
        },
        (81, 101, 65, 658, 733, 701, 701, 135),
    )
    for name, image in (("landmarks", landmarks), ("resources", resources), ("characters", characters())):
        image.save(OUTPUT / f"detail-{name}.webp", quality=89, method=6)


if __name__ == "__main__":
    main()
