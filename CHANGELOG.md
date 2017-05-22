# Changelog

## v1.0.1 (22.5.2017)
* Fixed invalid prop on radio button, radio button group and radio switch to handle the validation error state

## v1.0.0 (18.5.2017)
* Potential breaking change! Styles sent to component could previously not be changed by consumer as this was stored only to state in the constructor. Refactored code to handle updating styles from consumer after initialization.
* Added tooltip icon to toggle showing helping text when clicked

## v0.5.0 (25.4.2017)

* Pass through additional `props` passed to `RadioSwitch` onwards to `RadioButtonGroup`.
* Pass through additional `props` passed to `RadioButtonGroup` onwards to `fieldset`, then we can add additional stuff such as `aria-labelledby` directly.
* Pass through additional `props` passed to `RadioBase` onwards to `input`.

## v0.4.3 (25.4.2017)

* Removed `aria-live="polite"` from `RadioButtonGroup`, as it should not be used to wrap all input fields.

## v0.4.2 (27.12.2016)

* Update eslint configuraton to use latest ffe config.

## v0.4.1 (24.10.2016)

* Fix bug where `aria-invalid` was set to `undefined` if not provided, instead of `false`.

## v0.4.0 (20.10.2016)

* Add `invalid` property to `RadioButtonGroup` and `RadioSwitch` for setting `aria-invalid` property

## v0.3.4 (17.10.2016)

* Updated radio-switch with new value propType requirement

## v0.3.3 (13.10.2016)

* Fixed PropType mistake boolean -> bool

## v0.3.2 (13.10.2016)

* Added "value" requirements to 'radio-button-group'
* Removed with trailing slashes in array

## v0.3.1 (13.10.2016)

* Enforce the same "value" requirements for all components

## v0.3.0

* Add `RadioSwitch` component
* Internal refactor to reuse code in new component

## v0.2.1 (28.7.2016)

* Change `legend` to be blocking when radio-buttons are inline.

## v0.2.0 (6.5.2016)

* Change the `RadioButtonGroup` fieldset's `label` to a `legend`.

## v0.1.0 (2.5.2016)

* First version.
