# Learn rulebook artwork

Prepared for Milestone 11A on 20 November 2026. The closed book and burgundy panel at the foot of the [Learn mockup](../../assets/source/learn-reference.png) set the composition. The existing open atlas shows a spread, and the closed volumes in the hero scenery are part of that backdrop. The isolated concept supplies a complete closed volume.

## Composition

The palette uses burgundy `#380e11`, charcoal `#141210`, ivory `#f8e5c5`, pale gold `#ffe0a1`, and brass `#795a31`. The heading uses the site's Cormorant Garamond 600, body copy uses the Helvetica Neue stack, and the eyebrow and pending actions use Georgia. The book carries the site's temporary DHESS wordmark, including the existing edition line and stars. The wordmark was typeset in a separate [lettering source](../../assets/previews/M11A/cover-lettering.html), projected onto the cover, and rendered into the transparent PNG and WebP. The revised three-quarter pose is in the artwork itself, with an even gold frame, a more level top edge and a visible left spine and foot. The small fleur-de-lis is the same divider ornament used on Home.

Desktop pairs the book on the left with left-aligned copy on the right, separated by a gold rule. A single foreground fold touches the lower left edge of the book. At 760 px and below, the copy and pending rulebook action come first, the vertical rule drops out, and the complete book sits below on a mobile crop of the same background. The shared cloth fades across the lower edge. The closing strip uses two fine gold separators and stacks its heading and action on mobile.

## Files

Alpha bounds use alpha greater than 10 and exclusive right and bottom coordinates. Padding is left, top, right, bottom.

| Role | File | Dimensions | Bytes | Transparency and placement |
| --- | --- | --- | ---: | --- |
| Composition reference | [Learn mockup](../../assets/source/learn-reference.png) | 787 × 1998 | 2,538,696 | The lower burgundy panel supplied the materials, pose and hierarchy. |
| Unlettered book master | [Generated PNG](../../assets/generated/learn/rulebook-cover-unlettered-master.png) | 1448 × 1086 | 2,607,080 | RGBA. Bounds `(116, 54)–(1363, 1003)`, padding `116 / 54 / 85 / 83` px. Separate source for the foil treatment. |
| Lettered book master | [Transparent PNG](../../assets/generated/learn/rulebook-cover-concept-master.png) | 1448 × 1086 | 2,324,899 | RGBA. Same bounds and padding as the unlettered master. Complete spine, cover and page edges. |
| Book web export | [Transparent WebP](../../public/images/learn/rulebook-cover-concept.webp) | 960 × 742 | 237,328 | RGBA. Bounds `(23, 24)–(936, 718)`, padding `23 / 24 / 24 / 24` px. Displayed at up to 460 CSS px wide on desktop. |
| Burgundy backdrop | [Approved homepage plate](../../public/images/home/product-background.webp) | 1672 × 941 | 66,370 | Opaque RGB. Centered at 41% vertically on desktop and positioned at 34% horizontal and 59% vertical on mobile, with a burgundy wash behind the copy. |
| Cloth | [Approved shared velvet](../../public/images/shared/burgundy-velvet.webp) | 2172 × 724 | 135,790 | RGBA. Bounds `(0, 325)–(2172, 724)`, padding `0 / 325 / 0 / 0` px. One lower-edge instance with a horizontal fade. |

Headless Chrome rendered the lettered PNG at the original canvas size with a transparent background. The WebP crops that PNG to source coordinates `(84, 22)–(1395, 1035)`, resizes with Lanczos, and encodes at quality 89 and alpha quality 100. Preview CSS sizes and shadows the artwork. The backdrop, cloth, heading, and actions are separate from the image. The blank master and lettering source keep the foil lettering editable.

## Product accuracy

The leather, gold tooling, shape, and cover treatment are concept artwork based on the mockup. No approved physical or digital rulebook was found in the source inventory. The cover uses the site's temporary text wordmark and omits the unapproved crest shown in the mockup. The rulebook and purchase actions display “Unavailable” as static text.

## Generation prompt

> Use case: product-mockup. Generate one new standalone transparent cutout of the closed leather book in the burgundy rulebook panel at the bottom of the supplied Learn mockup. The last book was too tall and appeared unevenly skewed. Match the mockup's pose deliberately: a broad, short, rectangular front cover that looks nearly square in the rendered view due to the book leaning back in three-quarter perspective. The top and bottom edges are nearly horizontal, rising to the right by only about 4–5 degrees. Both long edges slope to the right as they descend, by roughly the same angle (about 13 degrees off vertical). The top edge looks slightly shorter than the bottom edge from perspective, and the slim dark bound spine is visible on the left. Keep the opposing sides and straight corners consistent, with an evenly inset symmetrical antique-gold border and matching filigree in all four corners. Use espresso leather, gold tooling and warm soft lighting from upper left. Keep the central leather panel blank and evenly lit so exact DHESS lettering can be projected onto it separately. Render the whole book, lower corners and spine included, on a truly transparent background with clear padding. No outside shadow, surface, cloth, extra props, emblems, words, letters, numerals, pseudo-writing or watermark. Use the rest of the reference page only as context.

Built-in imagegen used `assets/source/learn-reference.png` as a visual reference and returned the unlettered transparent PNG. The wordmark was typeset separately from the image-generation pass.
