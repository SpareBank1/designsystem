# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.0"></a>
# 4.0.0 (2018-02-25)


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




<a name="3.0.9"></a>
## [3.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.8...ffe-tabs@3.0.9) (2018-02-23)




**Note:** Version bump only for package ffe-tabs

<a name="3.0.8"></a>
## [3.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.7...ffe-tabs@3.0.8) (2018-02-22)




**Note:** Version bump only for package ffe-tabs

<a name="3.0.7"></a>
## [3.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.6...ffe-tabs@3.0.7) (2018-02-20)




**Note:** Version bump only for package ffe-tabs

<a name="3.0.6"></a>
## [3.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.5...ffe-tabs@3.0.6) (2018-02-15)




**Note:** Version bump only for package ffe-tabs

<a name="3.0.5"></a>
## [3.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.4...ffe-tabs@3.0.5) (2018-02-01)




**Note:** Version bump only for package ffe-tabs

<a name="3.0.4"></a>
## 3.0.4 (2018-01-30)




**Note:** Version bump only for package ffe-tabs

## 3.0.3
* Removed the text transformation styling of the `ffe-tab-button`

## 3.0.2
* Support both versions 9 and 10 of `ffe-core`

## 3.0.1

* Replaced hardcoded transition properties with variables from ffe-core

# 3.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## 2.1.2
* Removed use of `line-height` to set `ffe-tab-button` height, instead use `padding`. This so line breaks won't look awkward - with padding around every text row.

## 2.1.1

Lagt til `outline: 0` på focus og active for å unngå "dobbel" fokus i Firefox.

# 2.1.0

Endringssuffikset `--condensed` kan brukes til kompaktknapper.

# 2.0.0

BREAKING: `ffe-tab-button` får hvit bakgrunnsfarge, ikke gjennomsiktig

For gjennomsiktig knapp bruk `--ghost`-modifieren (`ffe-tab-button ffe-tab-button--ghost`).

Tabs skal som standard ha hvit bakgrunnsfarge, ikke være gjennomsiktige.
Siden fargen var eksplisitt satt til transparent kan det hende enkelte er
avhengige av den oppførselen. De er nå nødt til å bruke `--ghost`-modifieren.

# 1.0.0

Første versjon av pakken. Less-filene har før dette ligget i
ffe-tabs ble skilt ut fra ffe-core i ffe-core v8.0.0.
