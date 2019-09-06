# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.3.0...@sb1/ffe-grid-react@10.0.0) (2019-08-27)

### chore

-   bump React to 16.9 to allow for using hooks etc ([e3901f1](https://github.com/SpareBank1/designsystem/commit/e3901f1))

### BREAKING CHANGES

-   peerDep of React is raised to 16.9. While this in itself
    isn't a breaking change, it allows for the use of hooks in later releases.
    Such changes would just be a minor version, or even a patch, but without
    this major version bump it would result in a runtime error for consumers.

# [9.3.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.2.1...@sb1/ffe-grid-react@9.3.0) (2019-06-28)

### Features

-   **ffe-grid-react:** Avoid circular imports ([dbfc95b](https://github.com/SpareBank1/designsystem/commit/dbfc95b))

## [9.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.2.0...@sb1/ffe-grid-react@9.2.1) (2019-04-26)

### Bug Fixes

-   **ffe-grid-react:** Fix in typescript definition, children should not be required. ([cdfeaa8](https://github.com/SpareBank1/designsystem/commit/cdfeaa8))

# [9.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.1.4...@sb1/ffe-grid-react@9.2.0) (2019-04-25)

### Features

-   **ffe-grid-react:** Added type definitions for typescript ([524cf3e](https://github.com/SpareBank1/designsystem/commit/524cf3e))
-   **ffe-grid-react:** Added type definitions for typescript ([4dd607a](https://github.com/SpareBank1/designsystem/commit/4dd607a))

## [9.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.1.3...@sb1/ffe-grid-react@9.1.4) (2019-01-23)

### Bug Fixes

-   **ffe-grid-react:** Reduce console.error noise with inline-grid ([697318d](https://github.com/SpareBank1/designsystem/commit/697318d))

## [9.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.1.2...@sb1/ffe-grid-react@9.1.3) (2018-12-11)

### Bug Fixes

-   Build tree shakeable packages ([fb4a9ea](https://github.com/SpareBank1/designsystem/commit/fb4a9ea))

## [9.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.1.1...@sb1/ffe-grid-react@9.1.2) (2018-11-26)

**Note:** Version bump only for package @sb1/ffe-grid-react

## [9.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.1.0...@sb1/ffe-grid-react@9.1.1) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-grid-react

# [9.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.0.2...@sb1/ffe-grid-react@9.1.0) (2018-10-05)

### Features

-   **ffe-grid-react:** Add support for inline grid ([9966b86](https://github.com/SpareBank1/designsystem/commit/9966b86))

<a name="9.0.2"></a>

## [9.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.0.1...@sb1/ffe-grid-react@9.0.2) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-grid-react

<a name="9.0.1"></a>

## [9.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@9.0.0...@sb1/ffe-grid-react@9.0.1) (2018-06-26)

### Bug Fixes

-   **ffe-grid-react:** Fix incorrect propType ([e26c1d6](https://github.com/SpareBank1/designsystem/commit/e26c1d6))

<a name="9.0.0"></a>

# [9.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@8.0.0...@sb1/ffe-grid-react@9.0.0) (2018-06-19)

### Bug Fixes

-   **ffe-grid-react:** Removed FFE support for some backgrounds ([713ab6d](https://github.com/SpareBank1/designsystem/commit/713ab6d)), closes [#256](https://github.com/SpareBank1/designsystem/issues/256)

### BREAKING CHANGES

-   **ffe-grid-react:** Support for background colours that are not listed as backgrounds in the [design guide](https://design.sparebank1.no/visuell-identitet.html#visuell-identitet_farger) has been removed. This means the background props `blue-cobalt`, `blue-royal` and `purple-magenta`. If you were using any of those on rows or columns, please consider switching to one of those that are supported by FFE directly or add your own custom CSS classes in userland in order to have these colours.

<a name="8.0.0"></a>

# [8.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.3.0...@sb1/ffe-grid-react@8.0.0) (2018-06-18)

### Code Refactoring

-   **ffe-grid-react:** Normalized padding props ([97ffc71](https://github.com/SpareBank1/designsystem/commit/97ffc71)), closes [#282](https://github.com/SpareBank1/designsystem/issues/282)

### BREAKING CHANGES

-   **ffe-grid-react:** Removed the "no" prefix from the padding props.
    For `GridCol`, `noBottomPadding` is now `bottomPadding`.
    For `Grid`, `noTopPadding` is now `topPadding`.

The default behaviour has not been changed, so to migrate you need to

-   Replace all usage of `noBottomPadding={true}` with `bottomPadding={false}` on GridCols.
-   Replace all usage of `noTopPadding={true}` with `topPadding={false}` on Grids.

<a name="7.3.0"></a>

# [7.3.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.2.0...@sb1/ffe-grid-react@7.3.0) (2018-05-29)

### Bug Fixes

-   **ffe-grid-react:** remove warning when running tests ([aeefcb3](https://github.com/SpareBank1/designsystem/commit/aeefcb3))

### Features

-   **ffe-grid-react:** Add support for more backgrounds ([6a4062a](https://github.com/SpareBank1/designsystem/commit/6a4062a)), closes [#256](https://github.com/SpareBank1/designsystem/issues/256)

<a name="7.2.0"></a>

# [7.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.1.2...@sb1/ffe-grid-react@7.2.0) (2018-04-25)

### Features

-   **ffe-grid-react:** Add support for col bg ([bd16761](https://github.com/SpareBank1/designsystem/commit/bd16761))

<a name="7.1.2"></a>

## [7.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.1.1...@sb1/ffe-grid-react@7.1.2) (2018-04-12)

**Note:** Version bump only for package @sb1/ffe-grid-react

<a name="7.1.1"></a>

## [7.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.1.0...@sb1/ffe-grid-react@7.1.1) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-grid-react

<a name="7.1.0"></a>

# [7.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.0.2...@sb1/ffe-grid-react@7.1.0) (2018-03-22)

### Features

-   **ffe-grid-react:** Add centerText prop to GridCol ([a116f24](https://github.com/SpareBank1/designsystem/commit/a116f24))

<a name="7.0.2"></a>

## [7.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.0.0...@sb1/ffe-grid-react@7.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="7.0.1"></a>

## [7.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid-react@7.0.0...@sb1/ffe-grid-react@7.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="7.0.0"></a>

# 7.0.0 (2018-02-25)

### Bug Fixes

-   remove all references to internal system ([ff22340](https://github.com/SpareBank1/designsystem/commit/ff22340))

### Chores

-   add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))

### BREAKING CHANGES

-   All packages have been renamed to add the @sb1 scope.

See links [1] and [2] to read more about package scopes.

Unfortunately this requires you update both your dependencies in
`package.json` and all `import` or `require` statements in your code.
Also, you unfortunately have to upgrade all FFE packages at once due to
dependency between packages. If you are on the latest version prior to
this breaking change the upgrade should be a matter of updating
`package.json` with new package names and versions, and updating your
imports.

To help find the proper package versions you can either browse to the
packages you need or check out the list of Git tags either on
Github [3] or by cloning the repository and running the `git tag`
command. All package versions get a tag in the format
_package@version_.

Update your `package.json` with the latest package version and add the
@sb1 scope to the package name:

```diff
- "ffe-core": "11.0.2",
+ "@sb1/ffe-core": "11.0.2",
```

Scoped packages all get put in a subdirectory in `node_modules/`. In our
case packages will be put in the `node_modules/@sb1/` directory. If your
build depends on file paths (for instance for copying fonts) you need to
update that path to include the scope.

The directory structure also means you have to update your imports, both
in Less and in JavaScript.

Using `less-plugin-npm-import`:

```diff
- @import 'npm://ffe-core/less/ffe';
+ @import 'npm://@sb1/ffe-core/less/ffe';
```

Using Webpack:

```diff
- @import '~ffe-core/less/ffe';
+ @import '~@sb1/ffe-core/less/ffe';
```

Using plain old paths:

```diff
- @import '../path/to/node_modules/ffe-core/less/ffe';
+ @import '../path/to/node_modules/@sb1/ffe-core/less/ffe';
```

JavaScript `import`:

```diff
- import { ActionButton } from 'ffe-buttons-react';
+ import { ActionButton } from '@sb1/ffe-buttons-react';
```

JavaScript `require`:

```diff
- const { ActionButton } = require('ffe-buttons-react').default;
+ const { ActionButton } = require('@sb1/ffe-buttons-react').default;
```

[1]: https://docs.npmjs.com/misc/scope
[2]: https://docs.npmjs.com/getting-started/scoped-packages
[3]: https://github.com/sparebank1/designsystem/tags

<a name="6.0.13"></a>

## [6.0.13](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.12...ffe-grid-react@6.0.13) (2018-02-23)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.12"></a>

## [6.0.12](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.11...ffe-grid-react@6.0.12) (2018-02-22)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.11"></a>

## [6.0.11](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.10...ffe-grid-react@6.0.11) (2018-02-20)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.10"></a>

## [6.0.10](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.9...ffe-grid-react@6.0.10) (2018-02-15)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.9"></a>

## [6.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.8...ffe-grid-react@6.0.9) (2018-02-01)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.8"></a>

## [6.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.7...ffe-grid-react@6.0.8) (2018-01-19)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.7"></a>

## [6.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.6...ffe-grid-react@6.0.7) (2018-01-19)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.6"></a>

## [6.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.5...ffe-grid-react@6.0.6) (2018-01-10)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.5"></a>

## [6.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.4...ffe-grid-react@6.0.5) (2018-01-09)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.4"></a>

## [6.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.3...ffe-grid-react@6.0.4) (2018-01-09)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.3"></a>

## [6.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-grid-react@6.0.2...ffe-grid-react@6.0.3) (2018-01-05)

**Note:** Version bump only for package ffe-grid-react

<a name="6.0.2"></a>

## 6.0.2 (2018-01-05)

**Note:** Version bump only for package ffe-grid-react

## 6.0.1

-   `utils.js` exports empty functions for production bundle

# 6.0.0

`<GridCol vertical={true} />` is now the default behavior, which means you need to do a manual
migration job. Do a global search for `<GridCol` and follow this approach for each occurrence:

-   If you have specified `vertical={true}`, remove the prop. This is the default behavior now.
-   If your `<GridCol />` has more than one child, add the prop `horizontal={true}` to keep the behavior from < 6.0.0.
-   If your `<GridCol />` has exactly one child, this will now take up as much space as it originally required. So if your
    single child is an inline element, no change is required. If your child is a block element, it will now occupy up to 100 %
    of the available space instead of being sized by its content. You might want to add `horizontal={true}` here as well, but
    you might not need this (depending on your use case).

### BREAKING CHANGES

-   Supports `ffe-grid@^6.0.0`.
-   Removes the `<GridCol vertical />` prop, and complains (in the console for non-production builds) if it's specified.

### New features

-   Adds the `<GridCol horizontal />` prop, for keeping the behavior from < 6.0.0.

# 5.1.0

-   The module now complains (in the console and for non-production builds) if `ffe-grid` is used in a way it's not meant to be.
    From [ffe-grid's README](https://github.com/SpareBank1/designsystem/tree/master/packages/ffe-grid):

> There should be no more than four columns on small devices and six columns on medium ones.
> Although it's technically possible, it's not something that's encouraged by the designers.

## 5.0.1

-   Removed now unnecessary class `ffe-grid__col` from markup

# 5.0.0

-   BREAKING: All `bg*` have been removed, and are replaced by a single `background` prop, which accepts a dash-cased value. Please see the README for a complete list of valid values. Upgrading requires the consumer to i.e. replace `bgBlueIce={true}` with `background="blue-ice"`.
-   Added `mint-green` as a valid background value

# 4.7.0

-   Added `bgGreyCloud` prop for `GridRow`, which adds a `ffe-grey-cloud` background colour.

# 4.6.0

### New features

-   Added `bgBlueRoyal` prop for `GridRow`, which adds a `ffe-blue-royal` background colour.

# 4.5.0

### New features

-   Added `bgPurpleMagenta` prop for `GridRow`, which adds a `ffe-purple-magenta` background colour.

# 4.4.0

### New features

-   Added `condensed` prop for `Grid`, which adds the `ffe-grid--condensed` modifier.

# 4.3.0

### New features

-   Added `bgBlueIce` prop for `GridRow`, which adds a `ffe-blue-ice` background colour.

## 4.2.2

### Improvement

-   The warnings about nested grid elements has been fixed to work recursively.
-   The warnings about nested grid elements do not run in production environments.

## 4.2.1

### Bugfix

-   Fix a NPE when rendering with `null` as a child of `Grid`, `GridRow` or `GridCol`.

# 4.2.0

### New features

-   Warns about nesting grids, grid columns and grid rows.
-   The default dimension for `<GridCol>` is now `sm={12}` (rather than no default) so rendering `<GridCol>` will be the same as rendering `<GridCol sm={12}>`.

## 4.1.2

-   The Grid overlay has z-index over 9000.
-   `<GridCol>` accepts 0 as valid values for both `cols` and `offset`. It's not known if there's a usecase for a 0 cols column but there definitely is for a 0 offset column. The less module generates classes for 0 cols though so we might as well support it.

## 4.1.1

### Bugfix

-   `GridCol` does not pass on properties it uses itself (like `end`, `middle`, etc) to its root element

# 4.1.0

### New features

-   `Grid`, `GridRow` and `GridCol` accepts new prop `element` (default: _div_) which can be used to render a different
    element (e.g. a _section_, _header_, etc).
-   `Grid`, `GridRow` and `GridCol` will pass any props it doesn't know what to do with (such as _onClick_, _style_, etc) on to its root element.

### Other

-   Dependency on `PropTypes` from the `react` package removed in favor for direct imports from the `prop-types` package.

# 4.0.0

### BREAKING CHANGES

-   `bgBlue` prop for `GridRow` renamed to `bgBluePale`
-   Depends on new major of `ffe-grid` (`5.0.0`).

### New features

-   Added `bgBlueCobalt` prop for `GridRow`, which adds a `ffe-blue-cobalt` background colour.

# 3.0.0

-   Added `vertical` and `reverse` modifiers to `GridCol`.
-   These modifiers only work with minimum v.4.2.0 of `ffe-grid` so the breaking change is that we have to
    depend on a new major version of `ffe-grid` to use them.

## 2.2.1

-   Expand peerDep scope of `ffe-grid` to include `4.x`.
-   Add devDeps to `ffe-core` and `ffe-grid`.

# 2.2.0

-   Add className property to Grid, GriRow and GridCol

## 2.1.1

-   Grid rows with background colour are now full width

# 2.1.0

-   Added a separate export for placing a grid overlay on the webpage

# 2.0.0

-   Bumped to major version `2.0.0` of `ffe-grid`
-   Support `noTopPadding` modifier on `Grid`
-   Support `topPadding` modifier on `GridRow`
-   Support `bgSand` modifier on `GridRow`

# 1.0.0

-   Initial release
