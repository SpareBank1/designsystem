# Changelog
# v.7.10.1
* Updated to support React 16. 
* Upgraded npm dependencies. 

# v.7.10.0
* Show correct currency for accounts with currencyCodes other than NOK.

# v7.9.2
* Fixed issue where iOS9 units may not receive click event

# v7.9.1
* Fixed bug where one selected account in multiple-account-selector was written in plural

# v7.9.0
* Open the suggestion-list when input-field is clicked, even when the input-field is already focused.
* Add prop 'onClick' for overriding the onClick callback.

# v7.8.2
* Add aria-label to reset-button to fix empty-button error.

# v7.8.1
* Move `react-auto-bind` from devDeps to dependencies.

# v7.8.0
* Add support for `ffe-form@8` and `ffe-core@10`
* Remove less extension of `ffe-link-text` on `ffe-account-suggestion__name`
* Add classes `ffe-link-text` and `ffe-link-text--no-underline` alongside
all `ffe-account-suggestion__name`

# v7.7.1
* Bugfix IE11

# v7.7.0
* New feature "select all". Set `showAllOption` to true to show an option for selecting all accounts. Will call "onSelectAll" when selected/deselected

# v7.6.1
* Bugfix: Moved `ffe-spinner` to peer-dependencies.

# v7.6.0 (Invalid version, broken .less import)
* Added property `isLoading`. Shows a loading spinner in the suggestion list

# v7.5.0
* Added property `showBalance`. Set to false to hide the balance of the accounts.

# v7.4.3
* Bugfix: Cursor no longer jumps to the end of field on input. Used solution proposed here: https://gist.github.com/rchanou/0a5c4173803a0d654f4c986d696a5c7f
* Bugfix: HOME and END events now puts cursor at home and end of input field when on no matching suggestions

# v7.4.2
* Default account filtering to false to fix behaviour when initializing with preselected account

# v7.4.1
* Enable account filtering on user input

# v7.4.0
* Disable account filtering when an account is selected

# v7.3.1
* Add workaround for IE11 and fast typing, which can cause characters to drop. Bugreport for issue, https://github.com/facebook/react/issues/7027, suggests this will be fixed in React 16.

# v7.3.0
* Changed dependency version for ffe-checkbox-react

# v7.2.0
* Increased version range for ffe-form

# v7.1.3
* Added property shouldShowSuggestionsOnFocus on selector. Defaults to true.

# v7.1.2
* Removed custom event prevention to enable consistent behaviour across browsers

# v7.1.1
* Expand peerDep scope of `ffe-form` to include `5.x`.
* Remove peerDep on `ffe-core`, `ffe-buttons` and `react`.

# v7.1.0
* Support setting name of input-field as prop to AccountSelector. The property is not required

# v7.0.0
### Breaking changes
Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`
* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

# v6.0.0
* Id prop required to promote good UU. Id of container set to `$id-container`, id of input field set to `id`

# v5.0.3
* Default value for suggestions element when no matches found

# v5.0.2
* Bugfix: Blur event wrongfully prevented after reset from ESC

# v5.0.1
* Show suggestions on reset
* Bugfix: always give input focus after reset

# v5.0.0
* Check README for migration from `nfe-account-selector-react`

# v4.1.9
* Fix vertical alignment of dropdown and reset icons

# v4.1.8
* Bump dependency ffe-form to include 4.x

# v4.1.7
* Bugfix: Remove event listeners on unmount

# v4.1.6
* Bugfix: Prevent a possible form submission when clicking the "done" button on a multiselect

# v4.1.5
* Bugfix: IE11 freezes when navigating to the end of the dropdown using the keyboard

# v4.1.4
* Bugfix: onBlur called for click events when account selector not in focus

# v4.1.3
* Bugfix: Blur prop not called when dropdown is not showing and input field loses focus

# v4.1.2
* Bugfix: Input blur not working for Firefox =< 45.02 and IE =< 11 because of reliance on event.relatedTarget (https://bugzilla.mozilla.org/show_bug.cgi?id=962251)

# v4.1.1
* Bugfix: onBlur prop called twice on input field blur

# v4.1.0
* Revert setTimeout on componentWillMount made in v3.0.4 causing unexpected behaviour
* Expose reset method in AccountSelector
* Same behaviour when tabbing and clicking away from input field
* Bugfix: input field not clearing on ESC press
* Bugfix: give input field focus after dropdown item clicked
* Bugfix: call onBlur prop when input field loses focus to another element than the dropdown list

# v4.0.2
* Fixes due to breaking changes in ffe-checkbox-react

# v4.0.1
* Fix misplaced checkboxes in AccountSelectorMulti.

# 4.0.0 (Invalid version, missing dependency lodash.isequal)

# v3.1.0
* You can now use the classes nfe-general-selector-suggestion, &__name and &__details to get the approximate appearence of the regular account selector without checkboxes ie with multiple=false
* Bugfix: The noMatches-text no longer shows as clickable and white text on white background on hover.
* Bugfix: Silenced a react-warning regarding uncontrolled input turned controlled.

# v3.0.4
* Fix an esoteric bug that could cause the dropdown to display the wrong state if the value of the input was changed while the component was receiving a props-change

# v3.0.3
* Fix svg caret that was jumping up and down due to it's (slightly bigger) container being rotated instead of the actual icon itself

# v3.0.2
* Fix compatability with IE.
* Remove any implicit dependencies on polyfills by remomving array functions not supported in IE
* Fix bug which prevented multiselect "Done" button from working in IE

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
