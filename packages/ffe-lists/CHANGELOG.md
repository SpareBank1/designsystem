# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@6.0.0...@sb1/ffe-lists@6.1.0) (2018-11-19)

### Features

-   **ffe-lists:** Add support for two-column check lists ([7cfa60c](https://github.com/SpareBank1/designsystem/commit/7cfa60c))

# [6.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.18...@sb1/ffe-lists@6.0.0) (2018-11-08)

### Code Refactoring

-   **ffe-lists:** Introduce list item classes ([4961fda](https://github.com/SpareBank1/designsystem/commit/4961fda))

### BREAKING CHANGES

-   **ffe-lists:** This commit requires all list items to have a
    corresponding list item class. The element classes introduced are as
    follows:

*   `ffe-bullet-list__item`
*   `ffe-numbered-list__item`
*   `ffe-stylized-numbered-list__item`
*   `ffe-check-list__item`

To migrate, add the correct element class to each `li` in your
application. It should be a pretty simple search-replace for most cases,
but YMMV.

This change furthers our move away from element styling, to a design
system completely based on BEM.

Also, this commit adds a `cross` modifyer class for the `ffe-check-list__item`.

Finally, this commit also introduces element classes for the dd and dt elements
for `ffe-description-list` and `ffe-description-list-multicol`.

There are two new classes:

-   `ffe-description-list__term` for `<dt />` tags
-   `ffe-description-list__description` for `<dd />` tags

To migrate, please apply the correct class to the correct element
for all `ffe-description-list` instances.

## [5.0.18](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.17...@sb1/ffe-lists@5.0.18) (2018-10-25)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.17"></a>

## [5.0.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.16...@sb1/ffe-lists@5.0.17) (2018-09-19)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.16"></a>

## [5.0.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.15...@sb1/ffe-lists@5.0.16) (2018-08-23)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.15"></a>

## [5.0.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.14...@sb1/ffe-lists@5.0.15) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.14"></a>

## [5.0.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.13...@sb1/ffe-lists@5.0.14) (2018-07-23)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.13"></a>

## [5.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.12...@sb1/ffe-lists@5.0.13) (2018-06-20)

### Bug Fixes

-   **ffe-lists:** added peerDependency to ffe-core@^13.0.0 ([8b6472b](https://github.com/SpareBank1/designsystem/commit/8b6472b))

<a name="5.0.12"></a>

## [5.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.11...@sb1/ffe-lists@5.0.12) (2018-06-18)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.11"></a>

## [5.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.10...@sb1/ffe-lists@5.0.11) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.10"></a>

## [5.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.9...@sb1/ffe-lists@5.0.10) (2018-05-29)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.9"></a>

## [5.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.8...@sb1/ffe-lists@5.0.9) (2018-05-22)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.8"></a>

## [5.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.7...@sb1/ffe-lists@5.0.8) (2018-05-08)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.7"></a>

## [5.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.6...@sb1/ffe-lists@5.0.7) (2018-05-04)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.6"></a>

## [5.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.5...@sb1/ffe-lists@5.0.6) (2018-05-03)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.5"></a>

## [5.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.4...@sb1/ffe-lists@5.0.5) (2018-04-19)

### Bug Fixes

-   **ffe-lists:** Reset margin to allow using `dl` ([867ebc8](https://github.com/SpareBank1/designsystem/commit/867ebc8))

<a name="5.0.4"></a>

## [5.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.3...@sb1/ffe-lists@5.0.4) (2018-04-11)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.3"></a>

## [5.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.2...@sb1/ffe-lists@5.0.3) (2018-04-10)

**Note:** Version bump only for package @sb1/ffe-lists

<a name="5.0.2"></a>

## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.0...@sb1/ffe-lists@5.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.0...@sb1/ffe-lists@5.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="5.0.0"></a>

# 5.0.0 (2018-02-25)

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

<a name="4.1.8"></a>

## [4.1.8](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.7...ffe-lists@4.1.8) (2018-02-23)

**Note:** Version bump only for package ffe-lists

<a name="4.1.7"></a>

## [4.1.7](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.6...ffe-lists@4.1.7) (2018-02-22)

**Note:** Version bump only for package ffe-lists

<a name="4.1.6"></a>

## [4.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.5...ffe-lists@4.1.6) (2018-02-20)

**Note:** Version bump only for package ffe-lists

<a name="4.1.5"></a>

## [4.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.4...ffe-lists@4.1.5) (2018-02-15)

**Note:** Version bump only for package ffe-lists

<a name="4.1.4"></a>

## [4.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.3...ffe-lists@4.1.4) (2018-02-01)

**Note:** Version bump only for package ffe-lists

<a name="4.1.3"></a>

## [4.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.2...ffe-lists@4.1.3) (2018-01-22)

**Note:** Version bump only for package ffe-lists

<a name="4.1.2"></a>

## 4.1.2 (2018-01-19)

**Note:** Version bump only for package ffe-lists

## 4.1.1

-   `--condensed` now works on all screen sizes

# 4.1.0

-   Add `--condensed` modifier for `.ffe-bullet-list`

## 4.0.1

-   Support both versions 9 and 10 of `ffe-core`

# 4.0.0

### BREAKING CHANGES

-   `ffe-core@9.x` is now a peerDependency of `ffe-lists`. You need to upgrade `ffe-core` to use this version.

### Improvements

-   Use new color names from `ffe-core@9.x`
-   Fix lint warnings

## 3.0.4

### Bugfixes

-   Reverts the ffe-core major version bump as it causes builds to break for consumers who have not upgraded
    to the new ffe-core major.

## 3.0.3

-   Bumped ffe-core version, made minor adjustments to sync with the latest color setup

## 3.0.2

-   Fix visual IE bug. When wrapping DescriptionList in a ffe-grid (because flex in flex?) the DescriptionList will not take full width (not even close). Thus we specify full width for DescriptionList.

## 3.0.1

-   Added `--sm-2-cols` modifier to support 2 columns on small screens in `ffe-description-list-multicol`

# 3.0.0

-   Breaking:
-   Refactored and renamed description lists in order to more correctly follow BEM naming convention
    _ Renamed `ffe-description-list--flex` to `ffe-description-list`
    _ Renamed `ffe-description-list--multicolumn` to `ffe-description-list-multicol`
-   Removed `ffe-number-list` (use `ffe-numbered-list`)
-   Removed `ffe-stylized-number-list` (use `ffe-stylized-numbered-list`)
-   Added `--md` and `--lg` modifiers for `ffe-description-list`

# 2.3.0

-   Added `--bg-sand` modifier for `ffe-check-list`

# 2.2.0

-   Added aliases `.ffe-numbered-list` for `.ffe-number-list` and `.ffe-stylized-numbered-list` for `ffe-stylized-number-list`

# 2.1.0

-   Added `ffe-check-list`
-   Added `ffe-stylized-number-list`

## 2.0.1

-   Updated "main"-entry in package.json with correct path

# 2.0.0

-   Breaking:
-   renamed `less/description-list.less` to `less/description-list.less`
-   renamed `less/list.less` to `less/regular-lists.less`
-   moved entry-point `ffe-lists.less` to `less/lists.less`

This is consistent with how `.less` files are named similar to their package names in the other packages that were exported from core.
