# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.3.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.3.0...@sb1/ffe-checkbox-react@5.3.1) (2018-11-09)

**Note:** Version bump only for package @sb1/ffe-checkbox-react

# [5.3.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.2.2...@sb1/ffe-checkbox-react@5.3.0) (2018-10-25)

### Features

-   **ffe-checkbox-react:** Added dark property with documentation ([d38bd7c](https://github.com/SpareBank1/designsystem/commit/d38bd7c))

<a name="5.2.2"></a>

## [5.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.2.1...@sb1/ffe-checkbox-react@5.2.2) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-checkbox-react

<a name="5.2.1"></a>

## [5.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.2.0...@sb1/ffe-checkbox-react@5.2.1) (2018-05-31)

### Bug Fixes

-   **ffe-checkbox-react:** Fix hidden label boxes ([f6d5c7f](https://github.com/SpareBank1/designsystem/commit/f6d5c7f))

<a name="5.2.0"></a>

# [5.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.1.0...@sb1/ffe-checkbox-react@5.2.0) (2018-05-23)

### Features

-   **ffe-checkbox-react:** Support hiddenLabel prop ([1ecf0db](https://github.com/SpareBank1/designsystem/commit/1ecf0db))

<a name="5.1.0"></a>

# [5.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.0.3...@sb1/ffe-checkbox-react@5.1.0) (2018-05-22)

### Features

-   **ffe-checkbox-react:** allow children as a function ([cf8bb7a](https://github.com/SpareBank1/designsystem/commit/cf8bb7a)), closes [#158](https://github.com/SpareBank1/designsystem/issues/158) [#162](https://github.com/SpareBank1/designsystem/issues/162)

<a name="5.0.3"></a>

## [5.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.0.2...@sb1/ffe-checkbox-react@5.0.3) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-checkbox-react

<a name="5.0.2"></a>

## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.0.0...@sb1/ffe-checkbox-react@5.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-checkbox-react@5.0.0...@sb1/ffe-checkbox-react@5.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="5.0.0"></a>

# 5.0.0 (2018-02-25)

### Bug Fixes

-   Replace eslint ignore with customized lint rule. ([d98ed78](https://github.com/SpareBank1/designsystem/commit/d98ed78))
-   **ffe-checkbox-react:** Replace sdbm with uuid ([6e0afb7](https://github.com/SpareBank1/designsystem/commit/6e0afb7))

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

<a name="4.4.17"></a>

## [4.4.17](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.16...ffe-checkbox-react@4.4.17) (2018-02-23)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.16"></a>

## [4.4.16](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.15...ffe-checkbox-react@4.4.16) (2018-02-22)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.15"></a>

## [4.4.15](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.14...ffe-checkbox-react@4.4.15) (2018-02-22)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.14"></a>

## [4.4.14](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.13...ffe-checkbox-react@4.4.14) (2018-02-20)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.13"></a>

## [4.4.13](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.12...ffe-checkbox-react@4.4.13) (2018-02-15)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.12"></a>

## [4.4.12](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.11...ffe-checkbox-react@4.4.12) (2018-02-01)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.11"></a>

## [4.4.11](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.10...ffe-checkbox-react@4.4.11) (2018-01-31)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.10"></a>

## [4.4.10](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.9...ffe-checkbox-react@4.4.10) (2018-01-19)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.9"></a>

## [4.4.9](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.8...ffe-checkbox-react@4.4.9) (2018-01-19)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.8"></a>

## [4.4.8](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.7...ffe-checkbox-react@4.4.8) (2018-01-10)

**Note:** Version bump only for package ffe-checkbox-react

<a name="4.4.7"></a>

## [4.4.7](https://github.com/SpareBank1/designsystem/compare/ffe-checkbox-react@4.4.6...ffe-checkbox-react@4.4.7) (2018-01-10)

### Bug Fixes

-   **ffe-checkbox-react:** Replace sdbm with uuid

<a name="4.4.6"></a>

## 4.4.6 (2018-01-10)

### Bug Fixes

-   Replace eslint ignore with customized lint rule.

## 4.4.5

-   Added inline JSDoc comments
-   `label` prop is no longer required
-   Deprecated two props - `invalid` and `label` - both are to be removed in 5.0.0

## 4.4.4

-   Bugfix: If the `<Checkbox>` was given an id as a prop, the connection between label and input was broken
    because the input would be given the provided id while the label would be given the internal generated id.
    This meant you'd need to be a goddamn sniper to click the checkbox rather than being able to just click its
    label. This fix makes the component use the provided ID instead of a generated one, which seems the most
    intuitive way to handle this.

## 4.4.3

-   Update peerDep on `ffe-form` to include version `8.x`
-   Bump devDeps to `ffe-core@10.1.1` and `ffe-form@8.1.1`

## 4.4.2

-   Use PropTypes from prop-types package

## 4.4.1

-   Added examples for local testing.
-   Bumped devDep on `ffe-form` to `7.0.2` to fix styling of invalid.

# 4.4.0

-   Support `aria-invalid` as a prop in addition to `invalid`.

# 4.3.0

-   Increased version range for ffe-form to 6.x

# 4.2.0

-   Added option to show checkbox in invalid state

## 4.1.2

-   Expand peerDep scope of `ffe-form` to include `5.x`.
-   Remove peerDep to `ffe-core`.

## 4.1.1

-   Update eslint to latest ffe config

# 4.1.0

-   Option to remove `ffe-checkbox--inline` by adding the property `inline=false`.

# 4.0.0

-   Added support for ffe-form version 4.x

# 3.0.0

-   Added support for arbitrary props on the input
-   Breaking: Removed 'isTabbable' prop - use 'tabIndex' instead!
-   Breaking: onChange now returns the event instead of just returning the value of the checkbox.

## 2.2.1

-   Added support for ffe-form version 3.x.x

# 2.2.0

-   Add support for removing checkbox from tab order via isTabbable prop

# 2.1.0

-   Relaxing the peer dependency on `ffe-form` to allow both 1.x and 2.x

# 2.0.0

-   Upgraded `ffe-checkbox-react` to require a peer dependency of
    `ffe-core@^8.1.0` and `ffe-form@^1.0.1`. To upgrade, please add these two
    dependencies to your `package.json`.
