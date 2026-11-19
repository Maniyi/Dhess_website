# DHESS — “Meet your next move” artwork guide

Milestone 4A, 19 November 2026. The original `assets/source/homepage-reference.png` is the visual authority. All section copy, link styling, the gold divider and its small fleur-de-lis are HTML/CSS in the isolated preview; none is baked into either new image.

## Design calibration

- Palette: charcoal `#141210`, warm ivory `#f8e5c5`, pale display gold `#ffe0a1`, link gold `#f0b54e`, and the approved burgundy velvet.
- Type: the site's local Cormorant Garamond 600 for the heading, Helvetica Neue/Helvetica/Arial for body copy, and Georgia for the link.
- Desktop structure: the ivory group fills the left three-fifths; a fine gold rule with a small ornament divides it from left-aligned copy on the right. Mobile structure: copy precedes the group in normal flow, with no divider. Cloth only frames the lower edge.
- The distinctive decision comes from the reference's king, hooded figure and horse against near-black smoke. The layout does not add labels or decorative objects beyond the reference.

## Asset inventory

Alpha bounds use alpha greater than 10 and exclusive right/bottom coordinates. Padding is left/top/right/bottom.

| File | Dimensions | Size | Alpha / use |
| --- | ---: | ---: | --- |
| `assets/generated/home/next-move-pieces-master.png` | 1536 × 1024 | 2,137,006 B | RGBA; bounds `(227, 5)–(1307, 1019)`, padding `227/5/229/5`. Complete king, hooded figure, horse and bases. |
| `public/images/home/next-move-pieces.webp` | 1536 × 1024 | 183,122 B | RGBA web export of the same canvas and padding. |
| `assets/generated/home/next-move-background-master.png` | 1672 × 941 | 1,650,996 B | Opaque charcoal smoke plate, quiet on the right. |
| `public/images/home/next-move-background.webp` | 1672 × 941 | 25,214 B | Opaque web export. |

The WebPs were encoded at quality 88 from the PNG masters using `assets/previews/M04A/prepare_assets.py`. The script requires the libwebp bundled with the installed Inkscape app; the web exports themselves have no runtime dependency.

## Reused artwork and placement

- `public/images/shared/burgundy-velvet.webp` is the approved 2172 × 724 transparent cloth. It matches the lower-edge treatment once placed partly below the desktop section; no variation was needed. Its original PNG alternative and master remain available, unchanged.
- `assets/generated/home/european-intro-pieces-master.png` and `assets/generated/home/hero-board-provisional-master.png` were style references for pale ivory material, costume and lighting. The existing introduction trio has a queen and lacks the required horse, so it could not be reused as the new group. Neither reference was modified.
- The existing `hero-background-desktop-master.png` includes a castle, tabletop props and baked cloth. A separate new charcoal plate keeps this section free of those objects and leaves a quiet copy area.

On desktop, display the pieces as one image in the left 60% of a roughly 540 px high section at 1440 px width. The master has generous transparent horizontal padding, so it can be positioned at full column width. The preview intentionally clips the very bottom of the king's base at the section edge while the master retains every base. Keep the cloth as a separate overlay anchored below the lower edge. On mobile, keep copy first; scale the same image to 140% of its art container and offset it 20% left. Only transparent side margins are cropped, so the complete trio fits at 390 and 320 px without distortion or document overflow. The mobile section height follows its content.

## Generation record

Built-in image generation produced both new masters. Reference images were visual inputs, not edit targets. The new pieces are concept illustrations based on available approved artwork and watermarked source references, not exact manufactured product reproductions.

**Pieces prompt:**

> Use case: product-mockup. Asset type: reusable transparent artwork for the DHESS 'Meet your next move' homepage section. Input images: homepage-reference.png is the composition authority; european-intro-pieces-master.png and hero-board-provisional-master.png are the approved cast's ivory material, face, costume, base and warm lighting references; european-pieces1.jpeg is only a supporting piece-form reference. Create exactly THREE complete large ivory sculpted playing pieces as ONE cohesive group, arranged left to right: a tall crowned bearded king at left with a crown topped by a small cross, long hair, buttoned historical tunic and substantial turned circular base; a hooded, solemn human figure in the middle with a small cross on the garment and a turned circular base, slightly behind and lower than the king; an elegant horse-headed piece at right with carved mane and a turned circular base, also behind/lower than the king. Follow the original mockup's tightly grouped dramatic composition and relative scale. Match the approved cast's pale warm ivory stone/resin, realistic painterly 3D sculptural finish, believable carved detail and warm light from upper left. Preserve every silhouette from crown/ears to bottom of each base, with modest genuine transparent padding on all sides. No board, tabletop, landscape, smoke, glow outside the objects, floor, backdrop, cloth, text, logo, watermark, extra pieces or checkerboard. This is a concept illustration, not an exact manufactured reproduction.

**Background prompt:**

> Use case: product-mockup. Asset type: reusable background plate for the DHESS 'Meet your next move' website section, separate from all HTML copy and piece artwork. Input image: homepage-reference.png is the visual authority for the dark smoky section between the pale European introduction and burgundy product section. Create a wide horizontal charcoal black, subtly smoky atmospheric backdrop, premium cinematic painterly texture. Almost-black at the left and far right, with restrained warm brown/bronze cloudiness behind the left-center where a transparent group of ivory pieces will later be placed. Keep the right 45% especially quiet, dark and low contrast for large gold HTML heading, ivory paragraph and link. A tiny amount of diffuse warm edge illumination is okay. No chess pieces, game board, castle, mountains, tabletop, props, velvet, typography, symbols, lines, ornament, divider, button, logo, watermark, frame or user interface. No obvious horizon or spotlight. Wide landscape 16:9 composition; full bleed opaque background.

## Review files

`assets/previews/M04A/composition.html` is an isolated review page, and `transparent-edge-check.html` places the group on dark and light grounds. Browser captures: `composition-1440.jpg`, `composition-1024.jpg`, `composition-390.jpg`, `composition-320.jpg`, and `transparent-edge-check.jpg`. These files are review evidence only; the live homepage does not reference the new artwork.
