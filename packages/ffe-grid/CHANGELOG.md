# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.1.2...@sb1/ffe-grid@10.1.3) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-grid

## [10.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.1.1...@sb1/ffe-grid@10.1.2) (2018-10-25)

**Note:** Version bump only for package @sb1/ffe-grid

## [10.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.1.0...@sb1/ffe-grid@10.1.1) (2018-10-16)

### Bug Fixes

-   **ffe-grid:** Add example with necessary markup for grid rows with background color ([291684b](https://github.com/SpareBank1/designsystem/commit/291684b))

# [10.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.0.4...@sb1/ffe-grid@10.1.0) (2018-10-05)

### Features

-   **ffe-grid:** Add support for inline grid ([e5aa265](https://github.com/SpareBank1/designsystem/commit/e5aa265))

<a name="10.0.4"></a>

## [10.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.0.3...@sb1/ffe-grid@10.0.4) (2018-09-19)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="10.0.3"></a>

## [10.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.0.2...@sb1/ffe-grid@10.0.3) (2018-08-23)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="10.0.2"></a>

## [10.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.0.1...@sb1/ffe-grid@10.0.2) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="10.0.1"></a>

## [10.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@10.0.0...@sb1/ffe-grid@10.0.1) (2018-07-23)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="10.0.0"></a>

# [10.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@8.0.1...@sb1/ffe-grid@10.0.0) (2018-07-18)

### Bug Fixes

-   **ffe-grid:** Give all grid-col descendants max-width 100% ([eedcaa8](https://github.com/SpareBank1/designsystem/commit/eedcaa8))

### BREAKING CHANGES

-   **ffe-grid:** All direct descendants of a grid column now
    receives `max-width: 100%`. This fixes an issue in IE where
    the contents of centered grid columns would ignore the width
    of the column. This might break parts of your layout, e.g. if
    you have SVGs directly inside full-width centered columns (they
    will now use the entire width where they might not have done so
    before) and possibly also in other scenarios

<a name="9.0.0"></a>

# [9.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@8.0.1...@sb1/ffe-grid@9.0.0) (2018-07-18)

### Bug Fixes

-   **ffe-grid:** Give all grid-col descendants max-width 100% ([eedcaa8](https://github.com/SpareBank1/designsystem/commit/eedcaa8))

### BREAKING CHANGES

-   **ffe-grid:** All direct descendants of a grid column now
    receives `max-width: 100%`. This fixes an issue in IE where
    the contents of centered grid columns would ignore the width
    of the column. This might break parts of your layout, e.g. if
    you have SVGs directly inside full-width centered columns (they
    will now use the entire width where they might not have done so
    before) and possibly also in other scenarios

<a name="8.0.1"></a>

## [8.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@8.0.0...@sb1/ffe-grid@8.0.1) (2018-06-20)

### Bug Fixes

-   **ffe-grid:** added peerDependency to ffe-core@^13.0.0 ([3125659](https://github.com/SpareBank1/designsystem/commit/3125659))

<a name="8.0.0"></a>

# [8.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.3.2...@sb1/ffe-grid@8.0.0) (2018-06-19)

### Bug Fixes

-   **ffe-grid:** Removed FFE support for some backgrounds ([be4d7c8](https://github.com/SpareBank1/designsystem/commit/be4d7c8)), closes [#256](https://github.com/SpareBank1/designsystem/issues/256)

### BREAKING CHANGES

-   **ffe-grid:** Support for background colours that are not listed as backgrounds in the [design guide](https://design.sparebank1.no/visuell-identitet.html#visuell-identitet_farger) has been removed. This means the modifiers `--bg-blue-cobalt`, `--bg-blue-royal` and `--bg-purple-magenta`. If you were using any of those on rows or columns, please consider switching to one of those that are supported by FFE directly or add your own custom CSS classes in userland in order to have these colours.

<a name="7.3.2"></a>

## [7.3.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.3.1...@sb1/ffe-grid@7.3.2) (2018-06-18)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.3.1"></a>

## [7.3.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.3.0...@sb1/ffe-grid@7.3.1) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.3.0"></a>

# [7.3.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.2.4...@sb1/ffe-grid@7.3.0) (2018-05-29)

### Bug Fixes

-   **ffe-grid:** Normalize padding and margin ([ea0a05e](https://github.com/SpareBank1/designsystem/commit/ea0a05e)), closes [#241](https://github.com/SpareBank1/designsystem/issues/241)

### Features

-   **ffe-grid:** Add support for more backgrounds ([e225cd8](https://github.com/SpareBank1/designsystem/commit/e225cd8)), closes [#256](https://github.com/SpareBank1/designsystem/issues/256)

<a name="7.2.4"></a>

## [7.2.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.2.3...@sb1/ffe-grid@7.2.4) (2018-05-22)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.2.3"></a>

## [7.2.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.2.2...@sb1/ffe-grid@7.2.3) (2018-05-08)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.2.2"></a>

## [7.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.2.1...@sb1/ffe-grid@7.2.2) (2018-05-04)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.2.1"></a>

## [7.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.2.0...@sb1/ffe-grid@7.2.1) (2018-05-03)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.2.0"></a>

# [7.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.1.2...@sb1/ffe-grid@7.2.0) (2018-04-25)

### Features

-   **ffe-grid:** Add bleeding column backgrounds ([6f7aa4e](https://github.com/SpareBank1/designsystem/commit/6f7aa4e))

<a name="7.1.2"></a>

## [7.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.1.1...@sb1/ffe-grid@7.1.2) (2018-04-11)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.1.1"></a>

## [7.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.1.0...@sb1/ffe-grid@7.1.1) (2018-04-10)

**Note:** Version bump only for package @sb1/ffe-grid

<a name="7.1.0"></a>

# [7.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.0.2...@sb1/ffe-grid@7.1.0) (2018-03-22)

### Features

-   **ffe-grid:** Add center-text modifier to cols ([8a943e7](https://github.com/SpareBank1/designsystem/commit/8a943e7))

<a name="7.0.2"></a>

## [7.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.0.0...@sb1/ffe-grid@7.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="7.0.1"></a>

## [7.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-grid@7.0.0...@sb1/ffe-grid@7.0.1) (2018-03-02)

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

<a name="6.0.12"></a>

## [6.0.12](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.11...ffe-grid@6.0.12) (2018-02-23)

**Note:** Version bump only for package ffe-grid

<a name="6.0.11"></a>

## [6.0.11](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.10...ffe-grid@6.0.11) (2018-02-22)

**Note:** Version bump only for package ffe-grid

<a name="6.0.10"></a>

## [6.0.10](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.9...ffe-grid@6.0.10) (2018-02-20)

**Note:** Version bump only for package ffe-grid

<a name="6.0.9"></a>

## [6.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.8...ffe-grid@6.0.9) (2018-02-15)

**Note:** Version bump only for package ffe-grid

<a name="6.0.8"></a>

## [6.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.7...ffe-grid@6.0.8) (2018-02-01)

**Note:** Version bump only for package ffe-grid

<a name="6.0.7"></a>

## [6.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.6...ffe-grid@6.0.7) (2018-01-19)

**Note:** Version bump only for package ffe-grid

<a name="6.0.6"></a>

## [6.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.5...ffe-grid@6.0.6) (2018-01-19)

**Note:** Version bump only for package ffe-grid

<a name="6.0.5"></a>

## [6.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.4...ffe-grid@6.0.5) (2018-01-10)

**Note:** Version bump only for package ffe-grid

<a name="6.0.4"></a>

## [6.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.3...ffe-grid@6.0.4) (2018-01-09)

**Note:** Version bump only for package ffe-grid

<a name="6.0.3"></a>

## [6.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-grid@6.0.2...ffe-grid@6.0.3) (2018-01-05)

**Note:** Version bump only for package ffe-grid

<a name="6.0.2"></a>

## 6.0.2 (2018-01-05)

**Note:** Version bump only for package ffe-grid

## 6.0.1

### Bugfix

-   Made the `--start`, `--center`, `--end`, `--top`, `--middle` and `--bottom` modifiers work as close as possible to how they did before the `v6.0.0` change for horizontal columns. For vertical columns, the modifiers will work
    like they do for horizontal columns while still stacking content vertically. Visual tests and examples have been
    added to demonstrate this behaviour.

# 6.0.0

This release fixes an issue with the original implementation, that needed to be done sooner or
later. It will require some manual testing for consumers. :-(

### BREAKING CHANGES

`ffe-grid__col--vertical` is removed. This behavior is now enabled by default. This might lead to
large visual changes in your application, so make sure to do the following check:

-   Go through all your usage of `ffe-grid__col`. If they have the `ffe-grid__col--vertical` modifier,
    you can safely remove it - no further change will be necessary.
-   If your `ffe-grid__col` has more than one direct child / descendant, add the new modifier
    `ffe-grid__col--horizontal` to keep things working the way they have.
-   If your `ffe-grid__col` has a single child, this child will now keep it's original width. Inline
    elements will be sized according to their content, while block elements will receive 100 % of the
    column width. This might let you delete some custom modifiers, or it might lead to a visual
    regression.

## New features

-   Added new modifier `ffe-grid__col--horizontal` to let consumers flow flex-items horizontally

## 5.6.3

-   `ffe-grid__row--reverse` now reverses wrapped elements as well, as is expected.

## 5.6.2

-   Make `ffe-grid__col--no-bottom-padding` work for condensed grids also.

## 5.6.1

-   Make `ffe-grid__col--no-bottom-padding` work again.

# 5.6.0

-   Internal rewrite of grid library, reducing size from ~40kb to ~28kb (before gzip).
-   The `ffe-grid__col` class is now obsolete, and has been removed. Consumers are encouraged to remove them from their
    own code bases as well.

## 5.5.1

-   Fixed a bug where `.ffe-grid__row--reverse` did not work as expected when `.ffe-grid__row-wrapper` was set as it's child.

# 5.5.0

-   Added a new background modifier (`--bg-green-mint`) to `ffe-grid__row`.

# 5.4.0

-   Added a new background modifier (`--bg-grey-cloud`) to `ffe-grid__row`.

## 5.3.1

-   Make text and headers white when using `--bg-blue-royal`.

# 5.3.0

-   Added a new background modifier (`--bg-blue-royal`) to `ffe-grid__row`.

# 5.2.0

-   Added a new background modifier (`--bg-purple-magenta`) to `ffe-grid__row`.

# 5.1.0

-   Added a new background modifier (`--bg-blue-ice`) to `ffe-grid__row`.

## 5.0.2

-   Using left, right instead of start, end for text-align property to support IE.

## 5.0.1

-   Support both versions 9 and 10 of `ffe-core`

# 5.0.0

### BREAKING CHANGES

-   Renamed `ffe-grid__row--bg-blue` to `ffe-grid__row--bg-blue-pale` after `ffe-core` name change.

### New features

-   Added `ffe-grid__row--bg-blue-cobalt` with the (you guessed it) `ffe-blue-cobalt` background colour.

# 4.2.0

-   Added two modifiers to columns, `--vertical` and `--reverse`.

# 4.1.0

-   Condensed variation with less gutter (modifier `ffe-grid--condensed`).

# 4.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

-   Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

# 3.1.0

-   Added support for 0 column size

## 3.0.1

-   Bugfix: `.ffe-grid__row-wrapper` now treats columns that wrap to more than one row correctly

# 3.0.0

-   Breaking: `.ffe-grid__row--bg-sand` and `.ffe-grid__row--bg-blue` now require a `.ffe-grid__row-wrapper` around its columns. The background will then be full width while the content keeps to the grid size.

```html
<div class="ffe-grid__row ffe-grid__row--bg-sand ffe-grid__row--top-padding">
    <div class="ffe-grid__row-wrapper">
        <div class="ffe-grid__col--md-6">
            <div class="ffe-grid__content"></div>
        </div>
        <div class="ffe-grid__col--md-6">
            <div class="ffe-grid__content"></div>
        </div>
    </div>
</div>
```

# 2.1.0

-   New modifier: `.ffe-grid__row--bg-sand`, adds `@ffe-sand` background colour.
-   New modifier: `.ffe-grid__row--top-padding`, adds padding to the top of a row.

# 2.0.0

-   Visual change: `ffe-grid` now by default has a 40px padding on top, which is the same padding
    that are used between grid-rows.
-   New modifier: `ffe-grid--no-top-padding` added, use this if you do not want the default padding.

## 1.2.2

-   Bugfix: `--no-bottom-padding` modifer on `ffe-grid__col` now works

## 1.2.1

-   Added meta-data for style guide

# 1.2.0

-   Added support for 0 column offset

# 1.1.0

Added two new modifiers:

-   .ffe-grid\_\_row--bg-blue
-   .ffe-grid\_\_col--no-bottom-padding

# 1.0.0

-   Initial release
