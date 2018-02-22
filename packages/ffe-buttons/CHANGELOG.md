# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="5.2.2"></a>
## [5.2.2](***REMOVED***) (2018-02-22)




**Note:** Version bump only for package ffe-buttons

      <a name="5.2.1"></a>
## [5.2.1](***REMOVED***) (2018-02-20)




**Note:** Version bump only for package ffe-buttons

    <a name="5.2.0"></a>
# [5.2.0](***REMOVED***) (2018-02-16)


### Features

* **ffe-buttons:** Add inline-expand-button ([cffb39f](***REMOVED***))




  <a name="5.1.9"></a>
## [5.1.9](***REMOVED***) (2018-02-15)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.8"></a>
## [5.1.8](***REMOVED***) (2018-02-09)


### Bug Fixes

* **ffe-buttons:** ffe-expand-button expand only horizontally ([a292144](***REMOVED***))




<a name="5.1.7"></a>
## [5.1.7](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.6"></a>
## [5.1.6](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.5"></a>
## [5.1.5](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.4"></a>

## [5.1.4](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.3"></a>

## [5.1.3](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.2"></a>

## [5.1.2](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.1"></a>

## [5.1.1](***REMOVED***) (2018-01-04)

**Note:** Version bump only for package ffe-buttons

<a name="5.1.0"></a>

# 5.1.0 (2017-12-22)

### Features

* **ffe-buttons:** Add contribute.md link to readme ([e0e3d2c](***REMOVED***))

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
