# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="4.0.4"></a>
## [4.0.4](***REMOVED***) (2018-01-10)




**Note:** Version bump only for package ffe-icons-react

      <a name="4.0.3"></a>

## [4.0.3](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-icons-react

    <a name="4.0.2"></a>

## [4.0.2](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-icons-react

<a name="4.0.1"></a>

## [4.0.1](***REMOVED***) (2018-01-04)

**Note:** Version bump only for package ffe-icons-react

<a name="4.0.0"></a>

# [4.0.0](***REMOVED***) (2018-01-02)

### Code Refactoring

* **ffe-icons-react:** Improve API ([ecb9ac6](***REMOVED***))

### BREAKING CHANGES

* **ffe-icons-react:** Improve the API of ffe-icons-react.

This commit changes the API of the ffe-icons-react package to take
advantage of dead code eliminination and tree shaking in
Webpack >= 2.

Previously, you imported one and one icon from the corresponding
JSX file. Now all icons are available as named exports from the
root level of `ffe-icons-react`.

If you're using webpack@>=2.0.0, please make the following changes
to migrate:

```diff
- import ChevronIkon from 'ffe-icons-react/chevron-ikon';
- import FamilieIkon from 'ffe-icons-react/familie-ikon';
+ import { ChevronIkon, FamilieIkon } from 'ffe-icons-react';
```

If you're not using a build tool that enables dead code elimination
and tree shaking, please make the following changes to migrate:

```diff
- import ChevronIkon from 'ffe-icons-react/chevron-ikon';
- import FamilieIkon from 'ffe-icons-react/familie-ikon';
+ import ChevronIkon from 'ffe-icons-react/lib/chevron-ikon';
+ import FamilieIkon from 'ffe-icons-react/lib/familie-ikon';
```

This API change allows for cleaner usage and better documentation.

<a name="3.0.0"></a>

# 3.0.0 (2017-12-22)

### Bug Fixes

* **ffe-icons-react:** Adjust file path to monorepo layout ([3f89c42](***REMOVED***))
* **ffe-icons-react:** fix build script to work inside monorepo ([3dd256e](***REMOVED***))
* **ffe-icons-react:** Output components to /lib ([4b62d10](***REMOVED***))

### Features

* **ffe-icons-react:** Add contribute.md link to readme ([32014fc](***REMOVED***))

### Fix

* Rename all icons to end with -ikon ([f4b815a](***REMOVED***))

### BREAKING CHANGES

* This commit renames two icons in ffe-icons.
`bankid-icon` is now named `bankid-ikon`, and
`mynter-to-stabler-pluss` is now named `mynter-to-stabler-pluss-ikon`.

In addition, ffe-icons-react receives a fix that unbroke a previous
release

# Changelog

## 2.4.19

* Updated ffe-icons to 7.17.0, new icon: `ffe-icons-react/kr-klokke-ikon.svg`

## 2.4.18

* Updated ffe-icons to 7.16.0 for `ffe-icons-react/gravemaskin-ikon`

## 2.4.17

* Updated ffe-icons to version 7.15.0, new icon:
* `ffe-icons-react/info-sirkel-solid-ikon`

## 2.4.16

* Updated ffe-icons to version 7.14.0, new icon:
* `ffe-icons-react/p-pose-stjerne-ikon`

## 2.4.15

* Updated ffe-icons to version 7.13.0, new icons:
* `ffe-icons-react/beta-ikon`
* `ffe-icons-react/kr-tannhjul-ikon`
* `ffe-icons-react/mobil-utropstegn-ikon`
* `ffe-icons-react/person-streker-ikon`

## 2.4.14

* Fixed warnings:
* attribute focusable on svg elements should be a string, not a boolean
* avoid sending iconName prop to the svg element since it is not a prop on the DOM element

## 2.4.13

* Updated ffe-icons to version 7.12.0, new icons:
* `ffe-icons-react/pil-ut-av-boks-skraa-ikon` has been redesigned with thicker lines

## 2.4.12

* Removed the default `onClick` handler which caused decorative icons to be read by screen readers.

## 2.4.11

* Update ffe-icons to version 7.11.0,
* `ffe-icons-react/snakkeboble-ikon` has been redesigned to be more in line with the visual profile.

## 2.4.10

* Updated ffe-icons to version 7.10.0, new icons:
* `ffe-icons-react/trillekoffert-ikon`

## 2.4.9

* Updated ffe-icons to version 7.9.1

## v2.4.8

* Updated ffe-icons to version 7.9.0

## v2.4.7

* Updated ffe-icons to version 7.8.0

## v2.4.6

* Updated ffe-icons to version 7.7.0

## v2.4.5

* Updated ffe-icons to version 7.6.1

## v2.4.4

* Updated ffe-icons to version 7.6.0

## v2.4.3

* Stopped using PropTypes from the main react package since that's deprecated in favour of the 'prop-types' npm package.

## v2.4.2

* Updated ffe-icons to version 7.5.4

## v2.4.1

* Updated ffe-icons to 7.5.3, fixing a breaking bug introduced with v7.5.1 of ffe-icons:

## v2.4.0

* Update ffe-icons to 7.5.1, new icons:
* `ffe-icons-react/binders-ikon`
* `ffe-icons-react/svar-pil-ikon`
* `ffe-icons-react/moped-ikon`

## v2.3.1

* remove snake-cased properties from pluss-ikon and bil-camping icon

## v2.3.0

* Update ffe-icons to version 7.2.0. New icons:
* ffe-icons-react/pluss-ikon

## v2.2.0

* Update ffe-icons to a new major: 7.1.1. New icons:
* `ffe-icons-react/bil-camping-ikon`
* `ffe-icons-react/hus-tre-ikon`
* `ffe-icons-react/handlevogn-pakker-ikon`

## v2.1.1

* Update eslint configuration

## v2.0.0

* Update ffe-icons to a new major: 6.0.0.
* `ffe-icons-react/kontorbygg-ikon` renamed to `ffe-icons-react/kontorbygg-solid-ikon`
* `ffe-icons-react/skyskraper-ikon` added
* `ffe-icons-react/personer-ikon` added
* `ffe-icons-react/kontorbygg-ikon` added (in a non-solid version)

## v1.1.1

* Update ffe-icons to version 5.3.0

## v1.1.0

* Update ffe-icons to 5.2.0. New icons:
* ffe-icons-react/konfetti-ikon
* ffe-icons-react/tommel-opp-ikon

## v1.0.0

* Updated ffe-icons to a new major: 5.0.0

## v0.5.4

* Updated ffe-icons version to 4.6.0

## v0.5.3

* Updated ffe-icons version to 4.5.0

## v0.5.1

* Updated ffe-icons version to 4.3.0

## v0.5.0

* Added support for `onClick` property on icons

## v0.4.2

* Updated ffe-icons version to 4.1.0

## v0.4.1

* Updated ffe-icons version to 3.7.2

## v0.4.0

* ffe-icons-react return `null` if iconName don't match any icon.

## v0.3.0

* Added support for title, desc, tabIndex and focusable as props, increasing support for screen readers.
* Updated ffe-icons version to 3.7.1

## v0.2.0

* Added style props
* Added focusable="false" to prevent IE focusing on svg elements
* Add proptypes
* Added eslint rules from ffe
* Updated ffe-icons version to 3.6.

## v0.1.0 (22.04.2016)

* Initial release. Based on ffe-icons v3.3.0
