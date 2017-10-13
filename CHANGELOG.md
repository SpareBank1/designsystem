# Changelog

## v3.0.1
* Fix a propType error that would happen if isOpen was not set on AccordionItem. Collapse complained that
`this.state.isOpen` was undefined, so it now defaults to the boolean `false`.

## v3.0.0
* Changing to use flex to align items instead of absolute positioning

## v2.1.0
Use `react-collapse` instead of ffe-expandable-react, since the latter is deprecated. Also add a new property
`hasNestedCollapse`, which lets the consumer use another `react-collapse` element inside the accordion.

## v2.0.4
Set `type="button"` for Button-toggler to prevent submit when accordion is used inside a form.

## v.2.0.3
* Use PropTypes from prop-types package

## v2.0.2
Remove the `--white` modifier classes, since they are now the default.

## v2.0.1
Bump ffe-accordion version.

## v2.0.0
Use `<button>` (instead of `<a>`) for the toggler to prevent unnecessary links.
Add `ffe-accordion` as a peer dependency.

## v1.2.7
Fixed bug in aria label id

## v1.2.6
Update ffe-expandable-react to 1.0.5 or above

## v1.2.5
Update eslint configuration

## v1.2.4
This release fixes a few issues from v1.2.3.
- Use `uuid` instead of `nfe-hash` for unique IDs.
- Make `uuid` and `isOpen` optional props.

## v1.2.3
Make accordion items have globally unique IDs.

## v1.2.2
Updated ffe-expandable-react to use react-height to calculate panel height

## v1.2.1
Updated ffe-expandable-react and ffe-icons-react to fix some bugs.

## v1.2.0
Added aria-label-tag to be able to set text screen-readers read.

## v1.0.0
"Initial" version
