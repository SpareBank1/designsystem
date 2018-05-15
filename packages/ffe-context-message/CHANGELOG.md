# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.9"></a>
## [3.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.8...@sb1/ffe-context-message@3.0.9) (2018-05-08)




**Note:** Version bump only for package @sb1/ffe-context-message

<a name="3.0.8"></a>
## [3.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.7...@sb1/ffe-context-message@3.0.8) (2018-05-04)




**Note:** Version bump only for package @sb1/ffe-context-message

<a name="3.0.7"></a>
## [3.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.6...@sb1/ffe-context-message@3.0.7) (2018-05-03)




**Note:** Version bump only for package @sb1/ffe-context-message

<a name="3.0.6"></a>
## [3.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.5...@sb1/ffe-context-message@3.0.6) (2018-04-11)




**Note:** Version bump only for package @sb1/ffe-context-message

<a name="3.0.5"></a>
## [3.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.4...@sb1/ffe-context-message@3.0.5) (2018-04-10)




**Note:** Version bump only for package @sb1/ffe-context-message

<a name="3.0.4"></a>
## [3.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.3...@sb1/ffe-context-message@3.0.4) (2018-03-27)




**Note:** Version bump only for package @sb1/ffe-context-message

<a name="3.0.3"></a>
## [3.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.2...@sb1/ffe-context-message@3.0.3) (2018-03-22)


### Bug Fixes

* **ffe-context-message:** Fix icons with wrong colors and dimensions ([aad18c6](https://github.com/SpareBank1/designsystem/commit/aad18c6))




<a name="3.0.2"></a>
## [3.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.0...@sb1/ffe-context-message@3.0.2) (2018-03-07)


### Bug Fixes

* Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))




<a name="3.0.1"></a>
## [3.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-context-message@3.0.0...@sb1/ffe-context-message@3.0.1) (2018-03-02)


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




<a name="2.0.17"></a>
## [2.0.17](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.16...ffe-context-message@2.0.17) (2018-02-23)




**Note:** Version bump only for package ffe-context-message

<a name="2.0.16"></a>
## [2.0.16](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.15...ffe-context-message@2.0.16) (2018-02-22)




**Note:** Version bump only for package ffe-context-message

<a name="2.0.15"></a>
## [2.0.15](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.14...ffe-context-message@2.0.15) (2018-02-20)




**Note:** Version bump only for package ffe-context-message

<a name="2.0.14"></a>
## [2.0.14](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.13...ffe-context-message@2.0.14) (2018-02-15)




**Note:** Version bump only for package ffe-context-message

<a name="2.0.13"></a>
## [2.0.13](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.12...ffe-context-message@2.0.13) (2018-02-01)




**Note:** Version bump only for package ffe-context-message

<a name="2.0.12"></a>
## [2.0.12](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.11...ffe-context-message@2.0.12) (2018-01-19)




**Note:** Version bump only for package ffe-context-message

<a name="2.0.11"></a>
## [2.0.11](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.10...ffe-context-message@2.0.11) (2018-01-19)




**Note:** Version bump only for package ffe-context-message

<a name="2.0.10"></a>

## [2.0.10](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.9...ffe-context-message@2.0.10) (2018-01-10)

**Note:** Version bump only for package ffe-context-message

<a name="2.0.9"></a>

## [2.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.8...ffe-context-message@2.0.9) (2018-01-09)

**Note:** Version bump only for package ffe-context-message

<a name="2.0.8"></a>

## [2.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.7...ffe-context-message@2.0.8) (2018-01-05)

**Note:** Version bump only for package ffe-context-message

<a name="2.0.7"></a>

## [2.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-context-message@2.0.6...ffe-context-message@2.0.7) (2018-01-04)

**Note:** Version bump only for package ffe-context-message

<a name="2.0.6"></a>

## 2.0.6 (2018-01-04)

**Note:** Version bump only for package ffe-context-message

## 2.0.5

* Improve responsiveness by placing the icon on the top of the box for small screens.

## 2.0.4

* Set width explicitly to 100% otherwise the box won't take all its space if it's within a container with `display: flex;`

## 2.0.3

* Support both versions 9 and 10 of `ffe-core`

## 2.0.2

* Replaced hardcoded transition properties with variables from ffe-core

## 2.0.1

* Content is now centered vertically.

# 2.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

# 1.3.0

### Features

* FFE-177: Add support for the `--compact` modifier, for creating smaller context messages

# 1.2.0

* Add support for --error modifier with same bg color as `ffe-message-box--error`

# 1.1.0

* Add support for --success modifier with same bg color as `ffe-message-box--success`

## 1.0.4

* Add rounded corners

## 1.0.3

* Reduce margin between header and body text.
* Added padding to svg-icon.

# 1.0.0

First version
