# Learn piece popups

The King opens a two-page lesson headed “The Imperion — King.” The gallery keeps its existing “King” label and seven-piece arrangement. The full piece guide remains pending. [Gallery artwork guide](learn-piece-assets.md) · [Pending items](../homepage-pending-items.md)

## Visual design

The two supplied references inform the warm parchment panel, double gold rim, burgundy headings and page selection, and ivory portrait. The panel reuses the approved site parchment tile. Gold rule numbers and framed diagram labels organize each lesson, and a gold callout gives the palace-row restriction its own line. The popup uses the site’s Cormorant Garamond headings, Georgia controls, and Helvetica Neue body stack. Its heading, rules, page controls, captions, legend, and coordinates are HTML. On desktop the panel sits beside the King where space allows. On touch it opens centered, and the header and footer stay in view while the lesson content scrolls. [Palace Movement reference](../../assets/source/learn-popups/imperion-movement-reference.png) · [GBESELE Capture reference](../../assets/source/learn-popups/imperion-capture-reference.png)

## Interaction and accessibility

The King button exposes the current expanded state and references a named, nonmodal native popover with dialog semantics. A mouse hover opens it after 230 ms without shifting focus. A 350 ms grace period lets the pointer travel into the panel. Pointer departure leaves the panel open while it contains focus. Click, tap, Enter, and Space open the same panel and focus its close control. The close button returns focus to the King. Escape restores focus to the King when it dismisses a focused lesson. Tab can leave the panel, and clicking or tapping elsewhere dismisses it.

Each fresh opening starts on Palace Movement. Both page selectors expose their pressed state, and the footer announces the current page. Previous and Next focus the new lesson heading, and the inactive section is hidden from keyboard navigation and assistive technology. The content region can be reached and scrolled by keyboard. The popup uses no motion or smooth scrolling.

## Diagram geometry

All three diagrams share an SVG checker pattern with 40 × 40 unit cells, ten columns labeled A–J, and ranks ascending from the bottom. The full 400 × 400 unit square contains 100 cells. Each 400 × 200 unit half-board contains 50. The King, Rook, Knight, and Pawn silhouettes come from the approved gallery cutouts. The example opponents are darkened in CSS. [Approved piece cutouts](../../public/images/learn/pieces/)

- **Palace Movement.** A dashed boundary highlights rank 1. Curved arrows lead from the Imperion at E1 to empty A1 and J1. The pieces at B1 and H1 illustrate jumping over occupied squares. Open rings mark the landing squares. E1 is an illustrative placement.
- **GBESELE Capture.** Dashed straight arrows run from E1 to A5, E5, and I5 on the before diagram. Outlined squares mark the three targets, which are assumed undefended for the example. The after diagram has the same coordinates and shows the Imperion alone at E1. Both examples include an equivalent text caption.
