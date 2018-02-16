# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

    <a name="8.2.0"></a>
# [8.2.0](***REMOVED***) (2018-02-16)


### Features

* **ffe-buttons-react:** Inline expand button ([fdf3326](***REMOVED***))




    <a name="8.1.7"></a>
## [8.1.7](***REMOVED***) (2018-02-15)




**Note:** Version bump only for package ffe-buttons-react

  <a name="8.1.6"></a>
## [8.1.6](***REMOVED***) (2018-02-09)




**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.5"></a>
## [8.1.5](***REMOVED***) (2018-02-05)


### Bug Fixes

* **ffe-buttons-react:** Remove type propType check ([a0c1c12](***REMOVED***))




<a name="8.1.4"></a>
## [8.1.4](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.3"></a>
## [8.1.3](***REMOVED***) (2018-01-31)


### Bug Fixes

* Treeshake ffe-icons ([d431cb3](***REMOVED***))




<a name="8.1.2"></a>
## [8.1.2](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.1"></a>
## [8.1.1](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.0"></a>
# [8.1.0](***REMOVED***) (2018-01-10)


### Features

* **ffe-buttons-react:** Add element prop ([ddaf0b6](***REMOVED***))




<a name="8.0.6"></a>

## [8.0.6](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.5"></a>

## [8.0.5](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.4"></a>

## [8.0.4](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.3"></a>

## [8.0.3](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.2"></a>

## [8.0.2](***REMOVED***) (2018-01-04)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.1"></a>

## [8.0.1](***REMOVED***) (2018-01-02)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.0"></a>

# [8.0.0](***REMOVED***) (2018-01-02)

### Code Refactoring

* **ffe-icons-react:** Improve API ([ecb9ac6](***REMOVED***))

### BREAKING CHANGES

* **ffe-icons-react:** Improve the API of ffe-icons-react.

This commit changes the API of the ffe-icons-react package to take
advantage of dead code eliminination and tree shaking in
Webpack >= 2.

Previously, you imported one and one icon from the corresponding
JSX file. Now all icons are available as named exports from the
root level of `ffe-icons-react`.

If you're using webpack@>=2.0.0, please make the following changes
to migrate:

```diff
- import ChevronIkon from 'ffe-icons-react/chevron-ikon';
- import FamilieIkon from 'ffe-icons-react/familie-ikon';
+ import { ChevronIkon, FamilieIkon } from 'ffe-icons-react';
```

If you're not using a build tool that enables dead code elimination
and tree shaking, please make the following changes to migrate:

```diff
- import ChevronIkon from 'ffe-icons-react/chevron-ikon';
- import FamilieIkon from 'ffe-icons-react/familie-ikon';
+ import ChevronIkon from 'ffe-icons-react/lib/chevron-ikon';
+ import FamilieIkon from 'ffe-icons-react/lib/familie-ikon';
```

This API change allows for cleaner usage and better documentation.

<a name="7.0.0"></a>

# 7.0.0 (2017-12-22)

### Bug Fixes

* Fix a few issues with the documentation ([83bee34](***REMOVED***))
* **ffe-buttons-react:** Fixed path to chevron icon ([4a16869](***REMOVED***))
* **ffe-icons-react:** Change hardcoded path of npm run build target ([ecfc6a3](***REMOVED***))

### Features

* **ffe-buttons-react:** Add contribute.md link to readme ([2b8ead4](***REMOVED***))
* **ffe-buttons-react:** Upgrade to React 16 ([f119120](***REMOVED***))

### Fix

* Rename all icons to end with -ikon ([f4b815a](***REMOVED***))

### BREAKING CHANGES

* This commit renames two icons in ffe-icons.
`bankid-icon` is now named `bankid-ikon`, and
`mynter-to-stabler-pluss` is now named `mynter-to-stabler-pluss-ikon`.

In addition, ffe-icons-react receives a fix that unbroke a previous
release

# Changelog

## v6.2.0

### 🚀 New features

* The `ExpandButton` component gets a React implementation. Consumers are in charge of reacting to clicks and
controlling state.
* `ActionButton` now has a boolean prop `ghost` to toggle the `--ghost` modifier

### 🏠 Housekeeping

* Documentation and refactoring of the button components.

## v6.1.2

### 🐛 Bugfixes

* Possible to use extra classes with Tertiary-button with icon

## v6.1.1

### 🚀 New features

* Now possible to use leftIcon with Tertiary-button

## v6.1.0

### 🚀 New features

* Add prop `buttonRef` so a DOM reference can be obtained

## v6.0.1

### 🏠 Housekeeping

* Use PropTypes from prop-types package

## v6.0.0

### 💥 Breaking changes

* (BREAKING) Remove button names with 'FFE' prefix that were deprecated in v2.1.0
* To migrate to v6.0.0, change your button imports as follows:
* FFEActionButton -> ActionButton
* FFEButton -> Button
* FFEPrimaryButton -> PrimaryButton
* FFESecondaryButton -> SecondaryButton
* FFEShortcutButton -> ShortcutButton

### 🚀 New features

* Add condensed property

### 🏠 Housekeeping

* Restructure tests
* Add live examples

## v5.2.0

### 🚀 New features

* Added support for icons in `<Button>`, `<SecondaryButton>` and `<TertiaryButton>`.
* Modified `ShortcutButton` to pass the `<ChevronIcon>` as a `rightIcon` prop to `<Button>`

## v5.1.2

### 🐛 Bugfixes

* Bugfix: ShortcutButton used wrong css-class on its icon.

## v5.1.1

### 🏠 Housekeeping

* Upgrade eslint and fix linting errors.

## v5.1.0

### 🚀 New features

* Add props drop-through to underlying `<Button>` component

## v5.0.0

### 💥 Breaking changes

* Shortcut button includes the ChevronIcon by default (FFE-115).

## v4.3.0

### 🚀 New features

* Added back button

## v4.2.0

### 🚀 New features

* Added support for autoFocus (native React prop)

## v4.1.0

### 🚀 New features

* `isLoading` will also set the attribute `aria-busy=true` on the button

### 🐛 Bugfixes

* Fix truly disabling button while `isLoading` (CSS `pointer-events:none` was an obscure and inefficient way to achieve this)

## v4.0.0

### 💥 Breaking changes

Package has been renamed to ffe-buttons-react (plural). Package
ffe-button-react is now deprecated.

ffe-buttons-react introduces a new peerDependency in ffe-buttons. It also
bumps the peerDependency on ffe-core to ^8.0.1

## v3.0.0

### 💥 Breaking changes

* (BREAKING): Button's `type` prop has been renamed to `buttonType`. This change
will only be breaking for direct consumers of the `<Button />` component - not
its specialized versions `<PrimaryButton />`, `<SecondaryButton />` etc.

### 🚀 New features

* Allow overriding a button's `type` prop with `type="button"` or `type="reset"`
when needed - now the `<*Button />` components behave like regular HTML buttons.
The default is still `type="submit"`.
* Allow no `onClick` handler. Since the default type is `submit`, the default
click handler will trigger a `submit` event, which can be handled elsewhere,
rendering an `onClick` handler useless.

## v2.4.1

### 🐛 Bugfixes

* Fix 'isTabbable' support: buttons are now tabbable by default if 'isTabbable' isn't specified.

## v2.4.0

### 🚀 New features

* Buttons now accepts className from prop

## v2.3.0

### 🚀 New features

* Buttons now accepts inline styles as a `style` prop

## v2.2.0

### 🚀 New features

* Added tertiary button

## v2.1.0

### 🚀 New features

* Add 'isTabbable' support.

### 🏠 Housekeeping

* Deprecated the 'FFE' prefix in all button names.

## v2.0.0

### 💥 Breaking changes

* Bump `ffe-core` dependency to 6.x.

## v1.1.0

### 🚀 New features

* Add `disableButton` support.

## v1.0.0

* First version.
