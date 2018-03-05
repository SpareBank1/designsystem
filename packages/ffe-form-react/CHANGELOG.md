# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="3.0.1"></a>
## [3.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-form-react@3.0.0...@sb1/ffe-form-react@3.0.1) (2018-03-02)


### Bug Fixes

* Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))




      <a name="3.0.0"></a>
# 3.0.0 (2018-02-25)


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




    <a name="2.2.9"></a>
## [2.2.9](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.8...ffe-form-react@2.2.9) (2018-02-23)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.8"></a>
## [2.2.8](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.7...ffe-form-react@2.2.8) (2018-02-22)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.7"></a>
## [2.2.7](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.6...ffe-form-react@2.2.7) (2018-02-20)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.6"></a>
## [2.2.6](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.5...ffe-form-react@2.2.6) (2018-02-15)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.5"></a>
## [2.2.5](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.4...ffe-form-react@2.2.5) (2018-02-01)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.4"></a>
## [2.2.4](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.3...ffe-form-react@2.2.4) (2018-01-31)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.3"></a>
## [2.2.3](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.2...ffe-form-react@2.2.3) (2018-01-19)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.2"></a>
## [2.2.2](https://github.com/SpareBank1/designsystem/compare/ffe-form-react@2.2.1...ffe-form-react@2.2.2) (2018-01-19)




**Note:** Version bump only for package ffe-form-react

<a name="2.2.1"></a>

## 2.2.1 (2018-01-10)

**Note:** Version bump only for package ffe-form-react

# 2.2.0

* Allow specification of tabIndex for Tooltip, defaults to undefined.

# 2.1.0

* Allow arbitrary React nodes in the `fieldMessage` prop.
* Correctly set `.ffe-tooltip__icon--active` class on tooltip button when expanded.
* Add an optional `onTooltipToggle` to `InputGroup` which will be invoked on toggling tooltip if the tooltip is
provided as a string.
* `Tooltip` can be rendered with no children, which leads to it only rendering its button-controller.
* `label` is no longer a required prop for `InputGroup`.

## 2.0.2

* Ensure `InputGroup`'s automatic ID is a valid ID.
* Allow `Label`'s `htmlFor` prop to be optional

## 2.0.1

* Fix failing prop type for `InputGroup`

# 2.0.0

* BREAKING: `InputGroup` no longer supports sending in your own ID - it will now be generated
and applied automatically when needed.
* `InputGroup` now supports sending a function as a child, which lets you deal with sending in
several children (i.e. text nodes). See the README.md for how to use this.
* `InputGroup` will throw a descriptive error when used with several children instead of
with just one.

# 1.0.0

* First release.
