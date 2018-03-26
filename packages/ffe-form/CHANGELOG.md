# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="9.0.4"></a>
## [9.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form@9.0.3...@sb1/ffe-form@9.0.4) (2018-03-22)


### Bug Fixes

* **ffe-form:** Use actual icons for field messages as opposed to text intended to look like icons ([0baa0a8](https://github.com/SpareBank1/designsystem/commit/0baa0a8))




      <a name="9.0.3"></a>
## [9.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form@9.0.2...@sb1/ffe-form@9.0.3) (2018-03-13)


### Bug Fixes

* **ffe-form:** Add space between radio switches ([834ad26](https://github.com/SpareBank1/designsystem/commit/834ad26))




    <a name="9.0.2"></a>
## [9.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form@9.0.0...@sb1/ffe-form@9.0.2) (2018-03-07)


### Bug Fixes

* Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))
* **ffe-form:** Add vertical padding to textarea ([d3ffe3f](https://github.com/SpareBank1/designsystem/commit/d3ffe3f)), closes [#38](https://github.com/SpareBank1/designsystem/issues/38)




  <a name="9.0.1"></a>
## [9.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form@9.0.0...@sb1/ffe-form@9.0.1) (2018-03-02)


### Bug Fixes

* Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))
* **ffe-form:** Add vertical padding to textarea ([4fe4ba8](https://github.com/SpareBank1/designsystem/commit/4fe4ba8)), closes [#38](https://github.com/SpareBank1/designsystem/issues/38)




<a name="9.0.0"></a>
# 9.0.0 (2018-02-25)


### Bug Fixes

* remove all references to internal system ([ff22340](https://github.com/SpareBank1/designsystem/commit/ff22340))


### Chores

* add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))


### BREAKING CHANGES

* All packages have been renamed to add the @sb1 scope.

See links [1] and [2] to read more about package scopes.

Unfortunately this requires you update both your dependencies in
`package.json` and all `import` or `require` statements in your code.
Also, you unfortunately have to upgrade all FFE packages at once due to
dependency between packages. If you are on the latest version prior to
this breaking change the upgrade should be a matter of updating
`package.json` with new package names and versions, and updating your
imports.

To help find the proper package versions you can either browse to the
packages you need or check out the list of Git tags either on
Github [3] or by cloning the repository and running the `git tag`
command. All package versions get a tag in the format
_package@version_.

Update your `package.json` with the latest package version and add the
@sb1 scope to the package name:

```diff
- "ffe-core": "11.0.2",
+ "@sb1/ffe-core": "11.0.2",
```

Scoped packages all get put in a subdirectory in `node_modules/`. In our
case packages will be put in the `node_modules/@sb1/` directory. If your
build depends on file paths (for instance for copying fonts) you need to
update that path to include the scope.

The directory structure also means you have to update your imports, both
in Less and in JavaScript.

Using `less-plugin-npm-import`:

```diff
- @import 'npm://ffe-core/less/ffe';
+ @import 'npm://@sb1/ffe-core/less/ffe';
```

Using Webpack:

```diff
- @import '~ffe-core/less/ffe';
+ @import '~@sb1/ffe-core/less/ffe';
```

Using plain old paths:

```diff
- @import '../path/to/node_modules/ffe-core/less/ffe';
+ @import '../path/to/node_modules/@sb1/ffe-core/less/ffe';
```

JavaScript `import`:

```diff
- import { ActionButton } from 'ffe-buttons-react';
+ import { ActionButton } from '@sb1/ffe-buttons-react';
```

JavaScript `require`:

```diff
- const { ActionButton } = require('ffe-buttons-react').default;
+ const { ActionButton } = require('@sb1/ffe-buttons-react').default;
```

[1]: https://docs.npmjs.com/misc/scope
[2]: https://docs.npmjs.com/getting-started/scoped-packages
[3]: https://github.com/sparebank1/designsystem/tags




<a name="8.1.12"></a>
## [8.1.12](https://github.com/SpareBank1/designsystem/compare/ffe-form@8.1.11...ffe-form@8.1.12) (2018-02-23)




**Note:** Version bump only for package ffe-form

<a name="8.1.11"></a>
## [8.1.11](https://github.com/SpareBank1/designsystem/compare/ffe-form@8.1.10...ffe-form@8.1.11) (2018-02-22)




**Note:** Version bump only for package ffe-form

<a name="8.1.10"></a>
## [8.1.10](https://github.com/SpareBank1/designsystem/compare/ffe-form@8.1.9...ffe-form@8.1.10) (2018-02-20)




**Note:** Version bump only for package ffe-form

<a name="8.1.9"></a>
## [8.1.9](https://github.com/SpareBank1/designsystem/compare/ffe-form@8.1.8...ffe-form@8.1.9) (2018-02-15)




**Note:** Version bump only for package ffe-form

<a name="8.1.8"></a>
## [8.1.8](https://github.com/SpareBank1/designsystem/compare/ffe-form@8.1.7...ffe-form@8.1.8) (2018-02-01)




**Note:** Version bump only for package ffe-form

<a name="8.1.7"></a>
## [8.1.7](https://github.com/SpareBank1/designsystem/compare/ffe-form@8.1.6...ffe-form@8.1.7) (2018-01-19)




**Note:** Version bump only for package ffe-form

<a name="8.1.6"></a>
## [8.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-form@8.1.5...ffe-form@8.1.6) (2018-01-19)




**Note:** Version bump only for package ffe-form

<a name="8.1.5"></a>

## 8.1.5 (2018-01-10)

**Note:** Version bump only for package ffe-form

## 8.1.4

* Fjerne implisitt clearing i ie for input fields

## 8.1.3

* Fjerne implisitt clearing i ie for dropdown

## 8.1.2

* Bump devDep and peerDep of `ffe-core` from `^10.1.1` to `^10.1.2`.
* Adjust font-family of `input-field` and `textarea` from `MuseoSans-300` to `MuseoSans-500`.

## 8.1.1

* Adjusted `.ffe-radio-button` focus state and transitions to more closely reflect the behaviour of `.ffe-checkbox`

# 8.1.0

* Add new input-field modifier `--condensed`

# 8.0.0

* BREAKING: peerDependency to `ffe-core` bumped to new major
* Replaced hardcoded font-sizes with mixins from ffe-core

## 7.0.3

* Changed font-weight of .ffe-dropdown from 300 to 500

## 7.0.2

* Fixed `peerDependencies` field for `ffe-core` that was mixed up with `devDepedencies`

## 7.0.1

* Fixed bug where delete button was not visually focused on file-upload
* Fixed vertical alignment to center on uploaded files

# 7.0.0

* **Breaking change** in .ffe-file-upload to look like the specification from designers
* Added option to set aria-invalid on file upload

# 6.4.0

* Add new input-field modifier, `--text-like` for use in inputs that are inlined in text

## 6.3.1

* Support both versions 9 and 10 of `ffe-core`

# 6.3.0

* Added .ffe-file-upload

# 6.2.0

* Added handling of invalid prop on checkbox (validation error)

# 6.1.0

* Added handling of invalid prop on radio button and radio switch (validation error)

# 6.0.0

* Removed class error-summary. The design is outdated and new class and react-component can be found in ffe-message-box and ffe-message-box-react

## 5.2.1

* Added missing margin on tooltip text on radio button

# 5.2.0

* Adding optional tooltip on radio buttons for extra information

## 5.1.3

* Reset border to 0 for `ffe-input-group`, so that the class can be used with `fieldset`-elements

## 5.1.2

* Replaced hardcoded transition properties with variables from ffe-core

## 5.1.1

* Remove background color on ffe-radio-button. Was set to white which made it look weird if used in containers with different colors.

# 5.1.0

* Set default text color for input fields and selects to `@ffe-black`
* Remove orange text color from invalid input-fields and dropdown

# 5.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## 4.1.5

* Removed use of `line-height` to set `ffe-radio-block__header` height, instead use `padding`. This so line breaks won't look awkward - with padding around every text row.

## 4.1.4

* Modified the `padding-bottom` for `ffe-form-label` from 8px to 2px

## 4.1.3

* Changed color of option text in selects with validation errors to default blue in stead of inherited red.

## 4.1.2

* Added space underneath radio-switches on small devices and updated visual tests with longer button text.

## 4.1.1

* Modified the font size for dropdowns from 18px to 16px.

# 4.1.0

* Remove vendor prefix on appearance property. Autoprefixer FTW!

## 4.0.2

* Meta data for styleguide

## 4.0.1

* Remove Mozilla dropdown focus ring to fix double focus highlight on dropdown in Firefox

# 4.0.0

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

## 3.1.1

* Adjusted the height of ffe-dropdown to match the height of ffe-input-field.

# 3.1.0

* Added class `.ffe-dropdown--small` to support narrow dropdowns.

## 3.0.1

* Added padding for large text to checkbox

# 3.0.0

* **Potentially breaking change:** Responsive implementation of ffe-input-field and ffe-dropdown.
* ffe-input-field and ffe-dropdown has now 100% width when rendered on mobile-size screen (less than 480px)
* Introduced new responsive class ffe-textarea.

## 2.0.6

* Changed font-size and line height of ffe-form-label.

## 2.0.5

* Better positioning of the Dropdown arrow down icon.

## 2.0.4

* Gave radio switches a white background when not selected, so that they work
correctly on non-white backgrounds as well

## 2.0.3

* Updated the focus state to have correct focus color and to not have an
box-shadow

## 2.0.2

* Updated the active color of ffe-radio-switch to `ffe-blue-royal`

## 2.0.1

* Fix for ffe-dropdown to insure that the color and background color set correctly for a selected option in IE.

# 2.0.0

* **Potentially breaking change:** in order to support tooltips for form labels, the block-level relationship between labels and fields has been inverted:
* `ffe-form-label` is now an `inline-block`. In order to keep the old behaviour add the new class `ffe-form-label--block` to your labels.
* Input fields and dropdowns are now `block`s.In order to keep the old behaviour add the corresponding `--inline` modifier class, i.e.:
* `ffe-input-field` - `ffe-input-field--inline`
* `ffe-dropdown` - `ffe-dropdown--inline`
* Added `ffe-tooltip` for form label tooltips.

# 1.1.0

* Moved styling from ffe-dropdown into this package
* Updated examples with dropdown in error state

## 1.0.2

* `ffe-field-error-message` and `ffe-field-success-message` get `aria-hidden` styling

## 1.0.1

* Add missing .ffe-sb1-radioblob mixin removed in ffe-core@8
* Fix build commands
* Fix class name for field-error-message
* Fix extending field-info-message
* Split example.html into smaller more manageable parts. Removed code snippets in the process.
* Descriptions are hidden when visual tests run.

# 1.0.0

* Første versjon av ffe-form-pakken
* Less-filene er basert på ffe-core v7.0.1 og kan brukes med ffe-core >= v8.0.0
* ffe-info-message fra ffe-core ble døpt om til ffe-field-info-message
* ffe-field-error-message og ffe-field-success-message er trukket ut fra ffe-message i ffe-core v7.0.1
* ffe-input-group ble inkludert her i v1.0.0, men dens eksistens er oppe til diskusjon
