# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="7.0.2"></a>
## [7.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons@7.0.1...@sb1/ffe-buttons@7.0.2) (2018-03-22)


### Bug Fixes

* **ffe-buttons:** Fix vertical alignment in group ([57f5219](https://github.com/SpareBank1/designsystem/commit/57f5219))




      <a name="7.0.1"></a>
## [7.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons@7.0.0...@sb1/ffe-buttons@7.0.1) (2018-03-13)


### Bug Fixes

* **ffe-buttons:** Center button texts ([fede88a](https://github.com/SpareBank1/designsystem/commit/fede88a))




    <a name="7.0.0"></a>
# [7.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons@6.0.0...@sb1/ffe-buttons@7.0.0) (2018-03-07)


### Bug Fixes

* Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))


### Features

* **ffe-buttons:** Simplify API ([5e1cd7a](https://github.com/SpareBank1/designsystem/commit/5e1cd7a))


### BREAKING CHANGES

* **ffe-buttons:** This commit rewrites the ffe-buttons less package for
simplicity and ease of use.

There are now two basic button types - `base-button` and
`inline-base-button`. Each of these two button types have fewer
elements, and a few modifiers that specify which type of button it is.

Previously, the DOM structure for most buttons looked like a variation
of this:

```html
<button class="ffe-[button-type]-button">
<span class="ffe-[button-type]-button__label">
<span class="ffe-[button-type]-button__label-text">
<img class="ffe-[button-type]-button__label-icon" alt="left icon" />
Click me
<img class="ffe-[button-type]-button__label-icon" alt="right icon" />
</span>
<span class="ffe-[button-type]-button__label-spinner" />
</span>
</button>
```

For `base-button` based buttons (woah), the general DOM structure now
required is this:

```html
<button class="ffe-button ffe-button--[button-type]">
<img class="ffe-button__icon ffe-button__icon--left" alt="left icon" />
<span class="ffe-button__label">
Click me
</span>
<img class="ffe-button__icon ffe-button__icon--right" alt="right icon" />
<div class="ffe-button__spinner" />
</button>
```

The icons and the spinner is optional if not needed. Please refer to
the React implementation for further details on which aria-tags are
expected to be passed where, as well as which modifier flags are
available.

Note, however, how the button type only needs to be specified at the
top level. The same goes for any modifier, like loading etc. If your
button does not require a loading indicator, the entire block can be
removed without any other tweaks.

Previously, the DOM structure for small inline buttons were similar as
above, just with a few different classes, and no spinner.

For `inline-base-button` based buttons (:tada:), the general DOM
structure now required is this:

```html
<button class="ffe-inline button ffe-inline-button--[button-type]">
<img class="ffe-inline-button__icon ffe-inline-button__icon--left" alt="left icon" />
<span class="ffe-inline-button__label">Click me</span>
<img class="ffe-inline-button__icon ffe-inline-button__icon--right" alt="right icon" />
</button>
```

The icons are optional if not needed. Please refer to the React
implementation for further details on which aria-tags are expected to be
passed where, as well as which modifier flags are available.




  <a name="6.0.1"></a>
## [6.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons@6.0.0...@sb1/ffe-buttons@6.0.1) (2018-03-02)


### Bug Fixes

* Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))




<a name="6.0.0"></a>
# 6.0.0 (2018-02-25)


### Bug Fixes

* **ffe-buttons:** ffe-expand-button expand only horizontally ([b847c6c](https://github.com/SpareBank1/designsystem/commit/b847c6c))


### Chores

* add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))


### Features

* **ffe-buttons:** Add contribute.md link to readme ([3aa4cdc](https://github.com/SpareBank1/designsystem/commit/3aa4cdc))
* **ffe-buttons:** Add inline-expand-button ([70491dd](https://github.com/SpareBank1/designsystem/commit/70491dd))


### BREAKING CHANGES

* All packages have been renamed to add the @sb1 scope.

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




<a name="5.2.3"></a>
## [5.2.3](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.2.2...ffe-buttons@5.2.3) (2018-02-23)




**Note:** Version bump only for package ffe-buttons

<a name="5.2.2"></a>
## [5.2.2](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.2.1...ffe-buttons@5.2.2) (2018-02-22)




**Note:** Version bump only for package ffe-buttons

<a name="5.2.1"></a>
## [5.2.1](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.2.0...ffe-buttons@5.2.1) (2018-02-20)




**Note:** Version bump only for package ffe-buttons

<a name="5.2.0"></a>
# [5.2.0](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.9...ffe-buttons@5.2.0) (2018-02-16)


### Features

* **ffe-buttons:** Add inline-expand-button




<a name="5.1.9"></a>
## [5.1.9](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.8...ffe-buttons@5.1.9) (2018-02-15)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.8"></a>
## [5.1.8](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.7...ffe-buttons@5.1.8) (2018-02-09)


### Bug Fixes

* **ffe-buttons:** ffe-expand-button expand only horizontally




<a name="5.1.7"></a>
## [5.1.7](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.6...ffe-buttons@5.1.7) (2018-02-01)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.6"></a>
## [5.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.5...ffe-buttons@5.1.6) (2018-01-19)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.5"></a>
## [5.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.4...ffe-buttons@5.1.5) (2018-01-19)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.4"></a>

## [5.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.3...ffe-buttons@5.1.4) (2018-01-10)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.3"></a>

## [5.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.2...ffe-buttons@5.1.3) (2018-01-09)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.2"></a>

## [5.1.2](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.1...ffe-buttons@5.1.2) (2018-01-05)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.1"></a>

## [5.1.1](https://github.com/SpareBank1/designsystem/compare/ffe-buttons@5.1.0...ffe-buttons@5.1.1) (2018-01-04)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.0"></a>

# 5.1.0 (2017-12-22)

### Features

* **ffe-buttons:** Add contribute.md link to readme

## 5.0.1

* Fix unnecessary duplicate nesting of `--loading`-modifier.

# 5.0.0

* Replaced hardcoded font-sizes with mixins from ffe-core

### BREAKING CHANGES

* BREAKING: peerDependency to `ffe-core` bumped to new major

# 4.2.0

### Features

* Add `ffe-task-button` as a new button type. Should be used for any action where the user is adding a new item to some kind of collection. It's not opinionated about what icon to use, but was designed with `pluss-ikon` from `ffe-icons` in mind.

# 4.1.0

### Features

* Add `--inline` modifier to ffe-button-group. When using this modifier, the buttons in the modified button group will not have width 100% on small screens,
and will be displayed on the same line as long as there is enough horizontal space.

## 4.0.4

* Support both versions 9 and 10 of `ffe-core`

## 4.0.3

* Replaced hardcoded transition properties with variables from ffe-core

## 4.0.2

* Add line-height to buttons to remove implicit dependency on ffe-body-text
* Add multiline example for ffe-action-button

## 4.0.1

* Fixed `active` and `focus` state of the chevron in `ffe-shortcut-button--condensed`.

# 4.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

# 3.0.0

* Made `ffe-back-button` work with `<a />` elements.
* Made `ffe-tertiary-button` work with `<a />` elements.

### BREAKING CHANGES

* BREAKING: `ffe-back-button` is now a `display: inline-block` element, which might break some layouts.
Migrating should be pretty simple though - if you were depending on `ffe-back-button` to be a block level
element, please wrap your element in a block level element, like a `<div />`.

## 2.5.7

* Removed use of `line-height` to set button height, instead use `padding`. This so line breaks won't look awkward - with padding around every text row.

## 2.5.6

* Changed primary button background color to @ffe-blue-royal-light-wcag

## 2.5.5

* According to Bodil Egge, icons in buttons are 14x14 px in "verktøykassa", not 18x18 px. This change only affects the size of the icon, the button's outer dimensions are not changed.

## 2.5.4

* Fix visual bug with icons in buttons in IE by explicitly setting label icon width.

## 2.5.3

* The chevron icon does not need to have the inline style `transform:rotate(-90deg)` anymore.

## 2.5.2

* Add `outline: 0` to `.ffe-primary-button:focus` to avoid "double" focus in Firefox.

## 2.5.1

* Fix position of spinner in condensed buttons.
* Minor placement adjustment of icons in secondary and tertiary buttons (this time with help from professionals).

# 2.5.0

* Adjust odd placement of icons in secondary buttons.

### Features

* Icons can be nested inside tertiary buttons with `.ffe-tertiary-button__label-icon`.
This also requires `.ffe-tertiary-button--with-icon` on the button.

# 2.4.0

### Features

* Icons can be nested inside secondary buttons with `.ffe-secondary-button__label-icon`.

# 2.3.0

### Features

* Add compact variant of action, primary, secondary, tertiary and shortcut button (modifier `--condensed`).

# 2.2.0

### Features

* Added ffe-back-button

## 2.1.4

* Updated design of ffe-tertiary-button

## 2.1.3

* Add `fill: @ffe-blue-royal-light-wcag;` to `.ffe-shortcut-button__icon-chevron` so it's no longer black by default.
* Fix broken selector for `:hover` state of `.ffe-shortcut-button__icon-chevron`.

## 2.1.2

* Add `cursor: pointer;` to `.ffe-tertiary-button`

## 2.1.1

* Improve `.ffe-button-group` to use less fragile selectors

# 2.1.0

### Features

* Added `ffe-button-group` _by popular demand_

# 2.0.0

* Bump ffe-core devDependency to new major  ^8.0.2

### BREAKING CHANGES

* Bump ffe-core peerDependency to new major ^8.0.2

## 1.0.1

Added mixins that will be removed in ffe-core@8.0.0.

# 1.0.0

First version of package. Code was previously in `ffe-core`, but separated to its own package in ffe-core@8.0.0.
