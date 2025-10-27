# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [100.4.2](https://github.com/SpareBank1/designsystem/compare/v100.4.1...v100.4.2) (2025-10-27)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.4.1](https://github.com/SpareBank1/designsystem/compare/v100.4.0...v100.4.1) (2025-10-22)

**Note:** Version bump only for package @sb1/ffe-webfonts





# [100.4.0](https://github.com/SpareBank1/designsystem/compare/v100.3.1...v100.4.0) (2025-10-17)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.3.1](https://github.com/SpareBank1/designsystem/compare/v100.3.0...v100.3.1) (2025-10-16)

**Note:** Version bump only for package @sb1/ffe-webfonts





# [100.3.0](https://github.com/SpareBank1/designsystem/compare/v100.2.1...v100.3.0) (2025-10-06)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.2.1](https://github.com/SpareBank1/designsystem/compare/v100.2.0...v100.2.1) (2025-10-06)

**Note:** Version bump only for package @sb1/ffe-webfonts





# [100.2.0](https://github.com/SpareBank1/designsystem/compare/v100.1.1...v100.2.0) (2025-10-02)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.1.1](https://github.com/SpareBank1/designsystem/compare/v100.1.0...v100.1.1) (2025-09-26)

**Note:** Version bump only for package @sb1/ffe-webfonts





# [100.1.0](https://github.com/SpareBank1/designsystem/compare/v100.0.4...v100.1.0) (2025-09-19)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.0.4](https://github.com/SpareBank1/designsystem/compare/v100.0.3...v100.0.4) (2025-09-18)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.0.3](https://github.com/SpareBank1/designsystem/compare/v100.0.2...v100.0.3) (2025-09-10)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.0.2](https://github.com/SpareBank1/designsystem/compare/v100.0.1...v100.0.2) (2025-09-10)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [100.0.1](https://github.com/SpareBank1/designsystem/compare/v100.0.0...v100.0.1) (2025-09-10)

**Note:** Version bump only for package @sb1/ffe-webfonts





# 100.0.0 (2025-09-09)


### Bug Fixes

* **ffe-core:** remove kv type module to fix build errors among consumers ([6ea36b4](https://github.com/SpareBank1/designsystem/commit/6ea36b44d434b5d8b7ad7816f027b19a191d9d15))
* **ffe-webfonts:** add missing development dependency to less ([5db2d80](https://github.com/SpareBank1/designsystem/commit/5db2d807b5e0743d0b6385c1da9a35f93abf1910))
* **ffe-webfonts:** fjern museo sans fonten ([61f7b78](https://github.com/SpareBank1/designsystem/commit/61f7b788d64d90410c46ddcb06a57df6f4677f91))
* **ffe-webfonts:** fjerner fonter som ikke skal brukes ([e22fb2b](https://github.com/SpareBank1/designsystem/commit/e22fb2b6313bb49b779236efe4164669b0e13bf7))
* **ffe-webfonts:** fjerner ting fra package.json files som ikke lenger finnes ([90dcf76](https://github.com/SpareBank1/designsystem/commit/90dcf76f33b60fec032bdd95bb925d823de72a04))
* **ffe-webfonts:** legger til italic font ([2f14bf1](https://github.com/SpareBank1/designsystem/commit/2f14bf131a46ae1046546b6dca25c688852ea66c))
* **ffe-webfonts:** License text survives minification ([aaf9737](https://github.com/SpareBank1/designsystem/commit/aaf9737d06d3cc952096c1fb1140c0c3231436d0))
* **ffe-webfonts:** Makes SpareBank1-font family opt-in ([712c758](https://github.com/SpareBank1/designsystem/commit/712c7580573d001b499d00a950366dbc28601ed3))
* **ffe-webfonts:** reduce vulnerabilities ([15d2ec4](https://github.com/SpareBank1/designsystem/commit/15d2ec491b711a7fe3eedda32793d82fa16751be))
* **ffe-webfonts:** removed woff from sb1-fonts-inline.less ([cf6d86d](https://github.com/SpareBank1/designsystem/commit/cf6d86d9d5f2449d2c4bf8ea30d27c4bb6b27590))


### chore

* add @sb1/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4a5f8f0b0d881dc126764478e82533e873))


### Features

* **ffe-webfonts:** legger til fonter fra ny identitet ([521426d](https://github.com/SpareBank1/designsystem/commit/521426ddeee2c1f4fa191bddfd44392ae64957af))
* **ffe-webfonts:** New package with FFE webfonts ([f725f32](https://github.com/SpareBank1/designsystem/commit/f725f32932cbbc2ee2958afc9b3225945215d201))
* **ffe-webfonts:** set font loading behavior to fallback ([9cbf83b](https://github.com/SpareBank1/designsystem/commit/9cbf83bff9db2dea163a8c6b6d3fbf09a39f7f0f))


### BREAKING CHANGES

* **ffe-webfonts:** removed woff format in favor of woff2
* **ffe-webfonts:** fjerner museo sans font filer og css
* **ffe-webfonts:** fjerner fonter som ikke skal brukes på web for å redusere filstørrelse og lastetid
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
* **ffe-webfonts:** This package contains all webfonts and font-face
definitions from ffe-core.

*Caveat*: TrueType font files are no longer included.  This effectively
drops support for Museo Sans webfont in IE 8 and older IEs.

Upgrade from ffe-core: Install ffe-webfonts and include the less file
accordingly the package's README.  Change your `@build-path` to `@fonts-path`.
Please note that `fonts-path` is the actual `fonts`-folder and not the parent
folder.





## [5.0.20](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.19...@sb1/ffe-webfonts@5.0.20) (2025-09-08)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.19](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.18...@sb1/ffe-webfonts@5.0.19) (2025-05-14)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.18](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.17...@sb1/ffe-webfonts@5.0.18) (2025-04-29)


### Bug Fixes

* **ffe-core:** remove kv type module to fix build errors among consumers ([6ea36b4](https://github.com/SpareBank1/designsystem/commit/6ea36b44d434b5d8b7ad7816f027b19a191d9d15))





## [5.0.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.16...@sb1/ffe-webfonts@5.0.17) (2025-04-16)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.15...@sb1/ffe-webfonts@5.0.16) (2025-02-19)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.14...@sb1/ffe-webfonts@5.0.15) (2025-02-07)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.13...@sb1/ffe-webfonts@5.0.14) (2025-01-27)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.12...@sb1/ffe-webfonts@5.0.13) (2024-09-06)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.11...@sb1/ffe-webfonts@5.0.12) (2024-09-05)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.10...@sb1/ffe-webfonts@5.0.11) (2024-08-23)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.9...@sb1/ffe-webfonts@5.0.10) (2024-08-06)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.8...@sb1/ffe-webfonts@5.0.9) (2024-07-19)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.7...@sb1/ffe-webfonts@5.0.8) (2024-06-18)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.6...@sb1/ffe-webfonts@5.0.7) (2024-06-05)

**Note:** Version bump only for package @sb1/ffe-webfonts





## [5.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.5...@sb1/ffe-webfonts@5.0.6) (2024-06-04)

**Note:** Version bump only for package @sb1/ffe-webfonts

## [5.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.4...@sb1/ffe-webfonts@5.0.5) (2024-05-09)

**Note:** Version bump only for package @sb1/ffe-webfonts

## [5.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.3...@sb1/ffe-webfonts@5.0.4) (2024-05-07)

**Note:** Version bump only for package @sb1/ffe-webfonts

## [5.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.2...@sb1/ffe-webfonts@5.0.3) (2024-05-03)

**Note:** Version bump only for package @sb1/ffe-webfonts

## [5.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.1...@sb1/ffe-webfonts@5.0.2) (2024-05-03)

**Note:** Version bump only for package @sb1/ffe-webfonts

## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@5.0.0...@sb1/ffe-webfonts@5.0.1) (2024-04-17)

### Bug Fixes

-   **ffe-webfonts:** fjerner ting fra package.json files som ikke lenger finnes ([90dcf76](https://github.com/SpareBank1/designsystem/commit/90dcf76f33b60fec032bdd95bb925d823de72a04))

# [5.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@4.0.1...@sb1/ffe-webfonts@5.0.0) (2024-04-15)

### Bug Fixes

-   **ffe-webfonts:** removed woff from sb1-fonts-inline.less ([cf6d86d](https://github.com/SpareBank1/designsystem/commit/cf6d86d9d5f2449d2c4bf8ea30d27c4bb6b27590))

### BREAKING CHANGES

-   **ffe-webfonts:** removed woff format in favor of woff2

## [4.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@4.0.0...@sb1/ffe-webfonts@4.0.1) (2024-02-12)

**Note:** Version bump only for package @sb1/ffe-webfonts

# [4.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@3.0.3...@sb1/ffe-webfonts@4.0.0) (2024-01-16)

### Bug Fixes

-   **ffe-webfonts:** fjern museo sans fonten ([61f7b78](https://github.com/SpareBank1/designsystem/commit/61f7b788d64d90410c46ddcb06a57df6f4677f91))

### BREAKING CHANGES

-   **ffe-webfonts:** fjerner museo sans font filer og css

## [3.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@3.0.2...@sb1/ffe-webfonts@3.0.3) (2022-10-28)

**Note:** Version bump only for package @sb1/ffe-webfonts

## [3.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@3.0.1...@sb1/ffe-webfonts@3.0.2) (2022-05-19)

### Bug Fixes

-   **ffe-webfonts:** add missing development dependency to less ([5db2d80](https://github.com/SpareBank1/designsystem/commit/5db2d807b5e0743d0b6385c1da9a35f93abf1910))

## [3.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@3.0.0...@sb1/ffe-webfonts@3.0.1) (2021-10-29)

### Bug Fixes

-   **ffe-webfonts:** legger til italic font ([2f14bf1](https://github.com/SpareBank1/designsystem/commit/2f14bf131a46ae1046546b6dca25c688852ea66c))

# [3.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.2.1...@sb1/ffe-webfonts@3.0.0) (2021-02-22)

### Bug Fixes

-   **ffe-webfonts:** fjerner fonter som ikke skal brukes ([e22fb2b](https://github.com/SpareBank1/designsystem/commit/e22fb2b6313bb49b779236efe4164669b0e13bf7))

### BREAKING CHANGES

-   **ffe-webfonts:** fjerner fonter som ikke skal brukes på web for å redusere filstørrelse og lastetid

## [2.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.2.0...@sb1/ffe-webfonts@2.2.1) (2021-02-19)

### Bug Fixes

-   **ffe-webfonts:** Makes SpareBank1-font family opt-in ([712c758](https://github.com/SpareBank1/designsystem/commit/712c7580573d001b499d00a950366dbc28601ed3))

# [2.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.1.1...@sb1/ffe-webfonts@2.2.0) (2021-02-03)

### Features

-   **ffe-webfonts:** legger til fonter fra ny identitet ([521426d](https://github.com/SpareBank1/designsystem/commit/521426ddeee2c1f4fa191bddfd44392ae64957af))

## [2.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.1.0...@sb1/ffe-webfonts@2.1.1) (2021-02-02)

### Bug Fixes

-   **ffe-webfonts:** reduce vulnerabilities ([15d2ec4](https://github.com/SpareBank1/designsystem/commit/15d2ec491b711a7fe3eedda32793d82fa16751be))

# [2.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.5...@sb1/ffe-webfonts@2.1.0) (2019-10-16)

### Features

-   **ffe-webfonts:** set font loading behavior to fallback ([9cbf83b](https://github.com/SpareBank1/designsystem/commit/9cbf83bff9db2dea163a8c6b6d3fbf09a39f7f0f))

## [2.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.4...@sb1/ffe-webfonts@2.0.5) (2019-04-24)

**Note:** Version bump only for package @sb1/ffe-webfonts

<a name="2.0.4"></a>

## [2.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.3...@sb1/ffe-webfonts@2.0.4) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-webfonts

<a name="2.0.3"></a>

## [2.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.2...@sb1/ffe-webfonts@2.0.3) (2018-05-15)

### Bug Fixes

-   **ffe-webfonts:** License text survives minification ([aaf9737](https://github.com/SpareBank1/designsystem/commit/aaf9737))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.0...@sb1/ffe-webfonts@2.0.2) (2018-03-07)

**Note:** Version bump only for package @sb1/ffe-webfonts

<a name="2.0.1"></a>

## [2.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.0...@sb1/ffe-webfonts@2.0.1) (2018-03-02)

**Note:** Version bump only for package @sb1/ffe-webfonts

<a name="2.0.0"></a>

# 2.0.0 (2018-02-25)

### Chores

-   add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))

### Features

-   **ffe-webfonts:** New package with FFE webfonts ([f725f32](https://github.com/SpareBank1/designsystem/commit/f725f32))

### BREAKING CHANGES

-   All packages have been renamed to add the @sb1 scope.

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

-   **ffe-webfonts:** This package contains all webfonts and font-face
    definitions from ffe-core.

_Caveat_: TrueType font files are no longer included. This effectively
drops support for Museo Sans webfont in IE 8 and older IEs.

Upgrade from ffe-core: Install ffe-webfonts and include the less file
accordingly the package's README. Change your `@build-path` to `@fonts-path`.
Please note that `fonts-path` is the actual `fonts`-folder and not the parent
folder.

<a name="1.0.3"></a>

## [1.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-webfonts@1.0.2...ffe-webfonts@1.0.3) (2018-02-23)

**Note:** Version bump only for package ffe-webfonts

<a name="1.0.2"></a>

## [1.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-webfonts@1.0.1...ffe-webfonts@1.0.2) (2018-02-22)

**Note:** Version bump only for package ffe-webfonts

<a name="1.0.1"></a>

## [1.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-webfonts@1.0.0...ffe-webfonts@1.0.1) (2018-02-19)

**Note:** Version bump only for package ffe-webfonts

<a name="1.0.0"></a>

# 1.0.0 (2018-02-15)

### Features

-   **ffe-webfonts:** New package with FFE webfonts

### BREAKING CHANGES

-   **ffe-webfonts:** This package contains all webfonts and font-face
    definitions from ffe-core.

_Caveat_: TrueType font files are no longer included. This effectively
drops support for Museo Sans webfont in IE 8 and older IEs.

Upgrade from ffe-core: Install ffe-webfonts and include the less file
accordingly the package's README. Change your `@build-path` to `@fonts-path`.
Please note that `fonts-path` is the actual `fonts`-folder and not the parent
folder.
