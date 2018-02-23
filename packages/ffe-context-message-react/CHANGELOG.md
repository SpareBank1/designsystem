# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="3.0.16"></a>
## [3.0.16](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.15...ffe-context-message-react@3.0.16) (2018-02-23)




**Note:** Version bump only for package ffe-context-message-react

      <a name="3.0.15"></a>
## [3.0.15](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.14...ffe-context-message-react@3.0.15) (2018-02-22)




**Note:** Version bump only for package ffe-context-message-react

  <a name="3.0.14"></a>
## [3.0.14](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.13...ffe-context-message-react@3.0.14) (2018-02-21)




**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.13"></a>
## [3.0.13](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.12...ffe-context-message-react@3.0.13) (2018-02-20)




**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.12"></a>
## [3.0.12](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.11...ffe-context-message-react@3.0.12) (2018-02-15)




**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.11"></a>
## [3.0.11](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.10...ffe-context-message-react@3.0.11) (2018-02-01)




**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.10"></a>
## [3.0.10](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.9...ffe-context-message-react@3.0.10) (2018-01-31)


### Bug Fixes

* Treeshake ffe-icons




<a name="3.0.9"></a>
## [3.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.8...ffe-context-message-react@3.0.9) (2018-01-19)




**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.8"></a>
## [3.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.7...ffe-context-message-react@3.0.8) (2018-01-19)


### Bug Fixes

* Upgrade ffe-icons-react to v4




<a name="3.0.7"></a>
## [3.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.6...ffe-context-message-react@3.0.7) (2018-01-19)




**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.6"></a>

## [3.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.5...ffe-context-message-react@3.0.6) (2018-01-10)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.5"></a>

## [3.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.4...ffe-context-message-react@3.0.5) (2018-01-10)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.4"></a>

## [3.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.3...ffe-context-message-react@3.0.4) (2018-01-09)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.3"></a>

## [3.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.2...ffe-context-message-react@3.0.3) (2018-01-05)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.2"></a>

## [3.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-context-message-react@3.0.1...ffe-context-message-react@3.0.2) (2018-01-04)

**Note:** Version bump only for package ffe-context-message-react

<a name="3.0.1"></a>

## 3.0.1 (2018-01-04)

**Note:** Version bump only for package ffe-context-message-react

# 3.0.0

### BREAKING CHANGES

* Requires React 16
* Requires `ffe-icons-react` 4.0.0
* No longer includes raw JS files. If you expect imports other than through
`ffe-context-message-react` or `ffe-context-message-react/lib/` your things
will break.

### Improvements

* Removed local dev server now that the package lives in a monorepo. Use
styleguidist from the monorepo root when developing.

## 2.3.3

### Improvements

* Improve documentation

### Bugfixes

* Fix some deprecation warnings

## 2.3.2

### Improvements

* Use PropTypes from prop-types package

## 2.3.1

### Improvements

* Expand peerDep scope of `ffe-context-message` to include `2.x`.
* Remove peerDep on `ffe-core`, `ffe-icons-react`, `react` and `react-dom`.

# 2.3.0

### Features

* FFE-177: add modifier for `--compact`. To use it set the prop `compact={true}`.
* If `className` is set, it will be applies to the root node of the component along with the FFE styles.
* `showCloseButton` is no longer required. It now defaults to `false`.

# 2.2.0

### Features

* Added <ContextErrorMessage /> component

## 2.1.1/2.1.2

### Improvements

* Update designguide doc

# 2.1.0

### Features

* Added <ContextSuccessMessage /> component

## 2.0.4

### Improvements

* Upgrade eslint to use latest ffe config.

## 2.0.3

### Features (sorry, SemVer)

* Added optional prop `animationLengtMs` to control animation length
* Added optional prop `headerElementId` for better universal accessibility
* Added optional prop `contentElementId` for better universal accessibility

### Bugfixes

* Bugfix: Remove from element from DOM on animation end

### Improvements

* Improvements in universal accessibility

## 2.0.2

### Bugfixes

* Less margin between header and body text

## 2.0.1

### Bugfixes

* Bugfix: close button is now properly removed when showCloseButton is true
* Bugfix: context-tip-message now accepts `nn` as locale
* Fixed example to no longer output warnings when generated
* Update README to correct `ny` to `nn`

# 2.0.0

### BREAKING CHANGES

* Removed default Icon. Icon is hidden if not provided.

### Features

* Added showCloseButton prop.

### Bugfixes

* Bugfix: removed required validation for locale.

## 1.0.1

### Bugfixes

* Bugfix: invalid prop name

# 1.0.0

### Features

First version
