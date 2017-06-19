# Changelog

## 4.4.0
* Support `aria-invalid` as a prop in addition to `invalid`.

## 4.3.0
* Increased version range for ffe-form to 6.x

## 4.2.0
* Added option to show checkbox in invalid state

## 4.1.2
* Expand peerDep scope of `ffe-form` to include `5.x`.
* Remove peerDep to `ffe-core`.

## 4.1.1
* Update eslint to latest ffe config

## 4.1.0
* Option to remove `ffe-checkbox--inline` by adding the property `inline=false`.

## 4.0.0
* Added support for ffe-form version 4.x

## 3.0.0

* Added support for arbitrary props on the input
* Breaking: Removed 'isTabbable' prop - use 'tabIndex' instead!
* Breaking: onChange now returns the event instead of just returning the value of the checkbox.

## 2.2.1

* Added support for ffe-form version 3.x.x

## v2.2.0

* Add support for removing checkbox from tab order via isTabbable prop

## v2.1.0

* Relaxing the peer dependency on `ffe-form` to allow both 1.x and 2.x

## v2.0.0

* Upgraded `ffe-checkbox-react` to require a peer dependency of
`ffe-core@^8.1.0` and `ffe-form@^1.0.1`. To upgrade, please add these two
dependencies to your `package.json`.
