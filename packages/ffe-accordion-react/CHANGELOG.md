# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

* Treeshake ffe-icons




<a name="4.0.4"></a>
## [4.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.3...ffe-accordion-react@4.0.4) (2018-01-31)




**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.3"></a>
## [4.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.2...ffe-accordion-react@4.0.3) (2018-01-19)




**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.2"></a>
## [4.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.1...ffe-accordion-react@4.0.2) (2018-01-19)


### Bug Fixes

* Upgrade ffe-icons-react to v4




<a name="4.0.1"></a>
## [4.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@4.0.0...ffe-accordion-react@4.0.1) (2018-01-19)




**Note:** Version bump only for package ffe-accordion-react

<a name="4.0.0"></a>
# [4.0.0](https://github.com/SpareBank1/designsystem/compare/ffe-accordion-react@3.1.6...ffe-accordion-react@4.0.0) (2018-01-19)


### Bug Fixes

* **ffe-accordion-react:** Remove "expandableContent" prop


### BREAKING CHANGES

* **ffe-accordion-react:** Replace "expandedContent" with children- & title- prop

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

* **ffe-accordion-react:** Create ID only once

## 3.1.2

* Added documentation and refactored internally.

## 3.1.1

* Removed button and replaced with div to fix bug in internet explorer

# 3.1.0

* Upgraded to react 16. Enzyme to 3.1.1 to support react 16. Added repository to remove warning.
Upgraded ffe-accordian to remove warning.

## 3.0.1

* Fix a propType error that would happen if isOpen was not set on AccordionItem. Collapse complained that
`this.state.isOpen` was undefined, so it now defaults to the boolean `false`.

# 3.0.0

### BREAKING CHANGES

* Changing to use flex to align items instead of absolute positioning

# 2.1.0

Use `react-collapse` instead of ffe-expandable-react, since the latter is deprecated. Also add a new property
`hasNestedCollapse`, which lets the consumer use another `react-collapse` element inside the accordion.

## 2.0.4

Set `type="button"` for Button-toggler to prevent submit when accordion is used inside a form.

## .2.0.3

* Use PropTypes from prop-types package

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

* Use `uuid` instead of `nfe-hash` for unique IDs.
* Make `uuid` and `isOpen` optional props.

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
