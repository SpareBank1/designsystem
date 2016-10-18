# Changelog

## v3.0.0
* **Potentially breaking change:** Responsive implementation of ffe-input-field and ffe-dropdown.
* ffe-input-field and ffe-dropdown has now 100% width when rendered on mobile-size screen (less than 480px)
* Introduced new responsive class ffe-textarea.

## v2.0.6
* Changed font-size and line height of ffe-form-label.

## v2.0.5
* Better positioning of the Dropdown arrow down icon.

## v2.0.4
* Gave radio switches a white background when not selected, so that they work
correctly on non-white backgrounds as well

## v2.0.3
* Updated the focus state to have correct focus color and to not have an
box-shadow

## v2.0.2
* Updated the active color of ffe-radio-switch to `ffe-blue-royal`

## v2.0.1
* Fix for ffe-dropdown to insure that the color and background color set correctly for a selected option in IE.

## v2.0.0
* **Potentially breaking change:** in order to support tooltips for form labels, the block-level relationship between labels and fields has been inverted:
    * `ffe-form-label` is now an `inline-block`. In order to keep the old behaviour add the new class `ffe-form-label--block` to your labels.
    * Input fields and dropdowns are now `block`s.In order to keep the old behaviour add the corresponding `--inline` modifier class, i.e.:
        * `ffe-input-field` - `ffe-input-field--inline`
        * `ffe-dropdown` - `ffe-dropdown--inline`
* Added `ffe-tooltip` for form label tooltips.

## v1.1.0
* Moved styling from ffe-dropdown into this package
* Updated examples with dropdown in error state

## v1.0.2
* `ffe-field-error-message` and `ffe-field-success-message` get `aria-hidden` styling

## v1.0.1
* Add missing .ffe-sb1-radioblob mixin removed in ffe-core@8
* Fix build commands
* Fix class name for field-error-message
* Fix extending field-info-message
* Split example.html into smaller more manageable parts. Removed code snippets in the process.
* Descriptions are hidden when visual tests run.

## v1.0.0
* Første versjon av ffe-form-pakken
* Less-filene er basert på ffe-core v7.0.1 (https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-core/browse/) and kan brukes med ffe-core >= v8.0.0
* ffe-info-message fra ffe-core ble døpt om til ffe-field-info-message
* ffe-field-error-message og ffe-field-success-message er trukket ut fra ffe-message i ffe-core v7.0.1
* ffe-input-group ble inkludert her i v1.0.0, men dens eksistens er oppe til diskusjon
