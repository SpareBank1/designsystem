# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.2.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.2.4...@sb1/ffe-accordion-react@6.2.5) (2018-11-16)

**Note:** Version bump only for package @sb1/ffe-accordion-react

## [6.2.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.2.3...@sb1/ffe-accordion-react@6.2.4) (2018-11-13)

**Note:** Version bump only for package @sb1/ffe-accordion-react

## [6.2.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.2.2...@sb1/ffe-accordion-react@6.2.3) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-accordion-react

## [6.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.2.1...@sb1/ffe-accordion-react@6.2.2) (2018-10-17)

**Note:** Version bump only for package @sb1/ffe-accordion-react

## [6.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.2.0...@sb1/ffe-accordion-react@6.2.1) (2018-10-15)

**Note:** Version bump only for package @sb1/ffe-accordion-react

# [6.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.1.1...@sb1/ffe-accordion-react@6.2.0) (2018-10-09)

### Features

-   **ffe-accordion-react:** Add classname prop for Accordion and AccordionItem ([79859cb](https://github.com/SpareBank1/designsystem/commit/79859cb))

<a name="6.1.1"></a>

## [6.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.1.0...@sb1/ffe-accordion-react@6.1.1) (2018-09-24)

### Bug Fixes

-   **ffe-accordion-react:** fixed async issues with setState ([706dee5](https://github.com/SpareBank1/designsystem/commit/706dee5))

<a name="6.1.0"></a>

# [6.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.7...@sb1/ffe-accordion-react@6.1.0) (2018-09-06)

### Features

-   **ffe-accordion-react:** Use css transition ([8aae70c](https://github.com/SpareBank1/designsystem/commit/8aae70c))
-   **ffe-accordion-react:** Use new modifier class names ([8bf9c03](https://github.com/SpareBank1/designsystem/commit/8bf9c03))

### BREAKING CHANGES

-   **ffe-accordion-react:** Replaces `react-collapse` with `react-css-collapse`,
    which is internally used for toggling the accordion items with help of
    css transitions. Further, this change drops support for property
    `hasNestedCollapse`, which is a flag used by `react-collapse`.

See https://www.npmjs.com/package/react-css-collapse

<a name="6.0.7"></a>

## [6.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.6...@sb1/ffe-accordion-react@6.0.7) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="6.0.6"></a>

## [6.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.5...@sb1/ffe-accordion-react@6.0.6) (2018-06-14)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="6.0.5"></a>

## [6.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.4...@sb1/ffe-accordion-react@6.0.5) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="6.0.4"></a>

## [6.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.3...@sb1/ffe-accordion-react@6.0.4) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="6.0.3"></a>

## [6.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.2...@sb1/ffe-accordion-react@6.0.3) (2018-05-29)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="6.0.2"></a>

## [6.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.1...@sb1/ffe-accordion-react@6.0.2) (2018-05-04)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="6.0.1"></a>

## [6.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@6.0.0...@sb1/ffe-accordion-react@6.0.1) (2018-04-11)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="6.0.0"></a>

# [6.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@5.0.5...@sb1/ffe-accordion-react@6.0.0) (2018-04-11)

### Features

-   **ffe-accordion-react:** Make AccordionItems controllable ([a2761e8](https://github.com/SpareBank1/designsystem/commit/a2761e8)), closes [#155](https://github.com/SpareBank1/designsystem/issues/155)

### BREAKING CHANGES

-   **ffe-accordion-react:** `AccordionItem`'s prop `isOpen` is renamed to
    `defaultOpen`, while a new `open` prop let's the consumer control the
    open state of the accordion. To migrate, simply rename all `isOpen`
    props to `defaultOpen`.
-   **ffe-accordion-react:** `AccordionItem`'s props `onOpen` and `onClose` replaced
    with `onToggleOpen(nextIsOpen)`.

<a name="5.0.5"></a>

## [5.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@5.0.4...@sb1/ffe-accordion-react@5.0.5) (2018-04-06)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="5.0.4"></a>

## [5.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@5.0.3...@sb1/ffe-accordion-react@5.0.4) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="5.0.3"></a>

## [5.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@5.0.2...@sb1/ffe-accordion-react@5.0.3) (2018-03-13)

**Note:** Version bump only for package @sb1/ffe-accordion-react

<a name="5.0.2"></a>

## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@5.0.0...@sb1/ffe-accordion-react@5.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion-react@5.0.0...@sb1/ffe-accordion-react@5.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="5.0.0"></a>

# 5.0.0 (2018-02-25)

### Bug Fixes

-   **ffe-accordion-react:** Create ID only once ([dc94925](https://github.com/SpareBank1/designsystem/commit/dc94925))
-   **ffe-accordion-react:** Remove "expandableContent" prop ([be8043d](https://github.com/SpareBank1/designsystem/commit/be8043d))
-   Treeshake ffe-icons ([6bc9d6f](https://github.com/SpareBank1/designsystem/commit/6bc9d6f))
-   Upgrade ffe-icons-react to v4 ([01bc161](https://github.com/SpareBank1/designsystem/commit/01bc161))

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

-   **ffe-accordion-react:** Replace "expandedContent" with children- & title- prop

This commit changes the structure of ffe-accordion-react by making
the expandable content of the accordion item the children, while the heading of the item
is now a new "title"-prop. This previous soulution was somewhat backwards,
while this change will be more the React way of doing things.

<a name="4.0.10"></a>

## [4.0.10](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.9...ffe-accordion-react@4.0.10) (2018-02-23)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.9"></a>

## [4.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.8...ffe-accordion-react@4.0.9) (2018-02-22)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.8"></a>

## [4.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.7...ffe-accordion-react@4.0.8) (2018-02-20)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.7"></a>

## [4.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.6...ffe-accordion-react@4.0.7) (2018-02-15)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.6"></a>

## [4.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.5...ffe-accordion-react@4.0.6) (2018-02-01)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.5"></a>

## [4.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.4...ffe-accordion-react@4.0.5) (2018-01-31)

### Bug Fixes

-   Treeshake ffe-icons

<a name="4.0.4"></a>

## [4.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.3...ffe-accordion-react@4.0.4) (2018-01-31)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.3"></a>

## [4.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.2...ffe-accordion-react@4.0.3) (2018-01-19)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.2"></a>

## [4.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.1...ffe-accordion-react@4.0.2) (2018-01-19)

### Bug Fixes

-   Upgrade ffe-icons-react to v4

<a name="4.0.1"></a>

## [4.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.0...ffe-accordion-react@4.0.1) (2018-01-19)

**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.0"></a>

# [4.0.0](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@3.1.6...ffe-accordion-react@4.0.0) (2018-01-19)

### Bug Fixes

-   **ffe-accordion-react:** Remove "expandableContent" prop

### BREAKING CHANGES

-   **ffe-accordion-react:** Replace "expandedContent" with children- & title- prop

This commit changes the structure of ffe-accordion-react by making
the expandable content of the accordion item the children, while the heading of the item
is now a new "title"-prop. This previous soulution was somewhat backwards,
while this change will be more the React way of doing things.

<a name="3.1.6"></a>

## [3.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@3.1.5...ffe-accordion-react@3.1.6) (2018-01-10)

**Note:** Version bump only for package ffe-accordion-react

<a name="3.1.5"></a>

## [3.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@3.1.4...ffe-accordion-react@3.1.5) (2018-01-09)

**Note:** Version bump only for package ffe-accordion-react

<a name="3.1.4"></a>

## [3.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@3.1.3...ffe-accordion-react@3.1.4) (2018-01-05)

**Note:** Version bump only for package ffe-accordion-react

<a name="3.1.3"></a>

## 3.1.3 (2018-01-04)

### Bug Fixes

-   **ffe-accordion-react:** Create ID only once

## 3.1.2

-   Added documentation and refactored internally.

## 3.1.1

-   Removed button and replaced with div to fix bug in internet explorer

# 3.1.0

-   Upgraded to react 16. Enzyme to 3.1.1 to support react 16. Added repository to remove warning.
    Upgraded ffe-accordian to remove warning.

## 3.0.1

-   Fix a propType error that would happen if isOpen was not set on AccordionItem. Collapse complained that
    `this.state.isOpen` was undefined, so it now defaults to the boolean `false`.

# 3.0.0

### BREAKING CHANGES

-   Changing to use flex to align items instead of absolute positioning

# 2.1.0

Use `react-collapse` instead of ffe-expandable-react, since the latter is deprecated. Also add a new property
`hasNestedCollapse`, which lets the consumer use another `react-collapse` element inside the accordion.

## 2.0.4

Set `type="button"` for Button-toggler to prevent submit when accordion is used inside a form.

## .2.0.3

-   Use PropTypes from prop-types package

## 2.0.2

Remove the `--white` modifier classes, since they are now the default.

## 2.0.1

Bump ffe-accordion version.

# 2.0.0

### BREAKING CHANGES

Use `<button>` (instead of `<a>`) for the toggler to prevent unnecessary links.
Add `ffe-accordion` as a peer dependency.

## 1.2.7

Fixed bug in aria label id

## 1.2.6

Update ffe-expandable-react to 1.0.5 or above

## 1.2.5

Update eslint configuration

## 1.2.4

This release fixes a few issues from v1.2.3.

-   Use `uuid` instead of `nfe-hash` for unique IDs.
-   Make `uuid` and `isOpen` optional props.

## 1.2.3

Make accordion items have globally unique IDs.

## 1.2.2

Updated ffe-expandable-react to use react-height to calculate panel height

## 1.2.1

Updated ffe-expandable-react and ffe-icons-react to fix some bugs.

# 1.2.0

Added aria-label-tag to be able to set text screen-readers read.

# 1.0.0

Initial version
