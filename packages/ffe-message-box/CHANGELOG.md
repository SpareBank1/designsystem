# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@6.0.5...@sb1/ffe-message-box@6.0.6) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-message-box

<a name="6.0.5"></a>

## [6.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@6.0.4...@sb1/ffe-message-box@6.0.5) (2018-08-31)

**Note:** Version bump only for package @sb1/ffe-message-box

<a name="6.0.4"></a>

## [6.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@6.0.3...@sb1/ffe-message-box@6.0.4) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-message-box

<a name="6.0.3"></a>

## [6.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@6.0.2...@sb1/ffe-message-box@6.0.3) (2018-06-25)

### Bug Fixes

-   **ffe-message-box:** Reduce sideflesk on small screens ([1682d02](https://github.com/SpareBank1/designsystem/commit/1682d02)), closes [#294](https://github.com/SpareBank1/designsystem/issues/294)

<a name="6.0.2"></a>

## [6.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@6.0.1...@sb1/ffe-message-box@6.0.2) (2018-06-20)

### Bug Fixes

-   **ffe-message-box:** added peerDependency to ffe-core@^13.0.0 ([7f5925c](https://github.com/SpareBank1/designsystem/commit/7f5925c))

<a name="6.0.1"></a>

## [6.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@6.0.0...@sb1/ffe-message-box@6.0.1) (2018-05-08)

**Note:** Version bump only for package @sb1/ffe-message-box

<a name="6.0.0"></a>

# [6.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@5.0.2...@sb1/ffe-message-box@6.0.0) (2018-03-13)

### Chores

-   **ffe-message-box:** Remove action message box ([77fb60b](https://github.com/SpareBank1/designsystem/commit/77fb60b))

### BREAKING CHANGES

-   **ffe-message-box:** This commit removes the `action` message box type,
    as it was never a part of the design system.

Consumers of the action message box type should instead use the tips
message box.

<a name="5.0.2"></a>

## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@5.0.0...@sb1/ffe-message-box@5.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-message-box@5.0.0...@sb1/ffe-message-box@5.0.1) (2018-03-02)

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

<a name="4.2.7"></a>

## [4.2.7](https://github.com/SpareBank1/designsystem/compare/ffe-message-box@4.2.6...ffe-message-box@4.2.7) (2018-02-23)

**Note:** Version bump only for package ffe-message-box

<a name="4.2.6"></a>

## [4.2.6](https://github.com/SpareBank1/designsystem/compare/ffe-message-box@4.2.5...ffe-message-box@4.2.6) (2018-02-22)

**Note:** Version bump only for package ffe-message-box

<a name="4.2.5"></a>

## [4.2.5](https://github.com/SpareBank1/designsystem/compare/ffe-message-box@4.2.4...ffe-message-box@4.2.5) (2018-01-22)

**Note:** Version bump only for package ffe-message-box

<a name="4.2.4"></a>

## [4.2.4](https://github.com/SpareBank1/designsystem/compare/ffe-message-box@4.2.3...ffe-message-box@4.2.4) (2018-01-19)

**Note:** Version bump only for package ffe-message-box

<a name="4.2.3"></a>

## 4.2.3 (2018-01-18)

**Note:** Version bump only for package ffe-message-box

## 4.2.2

-   Set a margin-bottom value to actual required value, no over-shooting.

## 4.2.1

-   Support both versions 9 and 10 of `ffe-core`

# 4.2.0

-   Added visual tests
-   Added info list
-   Renamed message-box**error-list to **list

# 4.1.0

-   Added message-box\_\_error-list
-   Updated exclamation mark icon to latest version

# 4.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

-   Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## 3.0.3

-   Added border-radius

## 3.0.2

-   Added link styling

## 3.0.1

-   Fixed minor border overflow visual bug when `@media print`
-   Bumped dependency on `ffe-core` to `^8.1.0`

# 3.0.0

-   Bumped dependency on `ffe-core` to `^8.0.2`

## 2.1.1

-   Rollback dependency on `ffe-core` to `^6.0.0` to avoid issues with peerDependency. This change requires new major version of this project.

# 2.1.0

-   Modified the curvature below the svg
-   Bumped dependency on `ffe-core` to `^8.0.2`

## 2.0.2

-   Fungerer nå på små flater

# 2.0.0

-   Endret navn "warning" til "error" for å bedre reflektere faktisk bruk
-   Endret html-struktur slik at innsnitt i bakgrunnsfargen ikke er avhengig av størrelsen på ikonet
-   Endret til å bruke 20%-versjoner av fargene
-   La til padding også på sidene
-   La til fargelegging av svg-ikoner

# 1.0.0

-   Oppdatert til å bruke v4.x av ffe-core
