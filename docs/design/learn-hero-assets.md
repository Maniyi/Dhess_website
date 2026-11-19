# DHESS Learn hero artwork

Phase A review candidate from 19 November 2026. The isolated composition is in [the artwork preview](../../assets/previews/M07A/composition.html).

## Reference and design

The [Learn mockup](../../assets/source/learn-reference.png) measures 787 × 1998 px and its SHA-256 is `006f6908ef249879092a17184a88cc4404efd04cdd05c341abd36c9fc6a59bdf`. The repository file appeared after the initial inspection and is byte-identical to the local Downloads copy used to compose the preview. The preview follows the mockup's upper composition and uses the supplied milestone copy.

The palette uses the existing ink `#141210`, ivory `#f8e5c5`, warm heading tone `#ffdfae`, chapter gold `#f0b54e`, and brass rule `#795a31`. The approved velvet provides the burgundy. Cormorant Garamond 600 sets the heading, Georgia sets the controls and chapter strip, and the existing Helvetica Neue stack sets the description.

The desktop layout places the copy in a dark left column and the king, hooded figure and horse on the right. On mobile, the left-aligned copy sits above the full cast, with the chapter labels in a two-by-two strip. The earlier plan to show the whole scenery plate was narrowed to its upper portion so the books and baked velvet stay outside the visible crop.

## Approved source layers

| Layer | Lossless master | Web export | Canvas | Transparency and role |
| --- | --- | --- | --- | --- |
| Mountain and castle scenery | [Hero desktop scenery master](../../assets/generated/home/hero-background-desktop-master.png), 2,298,236 B | [Hero desktop scenery WebP](../../public/images/home/hero-background-desktop.webp), 234,306 B | 1672 × 941 | Opaque RGB. CSS fades the upper scenery into ink and hides the plate's lower props and baked velvet. |
| Board surface | [Introduction board master](../../assets/generated/home/european-intro-board-master.png), 45,147 B | [Introduction board WebP](../../public/images/home/european-intro-board.webp), 64,440 B | 2000 × 1000 | RGBA. Alpha > 10 bounds `(87, 167)–(1934, 867)`. Includes the board's soft floor shadow. |
| Ivory trio | [Next move piece master](../../assets/generated/home/next-move-pieces-master.png), 2,137,006 B | [Next move piece WebP](../../public/images/home/next-move-pieces.webp), 183,122 B | 1536 × 1024 | RGBA. Alpha > 10 bounds `(227, 5)–(1307, 1019)`. All three figures and bases are present. |
| Lower-edge velvet | [Velvet master](../../assets/generated/home/burgundy-velvet-master.png), 946,480 B | [Shared velvet WebP](../../public/images/shared/burgundy-velvet.webp), 135,790 B | 2172 × 724 | RGBA. Alpha > 10 bounds `(0, 325)–(2172, 724)`. An independent overlay anchors the scene at the lower left. |

Bounds use exclusive right and bottom coordinates. Existing approved masters and exports support all four layers. The preview adds no raster masters or web artwork exports. Its JPG files are flattened review captures and the preview uses live HTML for its copy, controls and chapter labels.

## Placement

- **Scenery.** Use the full-width desktop plate and fade it to transparent by 46% of its image height. Keep an ink fade behind the left copy. At mobile widths, anchor the 180%-wide plate on the right for the mountain and castle crop and fade both ends into the scene.
- **Board.** Compress the existing board canvas vertically for a shallower projection. On desktop the surface extends past the right edge. On mobile the center crop fills the stage under the trio.
- **Cast.** Preserve the original aspect ratio, transparent margins and positions within the trio. The contact shadows are CSS gradients on the cast wrapper, so they move with the figures. The cast sits at approximately 12% above the desktop stage bottom and 13% above the mobile stage bottom.
- **Cloth.** Position the shared velvet separately at the lower left and fade it horizontally. On narrow screens keep its visible fold below the king's base.

## Product accuracy

The 10 × 10 checker pattern is the existing provisional introduction illustration. The mockup's landmark and resource markings were omitted. The oversized trio and relative positions are for the composition. The image establishes no starting squares, piece movements, board zones, or other European Edition rules. The sculpts remain concept depictions. Further product claims require approved rules or product references.
