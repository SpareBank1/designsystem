# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.13"></a>
## [5.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.12...@sb1/ffe-datepicker@5.0.13) (2018-05-15)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.12"></a>
## [5.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.11...@sb1/ffe-datepicker@5.0.12) (2018-05-08)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.11"></a>
## [5.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.10...@sb1/ffe-datepicker@5.0.11) (2018-05-04)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.10"></a>
## [5.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.9...@sb1/ffe-datepicker@5.0.10) (2018-05-04)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.9"></a>
## [5.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.8...@sb1/ffe-datepicker@5.0.9) (2018-05-03)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.8"></a>
## [5.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.7...@sb1/ffe-datepicker@5.0.8) (2018-04-25)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.7"></a>
## [5.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.6...@sb1/ffe-datepicker@5.0.7) (2018-04-19)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.6"></a>
## [5.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.5...@sb1/ffe-datepicker@5.0.6) (2018-04-11)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.5"></a>
## [5.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.4...@sb1/ffe-datepicker@5.0.5) (2018-04-10)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.4"></a>
## [5.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.3...@sb1/ffe-datepicker@5.0.4) (2018-03-22)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.3"></a>
## [5.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.2...@sb1/ffe-datepicker@5.0.3) (2018-03-13)




**Note:** Version bump only for package @sb1/ffe-datepicker

<a name="5.0.2"></a>
## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.0...@sb1/ffe-datepicker@5.0.2) (2018-03-07)


### Bug Fixes

* Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))




<a name="5.0.1"></a>
## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-datepicker@5.0.0...@sb1/ffe-datepicker@5.0.1) (2018-03-02)


### Bug Fixes

* Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))




<a name="5.0.0"></a>
# 5.0.0 (2018-02-25)


### Bug Fixes

* **ffe-datepicker:** Make calendar icon clickable on Android ([0c884b4](https://github.com/SpareBank1/designsystem/commit/0c884b4))
* **ffe-datepicker:** Revert changes to z-index, and add pointer-events: none to fix issues with Android ([6f7ac39](https://github.com/SpareBank1/designsystem/commit/6f7ac39))


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




<a name="4.2.14"></a>
## [4.2.14](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.13...ffe-datepicker@4.2.14) (2018-02-23)




**Note:** Version bump only for package ffe-datepicker

<a name="4.2.13"></a>
## [4.2.13](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.12...ffe-datepicker@4.2.13) (2018-02-22)




**Note:** Version bump only for package ffe-datepicker

<a name="4.2.12"></a>
## [4.2.12](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.11...ffe-datepicker@4.2.12) (2018-02-20)




**Note:** Version bump only for package ffe-datepicker

<a name="4.2.11"></a>
## [4.2.11](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.10...ffe-datepicker@4.2.11) (2018-02-15)




**Note:** Version bump only for package ffe-datepicker

<a name="4.2.10"></a>
## [4.2.10](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.9...ffe-datepicker@4.2.10) (2018-02-01)




**Note:** Version bump only for package ffe-datepicker

<a name="4.2.9"></a>
## [4.2.9](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.8...ffe-datepicker@4.2.9) (2018-01-26)


### Bug Fixes

* **ffe-datepicker:** Revert changes to z-index, and add pointer-events: none to fix issues with Android




<a name="4.2.8"></a>
## [4.2.8](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.7...ffe-datepicker@4.2.8) (2018-01-23)


### Bug Fixes

* **ffe-datepicker:** Make calendar icon clickable on Android




<a name="4.2.7"></a>
## [4.2.7](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.6...ffe-datepicker@4.2.7) (2018-01-19)




**Note:** Version bump only for package ffe-datepicker

<a name="4.2.6"></a>
## [4.2.6](https://github.com/SpareBank1/designsystem/compare/ffe-datepicker@4.2.5...ffe-datepicker@4.2.6) (2018-01-19)




**Note:** Version bump only for package ffe-datepicker

<a name="4.2.5"></a>
## 4.2.5 (2018-01-10)




**Note:** Version bump only for package ffe-datepicker


## 4.2.4
* Add new baseline images to match latest version of `ffe-core` and `ffe-form`.
* Bump devDeps `ffe-visual-tests-support` and `stylelint-config-ffe`.
* Add `package-lock=false` to [.npmrc](.npmrc)

## 4.2.3
* Add support of version 8 of `ffe-form`

## 4.2.2
* Actually support both versions 9 and 10 of `ffe-core` (fixes 4.2.1)

## 4.2.1
* Support both versions 9 and 10 of `ffe-core`

# 4.2.0
* Added ffe-form 6.x to version range in peerDependencies

# 4.1.0
* Added ffe-form 6.x to version range in devDependencies

# 4.0.0

### BREAKING CHANGES

Bumped peer dependency versions of ffe-core and ffe-form. No external API change, but this version requires a new major of both packages

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x and ffe-form version 5.x

# 3.1.0
* Added optional style to display the calendar above the field instead of below (`ffe-calendar--datepicker--above`).

## 3.0.1
* Fixed issue with the previous and next month buttons on iPhone(6)/Safari causing the datepicker not to work at all.

# 3.0.0
* Added support for ffe-form version 4.x

## 2.1.1
* Bumped dependency on ffe-form

# 2.1.0
* Add visual tests

# 2.0.0
* Bumped dependency on `ffe-core` to `^8.0.2`
* Added explicit dependency on `ffe-form`

## 1.0.4
* Renamed styles folder to less

## 1.0.3
* Fix calendar header title text width to avoid next/prev arrows moving on click (Jira: DIG-11736)

## 1.0.1 and 1.0.2
* Add metadata for styleguide documentation

# 1.0.0
* Initial release
