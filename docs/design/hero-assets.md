# DHESS European Edition — hero asset guide

Milestone 1 artwork prepared 18 November 2026. Source images in `assets/source/` were left untouched. This folder was not a Git repository when inspected; there were no repository instructions or existing output conventions to follow.

## Supplied image inventory

All supplied images are opaque (no alpha channel). Sizes are original file sizes, not browser transfer estimates.

| Source | Dimensions | Size | Intended use and direct reuse |
| --- | ---: | ---: | --- |
| `assets/source/homepage-reference.png` | 819 × 1920 | 2,598,254 B | Authority for mood, palette, hero composition and hierarchy. Visual reference only; it includes baked UI and is too narrow/low-resolution to serve as a desktop hero. |
| `assets/source/european-board.jpeg` | 1600 × 800 | 139,641 B | Authority for the 10-column, five-path board concept, named paths, landmark drawings and resource positions. Visual reference only: visible Fiverr watermarks and no clean board photograph or production art. |
| `assets/source/european-pieces.jpeg` | 1073 × 765 | 92,143 B | Authority for ivory cast silhouettes, bases and sculpture details. Visual reference only: watermarks, render grid and limited resolution. |
| `assets/source/european-pieces1.jpeg` | 1032 × 837 | 67,711 B | Additional sculptural views, especially bishop, monarchs, hooded figure, horse, pawn and rook. Visual reference only: watermarks, monochrome clay render and limited resolution. |
| `assets/source/dhess-package.jpeg` | 1600 × 1028 | 290,343 B | Authority for existing DHESS lettering and illustrated package atmosphere. Could be reused as supplied package/marketing artwork in a later milestone, with its baked claims and illustration intact. It is not a separate transparent logo or a photograph of physical packaging. |

Missing for exact product reproduction: clean unwatermarked board artwork, high-resolution product photographs, complete orthographic/turnaround views of every piece, exact board material and edge details, and a separate logo file. The generated scenes are review artwork that follows visible references; individual squares, piece counts, ornaments and geometry should not be treated as manufacturing-accurate. In particular, the generated scenes omit the board's printed path labels and do not reproduce every small board icon exactly. Confirm product details and usage rights against approved source assets before presenting the scene as a literal product photograph.

## Generated masters and web exports

| File | Dimensions | Size | Placement |
| --- | ---: | ---: | --- |
| `assets/generated/home/hero-desktop-master.png` | 1672 × 941 | 2,628,827 B | Lossless review/edit master for desktop hero. |
| `assets/generated/home/hero-mobile-master.png` | 1122 × 1402 | 2,687,332 B | Lossless review/edit master for dedicated mobile artwork. |
| `assets/generated/home/burgundy-velvet-master.png` | 2172 × 724 | 946,480 B | Lossless transparent cloth master. |
| `public/images/home/hero-desktop.webp` | 1672 × 941 | 300,912 B | Desktop hero background/artwork. No text or UI baked in. |
| `public/images/home/hero-mobile.webp` | 1122 × 1402 | 341,500 B | Mobile art **below** HTML heading, body copy and buttons. |
| `public/images/shared/burgundy-velvet.webp` | 2172 × 724 | 135,790 B | Preferred transparent lower-edge decoration where alpha WebP is supported. |
| `public/images/shared/burgundy-velvet.png` | 2172 × 724 | 880,429 B | Transparent PNG alternative. |

## Composition and crop guidance

- Desktop master ratio is 1.777:1. Display around 16:9 with the full scene visible where possible. Keep HTML copy in roughly the left 25% of the image, within the dark upper/middle area; the board and cast start moving into the lower-left around the front row. At a 1440 × 810 presentation, the tested copy area is approximately x=45–409 and y=124–526. Keep essential copy out of the velvet area at the bottom.
- Desktop artwork contains the board on the right, ivory front cast, charcoal rear cast, castle, mountain landscape, dark carved table, books, brass medallion and velvet. It contains no site copy, navigation, controls or logo.
- The tested centered 4:5 crop of the desktop master cuts off outer columns and important pieces. Use the dedicated mobile asset, not a squeezed desktop image or a narrow crop of it.
- Mobile artwork is 4:5. Put HTML text and buttons **above** it in the page flow. Show the complete artwork at its native ratio or use a very light crop; avoid `object-fit: cover` into a substantially shorter box. At 390 px display width, the artwork is about 488 px tall and keeps the board, both ranks and castle visible.
- Cloth is a separate 3:1 transparent strip. Anchor it to a section's lower edge, width 100%, height auto. Its upper area is transparent; the side peaks can be cropped modestly on narrow sections, but do not stretch its height disproportionately. It is not part of the exported hero scene.

## Review previews and checks

| Preview | Dimensions | Purpose |
| --- | ---: | --- |
| `assets/previews/home/desktop-text-clearance.png` | 1440 × 810 | Separate copy/button overlay demonstrates desktop clearance. Overlay is not in the WebP. |
| `assets/previews/home/desktop-mobile-crop-test.png` | 390 × 488 | Center 4:5 crop test showing lost right and left board edges. |
| `assets/previews/home/mobile-presentation.png` | 390 × 788 | Mobile layout test with separate text area above the full mobile artwork. |
| `assets/previews/home/cloth-background-check.png` | 1200 × 480 | Transparent cloth composited over charcoal and warm ivory. |

Visually checked all five supplied references and all four review previews. The cloth master has RGBA alpha from 0 to 255; the transparent WebP and PNG exports retain RGBA alpha. The mobile preview preserves the board and key cast at 390 px, though fine square illustrations become small at that size. The desktop overlay confirms a usable copy column; actual HTML type metrics should be checked during implementation.

## Generation record

Built-in image generation was used for three assets. The reference images were supporting visual inputs, not edit targets. Exact prompts are recorded below for future revisions.

### Desktop

References: `homepage-reference.png`, `european-board.jpeg`, `european-pieces.jpeg`, `european-pieces1.jpeg`.

> Use case: product-mockup. Asset type: desktop website hero artwork only. Create a wide, premium tabletop fantasy scene inspired by the supplied homepage mockup (composition and atmosphere reference), supplied board image (product board reference), and supplied piece images (piece forms reference). A large European resource-chess board occupies the RIGHT two-thirds on a dark carved table, in three-quarter perspective. Keep the LEFT third quiet, dark, low-detail and high-contrast for HTML heading, paragraph and buttons to be layered later. Board is a 10-column, five-path landscape grid with alternating warm parchment ivory and rich brown squares, small brown ink European landmark and resource illustrations, subtle gilded carved frame. Show an ivory front rank and charcoal back rank. Visible sculpted chess-like bust pieces follow the supplied references: crowned king and queen, hooded monk with cross, bishop mitre with cross, horse head, muscular human pawn, and battlement rook, with turned bases; warm ivory versus dark charcoal. Preserve recognizable forms, but do not copy watermarks or claim exact reproduction. In the background: distant European castle on a ridge at upper right, stormy alpine mountains, dusky dramatic sky. On table: restrained gold accents, old leather books, small brass medallion, a fold of burgundy velvet at lower left, sparing resource tokens. Cinematic warm side light and deep shadows, realistic painterly 3D product photography, premium and plausible materials. No visible website text, title, buttons, navigation, logo, lettering, watermark, frame, or UI. Make the board and important pieces visually legible at desktop presentation size. Wide landscape composition.

### Mobile

References: `european-board.jpeg`, `european-pieces.jpeg`, `european-pieces1.jpeg`, generated desktop master.

> Use case: product-mockup. Asset type: dedicated mobile website hero artwork, placed BELOW separate HTML heading, copy, and buttons. Use the supplied board and two piece references as product appearance authority, the homepage mockup as atmospheric authority, and the already generated desktop hero as the direct material/lighting/style reference. Portrait composition designed for mobile: entire 10-column European resource-chess board appears in three-quarter perspective and occupies the central lower two-thirds with near ivory pieces and far charcoal pieces clearly visible; castle ridge, moody alpine mountains and dusky sky above; dark carved table underneath, sparing books or brass prop at edges, burgundy velvet softly entering at lower edge. Warm ivory sculpted bust pieces, charcoal opposing pieces, gold filigree board frame, warm parchment and brown board squares with small ink landmarks and color resource icons. Recognizable crowned monarchs, hooded monk with cross, mitred bishop with cross, horse heads, muscular human pawns, battlement rooks. Premium cinematic realistic painterly 3D product photography, same burgundy, gold, charcoal and warm-ivory palette as desktop. Keep board within safe margins so no key pieces are severed by a center crop to a 4:5 or 3:4 mobile artwork box. Do not squeeze a wide desktop scene. No headings, website text, buttons, navigation, logo, lettering, watermark or UI. Avoid fake exactness of details not visible in references.

### Cloth

References: `homepage-reference.png`, generated desktop master.

> Use case: product-mockup. Asset type: reusable isolated lower-edge decoration for premium DHESS European Edition website sections. A long horizontal swathe of luxurious deep burgundy velvet cloth with rich natural folds, subtle warm gold rim light and deep black-red shadow, consistent with the velvet in the supplied homepage mockup and generated hero artwork. The cloth rises in irregular soft waves along the bottom of a wide canvas, with the upper two-thirds genuinely transparent so it can sit over either dark or light sections. Real textile texture and realistic drape. Extend fabric to both side edges and bottom edge for seamless section-edge use. No table, no board, no pieces, no props, no cast shadow outside the cloth, no background, no text, logo, lettering or watermark. Output true alpha transparency, not a checkerboard or solid background.

## Milestone 1A — separable hero layers

The layer candidates below use `assets/generated/home/hero-desktop-master.png` as their sole scene edit target. They do not replace or modify the Milestone 1 images. **The board layer is provisional visual artwork, pending the accurate board recreation.** It is not certified product art.

### Files

| File | Dimensions | Size | Use |
| --- | ---: | ---: | --- |
| `assets/generated/home/hero-background-desktop-master.png` | 1672 × 941 | 2,298,236 B | Background-only master: sky, mountains, castle, reconstructed tabletop, loose table props and existing cloth fold. |
| `assets/generated/home/hero-background-mobile-master.png` | 752 × 941 | 1,130,431 B | Independent narrow scenery crop from desktop background; no board or cloth fold. |
| `assets/generated/home/hero-board-provisional-master.png` | 1320 × 840 | 1,573,862 B | RGBA board assembly cutout, tightly framed with transparent padding. |
| `assets/generated/home/hero-board-contact-shadow-master.png` | 1672 × 941 | 31,269 B | Separate soft RGBA contact shadow. |
| `public/images/home/hero-background-desktop.webp` | 1672 × 941 | 234,306 B | Web background plate, without board. |
| `public/images/home/hero-background-mobile.webp` | 752 × 941 | 155,586 B | Web mobile background plate. |
| `public/images/home/hero-board-provisional.webp` | 1320 × 840 | 315,318 B | Transparent provisional board assembly. |
| `public/images/home/hero-board-contact-shadow.webp` | 1672 × 941 | 11,156 B | Transparent, independently replaceable contact shadow. |

### Bounds and placement

- In the original 1672 × 941 coordinate space, the board cutout's visible alpha bounds at threshold 10 are **x=366–1592, y=101–862** (right and bottom bounds exclusive: 1593 and 863). The cutout was cropped from original coordinates **(320, 60) to (1640, 900)**. Its visible bounds within the 1320 × 840 file are **x=46–1272, y=41–802**. Transparent padding is 46 px left, 47 px right, 41 px top and 37 px bottom. Alpha values of 1 from the generated extraction were cleared as stray transparent noise; the alpha range remains 0–255.
- To approximate original desktop placement, stack background at 0,0; shadow at 0,0; then the board cutout at **x=320, y=60**, all in 1672 × 941 coordinates. Scale the layers together with the hero frame. The desktop review composite shows this stack. Keep any HTML copy in the left dark area as previously guided.
- The shadow is a blurred dark quadrilateral underneath the board footprint. It is **not** included in the background or board exports. When the accurate board is made, replace the board file and retune or replace the shadow independently. The shadow currently provides a plausible contact cue but is an approximation rather than a physically reconstructed original shadow.
- For the mobile review, the scenery crop is original background coordinates **x=920–1671, y=0–940**, displayed at 390 × 488 below a separate text block. The board cutout is scaled uniformly to 30% (396 × 252 canvas; visible silhouette approximately 368 × 229), placed at x=0, y=150 within the artwork area. The shadow is scaled at the same factor and shifted roughly 4 px right, 5 px down. The board visible bounds remain inside the 390 px width. A later layout can move the board without recropping the scenery.
- The desktop background already contains a burgundy velvet fold at lower left. **Do not overlay** `public/images/shared/burgundy-velvet.webp` over that same fold. The shared cloth remains an independent decoration for other sections; the narrow background crop omits the desktop fold.

### Review and limitations

| Preview | Dimensions | Purpose |
| --- | ---: | --- |
| `assets/previews/home/hero-layers-desktop-review.png` | 1672 × 941 | Background, separate shadow and board stacked at recorded offsets. |
| `assets/previews/home/hero-layers-mobile-review.png` | 390 × 768 | Text area above independently cropped scenery and a uniformly scaled board. |
| `assets/previews/home/hero-board-alpha-check.png` | 1320 × 840 | Board transparency against charcoal and warm ivory. |
| `assets/previews/home/hero-board-edge-detail.png` | 800 × 300 | Native-scale crown, hood and pawn edge check against charcoal and warm ivory. |

Visually checked the standalone background and all four previews. The board and its outer pieces are visible without clipping in both composites. The cutout has no opaque table/landscape blocks in the dark/light checks, and the WebP retains RGBA alpha. The reconstruction is generative: fine piece edges, tiny board markings and original lighting may differ slightly from the first master. A few high-contrast edges show fine warm pixels at native scale in the edge detail preview. The large tabletop area was regenerated, so its carved motifs and horizon are not pixel-identical to the first scene. The mobile board is legible as an assembly at 390 px, but individual square drawings remain small. Review against the future accurate board before final use.

### Editing prompts and references

Built-in image editing was used. The only edit target for each generation was `assets/generated/home/hero-desktop-master.png`.

**Background:**

> Use case: precise-object-edit. Edit target: the attached desktop hero master. Produce a BACKGROUND-ONLY plate at the same wide landscape aspect ratio and as close to identical framing, scenery, lighting, and color as possible. Remove the entire central/right chess board assembly: all board frame and squares, all ivory and charcoal pieces, and every resource token sitting on the board. Remove the board's contact shadow and any piece shadows. Inpaint the newly exposed region as a single continuous dark carved wooden tabletop with the same subtle engraved texture and natural perspective as the visible table. Preserve the original stormy alpine mountains, castle at upper right, sky, warm sunset light, left-side dark quiet copy space, burgundy cloth at bottom left, loose gold and charcoal nuggets on table left, brass medallion at bottom right, and leather books at right. Board removal must be complete: no board corners, stray pieces, icon fragments, phantom shadow or rectangular patch. No text, UI, logo, watermark. This is a standalone background export; do not put the board back.

**Board cutout:**

> Use case: background-extraction. Edit target: the attached desktop hero master. Isolate the ENTIRE chess board assembly as one transparent cutout, preserving its exact perspective, scale, lighting and placement: the gilded rectangular board frame and squares, every ivory and charcoal sculpted playing piece including tall heads/rooks/horses, and all colorful resource tokens that sit ON the board. Preserve the original board textures, icons, spacing, forms and visual details as closely as possible. Delete everything outside this assembly to true alpha transparency: sky, mountains, castle, carved tabletop, loose nuggets to left of board, burgundy cloth, brass medallion, leather books and all surrounding props. Do not include contact shadow or ground; it will be a separate layer. Keep full silhouette and every outer piece, with generous transparent padding on all four sides. Edges should be clean, antialiased, without dark or light halos, fuzzy background remnants, clipped parts or opaque patches. The cutout must remain in the same wide canvas proportions and location as the source so it can be overlaid on the matching background plate. No text, logo, watermark or new elements. Output true transparent RGBA, not a checkerboard.
