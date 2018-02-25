# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>
# 2.0.0 (2018-02-25)


### Bug Fixes

* **ffe-radio-button-react:** Do not create a new id on render ([ab38163](https://github.com/SpareBank1/designsystem/commit/ab38163))
* **ffe-radio-button-react:** Repalce sdbm with uuid ([cb4fe00](https://github.com/SpareBank1/designsystem/commit/cb4fe00))


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




<a name="1.2.10"></a>
## [1.2.10](https://github.com/SpareBank1/designsystem/compare/ffe-radio-button-react@1.2.9...ffe-radio-button-react@1.2.10) (2018-02-23)




**Note:** Version bump only for package ffe-radio-button-react

<a name="1.2.9"></a>
## [1.2.9](https://github.com/SpareBank1/designsystem/compare/ffe-radio-button-react@1.2.8...ffe-radio-button-react@1.2.9) (2018-02-22)




**Note:** Version bump only for package ffe-radio-button-react

<a name="1.2.8"></a>
## [1.2.8](https://github.com/SpareBank1/designsystem/compare/ffe-radio-button-react@1.2.7...ffe-radio-button-react@1.2.8) (2018-02-20)




**Note:** Version bump only for package ffe-radio-button-react

<a name="1.2.7"></a>
## [1.2.7](https://github.com/SpareBank1/designsystem/compare/ffe-radio-button-react@1.2.6...ffe-radio-button-react@1.2.7) (2018-02-09)


### Bug Fixes

* **ffe-radio-button-react:** Do not create a new id on render




<a name="1.2.6"></a>
## [1.2.6](https://github.com/SpareBank1/designsystem/compare/ffe-radio-button-react@1.2.5...ffe-radio-button-react@1.2.6) (2018-01-19)




**Note:** Version bump only for package ffe-radio-button-react

<a name="1.2.5"></a>

## [1.2.5](https://github.com/SpareBank1/designsystem/compare/ffe-radio-button-react@1.2.4...ffe-radio-button-react@1.2.5) (2018-01-10)

**Note:** Version bump only for package ffe-radio-button-react

<a name="1.2.4"></a>

## [1.2.4](https://github.com/SpareBank1/designsystem/compare/ffe-radio-button-react@1.2.3...ffe-radio-button-react@1.2.4) (2018-01-10)

### Bug Fixes

* **ffe-radio-button-react:** Repalce sdbm with uuid

<a name="1.2.3"></a>

## 1.2.3 (2018-01-10)

**Note:** Version bump only for package ffe-radio-button-react

## 1.2.2

* Move react and react-dom to devDependencies

## 1.2.1

* Use PropTypes from prop-types package

# 1.2.0 (17.7.2017)

* Fixed: `aria-invalid` was not being set on `input`-elements.
* Removed `aria-invalid` from `RadioButtonGroup`s fieldset.
* `invalid` is an alias for `aria-invalid` either can be used and will produce the same result.
* `aria-invalid`/`invalid` now accepts both boolean values and `true`/`false` as a string.

# 1.1.0 (22.5.2017)

* Fixed invalid prop on radio button, radio button group and radio switch to handle the validation error state

# 1.0.0 (18.5.2017)

* Potential breaking change! Styles sent to component could previously not be changed by consumer as this was stored only to state in the constructor. Refactored code to handle updating styles from consumer after initialization.
* Added tooltip icon to toggle showing helping text when clicked

## 0.5.0 (25.4.2017)

* Pass through additional `props` passed to `RadioSwitch` onwards to `RadioButtonGroup`.
* Pass through additional `props` passed to `RadioButtonGroup` onwards to `fieldset`, then we can add additional stuff such as `aria-labelledby` directly.
* Pass through additional `props` passed to `RadioBase` onwards to `input`.

## 0.4.3 (25.4.2017)

* Removed `aria-live="polite"` from `RadioButtonGroup`, as it should not be used to wrap all input fields.

## 0.4.2 (27.12.2016)

* Update eslint configuraton to use latest ffe config.

## 0.4.1 (24.10.2016)

* Fix bug where `aria-invalid` was set to `undefined` if not provided, instead of `false`.

## 0.4.0 (20.10.2016)

* Add `invalid` property to `RadioButtonGroup` and `RadioSwitch` for setting `aria-invalid` property

## 0.3.4 (17.10.2016)

* Updated radio-switch with new value propType requirement

## 0.3.3 (13.10.2016)

* Fixed PropType mistake boolean -> bool

## 0.3.2 (13.10.2016)

* Added "value" requirements to 'radio-button-group'
* Removed with trailing slashes in array

## 0.3.1 (13.10.2016)

* Enforce the same "value" requirements for all components

## 0.3.0

* Add `RadioSwitch` component
* Internal refactor to reuse code in new component

## 0.2.1 (28.7.2016)

* Change `legend` to be blocking when radio-buttons are inline.

## 0.2.0 (6.5.2016)

* Change the `RadioButtonGroup` fieldset's `label` to a `legend`.

## 0.1.0 (2.5.2016)

* First version.
