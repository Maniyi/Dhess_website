# DHESS Shop lineup artwork

The [Shop mockup](../../assets/source/shop-reference.png) places seven ivory figures beneath a centered heading and gold rules, with a warm tabletop and burgundy velvet at the lower edge. The [isolated composition](../../assets/previews/M15A/composition.html) uses the approved Learn artwork directly. Each figure has its own image element and retains its intrinsic proportions. The piece names serve as image alternatives in the same order across layouts.

| Piece | Approved image | Intrinsic dimensions | Relative height | Transparent padding below base |
| --- | --- | --- | ---: | ---: |
| King | [WebP](../../public/images/learn/pieces/king.webp) | 421 × 736 px | 100% | 8 px |
| Queen | [WebP](../../public/images/learn/pieces/queen.webp) | 348 × 736 px | 92% | 8 px |
| Bishop | [WebP](../../public/images/learn/pieces/bishop.webp) | 396 × 736 px | 91% | 8 px |
| Rook | [WebP](../../public/images/learn/pieces/rook.webp) | 429 × 736 px | 86% | 8 px |
| Mystic | [WebP](../../public/images/learn/pieces/mystic.webp) | 372 × 736 px | 78% | 9 px |
| Knight | [WebP](../../public/images/learn/pieces/knight.webp) | 423 × 736 px | 77% | 8 px |
| Pawn | [WebP](../../public/images/learn/pieces/pawn.webp) | 389 × 736 px | 72% | 8 px |

The percentages are display choices based on the reference. The CSS aligns each visible base to its row baseline by offsetting the scaled lower alpha margin. The source bounds use alpha greater than 10. Recheck intrinsic dimensions and lower alpha padding when replacing an individual image. [Source bounds and masters](learn-piece-assets.md)

Above 900 px, all seven figures share a row. At 541–900 px, Mystic, Knight, and Pawn occupy a centered second row. At 540 px and below, the first six figures form paired rows and Pawn is centered in the fourth row. Each wrapped row is sized to its tallest piece. The last baseline sits 12 CSS px above the earliest visible fold of the velvet at the tested widths.

| Layer | Source and placement |
| --- | --- |
| Charcoal | [Approved charcoal plate](../../public/images/home/next-move-background.webp) with ink gradients using `#141210` to quiet the texture. |
| Tabletop | The lower portion of the [approved product plate](../../public/images/home/product-background.webp), blended into the charcoal with a warm brown wash using `#211810`. Upper rows use soft contact shadows. |
| Velvet | [Approved burgundy velvet](../../public/images/shared/burgundy-velvet.webp) on a separate empty-alt image at the lower edge. CSS uses the source's transparent upper margin to position the outer folds. |
| Heading and ornaments | Editable Cormorant Garamond 600 heading in `#ffdfae`, with decorative fleur-de-lis and fine rules in `#c5954b` and `#795a31`. |

The approved figures have subtle differences in turning angle, highlights, and base profile. Their display heights and arrangement are compositional. Final sculpt details, materials, piece counts, movements, abilities, and setup remain subject to approved product and rules references. [Pending items](../homepage-pending-items.md)
