# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

* _Breaking change_ to use flex to align items instead of absolute positioning

## 2.0.4

* Set default background of `ffe-accordion-item__toggler` explicit to transparent.
This fixes IE11 error where background becomes gray when a toggler is a button.

## 2.0.3

* Support both versions 9 and 10 of `ffe-core`

## 2.0.2

* Replaced hardcoded transition properties with variables from ffe-core

## 2.0.1

* Make white accordion the default layout. Previously there was no default layout (that wasn't broken) without
tons of modifiers everywhere. Now you don't need to add modifiers if you want the white design.
* Fix a bug where single-item accordions got a double bottom border
* Add a `viewport` meta tag to the examples page so that it scales correctly on smaller devices

# 2.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Bumped ffe-visual-tests-support version
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## 1.3.3

* Add a few minor style changes to the toggler, to make it possible to use either an `<a>` or a `<button>` tag with the same visual results.
* Updated all examples to use a `<button>`, as it makes the most sense semantically.

## 1.3.2

* Remove .accordion-item bottom margin for white accordions that was introduced in 1.3.1.

## 1.3.1

* Design changes, including normalizing content and title padding, removing text-decoration and correcting colors

# 1.3.0

* Add visual tests and examples

# 1.2.0

* Increased padding right for accordion-toggler to make sure arrow does end on top of toggler-content

## 1.1.1

* Removed default padding from `<ul>` element as this counters the centering given by `margin: 0 auto;`

# 1.1.0

* Removed list style dots (list-style: none) as this shouldn't be pushed to the consumer app

# 1.0.0

* Initial version of ffe-accordion. Supports both blue and white version.
