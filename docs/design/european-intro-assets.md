# European Edition introduction — M03A artwork guide

Prepared 18 November 2026 for artwork review. The original homepage mockup is the authority for composition and atmosphere; the supplied board and piece images are the authority for visible product forms. These are review illustrations, not manufacturing drawings. No M03A artwork is used by `index.html` yet.

## References inspected

| Reference | Role and limitation |
| --- | --- |
| `assets/source/homepage-reference.png` | Parchment, upper-edge landmarks, three-column composition, feature illustration balance and copy. It is a flattened mockup, not a master to enlarge or cut into assets. |
| `assets/source/european-board.jpeg` | Brown/ivory squares, European landmark and resource motifs, visible board concept. Watermarked and low resolution; its square-symbol order is not a rights-cleared production layout. |
| `assets/source/european-pieces.jpeg`, `assets/source/european-pieces1.jpeg` | Queen, king and hooded forms, turned bases, ivory material. Watermarked previews, used as appearance references only. |
| `assets/generated/home/hero-board-provisional-master.png`, `assets/previews/home/hero-layers-desktop-review.png` | Approved hero lighting and provisional sculptural style. The hero board asset was not edited or reused as the empty board. |
| `docs/design/hero-assets.md`, `docs/milestones/M02.md`, `styles.css` | Existing artwork limits and typography variables for isolated previews. |

## Design calibration

- Palette: parchment `#efd3a5`, dark ink `#3b291b`, oxblood heading `#851e18`, antique gold `#b58a51`, board brown `#644228`, board ivory `#dcc79f`.
- Type in previews: Cormorant Garamond 600 for large and feature headings; Georgia 400 for the edition label; Helvetica Neue/Helvetica/Arial 400 for descriptions. This follows M02 without changing the live page.
- Desktop structure: centered edition label and two-line heading above three equal feature columns; generous quiet parchment between edge landmarks and text. Mobile structure: landmarks in the top band, centered heading, then board, cast and resources in a vertical sequence.
- Distinctive choice from the approved mockup: the parchment landscape and European engraved landmarks establish the section. The supplied all-caps edition label and three feature names are kept because they are part of the reference, even though generic design guidance would normally question decorative labels.

```text
Desktop:  [Colosseum]    edition label + two-line heading    [Eiffel]
          [board illustration] | [queen king hood] | [resources]
          [feature copy]        | [feature copy]    | [feature copy]

Mobile:   [small landmark sketches]
          edition label + heading
          board + copy
          cast + copy
          resources + copy
```

## Masters and web exports

All byte sizes below are measured from the files. Alpha bounds use alpha > 10 and exclusive right/bottom coordinates. `L/T/R/B` is transparent padding in pixels.

| File | Dimensions | Bytes | Alpha bounds / padding |
| --- | ---: | ---: | --- |
| `assets/generated/home/european-intro-background-desktop-master.png` | 1672 × 941 | 2,391,181 | Opaque. Colosseum left and Eiffel Tower right remain in the upper band; center and lower area are quiet. |
| `assets/generated/home/european-intro-background-mobile-master.png` | 941 × 1672 | 2,565,485 | Opaque. Both landmarks are small, fully visible near the top corners. |
| `assets/generated/home/european-intro-board-master.png` | 2000 × 1000 | 45,147 | (87, 167)–(1934, 867); L87/T167/R66/B133, including the soft contact shadow. |
| `assets/generated/home/european-intro-pieces-master.png` | 1536 × 1024 | 2,112,071 | (192, 26)–(1368, 990); L192/T26/R168/B34. |
| `assets/generated/home/european-intro-resources-master.png` | 1536 × 1024 | 2,142,932 | (124, 50)–(1426, 963); L124/T50/R110/B61. |
| `public/images/home/european-intro-background-desktop.webp` | 1672 × 941 | 151,310 | Opaque. |
| `public/images/home/european-intro-background-mobile.webp` | 941 × 1672 | 167,050 | Opaque. |
| `public/images/home/european-intro-paper-tile.webp` | 600 × 600 | 13,636 | Opaque mirrored texture tile from the quiet center of the new mobile master; use beneath the mobile plate for long stacked layouts. |
| `public/images/home/european-intro-board.webp` | 2000 × 1000 | 64,440 | (87, 167)–(1934, 867); L87/T167/R66/B133. |
| `public/images/home/european-intro-pieces.webp` | 1244 × 1024 | 217,164 | (34, 26)–(1210, 990); L34/T26/R34/B34. |
| `public/images/home/european-intro-resources.webp` | 1370 × 981 | 295,630 | (34, 34)–(1336, 947); L34/T34/R34/B34. |

The pieces and resources web exports are cropped from their separate RGBA masters with 34 px of target margin. All three foreground WebPs retain RGBA transparency. The board grid is generated deterministically by `assets/previews/M03A/prepare_assets.py`: exactly 10 rows and 10 columns, 100 cells, shallow perspective. It has no playing pieces or square symbols. The source board shows European icons but does not establish a safe definitive 10 × 10 symbol arrangement. The board frame is an illustration inspired by the supplied palette; its simple geometry is not a claim of exact product design.

## Placement guidance

- Desktop plate: use near its 1672:941 ratio, with the center kept clear for a heading. Landmarks occupy the upper left/right margins; keep feature text below their inked region. The isolated review uses a 1440 px wide, three-column layout with the board at 420 CSS px, cast at 322 px and resources at 350 px, balanced by visible silhouettes rather than canvas dimensions.
- Mobile plate: show at 100% width from the top. Begin the heading after roughly 170 CSS px at 390 px width so it sits below the landmark sketches. Fade the plate into `european-intro-paper-tile.webp` by about 710 CSS px for a long stacked layout. The review uses illustration widths 350, 270 and 300 CSS px respectively; keep each full silhouette visible.
- The rendered illustrations do not contain headings, descriptions, separators or website controls. `assets/previews/M03A/composition.html` contains review text only and is isolated from the homepage.

## Generation and construction record

Built-in image generation/editing produced both parchment plates, the trio and the resource group. The desktop plate had one initial candidate (`assets/previews/M03A/background-desktop-candidate-v1.png`) whose landmarks extended behind feature text; the selected edit moved them to the upper edges. The initial trio (`assets/previews/M03A/pieces-candidate-v1.png`) was revised to reduce costume drift and warm color cast. The exact prompt sequence used for the selected assets follows:

**Initial desktop plate:**

> Use case: illustration-story. Asset type: reusable background plate for the DHESS European Edition introduction section, no UI. Create a wide horizontal premium parchment background, roughly 16:9, matching an antique European atlas illustration: warm ivory and light honey parchment fibers, very subtle aged paper mottling and faint hand-inked flourishes. Around the far LEFT edge, a delicate sepia pen-and-ink sketch of the Roman Colosseum with a few surrounding European rooftops. Around the far RIGHT edge, a delicate sepia pen-and-ink sketch of the Eiffel Tower and restrained Parisian skyline. Keep the CENTRAL 65% of the image and lower central half very quiet, low contrast and unobstructed for separate HTML heading and three feature columns. Landmarks stay near margins and are fully recognizable rather than awkwardly cut. Refined engraved linework, low contrast architectural drawing, not a photograph. Palette warm parchment ivory #f0d7ae, deep brown ink #715538, faint antique gold #b58a51. No words, letters, numbers, captions, logo, rules, dividers, buttons, board, pieces, resource items, or watermark.

**Desktop plate edit:**

> Use case: precise-object-edit. Edit target: the supplied parchment background plate for the DHESS European Edition introduction. Preserve its warm ivory parchment fibers, sepia engraved linework, overall hue, top-corner flourishes, 1672:941 wide framing, and complete absence of text or controls. Recompose ONLY the peripheral landmark sketches so they sit within the UPPER QUARTER along the far left and right edges: a smaller fully recognizable Colosseum at upper left, a smaller fully recognizable Eiffel Tower at upper right. The central 65% and the entire lower 65% should remain quiet parchment with only subtle texture, leaving clear room for a separate heading and three illustrated feature columns. Remove the large lower-left Roman rooftops and lower-right Paris buildings from the current plate, blending back into the parchment texture. Keep landmarks low contrast, fine sepia ink, not photorealistic. No captions, headings, dividers, game board, pieces, resource objects, logo, or watermark.

**Mobile plate:**

> Use case: illustration-story. Asset type: dedicated mobile background plate for DHESS European Edition introduction section, no UI. Create a tall portrait warm ivory parchment texture matching an antique European atlas engraving. Place a SMALL, fully visible, delicate sepia Colosseum sketch in the upper LEFT corner and a SMALL, fully visible, delicate sepia Eiffel Tower sketch in the upper RIGHT corner; both remain within margins, neither is cropped. Use only faint peripheral architectural flourishes near the edges, and keep the middle 75% and lower center pale, quiet, low-contrast and free for separate stacked feature illustrations and HTML text. Warm ivory #f0d7ae, brown ink #715538, restrained antique gold #b58a51; subtle fibers, mottling and very fine pen linework. No words, letters, numbers, headings, captions, dividers, controls, game board, pieces, resources, logo, or watermark. This must be a new mobile composition, not a crop of a desktop image.

**Trio edit:**

> Use case: precise-object-edit. Edit target: Image 1, the existing transparent three-piece DHESS feature group. Image 2 is the approved generated hero board cutout and is the visual authority for the front ivory pieces. Keep exactly three complete pieces in the same order and scale: queen left, king center, hooded figure right. Correct their costume details toward Image 2: queen with the narrower sculpted crown and simpler historical bust, king with the crown cross on top, layered hair and beard, buttoned tunic and NO large chest cross, hooded figure with a small cross on the garment. Keep warm ivory resin material, turned bases, painterly 3D finish and lighting; reduce the orange-gold color cast toward pale ivory. Preserve all silhouette edges and bases. Remove the atmospheric brown glow outside the pieces so the surrounding space is genuinely transparent; keep only necessary edge antialiasing. Do not add a board, other pieces, text, watermark, or any new symbols. This is a visual approximation of the approved cast, not an exact manufactured piece.

The trio edit target above came from this initial generation against `assets/generated/home/hero-board-provisional-master.png`:

> Use case: background-extraction. Asset type: reusable transparent feature illustration for DHESS European Edition introduction. Edit target: the supplied generated hero board cutout is the style and character source. Create one cohesive group of exactly THREE ivory sculpted playing pieces, arranged QUEEN on left, KING in center slightly taller, HOODED FIGURE on right, following the original homepage section's trio composition. Preserve the same warm ivory cast stone/resin material, natural rim light, detailed crown and cross features, solemn faces, turned circular bases, and realistic painterly 3D finish seen in the edit target. Keep all three complete from the tallest crown tip to the bottom of their bases, with modest genuine transparent margin on every side. Remove the board, all squares, all other pieces, every resource token, tabletop, landscape and cast shadow outside the three pieces. Do not add labels, text, watermark, new costumes, extra people or extra bases. True RGBA transparency, no checkerboard or solid background. This is a feature illustration, not an exact product manufacturing claim.

**Resources:**

> Use case: background-extraction. Asset type: reusable transparent resource illustration for DHESS European Edition introduction. Edit target: the supplied generated hero board cutout is the appearance and lighting reference for the on-board resource symbols. Create one balanced still-life cluster of exactly these five visual subjects, matching the original homepage feature illustration: one irregular metallic GOLD nugget, a small group of glossy BLUE FISH, a bright orange-red FLAME, a short bundle of brown cut TIMBER logs, and a small pile of pink-gray ORE or STONE. Arrange them as independent but touching illustrated objects in a shallow triangular group, with the flame rising centrally and no board beneath. Preserve the established painterly product-illustration style and warm side lighting. Genuinely transparent RGBA background with modest margin all around; no tabletop, square, frame, label, caption, text, watermark, extra resource type, or game-rule symbols. Render clear silhouettes suitable for a feature card.

## Review evidence and limits

- `assets/previews/M03A/board-grid-check.png`: construction overlay exposes eleven boundary lines in each direction, enclosing 100 cells.
- `assets/previews/M03A/transparent-edge-check.jpg`: foreground WebPs on charcoal and light parchment. No large opaque rectangular remnants, clipped silhouettes or obvious edge halos at review size. There is some naturally soft antialiasing and shadow around the cast/resources.
- `assets/previews/M03A/composition-desktop-1440.jpg` and `composition-mobile-390.jpg`: text remains separate from artwork; landmarks do not cross feature descriptions; no horizontal overflow or failed images in browser checks.

Remaining mismatch: the empty board is deliberately plainer than the icon-filled feature image in the mockup. The cast and resource group are generated interpretations of watermarked references; tiny ornament, exact piece silhouette, finish and resource shapes are not certified. The resource names are visual labels only and imply no rules. Obtain clean approved board art and product turnarounds before claiming literal accuracy.
