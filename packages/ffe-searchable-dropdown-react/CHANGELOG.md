# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

    <a name="3.0.5"></a>

## [3.0.5](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-searchable-dropdown-react

    <a name="3.0.4"></a>

## [3.0.4](***REMOVED***) (2018-01-10)

### Bug Fixes

* Run just 'jest', not 'jest src' ([9bb7309](***REMOVED***))

<a name="3.0.3"></a>

## [3.0.3](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-searchable-dropdown-react

<a name="3.0.2"></a>

## [3.0.2](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-searchable-dropdown-react

<a name="3.0.1"></a>

## 3.0.1 (2018-01-04)

**Note:** Version bump only for package ffe-searchable-dropdown-react

# Changelog for ffe-search-dropdown-react

## v3.0.0

* Bump React 15 -> 16
* Bump all outdated dependencies
* Fix new accessibility errors

## v2.1.4

* Bump devDeps of `ffe-core` and `ffe-form` to latest versions.
* FFE-consistent styling by replacing `.ffe-searchable-dropdown__dropdown-input-field`
  with `.ffe-dropdown` from `ffe-form`.
* Change Babel preset from deprecated `latest` to `env`.
* Disable npm lockfile and delete yarn lockfile.
* Other devDep bumps to fix peerDep warnings.
* Deprecated npm script `prepublish` replaced with `prepublishOnly`.
  `npm install` will no longer trigger build.

## v2.1.3

* Add prevent default for handled key events in onKeyDown function.

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
