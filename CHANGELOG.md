# Changelog
# v.1.4.1
* Added callback to onAccountSelected with null account when the input is reset by user

## v.1.4.0
* Added optional prop onAccountSelected
* Bugfix: onBlur will no longer select the highlighted account if value doesn't match an account

## v.1.3.0
* Bugfix: Select account on tab
* Fire onChange with null on AccountSelector reset
* Added optional prop onFocus

## v1.2.0
* Bugfix: Fixed various bugs related to filtered accounts becoming out of sync with AccountsSuggestions
* Bugfix: return account number instead of name onBlur
* Removed global Escape handler
* Removed onAccountSelected prop

## v1.1.0
* Added optional prop for onAccountSelected

## v1.0.4
* Bugfix: Format account balance according to locale
* Bugfix: Fixed onBlur firing onFocus
* Better separation of state and props

## v1.0.3
* Better prop validation
* Added support for inputfield placeholder
* Bugfix: Fixed error not allowing concurrent renders
* Added Id prop
* Added ariaInvalid to support validation errors

## v1.0.2

* Bugfix: Inline css styles

## v1.0.1

* Bugfix: Fix error in window handling in react-scrollarea.

## v1.0.0

* Initial release
