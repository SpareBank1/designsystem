# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.3.0...@sb1/ffe-core-react@4.0.0) (2019-08-27)

### chore

-   bump React to 16.9 to allow for using hooks etc ([e3901f1](https://github.com/SpareBank1/designsystem/commit/e3901f1))

### BREAKING CHANGES

-   peerDep of React is raised to 16.9. While this in itself
    isn't a breaking change, it allows for the use of hooks in later releases.
    Such changes would just be a minor version, or even a patch, but without
    this major version bump it would result in a runtime error for consumers.

# [3.3.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.2.6...@sb1/ffe-core-react@3.3.0) (2019-05-10)

### Features

-   **ffe-core-react:** Added type definitions for typescript ([630b457](https://github.com/SpareBank1/designsystem/commit/630b457))

## [3.2.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.2.5...@sb1/ffe-core-react@3.2.6) (2018-12-11)

### Bug Fixes

-   Build tree shakeable packages ([fb4a9ea](https://github.com/SpareBank1/designsystem/commit/fb4a9ea))

## [3.2.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.2.4...@sb1/ffe-core-react@3.2.5) (2018-12-04)

**Note:** Version bump only for package @sb1/ffe-core-react

## [3.2.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.2.3...@sb1/ffe-core-react@3.2.4) (2018-11-26)

**Note:** Version bump only for package @sb1/ffe-core-react

## [3.2.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.2.2...@sb1/ffe-core-react@3.2.3) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-core-react

<a name="3.2.2"></a>

## [3.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.2.1...@sb1/ffe-core-react@3.2.2) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-core-react

<a name="3.2.1"></a>

## [3.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.2.0...@sb1/ffe-core-react@3.2.1) (2018-06-20)

### Bug Fixes

-   **ffe-core-react:** added peerDependency to ffe-core@^13.0.0 ([d1a6451](https://github.com/SpareBank1/designsystem/commit/d1a6451))

<a name="3.2.0"></a>

# [3.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.1.0...@sb1/ffe-core-react@3.2.0) (2018-06-19)

### Features

-   **ffe-core-react:** Add `LinkText` component ([b51ed59](https://github.com/SpareBank1/designsystem/commit/b51ed59))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@3.0.0...@sb1/ffe-core-react@3.1.0) (2018-05-23)

### Features

-   **ffe-core-react:** Expose named exports ([4efe35a](https://github.com/SpareBank1/designsystem/commit/4efe35a))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@2.0.3...@sb1/ffe-core-react@3.0.0) (2018-04-10)

### Chores

-   **ffe-core-react:** Remove deprecated layout ([60e8863](https://github.com/SpareBank1/designsystem/commit/60e8863))

### BREAKING CHANGES

-   **ffe-core-react:** Removed the React components for the deprecated
    Hawaii layout system. Please don't use this layout when developing
    new functionality and please consider moving away from it when
    visiting old functionality.

New layouts should be based on the `ffe-grid` component.

<a name="2.0.3"></a>

## [2.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@2.0.2...@sb1/ffe-core-react@2.0.3) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-core-react

<a name="2.0.2"></a>

## [2.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@2.0.0...@sb1/ffe-core-react@2.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="2.0.1"></a>

## [2.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-core-react@2.0.0...@sb1/ffe-core-react@2.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="2.0.0"></a>

# 2.0.0 (2018-02-25)

### Bug Fixes

-   Fix a few issues with the documentation ([ab3d579](https://github.com/SpareBank1/designsystem/commit/ab3d579))
-   Run just 'jest', not 'jest src' ([6377dc5](https://github.com/SpareBank1/designsystem/commit/6377dc5))
-   **ffe-core-react:** Relax peerDeps to allow React 15. ([78eb5b4](https://github.com/SpareBank1/designsystem/commit/78eb5b4))

### Chores

-   add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))

### Features

-   **ffe-core-react:** Add contribute.md link to readme ([1a8aab0](https://github.com/SpareBank1/designsystem/commit/1a8aab0))
-   **ffe-core-react:** Add new inline prop ([148bdcb](https://github.com/SpareBank1/designsystem/commit/148bdcb))
-   **ffe-core-react:** Upgrade to React 16 ([ef3a686](https://github.com/SpareBank1/designsystem/commit/ef3a686))

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

<a name="1.2.4"></a>

## [1.2.4](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.2.3...ffe-core-react@1.2.4) (2018-02-23)

**Note:** Version bump only for package ffe-core-react

<a name="1.2.3"></a>

## [1.2.3](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.2.2...ffe-core-react@1.2.3) (2018-02-22)

**Note:** Version bump only for package ffe-core-react

<a name="1.2.2"></a>

## [1.2.2](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.2.1...ffe-core-react@1.2.2) (2018-02-21)

**Note:** Version bump only for package ffe-core-react

<a name="1.2.1"></a>

## [1.2.1](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.2.0...ffe-core-react@1.2.1) (2018-01-26)

### Bug Fixes

-   **ffe-core-react:** Relax peerDeps to allow React 15.

<a name="1.2.0"></a>

# [1.2.0](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.1.6...ffe-core-react@1.2.0) (2018-01-19)

### Features

-   **ffe-core-react:** Add new inline prop

<a name="1.1.6"></a>

## [1.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.1.5...ffe-core-react@1.1.6) (2018-01-19)

**Note:** Version bump only for package ffe-core-react

<a name="1.1.5"></a>

## [1.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.1.4...ffe-core-react@1.1.5) (2018-01-10)

### Bug Fixes

-   Run just 'jest', not 'jest src'

<a name="1.1.4"></a>

## [1.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.1.3...ffe-core-react@1.1.4) (2018-01-09)

**Note:** Version bump only for package ffe-core-react

<a name="1.1.3"></a>

## [1.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.1.2...ffe-core-react@1.1.3) (2018-01-05)

**Note:** Version bump only for package ffe-core-react

<a name="1.1.2"></a>

## [1.1.2](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.1.1...ffe-core-react@1.1.2) (2018-01-04)

**Note:** Version bump only for package ffe-core-react

<a name="1.1.1"></a>

## [1.1.1](https://github.com/SpareBank1/designsystem/compare/ffe-core-react@1.1.0...ffe-core-react@1.1.1) (2018-01-02)

**Note:** Version bump only for package ffe-core-react

<a name="1.1.0"></a>

# 1.1.0 (2017-12-22)

### Bug Fixes

-   Fix a few issues with the documentation

### Features

-   **ffe-core-react:** Add contribute.md link to readme
-   **ffe-core-react:** Upgrade to React 16

## v.1.0.1

-   Fix handling of conditional classes for Heading component

# v.1.0.0

-   First release.
