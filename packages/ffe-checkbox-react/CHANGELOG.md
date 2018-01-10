# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="4.4.8"></a>

## [4.4.8](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-checkbox-react

      <a name="4.4.7"></a>

## [4.4.7](***REMOVED***) (2018-01-10)

### Bug Fixes

* **ffe-checkbox-react:** Replace sdbm with uuid ([225ecf4](***REMOVED***))

<a name="4.4.6"></a>

## 4.4.6 (2018-01-10)

### Bug Fixes

* Replace eslint ignore with customized lint rule. ([ff23e8d](***REMOVED***))

# Changelog

# 4.4.5

* Added inline JSDoc comments
* `label` prop is no longer required
* Deprecated two props - `invalid` and `label` - both are to be removed in 5.0.0

# 4.4.4

* Bugfix: If the `<Checkbox>` was given an id as a prop, the connection between label and input was broken
  because the input would be given the provided id while the label would be given the internal generated id.
  This meant you'd need to be a goddamn sniper to click the checkbox rather than being able to just click its
  label. This fix makes the component use the provided ID instead of a generated one, which seems the most
  intuitive way to handle this.

# 4.4.3

* Update peerDep on `ffe-form` to include version `8.x`
* Bump devDeps to `ffe-core@10.1.1` and `ffe-form@8.1.1`

## 4.4.2

* Use PropTypes from prop-types package

## 4.4.1

* Added examples for local testing.
* Bumped devDep on `ffe-form` to `7.0.2` to fix styling of invalid.

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
