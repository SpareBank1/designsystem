# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.1"></a>

## [3.0.1](***REMOVED***) (2018-01-12)

**Note:** Version bump only for package ffe-dropdown-react

<a name="3.0.0"></a>

# 3.0.0 (2018-01-12)

### Chores

* **ffe-dropdown-react:** Import ffe-dropdown-react ([7ba8e47](***REMOVED***))

### BREAKING CHANGES

* **ffe-dropdown-react:** Simplify the ffe-dropdown-react implementation.

This commit simplifies the component, and leaves more of the
compositional power to the consumer.

In order to migrate to this new major, the consumer should wrap
their existing component in `ffe-form-react`'s `InputGroup`
component. This will provide most of the functionality that this
major removes from `ffe-dropdown-react`. Please refer to the
documentation for new usage information.

# Changelog

## 2.9.2

* Setting the default behaviour to tabbable.

## 2.9.1

* Add support for version 8 of `ffe-form`.
* Specify version of `React`-related packages to `15.x`

## 2.9.0

* Added support for `isTabbable`

## 2.8.1

* Use PropTypes from prop-types package

## 2.8.0

* Increased version range for ffe-form.

## 2.7.0

* Pass through (almost) all `props` passed to `Dropdown` directly to `select`. Then we can use the component more like the native ones.
* Remove `aria-live="polite"` from the wrapping input group.

## 2.6.1

* Expand peerDep scope of `ffe-form` to include `5.x`.
* Remove peerDep on `ffe-core` and `ffe-spinner`.

## 2.6.0

* Added support for autoFocus attribute

## 2.5.2

* Use latest FFE eslint config

## 2.5.1

* Added support for ffe-form version 4.x.x

## 2.5.0

* Added support for `name` property

## 2.4.2

* Added ffe-form-label--block to label

## 2.4.1

* Added support for ffe-form version 3.x.x

## 2.4.0

* Added added support for css styling of container-div, using prop containerClassName

## 2.3.0

* Added onBlur support

## 2.2.0

* Relaxing the peer dependency on `ffe-form` to allow both 1.x and 2.x

## 2.1.0

* Removed dependency on ffe-dropdown - styling in ffe-dropdown has been moved to ffe-form
* Bumped dependency on ffe-form

## 2.0.0

* Bumped dependency on `ffe-core` to `^8.0.2`
* Added peerDependency on `ffe-form`, `ffe-spinner` and `ffe-dropdown`
* Added a budo example page that can be launched with `npm start`
* Fixed error message class by updating to `.ffe-field-error-message`

## 1.8.0

* Add isLoading support

## 1.7.0

* Add custom className support

## 1.6.0

* Add error message support

## 1.5.0 (16.6.2016)

* Add `defaultValue` property.
