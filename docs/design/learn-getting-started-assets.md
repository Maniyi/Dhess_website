# Learn Getting started artwork

The [Learn mockup](../../assets/source/learn-reference.png) supplies the three subjects, left-aligned copy and fine column rules. The [isolated preview](../../assets/previews/M10A/composition.html) starts with an excerpt of the dark piece gallery so the parchment transition can be reviewed.

## Composition

- Warm parchment (`#efd3a5`), dark brown ink (`#302015`), oxblood (`#851e18`), brass (`#795a31`) and charcoal (`#141210`) follow the two approved Learn chapters. Use Cormorant Garamond 600 for the headings, Georgia for the eyebrow and guide actions, and Helvetica Neue with the existing fallback stack for descriptions.
- Three equal desktop columns use square-edged 8:5 image areas and fine vertical rules. At 760 px and below, the same image areas stack in reading order with horizontal rules. The title wraps to two lines at the reviewed mobile widths.
- The existing paper tile runs beneath a cream wash. The masked atlas plate adds a soft architectural detail at the edge and fades before the guide copy. The border picks up the brass line at the base of the gallery.

## Files and crop details

| Role | File | Dimensions | Bytes | Placement |
| --- | --- | --- | ---: | --- |
| Board source | [Approved illustrated master](../../assets/generated/learn/learn-board-illustrated-master.png) | 1360 × 1156 | 3,225,250 | Crop source only. |
| Board detail | [WebP](../../public/images/learn/getting-started-board.webp) | 960 × 600 | 170,382 | Angled close-up over walnut. The front frame slopes down toward the right, with resource motifs and part of the right edge in view. |
| Queen | [M09 WebP](../../public/images/learn/pieces/queen.webp) | 348 × 736 | 47,434 | Original transparent WebP, displayed at the left at 98% of the inner stage height. |
| Rook | [M09 WebP](../../public/images/learn/pieces/rook.webp) | 429 × 736 | 32,388 | Original transparent WebP, displayed at the right at 88% of the inner stage height. |
| Piece backdrop master | [Generated PNG](../../assets/generated/learn/getting-started-pieces-background-master.png) | 1586 × 992 | 1,550,809 | An empty walnut tabletop, soft amber window light and a candle at the right edge. |
| Piece backdrop | [WebP](../../public/images/learn/getting-started-pieces-background.webp) | 960 × 600 | 22,998 | Center-fit to 8:5, trimming less than 1 source pixel in total on the vertical axis. The two sculptures share a baseline and retain their crowns and bases. |
| Book master | [Generated PNG](../../assets/generated/learn/getting-started-book-master.png) | 1586 × 992 | 3,746,019 | Warm walnut, worn leather and sepia engravings of a castle and a bridge. |
| Book detail | [WebP](../../public/images/learn/getting-started-book.webp) | 960 × 600 | 209,084 | Center-fit to 8:5, trimming less than 1 source pixel in total on the vertical axis before downsampling. The spread fills the frame. |
| Paper | [Tile](../../public/images/home/european-intro-paper-tile.webp) | 600 × 600 | 13,636 | Repeats at 300 CSS px. |
| Desktop decoration | [Landscape plate](../../public/images/home/european-intro-background-desktop.webp) | 1672 × 941 | 151,310 | Top-aligned at the section width, masked at the side margins and faded vertically. |
| Mobile decoration | [Portrait plate](../../public/images/home/european-intro-background-mobile.webp) | 941 × 1672 | 167,050 | Top-aligned edge detail fades by 180 CSS px. |

All three new web exports are opaque RGB, resized with Lanczos and saved as WebP at quality 87. They total 402,464 bytes. The piece card uses CSS to place the two existing cutouts against the dedicated backdrop. Its individual illustrations retain the [M09 provenance](learn-piece-assets.md).

## Board crop

The board derivative compresses the approved master to 1360 × 717 px, rotates it 16° clockwise, and applies a horizontal shear so the right edge angles inward in the close-up. In the resulting canvas, the crop runs from `(304, 365)` to `(1456, 1085)` with exclusive right and bottom coordinates. The wood underneath comes from `(540, 370)–(1276, 830)` of the [desktop hero backdrop master](../../assets/generated/home/hero-background-desktop-master.png), darkened to 73% brightness. No tiles were added or reordered.

## Piece backdrop prompt

> Create one NEW opaque 8:5 landscape background plate only for the DHESS European Edition queen and rook guide card. The reference is the center thumbnail of the parchment Getting Started row in the visible Learn mockup: a close-up dark walnut table with a candle pinprick toward the far right and a warm intimate European castle study behind it. The approved game pieces will be placed separately in HTML, so keep the entire central 82% and especially the lower center completely empty of objects. The top 79% is a softly out-of-focus walnut brown and burnt umber backdrop with subtly suggested dark timber room architecture, very faint vertical details near the outer edges, and soft rich amber illumination across the upper left and center. The bottom 21% is a single dark walnut tabletop plane with gently lit wood grain for pieces to stand on, camera nearly level at piece height, gently visible perspective, a soft seamless join. At far right, at 95% of width and 67% of height, one small defocused amber candle flame and indistinct low candle holder in the distance, secondary to the future pieces; the rightmost edge may crop the small candle holder. Realistic painterly cinematic product photography, warm amber falloff with dark edges, deep tawny brown, no strong orange cast. Background only. The empty center must be clear. Do not depict any game piece, people, board, text, letters, rules, logo, badge, or watermark.

## Book reference and prompt

The approved hero backdrop contains closed leather volumes. The [Learn mockup](../../assets/source/learn-reference.png) shows the desired open spread at thumbnail scale. Image generation supplied a standalone open atlas with illustrated pages, using those references for the framing and finish.

> Create one NEW opaque landscape artwork for the 'Follow the rules' guide card on the DHESS European Edition website. Use the visible Learn mockup only as a visual reference for the third small image in the parchment Getting Started row near the bottom. Use the visible closed-book hero backdrop as a material and illumination reference. Render an open antique European illustrated atlas lying on dark carved walnut, viewed in a three-quarter overhead close-up, warm soft light from upper left, painterly photoreal materials, warm cream pages with a gently curved gutter and worn brown leather covers. The left page contains a sepia copperplate-style engraving of a European hilltop castle and the right page a sepia copperplate-style large engraving of a stone arched bridge between wooded hills. Small fine ornamental corner scrolls may frame the engravings. Fill the frame with the open book, with the page edges and spine inside a central 90% safe area for a 16:10 crop. A soft dark walnut and warm brown setting around the spread, very little extra prop detail. Exactly one open volume, no game pieces, no board, no logo, no coat-of-arms, no badge, no product claim, no readable or unreadable text, no glyphs or pseudo-writing, no typography, no numbers, no watermark, no website copy, no other design panels. Artwork only.

## Content limits

The board crop preserves provisional artwork from the [illustrated Learn board](learn-board-assets.md). It depicts a section of the board surface with zero playing pieces. The queen and rook stand on bare walnut as a still life. The book is an unlettered atlas prop. The three guide actions use the site’s visible “Unavailable” status in ordinary text until approved destinations exist.
