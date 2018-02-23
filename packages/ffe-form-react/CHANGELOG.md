# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

* Allow specification of tabIndex for Tooltip, defaults to undefined.

# 2.1.0

* Allow arbitrary React nodes in the `fieldMessage` prop.
* Correctly set `.ffe-tooltip__icon--active` class on tooltip button when expanded.
* Add an optional `onTooltipToggle` to `InputGroup` which will be invoked on toggling tooltip if the tooltip is
provided as a string.
* `Tooltip` can be rendered with no children, which leads to it only rendering its button-controller.
* `label` is no longer a required prop for `InputGroup`.

## 2.0.2

* Ensure `InputGroup`'s automatic ID is a valid ID.
* Allow `Label`'s `htmlFor` prop to be optional

## 2.0.1

* Fix failing prop type for `InputGroup`

# 2.0.0

* BREAKING: `InputGroup` no longer supports sending in your own ID - it will now be generated
and applied automatically when needed.
* `InputGroup` now supports sending a function as a child, which lets you deal with sending in
several children (i.e. text nodes). See the README.md for how to use this.
* `InputGroup` will throw a descriptive error when used with several children instead of
with just one.

# 1.0.0

* First release.
