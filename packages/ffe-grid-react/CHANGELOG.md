# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="6.0.11"></a>
## [6.0.11](***REMOVED***) (2018-02-20)




**Note:** Version bump only for package ffe-grid-react

      <a name="6.0.10"></a>
## [6.0.10](***REMOVED***) (2018-02-15)




**Note:** Version bump only for package ffe-grid-react

    <a name="6.0.9"></a>
## [6.0.9](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-grid-react

  <a name="6.0.8"></a>
## [6.0.8](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-grid-react

<a name="6.0.7"></a>
## [6.0.7](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-grid-react

<a name="6.0.6"></a>

## [6.0.6](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.5"></a>

## [6.0.5](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.4"></a>

## [6.0.4](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.3"></a>

## [6.0.3](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.2"></a>

## 6.0.2 (2018-01-05)

**Note:** Version bump only for package ffe-grid-react

# CHANGELOG

## Version 6.0.1

* `utils.js` exports empty functions for production bundle

## Version 6.0.0

`<GridCol vertical={true} />` is now the default behavior, which means you need to do a manual
migration job. Do a global search for `<GridCol` and follow this approach for each occurrence:

* If you have specified `vertical={true}`, remove the prop. This is the default behavior now.
* If your `<GridCol />` has more than one child, add the prop `horizontal={true}` to keep the behavior from < 6.0.0.
* If your `<GridCol />` has exactly one child, this will now take up as much space as it originally required. So if your
single child is an inline element, no change is required. If your child is a block element, it will now occupy up to 100 %
of the available space instead of being sized by its content. You might want to add `horizontal={true}` here as well, but
you might not need this (depending on your use case).

### Breaking changes

* Supports `ffe-grid@^6.0.0`.
* Removes the `<GridCol vertical />` prop, and complains (in the console for non-production builds) if it's specified.

### New features

* Adds the `<GridCol horizontal />` prop, for keeping the behavior from < 6.0.0.

## Version 5.1.0

* The module now complains (in the console and for non-production builds) if `ffe-grid` is used in a way it's not meant to be.
From [ffe-grid's README](***REMOVED***):

> There should be no more than four columns on small devices and six columns on medium ones.
> Although it's technically possible, it's not something that's encouraged by the designers.

## Version 5.0.1

* Removed now unnecessary class `ffe-grid__col` from markup

## Version 5.0.0

* BREAKING: All `bg*` have been removed, and are replaced by a single `background` prop, which accepts a dash-cased value. Please see the README for a complete list of valid values. Upgrading requires the consumer to i.e. replace `bgBlueIce={true}` with `background="blue-ice"`.
* Added `mint-green` as a valid background value

## Version 4.7.0

* Added `bgGreyCloud` prop for `GridRow`, which adds a `ffe-grey-cloud` background colour.

## Version 4.6.0

### New features

* Added `bgBlueRoyal` prop for `GridRow`, which adds a `ffe-blue-royal` background colour.

## Version 4.5.0

### New features

* Added `bgPurpleMagenta` prop for `GridRow`, which adds a `ffe-purple-magenta` background colour.

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
