# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@5.0.3...@sb1/ffe-form-react@5.0.4) (2019-09-02)

### Bug Fixes

-   **ffe-form-react:** Moved tooltip button id generation to constructor to avoid unnecessary DOM-updates. ([1c0136c](https://github.com/SpareBank1/designsystem/commit/1c0136c))

## [5.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@5.0.2...@sb1/ffe-form-react@5.0.3) (2019-08-30)

### Bug Fixes

-   **ffe-form-react:** Added generated id on tooltip button to avoid warnings when used in forms validated with formik (expects id on every input or button field). ([6327676](https://github.com/SpareBank1/designsystem/commit/6327676))

## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@5.0.1...@sb1/ffe-form-react@5.0.2) (2019-08-28)

**Note:** Version bump only for package @sb1/ffe-form-react

## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@5.0.0...@sb1/ffe-form-react@5.0.1) (2019-08-28)

### Bug Fixes

-   **ffe-form-react:** use our own Collapse component ([548e30c](https://github.com/SpareBank1/designsystem/commit/548e30c))

# [5.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.9.1...@sb1/ffe-form-react@5.0.0) (2019-08-27)

### chore

-   bump React to 16.9 to allow for using hooks etc ([e3901f1](https://github.com/SpareBank1/designsystem/commit/e3901f1))

### BREAKING CHANGES

-   peerDep of React is raised to 16.9. While this in itself
    isn't a breaking change, it allows for the use of hooks in later releases.
    Such changes would just be a minor version, or even a patch, but without
    this major version bump it would result in a runtime error for consumers.

## [4.9.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.9.0...@sb1/ffe-form-react@4.9.1) (2019-08-14)

### Bug Fixes

-   **ffe-form-react:** Bug fixes for propType and typescript type-definitions for InputGroup: ([ad962c3](https://github.com/SpareBank1/designsystem/commit/ad962c3))

# [4.9.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.8.1...@sb1/ffe-form-react@4.9.0) (2019-06-27)

### Features

-   **ffe-form-react:** Adding inputId as an optional prop for InputGroup to be used as id on the Input child element instead of the generated one. ([05a6aaf](https://github.com/SpareBank1/designsystem/commit/05a6aaf))

## [4.8.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.8.0...@sb1/ffe-form-react@4.8.1) (2019-06-26)

**Note:** Version bump only for package @sb1/ffe-form-react

# [4.8.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.7.1...@sb1/ffe-form-react@4.8.0) (2019-05-21)

### Bug Fixes

-   **ffe-form-react:** Fix for extra error padding ([1434872](https://github.com/SpareBank1/designsystem/commit/1434872))
-   **ffe-form-react:** Fix tooltip bug in RadioButtonInputGroup ([076b5e8](https://github.com/SpareBank1/designsystem/commit/076b5e8)), closes [#631](https://github.com/SpareBank1/designsystem/issues/631)

### Features

-   **ffe-form-react:** RadioButtonInputGroup supports "description" ([73b9d8d](https://github.com/SpareBank1/designsystem/commit/73b9d8d)), closes [#641](https://github.com/SpareBank1/designsystem/issues/641) [#642](https://github.com/SpareBank1/designsystem/issues/642)

## [4.7.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.7.0...@sb1/ffe-form-react@4.7.1) (2019-05-15)

### Bug Fixes

-   **ffe-form-react:** Tooltip handles aria-controls better ([4d9a6be](https://github.com/SpareBank1/designsystem/commit/4d9a6be)), closes [#633](https://github.com/SpareBank1/designsystem/issues/633)

# [4.7.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.6.0...@sb1/ffe-form-react@4.7.0) (2019-05-14)

### Features

-   **ffe-form-react:** Bottom padding of input controls ([c5621a6](https://github.com/SpareBank1/designsystem/commit/c5621a6)), closes [#381](https://github.com/SpareBank1/designsystem/issues/381)

# [4.6.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.5.1...@sb1/ffe-form-react@4.6.0) (2019-05-10)

### Bug Fixes

-   **ffe-form-react:** ARIA improvements to Tooltip ([f9f0372](https://github.com/SpareBank1/designsystem/commit/f9f0372)), closes [#504](https://github.com/SpareBank1/designsystem/issues/504)
-   **ffe-form-react:** propagate `dark` prop ([33618fe](https://github.com/SpareBank1/designsystem/commit/33618fe)), closes [#613](https://github.com/SpareBank1/designsystem/issues/613)

### Features

-   **ffe-form-react:** Added type definitions for typescript ([a1ac175](https://github.com/SpareBank1/designsystem/commit/a1ac175))

## [4.5.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.5.0...@sb1/ffe-form-react@4.5.1) (2019-04-25)

### Bug Fixes

-   **ffe-form-react:** Fix linting errors ([d293f00](https://github.com/SpareBank1/designsystem/commit/d293f00))

# [4.5.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.4.3...@sb1/ffe-form-react@4.5.0) (2019-04-23)

### Features

-   **ffe-form-react:** Add showChildren prop to RadioBlock ([99db6e4](https://github.com/SpareBank1/designsystem/commit/99db6e4))

## [4.4.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.4.2...@sb1/ffe-form-react@4.4.3) (2019-02-19)

**Note:** Version bump only for package @sb1/ffe-form-react

## [4.4.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.4.1...@sb1/ffe-form-react@4.4.2) (2018-12-18)

**Note:** Version bump only for package @sb1/ffe-form-react

## [4.4.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.4.0...@sb1/ffe-form-react@4.4.1) (2018-12-11)

### Bug Fixes

-   Build tree shakeable packages ([fb4a9ea](https://github.com/SpareBank1/designsystem/commit/fb4a9ea))

# [4.4.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.3.1...@sb1/ffe-form-react@4.4.0) (2018-12-05)

### Features

-   **ffe-form-react:** Allow node as label ([ef3a58f](https://github.com/SpareBank1/designsystem/commit/ef3a58f)), closes [#522](https://github.com/SpareBank1/designsystem/issues/522)

## [4.3.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.3.0...@sb1/ffe-form-react@4.3.1) (2018-12-04)

**Note:** Version bump only for package @sb1/ffe-form-react

# [4.3.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.2.3...@sb1/ffe-form-react@4.3.0) (2018-11-29)

### Features

-   **ffe-form-react:** New components ([98620ce](https://github.com/SpareBank1/designsystem/commit/98620ce))

## [4.2.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.2.2...@sb1/ffe-form-react@4.2.3) (2018-11-26)

**Note:** Version bump only for package @sb1/ffe-form-react

## [4.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.2.1...@sb1/ffe-form-react@4.2.2) (2018-11-09)

**Note:** Version bump only for package @sb1/ffe-form-react

## [4.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.2.0...@sb1/ffe-form-react@4.2.1) (2018-11-08)

### Bug Fixes

-   **ffe-form-react:** Fix peer dependency version ([ff0958d](https://github.com/SpareBank1/designsystem/commit/ff0958d)), closes [#469](https://github.com/SpareBank1/designsystem/issues/469)

# [4.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.1.0...@sb1/ffe-form-react@4.2.0) (2018-10-25)

### Bug Fixes

-   **ffe-form-react:** Added defaultProps false for dark variant. ([6309011](https://github.com/SpareBank1/designsystem/commit/6309011))
-   **ffe-form-react:** Fix a classNames definition ([97a8c27](https://github.com/SpareBank1/designsystem/commit/97a8c27))

### Features

-   **ffe-forms-react:** Added dark property for Input, Label, PhoneNumber, TextArea and Tooltip with documentation ([0201f1c](https://github.com/SpareBank1/designsystem/commit/0201f1c))

# [4.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.0.1...@sb1/ffe-form-react@4.1.0) (2018-10-15)

### Features

-   **ffe-form-react:** Use react-css-collapse ([3bd1f85](https://github.com/SpareBank1/designsystem/commit/3bd1f85))

## [4.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@4.0.0...@sb1/ffe-form-react@4.0.1) (2018-10-12)

### Bug Fixes

-   **ffe-form-react:** Make sure InputGroup's onTooltipToggle is not called twice. ([a188400](https://github.com/SpareBank1/designsystem/commit/a188400)), closes [#457](https://github.com/SpareBank1/designsystem/issues/457)

# [4.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.2.4...@sb1/ffe-form-react@4.0.0) (2018-10-04)

### Features

-   **ffe-form-react:** Add support for forwarding refs ([cdc58c6](https://github.com/SpareBank1/designsystem/commit/cdc58c6))

### BREAKING CHANGES

-   **ffe-form-react:** Requires react@^16.3

This commit adds support for forwarding refs to the `Input` and
`TextArea` components, so consumers can handle focus programmatically.

<a name="3.2.4"></a>

## [3.2.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.2.3...@sb1/ffe-form-react@3.2.4) (2018-09-24)

### Bug Fixes

-   **ffe-form-react:** fixed async issues with setState ([4cad2d8](https://github.com/SpareBank1/designsystem/commit/4cad2d8))

<a name="3.2.3"></a>

## [3.2.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.2.2...@sb1/ffe-form-react@3.2.3) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-form-react

<a name="3.2.2"></a>

## [3.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.2.1...@sb1/ffe-form-react@3.2.2) (2018-06-29)

**Note:** Version bump only for package @sb1/ffe-form-react

<a name="3.2.1"></a>

## [3.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.2.0...@sb1/ffe-form-react@3.2.1) (2018-06-20)

### Bug Fixes

-   **ffe-form-react:** added peerDependency to ffe-core@^13.0.0 ([76ec2eb](https://github.com/SpareBank1/designsystem/commit/76ec2eb))

<a name="3.2.0"></a>

# [3.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.1.1...@sb1/ffe-form-react@3.2.0) (2018-06-19)

### Bug Fixes

-   **ffe-form-react:** add expectations and fix tests ([eccd46c](https://github.com/SpareBank1/designsystem/commit/eccd46c))

### Features

-   **ffe-form-react:** Add new `description` prop to `InputGroup` ([d839b85](https://github.com/SpareBank1/designsystem/commit/d839b85)), closes [#291](https://github.com/SpareBank1/designsystem/issues/291)

<a name="3.1.1"></a>

## [3.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.1.0...@sb1/ffe-form-react@3.1.1) (2018-05-22)

### Bug Fixes

-   **ffe-form-react:** Make classnames a dependency ([931ffce](https://github.com/SpareBank1/designsystem/commit/931ffce))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.0.4...@sb1/ffe-form-react@3.1.0) (2018-04-19)

### Features

-   **ffe-form-react:** Adds a PhoneNumber component to ffe-form-react ([6ec0f92](https://github.com/SpareBank1/designsystem/commit/6ec0f92))

<a name="3.0.4"></a>

## [3.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.0.3...@sb1/ffe-form-react@3.0.4) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-form-react

<a name="3.0.3"></a>

## [3.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.0.2...@sb1/ffe-form-react@3.0.3) (2018-03-13)

**Note:** Version bump only for package @sb1/ffe-form-react

<a name="3.0.2"></a>

## [3.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.0.0...@sb1/ffe-form-react@3.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="3.0.1"></a>

## [3.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.0.0...@sb1/ffe-form-react@3.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="3.0.0"></a>

# 3.0.0 (2018-02-25)

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

<a name="2.2.9"></a>

## [2.2.9](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.8...ffe-form-react@2.2.9) (2018-02-23)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.8"></a>

## [2.2.8](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.7...ffe-form-react@2.2.8) (2018-02-22)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.7"></a>

## [2.2.7](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.6...ffe-form-react@2.2.7) (2018-02-20)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.6"></a>

## [2.2.6](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.5...ffe-form-react@2.2.6) (2018-02-15)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.5"></a>

## [2.2.5](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.4...ffe-form-react@2.2.5) (2018-02-01)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.4"></a>

## [2.2.4](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.3...ffe-form-react@2.2.4) (2018-01-31)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.3"></a>

## [2.2.3](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.2...ffe-form-react@2.2.3) (2018-01-19)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.2"></a>

## [2.2.2](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.1...ffe-form-react@2.2.2) (2018-01-19)

**Note:** Version bump only for package ffe-form-react

<a name="2.2.1"></a>

## 2.2.1 (2018-01-10)

**Note:** Version bump only for package ffe-form-react

# 2.2.0

-   Allow specification of tabIndex for Tooltip, defaults to undefined.

# 2.1.0

-   Allow arbitrary React nodes in the `fieldMessage` prop.
-   Correctly set `.ffe-tooltip__icon--active` class on tooltip button when expanded.
-   Add an optional `onTooltipToggle` to `InputGroup` which will be invoked on toggling tooltip if the tooltip is
    provided as a string.
-   `Tooltip` can be rendered with no children, which leads to it only rendering its button-controller.
-   `label` is no longer a required prop for `InputGroup`.

## 2.0.2

-   Ensure `InputGroup`'s automatic ID is a valid ID.
-   Allow `Label`'s `htmlFor` prop to be optional

## 2.0.1

-   Fix failing prop type for `InputGroup`

# 2.0.0

-   BREAKING: `InputGroup` no longer supports sending in your own ID - it will now be generated
    and applied automatically when needed.
-   `InputGroup` now supports sending a function as a child, which lets you deal with sending in
    several children (i.e. text nodes). See the README.md for how to use this.
-   `InputGroup` will throw a descriptive error when used with several children instead of
    with just one.

# 1.0.0

-   First release.
