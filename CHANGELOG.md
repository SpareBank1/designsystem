# Changelog for ffe-search-dropdown-react

## v2.1.2
* Add support for version 7 and 8 of `ffe-form`.
* Fix console error in SearchableDropdown example.
* Code style changes.

## v2.1.1
* On mobile if field is selected or onfucus then scroll to top div element here.
* Remove auto X in IE

## v2.1.0
* Added errorMessage prop
* Explicit aria-invalid handling in searchable-dropdown.less

## v2.0.0
* Set inputValue outside the component to be able to reset and
change the value without interfering with the component.
* attributes onSelect, onReset and onChange should now update inputValue and not return it.
* Removed attribute initialInputValue, added attribute inputValue.

## v1.1.4
* hotfix div wrapper classname with version for npm

## v1.1.3
* Bumped version due to prepublish 1.1.2(unknown why)

## v1.1.2
* Added label property
* InputId is required to inputField so label can bind to it.
* Added isRequiredIf from 'react-proptype-conditional-require' on inputId if label is passed
* Upated readme
* Remove unnecessary imports in styleguide.less

## v1.1.1
* Removes local imports from ffe-core, up to projects to import styling.
* Remove less import into js, breaks with gulp build
* Accepts peerDependencies ffe-core 9.x.x || 10.x.x

## v1.1.0
* Can stick an id on the input element.

## v1.0.0
* First release.
