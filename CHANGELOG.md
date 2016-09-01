# Changelog

## v3.0.0
* (BREAKING): Button's `type` prop has been renamed to `buttonType`. This change
will only be breaking for direct consumers of the `<Button />` component - not
its specialized versions `<PrimaryButton />`, `<SecondaryButton />` etc.
* Allow overriding a button's `type` prop with `type="button"` or `type="reset"`
when needed - now the `<*Button />` components behave like regular HTML buttons.
The default is still `type="submit"`.
* Allow no `onClick` handler. Since the default type is `submit`, the default
click handler will trigger a `submit` event, which can be handled elsewhere,
rendering an `onClick` handler useless.

## v2.4.1
* Fix 'isTabbable' support: buttons are now tabbable by default if 'isTabbable' isn't specified.

## v2.4.0

* Buttons now accepts className from prop

## v2.3.0

* Buttons now accepts inline styles as a `style` prop

## v2.2.0

* Added tertiary button

## v2.1.0

* Deprecated the 'FFE' prefix in all button names.
* Add 'isTabbable' support.

## v2.0.0

* Bump `ffe-core` dependency to 6.x.

## v1.1.0

* Add `disableButton` support.

## v1.0.0

* First version.
