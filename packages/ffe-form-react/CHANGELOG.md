# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="2.2.5"></a>
## [2.2.5](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-form-react

      <a name="2.2.4"></a>
## [2.2.4](***REMOVED***) (2018-01-31)




**Note:** Version bump only for package ffe-form-react

    <a name="2.2.3"></a>
## [2.2.3](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.2"></a>
## [2.2.2](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.1"></a>

## 2.2.1 (2018-01-10)

**Note:** Version bump only for package ffe-form-react

# Changelog for ffe-form-react

## v.2.2.0

* Allow specification of tabIndex for Tooltip, defaults to undefined.

## v.2.1.0

* Allow arbitrary React nodes in the `fieldMessage` prop.
* Correctly set `.ffe-tooltip__icon--active` class on tooltip button when expanded.
* Add an optional `onTooltipToggle` to `InputGroup` which will be invoked on toggling tooltip if the tooltip is
provided as a string.
* `Tooltip` can be rendered with no children, which leads to it only rendering its button-controller.
* `label` is no longer a required prop for `InputGroup`.

## v.2.0.2

* Ensure `InputGroup`'s automatic ID is a valid ID.
* Allow `Label`'s `htmlFor` prop to be optional

## v.2.0.1

* Fix failing prop type for `InputGroup`

## v.2.0.0

* BREAKING: `InputGroup` no longer supports sending in your own ID - it will now be generated
and applied automatically when needed.
* `InputGroup` now supports sending a function as a child, which lets you deal with sending in
several children (i.e. text nodes). See the README.md for how to use this.
* `InputGroup` will throw a descriptive error when used with several children instead of
with just one.

## v.1.0.0

* First release.
