# DHESS About hero artwork

The [About reference](../../assets/source/about-reference.png) is an opaque 819 × 1920 PNG, 2,500,384 B. The top composition supplies the focal order, mountain backdrop, lower-left cloth, and tagline treatment. The milestone brief supplies the public copy. The [isolated composition](../../assets/previews/M19A/composition.html) contains live HTML for all website text.

## Approved artwork used in the preview

Sizes are on-disk bytes. Alpha padding is left, top, right, bottom, measured where alpha exceeds 10 on a 0–255 scale. All five transparent exports span the full alpha range.

| Web asset | Dimensions | Size | Alpha padding | Source master or provenance |
| --- | ---: | ---: | --- | --- |
| [Desktop scenery](../../public/images/home/hero-background-desktop.webp) | 1672 × 941 | 234,306 B | Opaque | [Desktop scenery master](../../assets/generated/home/hero-background-desktop-master.png) |
| [Mobile scenery crop](../../public/images/learn/hero-scenery-mobile.webp) | 932 × 500 | 102,452 B | Opaque | [Learn crop history](../milestones/M12.md) |
| [Illustrated board](../../public/images/learn/learn-board-illustrated.webp) | 1360 × 1156 | 537,628 B | 12 / 23 / 13 / 37 px | [Illustrated board master](../../assets/generated/learn/learn-board-illustrated-master.png) |
| [King](../../public/images/learn/pieces/king.webp) | 421 × 736 | 53,000 B | 8 / 8 / 9 / 8 px | [King master](../../assets/generated/learn/king-master.png) |
| [Mystic](../../public/images/learn/pieces/mystic.webp) | 372 × 736 | 40,912 B | 8 / 8 / 8 / 9 px | [Mystic master](../../assets/generated/learn/mystic-master.png) |
| [Queen](../../public/images/learn/pieces/queen.webp) | 348 × 736 | 47,434 B | 9 / 8 / 8 / 8 px | [Queen master](../../assets/generated/learn/queen-master.png) |
| [Burgundy velvet](../../public/images/shared/burgundy-velvet.webp) | 2172 × 724 | 135,790 B | 0 / 325 / 0 / 0 px | [Velvet master](../../assets/generated/home/burgundy-velvet-master.png) |

The existing WebPs support the composition directly. The preview loads 1,049,070 B of hero images on desktop and 917,216 B in the stacked layout, counting one scenery plate per view. Most of the image weight comes from the full illustrated board. The review captures and transparency sheet are the only new raster files.

## Composition and placement

The palette uses the site's ink `#141210`, warm ivory `#f8e5c5`, heading gold `#ffdfae`, pale gold `#ffe0a1`, and brass `#795a31`. Cormorant Garamond 600 sets the heading and the italic tagline. Georgia sets the eyebrow, and the shared Helvetica Neue stack sets the description. The castle sits above and behind the Queen. Its bright sky and rock are concentrated on the right so the left column stays quiet. The strip repeats the reference's two fleurs-de-lis and fading horizontal rules. Its decorations are hidden from assistive technology.

- **Scenery.** On desktop, the plate spans the stage. A horizontal mask protects the left copy and a vertical mask fades the scenery and upper tabletop into a dark floor before the original plate's lower props and cloth. At 760 px and below the independent Learn crop sits right-aligned below the copy with a soft sky transition.
- **Board.** Keep the image and its filters separate from the figures. The approved board is intentionally compressed vertically and cropped at the stage edges to establish a low viewing angle. Its back rail is visible behind the figures and several illustrated squares remain visible between and in front of their bases.
- **Cast and shadows.** The King is tallest and nearest the viewer. The Mystic and Queen sit slightly higher on the board. On desktop their centers are at approximately 54%, 69%, and 84% of the stage. From 761 to 900 px they move right to keep the copy clear. In the stacked layout the three centers are at 23%, 54%, and 81%. Each figure preserves its native aspect ratio and owns a CSS contact shadow positioned under its base. The Mystic and Queen have small brightness adjustments to settle into the background lighting.
- **Velvet.** The separate shared image anchors at the lower left and fades towards the figures. Its mobile width and bottom offset keep the visible folds below the cast. Images use their intrinsic dimensions in the markup. The scene has one accessible description.

## Limits

The staging uses enlarged concept sculptures and a tightly cropped board. The arrangement establishes no game setup or rules. The board's landmark symbols, resource positions, and material details remain provisional, and the approved piece illustrations retain their existing concept-art limitations. The mockup provides visual direction. Verified creator details and brand history were outside the supplied brief. [Board guide](learn-board-assets.md) · [Piece guide](learn-piece-assets.md) · [Product and content decisions](../homepage-pending-items.md)
