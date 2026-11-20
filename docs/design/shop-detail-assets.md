# DHESS Shop detail-card artwork

The [Shop reference](../../assets/source/shop-reference.png) shows the parchment section at approximately x 0–819, y 1236–1555. Its three close-ups show the board surface, Queen and Mystic, and the DHESS package title. The [isolated composition](../../assets/previews/M16A/composition.html#explore-the-set) uses square-edged 16:9 images with editable HTML below. Fine rules sit between the desktop columns and between the stacked mobile cards.

The palette carries over the Shop overview’s parchment `#efd3a5`, dark brown `#302015`, body ink `#3b291b`, oxblood `#851e18`, and brass `#795a31`. The preview uses the site's Cormorant Garamond 600, Georgia, and Helvetica Neue stacks for headings, eyebrow, and descriptions. A cream wash quiets the center of the approved paper tile, repeated at 300 CSS px. A thin brass edge meets the lineup’s walnut and velvet.

## Inventory

| Role | File | Dimensions | Size |
| --- | --- | ---: | ---: |
| Reference | [Shop mockup](../../assets/source/shop-reference.png) | 819 × 1920 | 2,643,427 B |
| Board source | [Approved illustrated board master](../../assets/generated/learn/learn-board-illustrated-master.png) | 1360 × 1156 | 3,225,250 B |
| Board card | [Board WebP](../../public/images/shop/detail-board.webp) | 832 × 468 | 120,814 B |
| Queen | [Approved Learn cutout](../../public/images/learn/pieces/queen.webp) | 348 × 736 | 47,434 B |
| Mystic | [Approved Learn cutout](../../public/images/learn/pieces/mystic.webp) | 372 × 736 | 40,912 B |
| Piece backdrop | [Approved walnut backdrop](../../public/images/learn/getting-started-pieces-background.webp) | 960 × 600 | 22,998 B |
| Piece card master | [Queen and Mystic PNG](../../assets/generated/shop/detail-pieces-master.png) | 832 × 468 | 390,084 B |
| Piece card | [Queen and Mystic WebP](../../public/images/shop/detail-pieces.webp) | 832 × 468 | 40,464 B |
| Package artwork reference | [Supplied front artwork](../../assets/source/dhess-package.jpeg) | 1600 × 1028 | 290,343 B |
| Package source | [Approved concept box master](../../assets/generated/home/product-box-concept-master.png) | 1563 × 1006 | 2,137,638 B |
| Package card | [Packaging WebP](../../public/images/shop/detail-packaging.webp) | 688 × 387 | 73,820 B |
| Parchment | [Approved paper tile](../../public/images/home/european-intro-paper-tile.webp) | 600 × 600 | 13,636 B |

The three opaque RGB WebPs total 235,098 bytes. Crop coordinates below use pixel boundaries with exclusive right and bottom values.

## Crops and composition

- **Board.** Rotate the approved master 9° clockwise with bicubic resampling and an expanded 1526 × 1356 canvas. Crop `(399, 360)–(1231, 828)` in that canvas and export WebP at quality 88. The crop is entirely inside the illustrated surface. Its residual near-opaque alpha is discarded for the RGB export. The rotation preserves the master’s proportions and perspective. The existing Learn crop was reviewed and has vertical compression documented in its guide. The card shows four coloured resource motifs and several landmark engravings. The complete board has 10 × 10 squares, and the illustrated symbols and their placement remain provisional. [Learn crop](learn-getting-started-assets.md) · [Board provenance](learn-board-assets.md)
- **Pieces.** Crop the approved tabletop WebP at `(64, 0)–(896, 468)` and dim it with RGB `(17, 13, 10)` at 45/255 opacity. Place the Mystic at `(408, 37)`, proportionally resized to 344 × 680 with Lanczos, then place the 348 × 736 Queen at `(91, 14)`. The canvas crops both figures below the upper torso and keeps their faces, the crown, and the hood visible. Save the composite as an RGB PNG and export WebP at quality 88. The figures retain the source lighting and are illustrative. Final sculpt details and finish await product confirmation. [Piece provenance](learn-piece-assets.md)
- **Packaging.** The approved concept is turned 5° counterclockwise with bicubic resampling so the front rim rises toward the right and the decorated left spine stays visible, as in the Shop reference. To keep the title and spine in the same frame while omitting the unverified product-fact icons, cover that panel with adjacent cloud texture from source bounds `(479, 92)–(601, 252)`. Resize the patch to 205 × 205, place it at `(288, 152)`, and feather its inset mask by 4 px. After rotation, crop `(146, 73)–(1170, 649)` from the expanded 1645 × 1140 canvas and composite the transparent margin over `#251a12`. Resize the 1024 × 576 crop to 688 × 387 with Lanczos and export WebP at quality 90. The DHESS title, tagline, gilt rim, spine artwork, and central illustration come from the approved concept. The baked comparative badge is outside the crop. Final print details and claims remain provisional. [Packaging provenance](product-section-assets.md)
