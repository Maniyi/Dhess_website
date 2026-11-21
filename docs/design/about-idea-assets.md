# DHESS About artwork for “The idea”

The [About mockup](../../assets/source/about-reference.png) is an 819 × 1920 PNG, 2,500,384 B. Its parchment panel at approximately y 454–799 supplies the composition. The copy comes from the milestone brief and is editable in the [isolated HTML preview](../../assets/previews/M20A/composition.html). The rule below the eyebrow is part of the stylesheet.

## Board, pieces, and parchment

The board is a projective re-angle of the [approved Learn illustrated board master](../../assets/generated/learn/learn-board-illustrated-master.png). The transform retains the 10 × 10 artwork, all four frame edges, the illustrated landmarks, and the resource row. It establishes the diagonal from the lower-left foreground to the upper-right background. The [export script](../../assets/previews/M20A/prepare_board.py) records the source and destination corner coordinates and regenerates the three files with Pillow.

| File | Dimensions | Size | Role |
| --- | ---: | ---: | --- |
| [Angled board master](../../assets/generated/about/idea-board-angle-master.png) | 1560 × 1100 | 2,425,042 B | RGBA PNG with the complete re-angled board, including frame. |
| [Angled board WebP](../../public/images/about/idea-board-angle.webp) | 1560 × 1100 | 355,994 B | Full-size web export. |
| [Compact board WebP](../../public/images/about/idea-board-angle-780.webp) | 780 × 550 | 102,104 B | Same framing at half resolution. Browser selection uses the rendered board width and device pixel density. |
| [Knight](../../public/images/learn/pieces/knight.webp) | 423 × 736 | 39,450 B | Approved complete ivory silhouette, directly reused. |
| [Rook](../../public/images/learn/pieces/rook.webp) | 429 × 736 | 32,388 B | Approved complete ivory silhouette, directly reused. |
| [Paper tile](../../public/images/home/european-intro-paper-tile.webp) | 600 × 600 | 13,636 B | Approved repeating warm parchment. CSS adds a cream wash under the copy. |
| [Desktop parchment plate](../../public/images/home/european-intro-background-desktop.webp) | 1672 × 941 | 151,310 B | Approved plate. CSS isolates and feathers the lower-left Colosseum treatment. |
| [Castle sketch](../../public/images/shop/overview-castle.webp) | 133 × 100 | 4,950 B | Existing sepia sketch blends into the lower desktop margin at low opacity. |

The full-resolution board master and WebP have alpha greater than 10 within `(36, 52)–(1505, 1035)`. The 780 px export has bounds `(18, 26)–(752, 518)`. Right and bottom coordinates are exclusive. The approved piece and parchment sources are documented in the [piece guide](learn-piece-assets.md), [board guide](learn-board-assets.md), and [Shop overview guide](shop-overview-assets.md).

## Composition

- The palette uses parchment `#efd3a5`, brown copy `#3b291b`, dark heading ink `#302015`, oxblood `#851e18`, and brass `#795a31`. The heading uses the local Cormorant Garamond 600, the eyebrow uses Georgia, and the paragraphs use the shared Helvetica Neue stack.
- Desktop anchors the artwork to the lower right. The top and right of the board run past the section edge. The crop leaves the foreground corner, the gilt front rail, and the two pieces in view. The paper beneath the copy is quiet, with the sepia landmarks confined to the lower margin.
- At 760 CSS px and below, the text comes first. The artwork takes the full width underneath it. The near corner shifts left and the top of the board feathers into the parchment. The right edge runs out of frame so the landmarks, visible resource colours, and both silhouettes remain clear at 320 px.
- The CSS assembly places the Knight and Rook over the first foreground row at 11.8% and 20.8% of the board canvas width. Both keep their native aspect ratios and warm left-side highlights. Each has a separate soft contact shadow. The board casts a broader shadow across the parchment. Board, figures, paper, sketches, and text are independently adjustable.

## Artwork limits

The approved Knight faces slightly toward the viewer’s right. The approved Rook has crenellations and an arched opening. The mockup uses a different view of the Knight and a cross-topped tower. The composition uses the approved sculpt artwork and preserves its original viewing angles. The edge crop varies by viewport. At desktop the visible resource row includes gold, fish, flame and timber, while the tighter mobile crop shows less of the timber square. The ore sits beyond the visible right edge at the reviewed widths.

The illustrated squares inherit the provisional selection and positions from the Learn artwork. Piece placement is decorative. Final board details, piece details, rules, and setup are pending owner confirmation. [Pending items](../homepage-pending-items.md)
