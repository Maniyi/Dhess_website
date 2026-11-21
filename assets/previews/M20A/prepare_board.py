"""Export the About board angle from the approved Learn board with Pillow."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[3]
SOURCE = ROOT / "assets/generated/learn/learn-board-illustrated-master.png"
MASTER = ROOT / "assets/generated/about/idea-board-angle-master.png"
PUBLIC = ROOT / "public/images/about"


def inverse_perspective(destination, source):
    """Solve the eight coefficients for Pillow's destination-to-source mapping."""
    equations = []
    for (x, y), (u, v) in zip(destination, source):
        equations.append([x, y, 1, 0, 0, 0, -u * x, -u * y, u])
        equations.append([0, 0, 0, x, y, 1, -v * x, -v * y, v])

    for column in range(8):
        pivot = max(range(column, 8), key=lambda row: abs(equations[row][column]))
        equations[column], equations[pivot] = equations[pivot], equations[column]
        divisor = equations[column][column]
        equations[column] = [value / divisor for value in equations[column]]
        for row, equation in enumerate(equations):
            if row != column:
                factor = equation[column]
                equations[row] = [
                    value - factor * coefficient
                    for value, coefficient in zip(equation, equations[column])
                ]
    return tuple(row[-1] for row in equations)


def main():
    # The four corners of the board's top plane, clockwise from the back left.
    source_corners = [(129, 26), (1230, 26), (1345, 1080), (13, 1080)]
    scene_corners = [(492, 53), (1503, 221), (1320, 1008), (45, 780)]
    source = Image.open(SOURCE).convert("RGBA")
    board = source.transform(
        (1560, 1100),
        Image.Transform.PERSPECTIVE,
        inverse_perspective(scene_corners, source_corners),
        resample=Image.Resampling.BICUBIC,
    )
    alpha = board.getchannel("A").point(lambda level: 0 if level <= 3 else 255 if level >= 248 else level)
    board.putalpha(alpha)
    board.save(MASTER, optimize=True)

    board.save(PUBLIC / "idea-board-angle.webp", quality=88, method=6)
    board.resize((780, 550), Image.Resampling.LANCZOS).save(
        PUBLIC / "idea-board-angle-780.webp", quality=88, method=6
    )


if __name__ == "__main__":
    main()
