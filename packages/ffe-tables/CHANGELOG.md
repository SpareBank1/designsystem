# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [9.0.18](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.17...@sb1/ffe-tables@9.0.18) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-tables

## [9.0.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.16...@sb1/ffe-tables@9.0.17) (2018-10-25)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.16"></a>

## [9.0.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.15...@sb1/ffe-tables@9.0.16) (2018-09-19)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.15"></a>

## [9.0.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.14...@sb1/ffe-tables@9.0.15) (2018-08-23)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.14"></a>

## [9.0.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.13...@sb1/ffe-tables@9.0.14) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.13"></a>

## [9.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.12...@sb1/ffe-tables@9.0.13) (2018-07-23)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.12"></a>

## [9.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.11...@sb1/ffe-tables@9.0.12) (2018-06-20)

### Bug Fixes

-   **ffe-tables:** added peerDependency to ffe-core@^13.0.0 ([5f25bff](https://github.com/SpareBank1/designsystem/commit/5f25bff))

<a name="9.0.11"></a>

## [9.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.10...@sb1/ffe-tables@9.0.11) (2018-06-18)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.10"></a>

## [9.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.9...@sb1/ffe-tables@9.0.10) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.9"></a>

## [9.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.8...@sb1/ffe-tables@9.0.9) (2018-05-29)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.8"></a>

## [9.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.7...@sb1/ffe-tables@9.0.8) (2018-05-22)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.7"></a>

## [9.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.6...@sb1/ffe-tables@9.0.7) (2018-05-08)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.6"></a>

## [9.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.5...@sb1/ffe-tables@9.0.6) (2018-05-04)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.5"></a>

## [9.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.4...@sb1/ffe-tables@9.0.5) (2018-05-03)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.4"></a>

## [9.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.3...@sb1/ffe-tables@9.0.4) (2018-04-11)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.3"></a>

## [9.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.2...@sb1/ffe-tables@9.0.3) (2018-04-10)

**Note:** Version bump only for package @sb1/ffe-tables

<a name="9.0.2"></a>

## [9.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.0...@sb1/ffe-tables@9.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="9.0.1"></a>

## [9.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tables@9.0.0...@sb1/ffe-tables@9.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="9.0.0"></a>

# 9.0.0 (2018-02-25)

### Bug Fixes

-   **ffe-tables:** Fix overlapping media queries ([756b86a](https://github.com/SpareBank1/designsystem/commit/756b86a))

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

<a name="8.1.9"></a>

## [8.1.9](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.8...ffe-tables@8.1.9) (2018-02-23)

**Note:** Version bump only for package ffe-tables

<a name="8.1.8"></a>

## [8.1.8](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.7...ffe-tables@8.1.8) (2018-02-22)

**Note:** Version bump only for package ffe-tables

<a name="8.1.7"></a>

## [8.1.7](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.6...ffe-tables@8.1.7) (2018-02-20)

**Note:** Version bump only for package ffe-tables

<a name="8.1.6"></a>

## [8.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.5...ffe-tables@8.1.6) (2018-02-15)

**Note:** Version bump only for package ffe-tables

<a name="8.1.5"></a>

## [8.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.4...ffe-tables@8.1.5) (2018-02-07)

### Bug Fixes

-   **ffe-tables:** Fix overlapping media queries

<a name="8.1.4"></a>

## [8.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.3...ffe-tables@8.1.4) (2018-02-01)

**Note:** Version bump only for package ffe-tables

<a name="8.1.3"></a>

## [8.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.2...ffe-tables@8.1.3) (2018-01-19)

**Note:** Version bump only for package ffe-tables

<a name="8.1.2"></a>

## [8.1.2](https://github.com/SpareBank1/designsystem/compare/ffe-tables@8.1.1...ffe-tables@8.1.2) (2018-01-19)

**Note:** Version bump only for package ffe-tables

<a name="8.1.1"></a>

## 8.1.1 (2018-01-10)

**Note:** Version bump only for package ffe-tables

# 8.1.0

-   Added `--hide-xlg` modifier which hides columns in `lg` breakpoint (typically desktop).
-   Added `--top` modifier which vertical-aligns content in a columns at the top.

## 8.0.1

-   `--text-left` now also works with `--condensed`

# 8.0.0

-   BREAKING: Changed `--hide-md` modifier to hide columns between `sm` and `md` breakpoints instead of `md` and `lg` to be consistent with `--hide-sm`.
-   Added `--hide-lg` modifier which hides columns between the `md` and `lg` breakpoints. This is how `--hide-md` behaved in earlier versions.

# 7.0.0

-   BREAKING: Removed `responsive` from all styles. Style names are now `ffe-table`, `ffe-table__cell`, `ffe-table--condensed`, etc.
-   Added modifiers `--breakpoint-sm` and `--breakpoint-none` to table level to modify the responsive behaviour. This is useful when paired with `--hide-sm` or `--hide-md` to maintain normal table style on smaller screens.

## 6.0.1

-   Moved `--columns-sm` to container level to avoid being dependent on markup changes in several places. This change is breaking in relation to `v.6.0.0`, but is published as a patch due to `v.6.0.0` being a mere few hours old.

# 6.0.0

-   BREAKING: Refactored styling for small screens
    _ Removed the `--vertical` modifier - vertical view is now default on small screens
    _ Added `--columns-sm` modifier to preserve the column layout which was previously default on small screens
-   Fixed text color for table headers displayed as pseudo elements
-   Added `--hide-sm` modifier to support hiding columns on small screens
-   Added margin-bottom to `.ffe-responsive-table__content` on small screens to separate cells more clearly

## 5.2.1

-   Support both versions 9 and 10 of `ffe-core`

# 5.2.0

-   Added `--hide-md` modifier in order to be able to responsively hide columns

## 5.1.2

-   Specified font size of `--condensed` modifier to 14px
-   Added example of condensed table

## 5.1.1

-   Replaced hardcoded transition properties with variables from ffe-core

# 5.1.0

-   Added modifier `--text-left` that left-aligns the content of headings and cells. Use it with `.ffe-responsive-table`.

# 5.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

-   Renamed color names to stay in sync with refactoring in ffe-core@9.x
-   Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## 4.0.1

-   Update dependency to ffe-core to ensure all colors are correct

# 4.0.0

-   BREAKING: Refactored styling to reflect design guidelines
    _ More vertical padding in table rows by default
    _ Added default horizontal padding in table cells on small screens
    _ Changed th color to ffe-blue-royal
    _ Changed background colors in expandable rows \* Different border and text styling in table footers
-   Rewrote styling to less syntax
-   Specified icon height to fix IE bug where chevron causes table row height issues
-   Added `--condensed` modifier to decrease default vertical padding in table rows

## 3.0.1

-   Fixed broken animation in `ffe-expandable-row`

# 3.0.0

-   BREAKING: Removes element styling on table elements.
    All table child elements MUST HAVE its corresponding classname. Take a look at the migrationg guide og the examples
-   Adds styling for `ffe-sortable-table` and `ffe-expandable-row`.
-   Adds a `--collapsed` modifier to `ffe-responsive-table__row` and `ffe-responsive-table__cell` to prevent them taking
    up any space. Used on the `.expand-icon` and the row that holds the content to be expanded.
-   Adds a `--text-right` modifier to `ffe-responsive-table__content`

### Migrating to v.3.0.0

Make sure all table child elements have the following classnames:

```
<caption
class="ffe-responsive-table__caption">
<thead
class="ffe-responsive-table__head">
<tr
class="ffe-responsive-table__row">
<td
class="ffe-responsive-table__cell">
<footer
class="ffe-responsive-table__footer">
```

`<tbody>` (still) don't require classname

**Visual diff**

No visual diff. The tables in the examples have been updated to use caption instead of `<h2>`.

# 2.1.0

Adds a `--vertical` modifier to `ffe-responsive-table__content` which makes the table-headers
and table-cell stack vertically. This was implicitly supported and even documented in the
example but this release gives that concept an explicit modifier.

# 2.0.0

This release removes a lot of specificity from the package, making it easier to override
locally. This is a breaking change in the case where the consumer has applied styling to
a `.ffe-responsive-table` table's children that has been overridden by this package.
Hopefully such code does not exist in large quantities, but please check your implementations
after upgrading.

This release also introduces class names for all styled elements within a
`.ffe-responsive-table` table. This way, we can do away with styling DOM-elements completely
in a future major version. Please go through your implementations and add the appropriate
class names (use the [less-file](less/table.less) for documentation).

There are no visual or functional differences between 1.0.1 and 2.0.0.

## 1.0.1

This release has added `border-collapse: collapse` to `.ffe-responsive-table`.

**Visual diff**

Consumers of `.ffe-responsive-table` will now have borders even if they don't use common-ui.
