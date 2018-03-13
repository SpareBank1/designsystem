# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.3"></a>
## [4.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-system-message-react@4.0.2...@sb1/ffe-system-message-react@4.0.3) (2018-03-13)




**Note:** Version bump only for package @sb1/ffe-system-message-react

<a name="4.0.2"></a>
## [4.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-system-message-react@4.0.0...@sb1/ffe-system-message-react@4.0.2) (2018-03-07)


### Bug Fixes

* Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))




<a name="4.0.1"></a>
## [4.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-system-message-react@4.0.0...@sb1/ffe-system-message-react@4.0.1) (2018-03-02)


### Bug Fixes

* Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))




<a name="4.0.0"></a>
# 4.0.0 (2018-02-25)


### Bug Fixes

* remove all references to internal system ([ff22340](https://github.com/SpareBank1/designsystem/commit/ff22340))


### Chores

* **ffe-system-message-react:** Import component ([6a3152c](https://github.com/SpareBank1/designsystem/commit/6a3152c))
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
* **ffe-system-message-react:** the `files` property has been changed to only include
the `lib/` folder. If you imported anything from anywhere else you need
to update your imports to go through the official channels.

With this ffe-system-message-react lives in the monorepo. All new
changes must be done there.




<a name="3.0.3"></a>
## [3.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-system-message-react@3.0.2...ffe-system-message-react@3.0.3) (2018-02-23)




**Note:** Version bump only for package ffe-system-message-react

<a name="3.0.2"></a>
## [3.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-system-message-react@3.0.1...ffe-system-message-react@3.0.2) (2018-02-22)




**Note:** Version bump only for package ffe-system-message-react

<a name="3.0.1"></a>
## [3.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-system-message-react@3.0.0...ffe-system-message-react@3.0.1) (2018-02-15)




**Note:** Version bump only for package ffe-system-message-react

<a name="3.0.0"></a>
# 3.0.0 (2018-01-29)


### Chores

* **ffe-system-message-react:** Import component


### BREAKING CHANGES

* **ffe-system-message-react:** the `files` property has been changed to only include
the `lib/` folder. If you imported anything from anywhere else you need
to update your imports to go through the official channels.

With this ffe-system-message-react lives in the monorepo. All new
changes must be done there.

# 2.0.0
* Upgraded to work with ffe-icons-react 4.x.
* Bumped versions

## 1.2.1
* Added documentation for Styleguidist

# 1.2.0
* Added support for on close callback using onClose prop

## 1.1.5
* Use PropTypes from prop-types package

## 1.1.4
* Removed peerDep on ffe-core

## 1.1.3
* Added description to example

## 1.1.2
* Minor bugfix in example

## 1.1.1
* Upgrade eslint to use ffe config

# 1.1.0
* Added styling support for outer container using style prop
* Bumped ffe-icons-react dependency

## 1.0.1

Update version number after build includes examples

# 1.0.0
Bumped dependency on
* `ffe-core` to `^8.1.0`
* `ffe-icons-react` to `1.1.1`
* `ffe-system-message` to `1.0.0`
* Added implicit dependency on  mkdirp

## 0.1.3
Oppdatert example.html til å inneholde alle meldingstyper

## 0.1.2
Tidligere versjon var laget med utgangspunkt i feil designskisser

## 0.1.1
Spesifiser filer som skal inkluderes i pakka

## 0.1.0
La til støtte for å bruke --success og --error modifiers fra `ffe-system-message`

## 0.0.1
Første versjon
