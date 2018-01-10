# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

    <a name="3.0.6"></a>

## [3.0.6](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-context-message-react

    <a name="3.0.5"></a>

## [3.0.5](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.4"></a>

## [3.0.4](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.3"></a>

## [3.0.3](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.2"></a>

## [3.0.2](***REMOVED***) (2018-01-04)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.1"></a>

## 3.0.1 (2018-01-04)

**Note:** Version bump only for package ffe-context-message-react

# CHANGELOG

## 3.0.0

### 💥 Breaking changes

* Requires React 16
* Requires `ffe-icons-react` 4.0.0
* No longer includes raw JS files. If you expect imports other than through
  `ffe-context-message-react` or `ffe-context-message-react/lib/` your things
  will break.

### 🏠 Improvements

* Removed local dev server now that the package lives in a monorepo. Use
  styleguidist from the monorepo root when developing.

## 2.3.3

### 🏠 Improvements

* Improve documentation

### 🐛 Bugfixes

* Fix some deprecation warnings

## 2.3.2

### 🏠 Improvements

* Use PropTypes from prop-types package

## 2.3.1

### 🏠 Improvements

* Expand peerDep scope of `ffe-context-message` to include `2.x`.
* Remove peerDep on `ffe-core`, `ffe-icons-react`, `react` and `react-dom`.

## 2.3.0

### 🚀 New features

* FFE-177: add modifier for `--compact`. To use it set the prop `compact={true}`.
* If `className` is set, it will be applies to the root node of the component along with the FFE styles.
* `showCloseButton` is no longer required. It now defaults to `false`.

## 2.2.0

### 🚀 New features

* Added <ContextErrorMessage /> component

## 2.1.1/2.1.2

### 🏠 Improvements

* Update designguide doc

## 2.1.0

### 🚀 New features

* Added <ContextSuccessMessage /> component

## 2.0.4

### 🏠 Improvements

* Upgrade eslint to use latest ffe config.

## 2.0.3

### 🚀 New features (sorry, SemVer)

* Added optional prop `animationLengtMs` to control animation length
* Added optional prop `headerElementId` for better universal accessibility
* Added optional prop `contentElementId` for better universal accessibility

### 🐛 Bugfixes

* Bugfix: Remove from element from DOM on animation end

### 🏠 Improvements

* Improvements in universal accessibility

## 2.0.2

### 🐛 Bugfixes

* Less margin between header and body text

## 2.0.1

### 🐛 Bugfixes

* Bugfix: close button is now properly removed when showCloseButton is true
* Bugfix: context-tip-message now accepts `nn` as locale
* Fixed example to no longer output warnings when generated
* Update README to correct `ny` to `nn`

## 2.0.0

### 💥 Breaking changes

* Removed default Icon. Icon is hidden if not provided.

### 🚀 New features

* Added showCloseButton prop.

### 🐛 Bugfixes

* Bugfix: removed required validation for locale.

## 1.0.1

### 🐛 Bugfixes

* Bugfix: invalid prop name

## 1.0.0

### 🚀 New features

First version
