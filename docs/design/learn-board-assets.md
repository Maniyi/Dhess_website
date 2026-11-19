# DHESS Learn board artwork

The [live Learn section](../../learn.html#the-board) uses the approved illustrated board with the existing parchment plates and paper tile. The [isolated M08A composition](../../assets/previews/M08A/composition.html) records the artwork approval layout. The board, decoration, and HTML copy are independent layers.

## References

| Source | Dimensions and size | Role |
| --- | --- | --- |
| [Learn mockup](../../assets/source/learn-reference.png) | 787 × 1998 px, 2,538,696 B | The first parchment chapter supplies the two-column layout, heading hierarchy, and restrained edge decoration. |
| [European board reference](../../assets/source/european-board.jpeg) | 1600 × 800 px, 139,641 B | A watermarked product concept that informs the palette and general appearance. |
| [Approved homepage hero board](../../assets/generated/home/hero-board-provisional-master.png) | 1320 × 840 px | Material, frame, and already depicted motif reference. Playing pieces obscure part of the surface. |
| [Approved resource artwork](../../public/images/home/european-intro-resources.webp) | 1370 × 981 px | Existing visual reference for gold, fish, flame, timber, and ore. |
| [M03A asset guide](european-intro-assets.md) and [grid overlay](../../assets/previews/M03A/board-grid-check.png) | Existing documentation and review image | Provenance, board construction, and alpha evidence for the approved artwork. |

## Existing artwork

Alpha bounds use alpha greater than 10 with exclusive right and bottom coordinates. Padding is listed left, top, right, bottom.

| File | Dimensions | Size | Alpha and role |
| --- | --- | ---: | --- |
| [Board master](../../assets/generated/home/european-intro-board-master.png) | 2000 × 1000 px | 45,147 B | RGBA. Bounds `(87, 167)–(1934, 867)`. Padding 87 / 167 / 66 / 133 px, including the soft shadow in the bounds. |
| [Board WebP](../../public/images/home/european-intro-board.webp) | 2000 × 1000 px | 64,440 B | RGBA with the same bounds and padding. Full gold-trimmed frame. |
| [Desktop parchment master](../../assets/generated/home/european-intro-background-desktop-master.png) | 1672 × 941 px | 2,391,181 B | Opaque RGB. Landmarks in the upper corners. |
| [Desktop parchment WebP](../../public/images/home/european-intro-background-desktop.webp) | 1672 × 941 px | 151,310 B | Opaque RGB. Sepia peripheral decoration. |
| [Mobile parchment master](../../assets/generated/home/european-intro-background-mobile-master.png) | 941 × 1672 px | 2,565,485 B | Opaque RGB. Landmark sketches along the top. |
| [Mobile parchment WebP](../../public/images/home/european-intro-background-mobile.webp) | 941 × 1672 px | 167,050 B | Opaque RGB. Provides the upper band above the text. |
| [Paper tile WebP](../../public/images/home/european-intro-paper-tile.webp) | 600 × 600 px | 13,636 B | Opaque RGB. Quiet paper texture beneath the copy and board. |

## Original placement

- The desktop composition gives the larger column to the board and sets the copy to the right of the Colosseum sketch. The parchment plate fades out across the text column. The board sits in front of the right-hand decoration.
- At 760 px and below, the sketches sit in a band above the left-aligned copy. The board follows the description and retains its original 2:1 image canvas. The same paper tile continues under the composition.
- The board’s transparent padding is accounted for in vertical spacing. Its visible bounds, including the shadow, span about 690 CSS px at 1440 px and 317 CSS px at 390 px. The frame and shadow fit entirely at the reviewed widths.
- Cormorant Garamond 600 sets the heading, Georgia sets the oxblood eyebrow (`#851e18`), and the site’s Helvetica Neue stack sets the body copy. Warm parchment (`#efd3a5`), brown ink (`#3b291b`), and the existing brass rule match the site palette. The eyebrow, rule, heading, and description are rendered by HTML and CSS.

## Product accuracy

The board size is confirmed at 10 × 10. The approved illustration uses the landmark and resource subjects visible in the supplied references, including the Colosseum, Eiffel Tower, Sagrada Família, Parthenon, Stonehenge, gold, fish, flame, timber, and ore. The illustrations are redraws. Their exact designs, selection, and square positions are provisional visual approximations. Final symbol positions, zone terminology, setup, resource effects, and movement rules await an approved product reference or rulebook.

## Illustrated correction

The shallow perspective came from the previous M03A asset, whose playing surface rises 521 px across a 1676 px front row in the master. The Learn section scales the whole image with `width: 100%` and `height: auto`. Its negative block margins compensated for broad transparent padding. There is no CSS transform or aspect-ratio distortion in the board section. The Learn hero’s separate board layer is outside this correction.

The available illustrated hero master is useful for the walnut, gilt border, and motifs, but the playing pieces obscure its board. The isolated candidate was generated with built-in imagegen using the Learn mockup’s board crop for camera and composition, the European product reference and the approved resources for motif subjects, and the homepage hero board for finish. Direct pixel scans and visual counts confirmed the generated grid, so a composited replacement grid was unnecessary.

| Correction artifact | Dimensions | Size | Alpha and role |
| --- | --- | ---: | --- |
| [Illustrated master](../../assets/generated/learn/learn-board-illustrated-master.png) | 1360 × 1156 px | 3,225,250 B | Original RGBA output. |
| [Illustrated WebP](../../public/images/learn/learn-board-illustrated.webp) | 1360 × 1156 px | 537,628 B | RGBA. Export sets residual 1/255 alpha to zero and alpha values of 248 and above to full opacity. The antialiased frame edges retain transparency. |

Both files have alpha > 10 bounds `(12, 23)–(1347, 1119)` and padding of 12 / 23 / 13 / 37 px at that threshold. The visible board is about 82% as high as it is wide, compared with 38% for the previous export and about 68% in the mockup. The new view is more elevated than the mockup. The material finish includes grained walnut squares, warm ivory tiles, gilt scrollwork on four sides, and a deep wooden front edge.

The preview displays the board at its native aspect ratio, up to 710 CSS px wide. Desktop block padding was reduced to accommodate the taller artwork, and the previous negative image margins were removed. A CSS drop shadow grounds the transparent cutout on the existing parchment. The copy, type, and background styling retain their approved treatment.

## Final Learn placement

- The board is a lazy-loaded HTML image with intrinsic dimensions and descriptive alternative text. It keeps its native ratio, with a 720 CSS px desktop cap and a soft CSS shadow. The full frame remains visible. The live section is taller than the mockup because the approved board is more elevated.
- A translucent cream wash softens the existing paper tile toward the mockup's parchment tone. On desktop, masks place the existing Colosseum lower on the left and retain faint corner flourishes. The upper-left flourish uses the approved atlas artwork. On mobile, the approved portrait plate keeps its landmarks in a band above the copy.
- The Cormorant Garamond heading, Georgia eyebrow, and Helvetica Neue description keep their site typefaces. Larger type, a longer brass rule, and a higher copy position on desktop bring the left column closer to the mockup. Mobile places the copy above the board with the approved spacing.
- The eyebrow, heading, and description remain editable HTML. The decorative rule and parchment are CSS layers. The unverified zone-label list is omitted from the chapter.

[Desktop section](../../assets/previews/M08B/live-board-1440.jpg) · [Mobile section](../../assets/previews/M08B/live-board-390.jpg) · [Integration report](../milestones/M08B.md)

<details>
<summary>Image generation prompt</summary>

> Use case: product-mockup. Generate a single new isolated DHESS European resource board asset, transparent RGBA surroundings, using the attachment only as style/reference montage. The top-left board is the primary reference for framing and camera. The center-left piece-filled hero is the material and engraving reference. The upper right watermarked product concept and colorful art to the right indicate recognizable subject matter only. Ignore the plain board in the bottom left. Do not reproduce the montage or watermark. One complete board, symmetric front-facing very elevated three-quarter camera, level horizontal front and back edges, moderate taper, visible front edge, height about 70% of board width, very close to top-left reference. Exactly TEN columns and TEN rows; 100 regularly spaced square tiles in alternating deep warm walnut and antiqued ivory. At all scales the grid stays obvious and clean. Ivory squares have beautifully rendered historical European landmark and terrain engravings (Colosseum, Eiffel Tower, Sagrada Família, Parthenon, Stonehenge, castles), with a row of five unmistakably colored illustration motifs printed on alternating ivory squares, gold nugget, group of blue fish, orange flame, timber logs and purple-gray ore. Motifs inside individual squares with generous breathing room and high visual clarity. No pieces, tokens or raised objects. Antique marquetry walnut, gently mottled ivory, authentic wood grain, rich espresso tones, broad beautiful walnut frame with gold engraved classical floral scrollwork and corner decorations on all four sides, gold inlay along edges, substantial dark polished front wooden edge. Warm directional light from upper left, crisp and refined miniature engravings. Board fills image at generous safe margins; uncropped all four corners, centered, no props or surface, genuine transparent backdrop, minimal contact shadow. No writing, no coordinate labels, no watermark. Landscape output.

</details>
