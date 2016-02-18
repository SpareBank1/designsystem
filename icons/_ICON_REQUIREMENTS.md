# Requirements for icon SVGs in ffe-icons

1. SVGs must be optimised - remove garbage metadata and make SVGs as lean as possible
2. The primary color **must not** be embedded in the SVG. This is so CSS can override the color. Details that should always be a particular color can have theirs embedded. 
3. The shape **must** fill the viewbox - minimum two edges of the square viewbox should be in contact with the shape. This is so margins can be fully controlled using CSS.

If the SVG does not match these criteria, reject it. 