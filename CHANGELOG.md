# CHANGELOG

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
