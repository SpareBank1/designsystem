# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@5.0.3...@sb1/ffe-accordion@5.0.4) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-accordion

## [5.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@5.0.2...@sb1/ffe-accordion@5.0.3) (2018-10-25)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="5.0.2"></a>

## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@5.0.1...@sb1/ffe-accordion@5.0.2) (2018-09-19)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="5.0.1"></a>

## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@5.0.0...@sb1/ffe-accordion@5.0.1) (2018-09-11)

### Bug Fixes

-   **ffe-accordion:** Background transition for blue accordion ([85110f7](https://github.com/SpareBank1/designsystem/commit/85110f7)), closes [#398](https://github.com/SpareBank1/designsystem/issues/398)

<a name="5.0.0"></a>

# [5.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.17...@sb1/ffe-accordion@5.0.0) (2018-09-06)

### Features

-   **ffe-accordion:** Decrease use of modifiers ([9e5b575](https://github.com/SpareBank1/designsystem/commit/9e5b575))

### BREAKING CHANGES

-   **ffe-accordion:** The modified class `ffe-accordion--blue` supersedes
    the modified class `ffe-accordion-item--blue` and all element level
    classes of `ffe-accordion-item` with the `--blue` modifier, i.e.
    `ffe-accordion-item__(toggler,icon,content)--blue` are no longer in use.

The modified class `ffe-accordion-item--open` is still needed, but the
modifier `--open` on element level classes in this block is not
necessary any longer.

Important: The collapse and expand animation of accordion items requires
scripting, because a css transition to `height: auto` does not work. A
script should measure the height of the child element
`ffe-accordion-item__content` (i.e. using the DOM element's property
`scrollHeight`) and set the height of the surrounding element with class
name `ffe-accordion-item__content-container` by changing the inline
style declaration accordingly (i.e. the property `style.height`).

<a name="4.0.17"></a>

## [4.0.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.16...@sb1/ffe-accordion@4.0.17) (2018-08-31)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.16"></a>

## [4.0.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.15...@sb1/ffe-accordion@4.0.16) (2018-08-23)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.15"></a>

## [4.0.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.14...@sb1/ffe-accordion@4.0.15) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.14"></a>

## [4.0.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.13...@sb1/ffe-accordion@4.0.14) (2018-07-23)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.13"></a>

## [4.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.12...@sb1/ffe-accordion@4.0.13) (2018-06-20)

### Bug Fixes

-   **ffe-accordion:** added peerDependency to ffe-core@^13.0.0 ([c794897](https://github.com/SpareBank1/designsystem/commit/c794897))

<a name="4.0.12"></a>

## [4.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.11...@sb1/ffe-accordion@4.0.12) (2018-06-18)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.11"></a>

## [4.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.10...@sb1/ffe-accordion@4.0.11) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.10"></a>

## [4.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.9...@sb1/ffe-accordion@4.0.10) (2018-05-29)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.9"></a>

## [4.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.8...@sb1/ffe-accordion@4.0.9) (2018-05-22)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.8"></a>

## [4.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.7...@sb1/ffe-accordion@4.0.8) (2018-05-09)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.7"></a>

## [4.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.6...@sb1/ffe-accordion@4.0.7) (2018-05-08)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.6"></a>

## [4.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.5...@sb1/ffe-accordion@4.0.6) (2018-05-04)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.5"></a>

## [4.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.4...@sb1/ffe-accordion@4.0.5) (2018-05-03)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.4"></a>

## [4.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.3...@sb1/ffe-accordion@4.0.4) (2018-04-11)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.3"></a>

## [4.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.2...@sb1/ffe-accordion@4.0.3) (2018-04-10)

**Note:** Version bump only for package @sb1/ffe-accordion

<a name="4.0.2"></a>

## [4.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.0...@sb1/ffe-accordion@4.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="4.0.1"></a>

## [4.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-accordion@4.0.0...@sb1/ffe-accordion@4.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="4.0.0"></a>

# 4.0.0 (2018-02-25)

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

<a name="3.0.11"></a>

## [3.0.11](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.10...ffe-accordion@3.0.11) (2018-02-23)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.10"></a>

## [3.0.10](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.9...ffe-accordion@3.0.10) (2018-02-22)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.9"></a>

## [3.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.8...ffe-accordion@3.0.9) (2018-02-20)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.8"></a>

## [3.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.7...ffe-accordion@3.0.8) (2018-02-15)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.7"></a>

## [3.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.6...ffe-accordion@3.0.7) (2018-02-01)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.6"></a>

## [3.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.5...ffe-accordion@3.0.6) (2018-01-19)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.5"></a>

## [3.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.4...ffe-accordion@3.0.5) (2018-01-19)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.4"></a>

## [3.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.3...ffe-accordion@3.0.4) (2018-01-10)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.3"></a>

## [3.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.2...ffe-accordion@3.0.3) (2018-01-09)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.2"></a>

## [3.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-accordion@3.0.1...ffe-accordion@3.0.2) (2018-01-05)

**Note:** Version bump only for package ffe-accordion

<a name="3.0.1"></a>

## 3.0.1 (2018-01-04)

**Note:** Version bump only for package ffe-accordion

# 3.0.0

### BREAKING CHANGES

-   _Breaking change_ to use flex to align items instead of absolute positioning

## 2.0.4

-   Set default background of `ffe-accordion-item__toggler` explicit to transparent.
    This fixes IE11 error where background becomes gray when a toggler is a button.

## 2.0.3

-   Support both versions 9 and 10 of `ffe-core`

## 2.0.2

-   Replaced hardcoded transition properties with variables from ffe-core

## 2.0.1

-   Make white accordion the default layout. Previously there was no default layout (that wasn't broken) without
    tons of modifiers everywhere. Now you don't need to add modifiers if you want the white design.
-   Fix a bug where single-item accordions got a double bottom border
-   Add a `viewport` meta tag to the examples page so that it scales correctly on smaller devices

# 2.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

-   Renamed color names to stay in sync with refactoring in ffe-core@9.x
-   Bumped ffe-visual-tests-support version
-   Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## 1.3.3

-   Add a few minor style changes to the toggler, to make it possible to use either an `<a>` or a `<button>` tag with the same visual results.
-   Updated all examples to use a `<button>`, as it makes the most sense semantically.

## 1.3.2

-   Remove .accordion-item bottom margin for white accordions that was introduced in 1.3.1.

## 1.3.1

-   Design changes, including normalizing content and title padding, removing text-decoration and correcting colors

# 1.3.0

-   Add visual tests and examples

# 1.2.0

-   Increased padding right for accordion-toggler to make sure arrow does end on top of toggler-content

## 1.1.1

-   Removed default padding from `<ul>` element as this counters the centering given by `margin: 0 auto;`

# 1.1.0

-   Removed list style dots (list-style: none) as this shouldn't be pushed to the consumer app

# 1.0.0

-   Initial version of ffe-accordion. Supports both blue and white version.
