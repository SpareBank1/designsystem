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
