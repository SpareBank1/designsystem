# Changelog

## HEAD

* Remove orange text color from invalid input-fields and dropdown

## Version 5.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## v4.1.5
* Removed use of `line-height` to set `ffe-radio-block__header` height, instead use `padding`. This so line breaks won't look awkward - with padding around every text row.

## v4.1.4
* Modified the `padding-bottom` for `ffe-form-label` from 8px to 2px

## v4.1.3
* Changed color of option text in selects with validation errors to default blue in stead of inherited red.

## v4.1.2
* Added space underneath radio-switches on small devices and updated visual tests with longer button text.

## v4.1.1
* Modified the font size for dropdowns from 18px to 16px.

## v4.1.0
* Remove vendor prefix on appearance property. Autoprefixer FTW!

## v4.0.2
* Meta data for styleguide

## v4.0.1
* Remove Mozilla dropdown focus ring to fix double focus highlight on dropdown in Firefox

## v4.0.0
* Removed layout styles from `ffe-form`. In practice all width styling is now removed and
  consumers must provide their own class on the form of
  ```
  [project-prefix]-input--[modifier] {
      width: 120 px;
  }
  ```
  Removed features:
    * `dropdown` no longer supports `--small` modifier
    * `dropdown` no longer has a `min-width`
    * `error-summary` no longer has a `max-width`
    * `input-field` no longer supports `--small`, `--medium` and `--large` modifiers
    * `radio-block` no longer has a `min-width` or a `max-width`
    * `radio-switch` no longer has a `min-width`
    * `text-area` no longer uses media-queries, defaults to 100% width always

It is recommended that each consumer set up their own regime for managing the width of
input controls due to the distinct lack of a common set of requirements across platforms
and organizations.

## v3.1.1
* Adjusted the height of ffe-dropdown to match the height of ffe-input-field.

## v3.1.0
* Added class `.ffe-dropdown--small` to support narrow dropdowns.

## v3.0.1
* Added padding for large text to checkbox

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
