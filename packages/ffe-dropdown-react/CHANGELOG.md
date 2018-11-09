# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-dropdown-react@4.1.0...@sb1/ffe-dropdown-react@4.1.1) (2018-11-09)

**Note:** Version bump only for package @sb1/ffe-dropdown-react

# [4.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-dropdown-react@4.0.4...@sb1/ffe-dropdown-react@4.1.0) (2018-10-25)

### Bug Fixes

-   **ffe-dropdown-react:** Added defaultProps false for dark variant. ([69d109b](https://github.com/SpareBank1/designsystem/commit/69d109b))

### Features

-   **ffe-dropdown-react:** Added dark property with documentation ([28bc5f4](https://github.com/SpareBank1/designsystem/commit/28bc5f4))

<a name="4.0.4"></a>

## [4.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-dropdown-react@4.0.3...@sb1/ffe-dropdown-react@4.0.4) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-dropdown-react

<a name="4.0.3"></a>

## [4.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-dropdown-react@4.0.2...@sb1/ffe-dropdown-react@4.0.3) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-dropdown-react

<a name="4.0.2"></a>

## [4.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-dropdown-react@4.0.0...@sb1/ffe-dropdown-react@4.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="4.0.1"></a>

## [4.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-dropdown-react@4.0.0...@sb1/ffe-dropdown-react@4.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="4.0.0"></a>

# 4.0.0 (2018-02-25)

### Bug Fixes

-   **ffe-dropdown-react:** Add missing proptypes check ([77bb118](https://github.com/SpareBank1/designsystem/commit/77bb118))

### Chores

-   **ffe-dropdown-react:** Import ffe-dropdown-react ([9234074](https://github.com/SpareBank1/designsystem/commit/9234074))
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

-   **ffe-dropdown-react:** Simplify the ffe-dropdown-react implementation.

This commit simplifies the component, and leaves more of the
compositional power to the consumer.

In order to migrate to this new major, the consumer should wrap
their existing component in `ffe-form-react`'s `InputGroup`
component. This will provide most of the functionality that this
major removes from `ffe-dropdown-react`. Please refer to the
documentation for new usage information.

<a name="3.0.7"></a>

## [3.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-dropdown-react@3.0.6...ffe-dropdown-react@3.0.7) (2018-02-23)

**Note:** Version bump only for package ffe-dropdown-react

<a name="3.0.6"></a>

## [3.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-dropdown-react@3.0.5...ffe-dropdown-react@3.0.6) (2018-02-22)

**Note:** Version bump only for package ffe-dropdown-react

<a name="3.0.5"></a>

## [3.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-dropdown-react@3.0.4...ffe-dropdown-react@3.0.5) (2018-01-22)

**Note:** Version bump only for package ffe-dropdown-react

<a name="3.0.4"></a>

## [3.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-dropdown-react@3.0.3...ffe-dropdown-react@3.0.4) (2018-01-22)

### Bug Fixes

-   **ffe-dropdown-react:** Add missing proptypes check

<a name="3.0.3"></a>

## [3.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-dropdown-react@3.0.2...ffe-dropdown-react@3.0.3) (2018-01-19)

**Note:** Version bump only for package ffe-dropdown-react

<a name="3.0.2"></a>

## [3.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-dropdown-react@3.0.1...ffe-dropdown-react@3.0.2) (2018-01-18)

**Note:** Version bump only for package ffe-dropdown-react

<a name="3.0.1"></a>

## [3.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-dropdown-react@3.0.0...ffe-dropdown-react@3.0.1) (2018-01-12)

**Note:** Version bump only for package ffe-dropdown-react

<a name="3.0.0"></a>

# 3.0.0 (2018-01-12)

### Chores

-   **ffe-dropdown-react:** Import ffe-dropdown-react

### BREAKING CHANGES

-   **ffe-dropdown-react:** Simplify the ffe-dropdown-react implementation.

This commit simplifies the component, and leaves more of the
compositional power to the consumer.

In order to migrate to this new major, the consumer should wrap
their existing component in `ffe-form-react`'s `InputGroup`
component. This will provide most of the functionality that this
major removes from `ffe-dropdown-react`. Please refer to the
documentation for new usage information.

## 2.9.2

-   Setting the default behaviour to tabbable.

## 2.9.1

-   Add support for version 8 of `ffe-form`.
-   Specify version of `React`-related packages to `15.x`

# 2.9.0

-   Added support for `isTabbable`

## 2.8.1

-   Use PropTypes from prop-types package

# 2.8.0

-   Increased version range for ffe-form.

# 2.7.0

-   Pass through (almost) all `props` passed to `Dropdown` directly to `select`. Then we can use the component more like the native ones.
-   Remove `aria-live="polite"` from the wrapping input group.

## 2.6.1

-   Expand peerDep scope of `ffe-form` to include `5.x`.
-   Remove peerDep on `ffe-core` and `ffe-spinner`.

# 2.6.0

-   Added support for autoFocus attribute

## 2.5.2

-   Use latest FFE eslint config

## 2.5.1

-   Added support for ffe-form version 4.x.x

# 2.5.0

-   Added support for `name` property

## 2.4.2

-   Added ffe-form-label--block to label

## 2.4.1

-   Added support for ffe-form version 3.x.x

# 2.4.0

-   Added added support for css styling of container-div, using prop containerClassName

# 2.3.0

-   Added onBlur support

# 2.2.0

-   Relaxing the peer dependency on `ffe-form` to allow both 1.x and 2.x

# 2.1.0

-   Removed dependency on ffe-dropdown - styling in ffe-dropdown has been moved to ffe-form
-   Bumped dependency on ffe-form

# 2.0.0

-   Bumped dependency on `ffe-core` to `^8.0.2`
-   Added peerDependency on `ffe-form`, `ffe-spinner` and `ffe-dropdown`
-   Added a budo example page that can be launched with `npm start`
-   Fixed error message class by updating to `.ffe-field-error-message`

# 1.8.0

-   Add isLoading support

# 1.7.0

-   Add custom className support

# 1.6.0

-   Add error message support

# 1.5.0 (16.6.2016)

-   Add `defaultValue` property.
