# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

    <a name="3.0.1"></a>
## [3.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-formatters@3.0.0...@sb1/ffe-formatters@3.0.1) (2018-03-02)




**Note:** Version bump only for package @sb1/ffe-formatters

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




  <a name="2.1.7"></a>
## [2.1.7](https://github.com/SpareBank1/designsystem/compare/ffe-formatters@2.1.6...ffe-formatters@2.1.7) (2018-02-23)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.6"></a>
## [2.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-formatters@2.1.5...ffe-formatters@2.1.6) (2018-02-22)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.5"></a>
## [2.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-formatters@2.1.4...ffe-formatters@2.1.5) (2018-01-31)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.4"></a>
## [2.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-formatters@2.1.3...ffe-formatters@2.1.4) (2018-01-22)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.3"></a>
## [2.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-formatters@2.1.2...ffe-formatters@2.1.3) (2018-01-19)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.2"></a>
## [2.1.2](https://github.com/SpareBank1/designsystem/compare/ffe-formatters@2.1.1...ffe-formatters@2.1.2) (2018-01-18)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.1"></a>

## 2.1.1 (2018-01-16)

**Note:** Version bump only for package ffe-formatters

# 2.1.0

* `formatNumber` now accepts additional props to the `opts`-argument. - `thousandSeparator` (defaults to NON_BREAKING_SPACE) - `decimalMark` (defaults to ',')

## 2.0.4

* Bugfix: Fixed a bug where - `formatNumber(0)` returns 0, (expected: '0') - `formatNumber(0, { decimals: 2 })` returns 0, (expected: '0,00')

## 2.0.3

* `formatDistance` no longer returns the empty string if the input is equal to
the result of `formatNumber(input)` (solves part of SFO-6995)

## 2.0.2

* Bugfix: Include correct files in NPM package.

## 2.0.1

* Bugfix: Fix broken export of `formatFodselsnummer` from the main index file.

# 2.0.0

**BREAKING:** `formatPercentage` now expects the actual percentage instead of the fraction.
Previously: `formatPercentage(0.123) === 12.3 %`, now: `formatPercentage(0.123) === 0.12 %`.
To migrate, just make sure the value you send in is in the correct order of magnitude.

# 1.0.0

Initial version of `ffe-formatters`. Includes the following formatters:

* formatAccountNumber
* formatCurrency
* formatDate
* formatFodselsnummer
* formatKm
* formatNumber
* formatPercentage
