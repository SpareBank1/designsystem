# CHANGELOG

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
