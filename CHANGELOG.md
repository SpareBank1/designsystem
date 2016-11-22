# Changelog

# v3.0.1
* Add missing onChange to multiselect

# v3.0.0
* Major underlying change in structure of code.
* Add ability to more easily create custom selectors
* Add a new multi-account selector

# v2.1.6
* Added support for ffe-form version 2.x.x and 3.x.x

# v2.1.5
* Bugfix: Bundle css from react-scrollbar instead of depending on it. Depending on relative dependencies does not work when using npm@3 og yarn.

# v2.1.4
* Bugfix: Give input field focus on reset button click

# v2.1.3
* Bugfix: Fixed various bugs related to race conditions between events

# v2.1.2
* Bugfix: make noMatches-field persist when clicked
* Bugfix: changed noMatches-text to be wrapped in `span` instead of `anchor` to avoid influences of external styles

## v2.1.1
* Bugfix: Input field no longer steals focus onBlur

## v2.1.0
* Added optional prop `noMatches` on `AccountSelector`

## v2.0.2
* Do not call onChange when tabing out of the account-selector and the selected account has not changed

## v2.0.1
* Removed import of `form.less` from `ffe-form` in `account-selector.less`
You will now need to install `ffe-form` and import `form.less` in your project's `.less`-file

## v2.0.0
* Bumped dependency on `ffe-core` to `^8.0.2`
* Added mixins.less containing `.ffe-clearfix`, which was removed from `ffe-core`
* Added `@import account-suggestions.less` in `account-selector.less`, to simplify import in other projects

## v1.4.3
* Upgrade react dependencies to ^15.2.0 due to a bug with getNodeFromInstance in 15.1.0
* Throw on blur only when leaving component, not when selecting account from dropdown or pressing reset-button

## v1.4.2
* Bugfix: React warning when no selectedAccount or value props are given
* Bugfix: Missing X (reset) when selectedAccount or value are given
* UX: Focus will remain in the input when account is selected (except when tab is pressed)

## v1.4.1
* Added callback to onAccountSelected with null account when the input is reset by user

## v1.4.0
* Added optional prop onAccountSelected
* Bugfix: onBlur will no longer select the highlighted account if value doesn't match an account

## v1.3.0
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
