# Changelog

## v2.0.8
* Fix focus/click bug which made it possible to keep several calendars open when having more than one datepicker on the same page

## v2.0.7
* Update dependency ffe-datepicker to ^3.0.1

## v2.0.6
* Use event.preventDefault on buttons for navigating months

## v2.0.5
* Update dependency ffe-datepicker to ^3.0.0

## v2.0.4
* Update eslint to use FFE eslint

## v2.0.3
* Added type=button to header buttons which prevents a form submit
* Updated peerDependency for ffe-form to 4.x.x

## v2.0.2
* Updated peerDependency for ffe-form to 2.x.x or 3.x.x
* Updated dependency for ffe-datepicker to 2.1.1

## v2.0.1
* Remove abbr from th in datepicker as it is not a prop. Causing console error

## v2.0.0
* Bumped dependency on `ffe-core` to `^8.0.2`
* Bumped dependency on `ffe-datepicker` to `^2.0.0`
* Added peerDependency on `ffe-form` on `^1.0.1`
* Updated path to datepicker.less

## v1.1.5

* Fix tabbing bug which caused datepicker not to close

## v1.1.4

* Bumped version of ffe-datepicker dependency

## v1.1.3

* Added max length for input

## v1.1.2

* Added ariaInvalid to support validation errors

## v1.1.1

* Fix month formatting bug which caused incorrect dates in certain cases

## v1.1.0

* Styles moved to seperate package.
* Expose styles through index.less
* Fix focus bug after selecting date


## v1.0.0

* Initial release
