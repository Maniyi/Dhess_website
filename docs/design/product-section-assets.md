# DHESS European Edition — product section artwork

Prepared for Milestone 5A on 19 November 2026. The original `assets/source/homepage-reference.png` sets the composition, palette, and section hierarchy. The only supplied package reference is `assets/source/dhess-package.jpeg`, a flat front illustration, not a physical box photograph or production dieline. The new box is a **concept presentation** of that illustration. It must be approved before appearing on the homepage or being described as an exact product reproduction.

## Design calibration

- Palette: site charcoal `#141210`, ivory `#f8e5c5`, pale gold `#ffe0a1`, button gold `#f0b54e`, burgundy from the mockup and reused velvet.
- Type in the isolated preview: local Cormorant Garamond 600 for the heading, Georgia for the eyebrow/action/supporting line. All copy remains HTML.
- Desktop: separate box on the left at roughly three-fifths width; quiet copy column on the right; the existing velvet crosses only the lower edge. Mobile: copy and purchase action first, complete box below, independent background crop.
- The package illustration is the distinctive element. The background adds atmosphere without competing details or a second cloth fold.

## Sources and files

| File | Dimensions | Size | Alpha / role |
| --- | ---: | ---: | --- |
| `assets/source/dhess-package.jpeg` | 1600 × 1028 | 290,343 B | Opaque supplied front-art reference and lettering authority; unchanged. |
| `assets/source/homepage-reference.png` | 819 × 1920 | 2,598,254 B | Opaque supplied composition reference; unchanged. |
| `assets/generated/home/product-box-concept-master.png` | 1563 × 1006 | 2,137,638 B | RGBA concept box master; complete silhouette. Alpha > 10 bounds `(158, 18)–(1403, 948)`, exclusive right/bottom; padding left/top/right/bottom `158/18/160/58` px. |
| `public/images/home/product-box-concept.webp` | 1563 × 1006 | 318,786 B | RGBA web export of the same concept canvas. |
| `assets/generated/home/product-background-master.png` | 1672 × 941 | 1,787,670 B | Opaque burgundy atmosphere and warm tabletop; no product, copy, or cloth. |
| `public/images/home/product-background.webp` | 1672 × 941 | 66,370 B | Opaque web export. |
| `public/images/shared/burgundy-velvet.webp` | 2172 × 724 | 135,790 B | Existing approved transparent lower-edge decoration, reused unchanged. |

The WebPs were encoded at quality 88 from the PNG masters with `assets/previews/M05A/prepare_assets.py`. The script uses the libwebp bundled with the installed Inkscape app; the exported images have no runtime dependency.

## Placement

The isolated review is `assets/previews/M05A/composition.html`. At 1440 px, the section is roughly 590 px tall, with the box occupying the left 62% grid column and copy the right 38%. The box's alpha margin keeps the full silhouette clear of section edges. The generated plate fills the section with `cover`; it should be cropped independently from the box. The velvet image is overlaid only at the lower edge. At 390 and 320 px, content precedes the image, which scales to the available width without horizontal overflow. The master retains the entire box even if future layouts crop more aggressively.

The mockup's `Purchase through our retail partner.` line is preview copy only. No retailer or destination is documented in the repository. Confirm that statement and provide a real Shop destination before presenting the action as a working checkout.

## Accuracy and visual limits

The image model re-rendered the supplied flat front while giving it a box shape. The large `DHESS` title, character illustration, visible claims, and bottom edition banner look consistent with the source by visual inspection. Fine print and small icon strokes may differ pixel by pixel, and the spine motifs and box thickness are inferred. There is no supplied spine, back panel, dieline, material specification, approved physical photograph, or production packaging text. Approval should cover the visual concept only; verify against final packaging before public claims about exact product appearance. The source itself contains baked claims; this artwork does not verify those claims.

The background and box were generated separately. The background has a single tabletop plane and no velvet. The existing cloth alone supplies the lower folds. No heading, button, caption, or destination is baked into either new asset.

## Generation record

Built-in image generation was used for the box and background. Reference images were supporting visual inputs; source files were not edited.

**Box prompt:**

> Use case: product-mockup. Asset type: isolated transparent product-box candidate for the DHESS European Edition homepage purchase section. Edit target: the supplied dhess-package.jpeg is the exact front-face art and text authority. Supporting reference: homepage-reference.png is composition and box-perspective authority. Transform the supplied flat front artwork into a premium rigid board-game box in three-quarter view, front face mostly frontal with a narrow visible LEFT spine, like the box in the lower product section of the homepage reference. Preserve the entire supplied front artwork and ALL original lettering, claims, symbols, character art, and wording exactly; do not repaint, restyle, translate, correct, or invent any text on the front. Treat the source image as a printed panel mapped onto the box face. The visible spine can be deep charcoal with restrained gold border decoration derived from the existing front frame; keep it text-free if exact reused text cannot be rendered. Complete box silhouette, including top and bottom edges, with modest transparent padding. Realistic subtle thickness, clean straight edges, rich black-gold materials, soft warm studio light from upper left. No scenery, table, cloth, floor, cast shadow outside object, backdrop, web UI, headings, buttons, new badges, new claims, or watermark. Genuine RGBA transparency, not checkerboard. This is a concept three-dimensional presentation of supplied flat art, not a claim of exact manufacturing accuracy.

**Background prompt:**

> Use case: product-mockup. Asset type: opaque background plate for the DHESS European Edition homepage purchase section. Input images: homepage-reference.png is the visual authority for the lower burgundy section; next-move-background-master.png is the approved adjacent section's painterly atmosphere reference. Create a wide 16:9 atmospheric burgundy-to-near-black backdrop with deep wine red clouds or subtle textured plaster in the upper and side regions, a warm dark walnut tabletop plane across the lower quarter, soft lateral amber light, and very restrained gold glints near edges. Keep central-left area clear enough for a separate product box overlay and central-right area quiet and dark enough for ivory HTML heading and gold button. No product, box, chess pieces, game board, duplicated velvet, table props, mountains, symbols, lettering, typography, UI, frame, button or logo. Premium painterly photographic material and depth, in the exact charcoal, burgundy and warm gold mood of the supplied homepage mockup. Full-bleed opaque plate.

## Review evidence

`assets/previews/M05A/composition-{1440,1024,390,320}.jpg` are browser captures of the isolated composition. `transparent-edge-check.html` and `.jpg` show the transparent box against charcoal and ivory. The M05A report records performed checks and pending homepage checks.
