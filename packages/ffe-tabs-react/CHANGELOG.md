# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@4.1.0...@sb1/ffe-tabs-react@4.1.1) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-tabs-react

# [4.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@4.0.1...@sb1/ffe-tabs-react@4.1.0) (2018-10-25)

### Bug Fixes

-   **ffe-tabs-react:** Added defaultProps false for dark variant. ([30f7697](https://github.com/SpareBank1/designsystem/commit/30f7697))
-   **ffe-tabs-react:** Updated readme file with install instructions ([dadca45](https://github.com/SpareBank1/designsystem/commit/dadca45))

### Features

-   **ffe-tabs-react:** Added dark property with example ([ff37a51](https://github.com/SpareBank1/designsystem/commit/ff37a51))

<a name="4.0.1"></a>

## [4.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@4.0.0...@sb1/ffe-tabs-react@4.0.1) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-tabs-react

<a name="4.0.0"></a>

# [4.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@2.1.1...@sb1/ffe-tabs-react@4.0.0) (2018-07-18)

### Features

-   Change tab styling to resemble actual tabs, rename components ([afd8cbc](https://github.com/SpareBank1/designsystem/commit/afd8cbc))

### BREAKING CHANGES

-   This commit renames the existing Tab and TabGroup components to TabButton and TabButtonGroup. A new Tab and TabGroup component is added, but uses different styling in order to represent actual tabs.

<a name="3.0.0"></a>

# [3.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@2.1.1...@sb1/ffe-tabs-react@3.0.0) (2018-07-18)

### Features

-   Change tab styling to resemble actual tabs, rename components ([afd8cbc](https://github.com/SpareBank1/designsystem/commit/afd8cbc))

### BREAKING CHANGES

-   This commit renames the existing Tab and TabGroup components to TabButton and TabButtonGroup. A new Tab and TabGroup component is added, but uses different styling in order to represent actual tabs.

<a name="2.1.1"></a>

## [2.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@2.1.0...@sb1/ffe-tabs-react@2.1.1) (2018-06-20)

### Bug Fixes

-   **ffe-tabs-react:** added peerDependency to ffe-core@^13.0.0 ([e12b0dd](https://github.com/SpareBank1/designsystem/commit/e12b0dd))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@2.0.3...@sb1/ffe-tabs-react@2.1.0) (2018-04-24)

### Features

-   **ffe-tabs-react:** add props thin and className to TabGroup ([5c9b486](https://github.com/SpareBank1/designsystem/commit/5c9b486))

<a name="2.0.3"></a>

## [2.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@2.0.2...@sb1/ffe-tabs-react@2.0.3) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-tabs-react

<a name="2.0.2"></a>

## [2.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@2.0.0...@sb1/ffe-tabs-react@2.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="2.0.1"></a>

## [2.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs-react@2.0.0...@sb1/ffe-tabs-react@2.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="2.0.0"></a>

# 2.0.0 (2018-02-25)

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

<a name="1.1.5"></a>

## [1.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-tabs-react@1.1.4...ffe-tabs-react@1.1.5) (2018-02-23)

**Note:** Version bump only for package ffe-tabs-react

<a name="1.1.4"></a>

## [1.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-tabs-react@1.1.3...ffe-tabs-react@1.1.4) (2018-02-22)

**Note:** Version bump only for package ffe-tabs-react

<a name="1.1.3"></a>

## [1.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-tabs-react@1.1.2...ffe-tabs-react@1.1.3) (2018-02-15)

**Note:** Version bump only for package ffe-tabs-react

<a name="1.1.2"></a>

## [1.1.2](https://github.com/SpareBank1/designsystem/compare/ffe-tabs-react@1.1.1...ffe-tabs-react@1.1.2) (2018-01-30)

**Note:** Version bump only for package ffe-tabs-react

<a name="1.1.1"></a>

## 1.1.1 (2018-01-30)

**Note:** Version bump only for package ffe-tabs-react

# 1.1.0

-   Added `TabGroup` component
-   Added support for passing any prop to the `Tab` button

# 1.0.0

-   Initial commit
