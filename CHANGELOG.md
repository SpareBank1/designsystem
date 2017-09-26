# CHANGELOG

## Version 4.4.0

### New features
* Added `condensed` prop for `Grid`, which adds the `ffe-grid--condensed` modifier.

## Version 4.3.0

### New features
* Added `bgBlueIce` prop for `GridRow`, which adds a `ffe-blue-ice` background colour.

## Version 4.2.2

### Improvement
* The warnings about nested grid elements has been fixed to work recursively.
* The warnings about nested grid elements do not run in production environments.

## Version 4.2.1

### Bugfix
* Fix a NPE when rendering with `null` as a child of `Grid`, `GridRow` or `GridCol`.

## Version 4.2.0

### New features
* Warns about nesting grids, grid columns and grid rows.
* The default dimension for `<GridCol>` is now `sm={12}` (rather than no default) so rendering `<GridCol>` will be the same as rendering `<GridCol sm={12}>`.

## Version 4.1.2
* The Grid overlay has z-index over 9000.
* `<GridCol>` accepts 0 as valid values for both `cols` and `offset`. It's not known if there's a usecase for a 0 cols column but there definitely is for a 0 offset column. The less module generates classes for 0 cols though so we might as well support it.

## Version 4.1.1

### Bugfix
* `GridCol` does not pass on properties it uses itself (like `end`, `middle`, etc) to its root element

## Version 4.1.0

### New features
* `Grid`, `GridRow` and `GridCol` accepts new prop `element` (default: _div_) which can be used to render a different
element (e.g. a _section_, _header_, etc).
* `Grid`, `GridRow` and `GridCol` will pass any props it doesn't know what to do with (such as _onClick_, _style_, etc) on to its root element.

### Other
* Dependency on `PropTypes` from the `react` package removed in favor for direct imports from the `prop-types` package.

## Version 4.0.0

### Breaking changes
* `bgBlue` prop for `GridRow` renamed to `bgBluePale`
* Depends on new major of `ffe-grid` (`5.0.0`).

### New features
* Added `bgBlueCobalt` prop for `GridRow`, which adds a `ffe-blue-cobalt` background colour.

## Version 3.0.0
* Added `vertical` and `reverse` modifiers to `GridCol`.
* These modifiers only work with minimum v.4.2.0 of `ffe-grid` so the breaking change is that we have to
depend on a new major version of `ffe-grid` to use them.

## Version 2.2.1
* Expand peerDep scope of `ffe-grid` to include `4.x`.
* Add devDeps to `ffe-core` and `ffe-grid`.

## Version 2.2.0
* Add className property to Grid, GriRow and GridCol

## Version 2.1.1
* Grid rows with background colour are now full width

## Version 2.1.0
* Added a separate export for placing a grid overlay on the webpage

## Version 2.0.0
* Bumped to major version `2.0.0` of `ffe-grid`
* Support `noTopPadding` modifier on `Grid`
* Support `topPadding` modifier on `GridRow`
* Support `bgSand` modifier on `GridRow`

## Version 1.0.0
* Initial release
