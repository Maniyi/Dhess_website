# Shop closing banner artwork

The [Shop mockup](../../assets/source/shop-reference.png) places the ivory knight and engraved board beside burgundy learning copy. The closing banner uses a dark central area, with mountain slopes to the left, a castle to the right, and short gold rules flanking the heading. The [isolated composition](../../assets/previews/M17A/composition.html) uses existing approved exports directly.

## Sources and placement

| Layer | Reused export | Dimensions | Bytes | Placement |
| --- | --- | ---: | ---: | --- |
| Burgundy atmosphere | [Home product background](../../public/images/home/product-background.webp) | 1672 × 941 | 66,370 | RGB. Covers the learning banner behind a wine-to-ink gradient using `#451816` and `#1d0e0c`. The upper crop brings the burgundy texture into the copy area. |
| Amber room | [Learn piece backdrop](../../public/images/learn/getting-started-pieces-background.webp) | 960 × 600 | 22,998 | RGB. A softened, darkened crop adds amber window light behind the knight. A horizontal mask blends it into burgundy on desktop. A vertical mask makes the transition below the mobile divider. |
| Illustrated board | [Learn board](../../public/images/learn/learn-board-illustrated.webp) | 1360 × 1156 | 537,628 | RGBA. The desktop scene clips a 131%-wide layer rotated −5° and compressed vertically to 43%. The mobile crop uses 148% width and 50% vertical scale. The engravings and coloured motifs fill the lower part of the scene. |
| Ivory knight | [Learn knight](../../public/images/learn/pieces/knight.webp) | 423 × 736 | 39,450 | RGBA. The preview mirrors the approved cutout in CSS so the knight faces the copy, with its proportions and full silhouette intact. A drop shadow grounds the base. |
| Lower-edge velvet | [Shared burgundy velvet](../../public/images/shared/burgundy-velvet.webp) | 2172 × 724 | 135,790 | RGBA. The separately positioned foreground cloth is flattened vertically and cropped by the banner edge. Mobile scales and positions it independently below the artwork. |
| Mountains and castle | [Learn mobile scenery](../../public/images/learn/hero-scenery-mobile.webp) | 932 × 500 | 102,452 | RGB. One continuous landscape sits beneath dark gradients. The desktop crop is centred and slightly compressed vertically. The mobile crop is wider than the banner and biased right to keep the castle visible beside the status. |

The mountain WebP uses source bounds `(740, 0)–(1672, 500)` from the [approved desktop hero scenery](../../public/images/home/hero-background-desktop.webp). The banner shows the upper region and masks the baked tabletop. The underlying export and its master retain their original framing. [Scenery provenance](../milestones/M12.md)

The board, knight and velvet alpha channels retain the full 0–255 range. Their bounds at alpha greater than 10 are `(12, 23)–(1347, 1119)`, `(9, 8)–(414, 728)` and `(0, 325)–(2172, 724)`, respectively, with exclusive maximum coordinates. [Board provenance](learn-board-assets.md) · [Knight provenance](learn-piece-assets.md) · [Room provenance](learn-getting-started-assets.md) · [Burgundy and velvet provenance](product-section-assets.md)

## Typography and composition

Cormorant Garamond 600 sets both headings in warm ivory `#ffdfae`. The Helvetica Neue stack sets the description in `#f8e5c5`. Georgia sets the outline Learn action and gold purchase label. Brass `#795a31` frames the banners and gold `#f0b54e` carries the ornament and rules.

The learning section splits 45/55 at desktop widths. At 760 CSS px and below, the copy and Learn link sit above a horizontal fleur-de-lis rule and the knight scene. The purchase section centres the heading and the visible “Unavailable” status. On mobile, one short rule sits above the heading. The matching Shop showcase status supplies the existing pattern for the noninteractive purchase label. All copy and action labels are HTML. The knight and board share one text alternative. The room, scenery, velvet, and rules are decorative.

The approved artwork covered both scenes, so this phase adds no masters or WebP derivatives. The JPEGs in the preview folder are review captures.

## Product accuracy

The learning banner is an illustrative close-up. The mirrored knight is a concept sculpt, and the displayed placement and scale are compositional choices. The complete board has 10 × 10 squares. The partial crop uses provisional square art and symbol placement and provides no setup or movement guidance. Final sculpt, finish, and board details await confirmation. Purchasing remains unavailable until a verified retailer and destination are supplied.
