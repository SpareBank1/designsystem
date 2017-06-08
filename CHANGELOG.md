# Changelog

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
