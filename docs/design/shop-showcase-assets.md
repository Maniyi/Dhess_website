# DHESS European Edition Shop artwork

Milestone 13A uses the [Shop mockup](../../assets/source/shop-reference.png) for composition. The product presentation places the approved concept box behind an ivory king and hooded mystic on the left and a knight and rook on the right. The board and the four-piece lineup share the same dark walnut tabletop and burgundy velvet. In the lineup, all four figures use the same cutouts as the product view, with space between their bases.

## Design

The showcase uses site charcoal `#141210`, warm ivory `#f8e5c5`, pale gold `#ffe0a1`, action gold `#f0b54e`, and brass `#795a31`. Cormorant Garamond 600 sets the product and supporting headings. Georgia sets the eyebrow, controls, and facts. The description uses the site's Helvetica Neue stack. The tabletop and velvet provide the burgundy accent.

The desktop grid puts the gallery and thumbnail strip in the wider left column with left-aligned copy across a fine brass divider. The mobile layout puts the breadcrumb and headings above the gallery, followed by the description, facts, purchase status, and section navigation. At both sizes, a single 3:2 frame keeps the gallery stable through selection changes. The main artwork carries the visual detail, so the surrounding section uses a quiet charcoal ground.

## Approved sources

Alpha padding is measured at alpha greater than 10 and given in left, top, right, bottom order. Files are reused directly.

| Source | Dimensions | Bytes | Alpha padding or role |
| --- | ---: | ---: | --- |
| [Shop mockup](../../assets/source/shop-reference.png) | 819 × 1920 | 2,643,427 | Opaque layout and mood reference |
| [Supplied package front](../../assets/source/dhess-package.jpeg) | 1600 × 1028 | 290,343 | Opaque packaging artwork reference |
| [Concept box WebP](../../public/images/home/product-box-concept.webp) | 1563 × 1006 | 318,786 | 158 / 18 / 160 / 58 px |
| [Illustrated board WebP](../../public/images/learn/learn-board-illustrated.webp) | 1360 × 1156 | 537,628 | 12 / 23 / 13 / 37 px |
| [King WebP](../../public/images/learn/pieces/king.webp) | 421 × 736 | 53,000 | 8 / 8 / 9 / 8 px |
| [Mystic WebP](../../public/images/learn/pieces/mystic.webp) | 372 × 736 | 40,912 | 8 / 8 / 8 / 9 px |
| [Knight WebP](../../public/images/learn/pieces/knight.webp) | 423 × 736 | 39,450 | 9 / 8 / 9 / 8 px |
| [Rook WebP](../../public/images/learn/pieces/rook.webp) | 429 × 736 | 32,388 | 8 / 8 / 9 / 8 px |
| [Tabletop WebP](../../public/images/home/product-background.webp) | 1672 × 941 | 66,370 | Opaque coated tabletop and atmosphere |
| [Velvet WebP](../../public/images/shared/burgundy-velvet.webp) | 2172 × 724 | 135,790 | 0 / 325 / 0 / 0 px |

See the [packaging guide](product-section-assets.md), [board guide](learn-board-assets.md), and [piece guide](learn-piece-assets.md) for master files and provenance. Existing artwork covers the decorative requirements. The Shop composition source is the isolated HTML and CSS, with the box, board, four pieces, background, and cloth independently replaceable.

## Placement and exports

The box image spans 92% of the stage width, inset 4% on the left. Its existing alpha padding leaves the visible box with roughly 13% clear space to either side. The four figures stand near the lower corners at 34–43% of the frame height. The pieces view spaces the same cutouts across the tabletop at 54–66% of the frame height. The board is centered at 94% of the stage height and sits 4% from the bottom, keeping all four sides of its walnut frame visible. A translucent charcoal gradient darkens the centered tabletop plate. Only the velvet extends past the stage edges.

| Gallery view | Thumbnail | Dimensions | Bytes |
| --- | --- | ---: | ---: |
| [Product](../../assets/previews/M13A/gallery-product.jpg) | [Product WebP](../../public/images/shop/product-thumbnail.webp) | 360 × 240 | 29,988 |
| [Board](../../assets/previews/M13A/gallery-board.jpg) | [Board WebP](../../public/images/shop/board-thumbnail.webp) | 360 × 240 | 23,092 |
| [Pieces](../../assets/previews/M13A/gallery-pieces.jpg) | [Pieces WebP](../../public/images/shop/pieces-thumbnail.webp) | 360 × 240 | 16,104 |

Each opaque WebP is a full 3:2 stage crop from Chrome at a 1440 px viewport, downsampled from 777 × 518 px with Lanczos and encoded at WebP quality 90 in Pillow. This preserves the same framing in the thumbnail and its selected view. The thumbnails total 69,184 bytes. A [light and dark edge sheet](../../assets/previews/M13A/transparency-check.jpg) shows the reused transparent layers.

## Product accuracy

The concept box inherits the inferred spine and thickness from the approved homepage artwork. Its large DHESS lettering and edition banner remain intact. Small print and the baked comparative badge remain unverified. The 10 × 10 board is an approved illustration with provisional symbols and square placements. Piece sculpts, materials, and relative display sizes are illustrative. The pictured four-piece grouping establishes the composition and makes no claim about included quantities. Published product specifications, final packaging details, and purchasing information require approved sources.


## Phase B placement revision

The Shop hero uses a shallow CSS perspective on the existing box cutout, with the left spine forward and the upper edge of the front face rising to the right. A clip follows the spine and front rim to hide the illustrated top face. The product view centers the king and mystic around 11% and 25% of the stage width, with the knight and rook around 80% and 91%. The knight overlaps the right edge of the box. The smaller rook sits just behind it and farther right. The king and knight sit lower and overlap the edges of the slightly darker mystic and rook. Soft contact shadows ground each base against the tabletop. The pieces-only view places the four cutouts on a common baseline at 15%, 38%, 62%, and 85% of the stage width. The velvet rises along the corners and the board retains its complete frame.

On desktop, three equally spaced frames occupy the thumbnail row below the stage. The section links align beside the row. On narrow screens, the frames span the stage width and the section links follow the product information. The first Phase B thumbnail frames the package on its own. It opens the product composition with the four foreground figures. The board and pieces thumbnails use the framing of their corresponding views. Each was downsampled from 777 × 518 px to 360 × 240 px with Lanczos and encoded at WebP quality 90.

| Phase B thumbnail | Bytes |
| --- | ---: |
| [Package](../../public/images/shop/product-view-thumbnail.webp) | 26,572 |
| [Board](../../public/images/shop/board-view-thumbnail.webp) | 23,492 |
| [Pieces](../../public/images/shop/pieces-view-thumbnail.webp) | 16,230 |
