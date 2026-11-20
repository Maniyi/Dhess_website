# DHESS Learn piece artwork

The [Learn mockup](../../assets/source/learn-reference.png) supplies the Phase A gallery composition and proposed display labels. The [oblique ivory render](../../assets/source/european-pieces.jpeg) and [front-facing clay lineup](../../assets/source/european-pieces1.jpeg) supply piece forms. Both renders have watermarks and limited resolution.

The approved [European introduction trio](../../assets/generated/home/european-intro-pieces-master.png), [next-move trio](../../assets/generated/home/next-move-pieces-master.png), and [hero board scene](../../assets/generated/home/hero-board-provisional-master.png) establish the cast and warm ivory finish. The group images have touching or overlapping silhouettes, and the hero board obscures parts of the pieces. Seven new standalone masters preserve the complete silhouettes and bases.

## Artwork inventory

The PNGs are the original built-in ImageGen outputs. Alpha bounds use alpha greater than 10 with exclusive right and bottom coordinates. Each WebP clears residual alpha values of 3 or less, makes values of 248 or greater opaque, crops the clear padding, scales the artwork proportionally to a maximum of 720 px, and adds an 8 px transparent margin. [The export script](../../assets/previews/M09A/prepare_assets.py) regenerates the WebPs and the light/dark review sheet with Python and Pillow.

| Piece | PNG master | WebP export |
| --- | --- | --- |
| King | [PNG](../../assets/generated/learn/king-master.png) · 1024 × 1536 · 2,140,003 B · `(97, 35)–(921, 1505)` | [WEBP](../../public/images/learn/pieces/king.webp) · 421 × 736 · 53,000 B · `(8, 8)–(412, 728)` |
| Queen | [PNG](../../assets/generated/learn/queen-master.png) · 1024 × 1536 · 2,027,987 B · `(181, 47)–(843, 1491)` | [WEBP](../../public/images/learn/pieces/queen.webp) · 348 × 736 · 47,434 B · `(9, 8)–(340, 728)` |
| Bishop | [PNG](../../assets/generated/learn/bishop-master.png) · 1024 × 1536 · 1,856,495 B · `(126, 35)–(882, 1465)` | [WEBP](../../public/images/learn/pieces/bishop.webp) · 396 × 736 · 39,650 B · `(8, 8)–(388, 728)` |
| Rook | [PNG](../../assets/generated/learn/rook-master.png) · 1024 × 1536 · 1,807,853 B · `(123, 73)–(901, 1430)` | [WEBP](../../public/images/learn/pieces/rook.webp) · 429 × 736 · 32,388 B · `(8, 8)–(420, 728)` |
| Mystic | [PNG](../../assets/generated/learn/mystic-master.png) · 1024 × 1536 · 1,909,395 B · `(147, 34)–(879, 1514)` | [WEBP](../../public/images/learn/pieces/mystic.webp) · 372 × 736 · 40,912 B · `(8, 8)–(364, 727)` |
| Knight | [PNG](../../assets/generated/learn/knight-master.png) · 1024 × 1536 · 1,911,378 B · `(123, 49)–(901, 1433)` | [WEBP](../../public/images/learn/pieces/knight.webp) · 423 × 736 · 39,450 B · `(9, 8)–(414, 728)` |
| Pawn | [PNG](../../assets/generated/learn/pawn-master.png) · 1024 × 1536 · 1,724,875 B · `(160, 65)–(850, 1396)` | [WEBP](../../public/images/learn/pieces/pawn.webp) · 389 × 736 · 33,310 B · `(8, 8)–(381, 728)` |

- [Approved charcoal plate](../../public/images/home/next-move-background.webp) is opaque, 1672 × 941 px, 25,214 B. An ink gradient quiets it behind the cast.
- [Approved burgundy velvet](../../public/images/shared/burgundy-velvet.webp) is 2172 × 724 px, 135,790 B, with alpha bounds `(0, 325)–(2172, 724)`. Its visible folds sit beneath the labels and guide.
- The charcoal and velvet are referenced directly from the existing site. Labels and contact shadows are separate from the figure files.

## Placement and limitations

The palette uses site ink `#141210`, ivory `#f8e5c5`, pale gold `#ffe0a1`, brass `#795a31`, and the approved wine-red velvet. The heading and labels use Cormorant Garamond 600, the eyebrow and guide use Georgia, and the description uses the existing Helvetica Neue stack. The desktop layout keeps the copy left-aligned and centers a three-piece row under the four-piece row. Mobile keeps images and labels paired in two columns, with Pawn centered on the final row.

The figures are concept illustrations with warm ivory resin and subtly varied base profiles and sculptural details. The king, queen, and knight turn slightly toward the viewer's right, while the other figures are near frontal. The queen has a prominent fleur on the crown, and the rook's raised battlements expose more of the tower opening than in the mockup. Relative display heights reference the Learn mockup. The seven names are proposed display labels. Final product details and terminology require owner confirmation. Movement, powers, counts, and starting positions require a separate approved rules reference.

## Built-in ImageGen prompts

The three visual inputs were the Learn mockup, the front-facing clay lineup, and the approved style master listed below. Each figure was generated separately with this common prompt, with its subject text inserted in place of `{subject}`.

> Create one transparent piece artwork master for DHESS European Edition, an isolated 3D sculpted playing piece for a coordinated set of seven. Input 1 is the Learn mockup and governs the exact cast design and silhouettes. Input 2 is the approved clay piece design reference and governs the sculpt identity. Input 3 is approved generated artwork and governs the pale warm ivory satin resin, subtle carved detail and rounded stepped base treatment. Use only the one requested subject from these visual references. SUBJECT: {subject} Studio catalog portrait, mostly frontal with a very slight three-quarter turn, gently elevated camera shows the top of the fully circular stepped pedestal with a shallow ellipse, warm soft upper-left key and subtle fill, pale creamy ivory highlights, gentle tan shadows, consistent detail without heavy speckle or patina. Whole sculpture from the top to the bottom of its base with clean clear margin all round, centered and large on a portrait canvas. It must have true RGBA transparency beyond the sculpture and absolutely no contact shadow, scene, background surface, text, label, logo, watermark or other piece.

- **King** (`next-move-pieces-master.png`)
  Crowned, long-haired and bearded king bust, small cross finial on the tall fluted crown, solemn expression, buttoned tunic and cloak folds; use the king at left in the approved next-move artwork. No cross on chest.
- **Queen** (`european-intro-pieces-master.png`)
  Crowned queen bust, long sculpted waves, narrow historical crown with small fleur finials, composed face and layered bodice; use the queen at far left in the approved introduction artwork.
- **Bishop** (`european-intro-pieces-master.png`)
  Mitred bishop bust matching the upper-left clay render and third figure in the top row of the Learn mockup. Tall pointed mitre bearing a shallow engraved cross, solemn mature face, draped side fabric and simple vestment panels.
- **Rook** (`european-intro-pieces-master.png`)
  Single tower rook matching the upper-right clay render and fourth figure in the top row of the Learn mockup. Broad circular crenellated crown, gently tapered smooth shaft with one small recessed arched window, stepped circular base, no masonry blocks.
- **Mystic** (`european-intro-pieces-master.png`)
  Hooded young adult figure, solemn human face, long pointed hood framing the face, angular layered shoulders, a small sculpted cross on the chest, and waist ties above the stepped base. Match first figure in lower gallery row of Learn mockup, second image's lower-left figure, and approved introduction mystic at right.
- **Knight** (`next-move-pieces-master.png`)
  Single elegant horse-headed knight, upright pointed ears, realistic carved mane and elongated muzzle on a standing neck, turned circular stepped ivory base. Use the horse at right in the approved next-move artwork and the center figure on the Learn mockup's second row. Slight three-quarter view shows both ears and part of the near mane, close to frontal.
- **Pawn** (`european-intro-pieces-master.png`)
  Single human pawn bust as at the right of the mockup's lower gallery row and right of lower row in the clay lineup. Shaven head, serene neutral adult face, athletic stylized bare chest with carved abdominal planes, ends at upper waist above the turned stepped base. No arms, costume, helmet or traditional ball finial.
