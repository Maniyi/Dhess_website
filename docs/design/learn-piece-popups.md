# Learn piece popups

The King opens “The Imperion — King,” the Queen opens “The Queen,” and the Bishop opens “The Bishop,” each with two lesson pages. The Knight opens “The Knight” with one lesson. The gallery keeps its seven-piece arrangement and all seven labels. The full piece guide remains pending. [Gallery artwork guide](learn-piece-assets.md) · [Pending items](../homepage-pending-items.md)

## Visual design

The two supplied references inform the warm parchment panel, double gold rim, burgundy headings and page selection, and ivory portrait. The panel reuses the approved site parchment tile. Gold rule numbers and framed diagram labels organize each lesson, and a gold callout gives the palace-row restriction its own line. The popup uses the site’s Cormorant Garamond headings, Georgia controls, and Helvetica Neue body stack. Its heading, rules, page controls, captions, legend, and coordinates are HTML. On desktop the panel sits beside the King where space allows. On touch it opens centered, and the header and footer stay in view while the lesson content scrolls. [Palace Movement reference](../../assets/source/learn-popups/imperion-movement-reference.png) · [GBESELE Capture reference](../../assets/source/learn-popups/imperion-capture-reference.png)

## Interaction and accessibility

The King, Queen, Bishop, and Knight buttons expose their expanded state and reference named, nonmodal native popovers with dialog semantics. A mouse hover opens a lesson after 230 ms without shifting focus. A 350 ms grace period lets the pointer travel into the panel. Pointer departure leaves the panel open while it contains focus, and hovering another trigger keeps focus in the current lesson. Click, tap, Enter, and Space open the selected panel and focus its close control. Only one panel opens at a time. Switching clears pending hover timers and updates the affected triggers’ expanded states. The close button returns focus to its own trigger. Escape does the same when it dismisses a focused lesson. Tab can leave the panel, and clicking or tapping elsewhere dismisses it.

Each fresh opening starts on Palace Movement for the Imperion, Move & Capture for the Queen and Knight, or Diagonal Move & Capture for the Bishop. In the two-page lessons, page selectors expose their pressed state and the footer announces the current page. Previous and Next focus the new lesson heading, and the inactive section is hidden from keyboard navigation and assistive technology. All four content regions can be reached and scrolled by keyboard. The popups use no motion or smooth scrolling.

## Diagram geometry

The Imperion’s three diagrams share an SVG checker pattern with 40 × 40 unit cells, ten columns labeled A–J, and ranks ascending from the bottom. The full 400 × 400 unit square contains 100 cells. Each 400 × 200 unit half-board contains 50. The King, Rook, Knight, and Pawn silhouettes come from the approved gallery cutouts. The example opponents are darkened in CSS. [Approved piece cutouts](../../public/images/learn/pieces/)

- **Palace Movement.** A dashed boundary highlights rank 1. Curved arrows lead from the Imperion at E1 to empty A1 and J1. The pieces at B1 and H1 illustrate jumping over occupied squares. Open rings mark the landing squares. E1 is an illustrative placement.
- **GBESELE Capture.** Dashed straight arrows run from E1 to A5, E5, and I5 on the before diagram. Outlined squares mark the three targets, which are assumed undefended for the example. The after diagram has the same coordinates and shows the Imperion alone at E1. Both examples include an equivalent text caption.

## Queen lessons

The Queen reuses the shared popup frame, portrait treatment, controls, rule badges and 40-unit board styling. The diagram uses approved piece cutouts and straight lines drawn between square centers. The rules and captions are HTML. [Supplied Queen reference](../../assets/source/learn-popups/queen-reference.png)

**Move & Capture.** The Queen moves any distance along a clear rank, file or diagonal. She can capture an opponent along those directions, and the move ends on the captured piece’s square. The callout reads “No jumping.”

The example uses a 400 × 400 SVG viewBox and exactly 100 cells. A1 is at the lower left and J10 is at the upper right. Each arrow begins at E5, whose center is (180, 220) in SVG units. E5 is an illustrative position.

| Example | Coordinates | Diagram key |
| --- | --- | --- |
| File moves | E5 → E10 and E5 → E1 | Solid gold arrows |
| Rank move | E5 → A5 | Solid gold arrow |
| Diagonal moves | E5 → J10, E5 → A1, E5 → F4 | Solid gold arrows |
| Captures | E5 → B8 (opposing Knight), E5 → H5 (opposing Rook) | Dashed burgundy arrows ending on the targets |
| Friendly blocker | G3 (friendly Pawn), one square beyond F4 | Dashed square outline |

**Starting Position.** “The Queen starts immediately to the Imperion’s right.” Two adjacent palace-row squares show the Imperion on the viewer’s left and the Queen on the right. The caption places the viewer on their own side facing across the board. The squares are illustrative and omit coordinates.

## Knight lesson

**The Knight**, “The North-Central Warchief,” has one lesson titled **Move & Capture**. The Knight moves two squares horizontally or vertically, then one square at a right angle. It can jump over intervening pieces and capture an opponent by landing on its square. A friendly piece makes its square unavailable as a landing. The owner’s rule clarification confirms that both the Warchief and Imperion can jump within their respective movement restrictions. [Supplied Knight reference](../../assets/source/learn-popups/knight-reference.png)

The diagram uses 100 explicit 40 × 40 SVG cells with A1 at the lower left. The Knight stands on E5 at SVG center (180, 220). Every arrow starts there and ends at the center of its labeled destination. The bent arrows show the two-square and one-square displacement. Intervening pieces do not affect whether the jump is available. The board reuses the approved ivory cutouts and the existing darkened treatment for the opponent.

| Example | Coordinates | Diagram key |
| --- | --- | --- |
| Empty legal landings | C4, C6, D3, D7, F3, F7 | Solid gold arrows |
| Capture | G4, opposing Pawn | Dashed burgundy arrow and target outline |
| Friendly-occupied landing | G6, friendly Bishop | Framed square with × |
| Jump over a piece | E6, Rook between E5 and the bend for D7 and F7 | Ivory Rook drawn over the shared arrow segment |

## Bishop lessons

**The Bishop**, “The East African High Chief,” uses the approved ivory cutout and the shared lesson frame and controls. Each diagram has 100 explicit 40 × 40 SVG cells, with A1 at the lower left and the Bishop at E5. The captions give the same examples in text. [Diagonal reference](../../assets/source/learn-popups/bishop-diagonal-reference.png) · [Switching reference](../../assets/source/learn-popups/bishop-switch-reference.png)

**Diagonal Move & Capture.** The Bishop can move any distance diagonally along a clear path. It captures an opponent by landing on its square along that same diagonal. Intervening pieces block either action because the Bishop cannot jump. The lesson introduces the sideways switch on the second page.

**Switching Move.** The Bishop moves exactly one square left or right to an empty adjacent square. The move switches between land and sea, uses the entire turn, and cannot capture. Both destinations change the square color. The example leaves the land and sea colors unspecified.

| Example | Coordinates | Diagram key |
| --- | --- | --- |
| Empty diagonal paths | E5 → J10 or A1 | Solid gold arrows |
| Alternative captures | E5 → B8 (opposing Rook) or H2 (opposing Knight) | Dashed burgundy arrows ending on outlined targets |
| Alternative switches | E5 → D5 or F5 | Solid gold arrows ending on outlined, empty adjacent squares |
