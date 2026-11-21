# About game-night artwork

The [About mockup](../../assets/source/about-reference.png) supplies the opposed hands, warm table-height view, dark copy area and burgundy foreground. ImageGen produced two new opaque scenes. The master PNGs preserve the full generation. WebPs retain the full framing with proportional Lanczos downsampling and WebP quality 86, method 6.

## Sources

| Reference supplied to ImageGen | Role |
| --- | --- |
| [About mockup](../../assets/source/about-reference.png), crop `(0, 1121)–(819, 1391)` in source pixels, exclusive right and bottom | Composition only. The crop includes the reference copy so the artwork prompt explicitly excludes typography. |
| [Approved homepage board assembly](../../assets/generated/home/hero-board-provisional-master.png) | The charcoal and ivory European character casts, including busts and horse-headed knights. The sculpt shapes also follow the site's [approved standalone ivory cast](learn-piece-assets.md). |
| [Approved Learn board](../../assets/generated/learn/learn-board-illustrated-master.png) | Engraved tiles, alternating walnut and ivory tones, and gilt walnut frame. |
| [Learn amber room](../../assets/generated/learn/getting-started-pieces-background-master.png) | Soft interior lighting, window and candle atmosphere. |
| [Shared velvet master](../../assets/generated/home/burgundy-velvet-master.png) | Burgundy reference for the foreground folds. The shared asset remains available as a separate layer elsewhere. |

## New artwork

| File | Dimensions | Bytes |
| --- | ---: | ---: |
| [Desktop PNG master](../../assets/generated/about/game-night-desktop-master.png) | 1983 × 793 | 2,236,474 |
| [Mobile PNG master](../../assets/generated/about/game-night-mobile-master.png) | 1402 × 1122 | 2,237,718 |
| [Desktop WebP](../../public/images/about/game-night-desktop.webp) | 1920 × 768 | 176,736 |
| [Smaller desktop WebP](../../public/images/about/game-night-desktop-1120.webp) | 1120 × 448 | 77,618 |
| [Mobile WebP](../../public/images/about/game-night-mobile.webp) | 1000 × 800 | 112,052 |

The hands, pieces, board, light, and foreground folds are composed together so their shadows and overlaps agree. The existing shared velvet remains separate in the asset library. An extra overlay would double the folds here, so the preview uses only the cloth already in the image.

## Responsive placement

- **Desktop, above 760 CSS px.** Use the full 5:2 scene, with the 1120w and 1920w exports as width candidates. Keep the entire horizontal span so both sleeves and grips remain visible. A gradient blends the bottom 28% into site ink. Center the HTML copy in the dark foreground below the board. At 1440 and 1024 CSS px the heading fits on one line.
- **Mobile, at 760 CSS px and below.** Use the dedicated 5:4 scene at full width and its natural aspect ratio. Both players appear through the diagonal sleeves and the pieces on either side. Fade the last 15% to ink. Place the copy in normal flow beneath the image. The heading wraps to two lines at 390 px and three at 320 px.
- Use site ink `#141210`, cream `#f8e5c5`, gold `#f0b54e`, pale gold `#ffe0a1`, and brass `#795a31`. Use Cormorant Garamond 600 for the headline, Georgia for the requested eyebrow, and the shared Helvetica Neue stack for description. The scene's single text alternative names both players, the dark and light pieces, and the candlelit board.

## Visual limitations

Both compositions show two believable reaching gestures, with the right fingers bracketing a pawn and the left fingertips visibly resting near the rim of a rook. Some fingers are naturally hidden by the grip. Board rules, square positions and counts, character placements and quantities, sculpt details, decorative engraving and finish are illustrative. The mobile angle changes the visible piece arrangement. Landmarks and stepped bases are recognizable, while individual engravings get small at 320 px. The review found no obvious duplicated fingers, fused pieces, floating bases or inconsistent board perspective at the intended sizes. Final specifications and product claims remain pending.

## ImageGen prompts

Each generation used the five references above in order. Each combined the shared prompt with its framing paragraph below.

### Shared prompt

> Create one new opaque, photorealistic painterly DHESS European Edition tabletop illustration for the About page. The attached About strip is reference 1 and governs arrangement only: omit absolutely all typography and UI, including the text in the reference. Reference 2 governs the coordinated European character sculpts and the finish of the charcoal and ivory sides. Reference 3 governs board tile, engraved landmark, and gilt walnut edge design. Reference 4 governs lighting and the softly blurred dark timber room with a leaded window and small candle flames. Reference 5 governs deep wine-red velvet and soft folds. Match the crowned bust and horse-head knight in reference 2, especially their rounded stepped bases and satin finish. Treat each reference independently; render a single unified new scene.
>
> Table-height frontal three-quarter view, with the board front rim approximately horizontal. Two adult players appear only as sleeved hands and partial forearms, entering naturally from opposite edges. On the left, a dark sleeve with subtle antique gold trim; its hand gently pinches the upper neck of a dark tower piece with thumb and index finger while the piece sits flat on a square. On the right, a warm cream sleeve with quiet embroidered trim; its hand makes light contact with the upper side of an ivory pawn, thumb and index finger lightly bracketing it while its base stays flat on the board. Both poses relaxed and anatomically believable, five fingers per hand including any naturally occluded fingers, no fingers fused with pieces. Place a few varied recognizable European busts, a knight and crowned figure per side. Separate and ground the individual circular bases, with lighting, occlusion, perspective and contact shadows coherent across all elements. The dark pieces cluster left and the ivory pieces cluster right, with a small open lane so the board is recognizable. Alternating walnut and warm ivory squares, discreet European landmark engravings and a sliver of gilt frame. This is an incidental atmosphere scene with no diagram, no implied model-accurate lineup, no coordinate labels, no signage, no text, no glyphs, no logo, and no watermark. Keep the board and fingertip contacts sharp, background candlelight diffused, charcoal and amber tones with restrained contrast, matching references.

### Desktop framing

> DESKTOP: use an ultra-wide approximately 2.5:1 landscape frame. Like the About reference band, the hands enter from left and right at mid-height and both fingertips sit on the inner 68% of the width. Both sleeve entrances, both complete grips and both distinct sets of bases remain readable in the main action. Place the board and all contact points in the upper 76%; the window and candles occupy a short soft band behind the figures. Place low burgundy velvet in the bottom corners, with folds tangential to the lower edge. The bottom 23% falls away to quiet dark walnut and near-black shadow, with the central lower edge in particular unobstructed for a gentle fade to HTML copy below the main action. The foreground should be wider than the reference artwork appears tall; avoid a large vertical area of room, avoid an oversized empty foreground. Text-free opaque master.

### Mobile framing

> MOBILE: dedicated compact 5:4 landscape or near-square camera framing for a 320–390 CSS pixel canvas. Recompose the two upper forearms on diagonals from the opposing upper left and upper right margins, with two complete distinct hands and both fingertip contacts inside the central 80% of width. Use the nearer view and fewer visible figures so hands and silhouettes remain easy to read at small scale. Give dark figures on the left and ivory figures on the right comparable visual weight. Keep a strip of illuminated tiles and grounded bases visible across the lower half, with the softly blurred window and candlelight behind. The shallow board extends toward the viewer. A small dark burgundy velvet fold edges each bottom corner and fades to near-black at the lower center. Fill the composition with action and reserve only the last 10–15% for the quiet dark tabletop fade into separate text below the image. No lettering, no interface.
