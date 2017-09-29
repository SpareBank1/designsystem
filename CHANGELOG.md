# Changelog

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
