# DHESS About detail-card artwork

The [About mockup](../../assets/source/about-reference.png) supplies the charcoal section, the three framed detail views, and their order. The cards appear at approximately y 800–1120 in the 819 × 1920 PNG (2,500,384 B). The milestone brief supplies the editable copy. The [isolated HTML preview](../../assets/previews/M21A/composition.html) uses the site's existing fonts and colour variables.

## Artwork

| Illustration | Dimensions | File size | Source and treatment |
| --- | ---: | ---: | --- |
| [Landmarks](../../public/images/about/detail-landmarks.webp) | 832 × 468 px | 77,570 B | Colosseum and Eiffel Tower tiles from the [approved Learn board master](../../assets/generated/learn/learn-board-illustrated-master.png), set diagonally within the walnut and ivory grid. Nearby engravings frame the two subjects. |
| [Resources](../../public/images/about/detail-resources.webp) | 832 × 468 px | 84,138 B | The approved board's gold, blue fish, flame, timber and ore tiles rearranged on five ivory squares, with the flame in the centre. Peripheral tiles use other source engravings. |
| [Characters](../../public/images/about/detail-characters.webp) | 832 × 468 px | 55,228 B | Approved [King](../../public/images/learn/pieces/king.webp), [Queen](../../public/images/learn/pieces/queen.webp) and [Mystic](../../public/images/learn/pieces/mystic.webp) cutouts, staged against the [approved charcoal plate](../../public/images/home/next-move-background.webp). |
| [Section background](../../public/images/home/next-move-background.webp) | 1672 × 941 px | 25,214 B | Direct reference to the charcoal plate with a CSS ink wash. |

The new opaque WebPs total 216,936 B. The [export script](../../assets/previews/M21A/prepare_artwork.py) records source coordinates, substitutions and compositing. The approved inputs and the reproducible script serve as the masters. All artwork is sourced from existing files at their available resolution. The small card crops in the mockup only provide composition guidance.

## Crop details

- The illustrated board is 1360 × 1156 px, 3,225,250 B. Measured tile quadrilaterals are sampled just inside their edges and mapped to squares on a 5 × 5 working surface. Each finished view maps one quadrilateral on that surface into the 16:9 frame to give the tiles a consistent oblique view. The script uses bicubic resampling. Working-surface coordinates list top left, bottom left, bottom right and top right.
- **Landmarks.** The working surface starts at row 0, column 2 of the board, counting from zero. The Colosseum comes from row 0, column 0 and the Eiffel Tower from row 5, column 5. The crop corners are `(103, 104)`, `(42, 488)`, `(693, 604)` and `(651, 181)`. The landmark views are warmer and slightly more elevated than those in the mockup. Individual engraving detail is bounded by the tile resolution of the approved board.
- **Resources.** All five motifs come from row 4 of the same board. The crop corners are `(81, 101)`, `(65, 658)`, `(733, 701)` and `(701, 135)`. The five motifs form a staggered layout on alternating ivory tiles. The mockup places the motifs closer together on adjacent squares.
- **Characters.** The King, Queen and Mystic sources are 421 × 736, 348 × 736 and 372 × 736 px, respectively. Lanczos resizing preserves each aspect ratio at heights of 620, 580 and 554 px. Their horizontal centres are at x 159, 424 and 671, and their tops at y 15, 48 and 81. The lower frame crops each figure above the base. The charcoal plate is cover-cropped toward the warm upper-left light and blended with warm ink. The original faces, crown details and sculpt shading are preserved.

## Composition

- The palette uses ink `#141210`, cream `#f8e5c5`, pale gold `#ffe0a1`, gold `#f0b54e` and brass `#795a31`. The quiet charcoal and narrow frames carry the mockup's materials. Cormorant Garamond 600 sets the heading and card titles. Georgia sets the eyebrow and Helvetica Neue sets the descriptions.
- Desktop keeps the eyebrow at the first card's left edge and centres the heading and card copy. Narrow gold bevels echo the mockup's clipped corners. Fine vertical rules separate the columns.
- At 760 CSS px and below the eyebrow centres, the cards stack in order and horizontal rules separate them. The 16:9 artwork keeps the same framing at each width. The outlines and rules belong to CSS.

The boards in the first two cards are illustrative arrangements of existing artwork. Final symbols, square positions, resource rules and piece finishes remain provisional. The figures use the approved concept sculpts. [Board guide](learn-board-assets.md) · [Piece guide](learn-piece-assets.md) · [Shop crop guide](shop-detail-assets.md) · [Pending items](../homepage-pending-items.md)
