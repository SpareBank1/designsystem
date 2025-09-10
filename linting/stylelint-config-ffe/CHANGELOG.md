# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [100.0.1](https://github.com/SpareBank1/designsystem/compare/v100.0.0...v100.0.1) (2025-09-10)

**Note:** Version bump only for package @sb1/stylelint-config-ffe





# 100.0.0 (2025-09-09)


### Bug Fixes

* **stylelint-config-ffe:** Ignore flex-flow shorthand ([0622fb7](https://github.com/SpareBank1/designsystem/commit/0622fb73e8b2d956a40d685622340cf8bd35b4f6))
* **stylelint-config-ffe:** increase nesting depth ([03e9c4c](https://github.com/SpareBank1/designsystem/commit/03e9c4ca34df06c107144a607a51eae604fdf613))
* **stylelint-config-ffe:** Remove conflicting rule ([a081385](https://github.com/SpareBank1/designsystem/commit/a081385d9d4564d5e3dad1507567c9237a8592c3))
* **stylelint-config-ffe:** remove formatting rules and extensions ([254bf4e](https://github.com/SpareBank1/designsystem/commit/254bf4e9bc258a3105e01ca251ddac3d49505323))


### chore

* add @sb1/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4a5f8f0b0d881dc126764478e82533e873))


### Features

* **stylelint-config-ffe:** Add contribute.md link to readme ([bbeafb4](https://github.com/SpareBank1/designsystem/commit/bbeafb4e157a66f7f072d3637561ed83667ce654))
* **stylelint-config-ffe:** new rule checking for deprecated vars ([78dbfec](https://github.com/SpareBank1/designsystem/commit/78dbfece2d7f866bc5e3aa515af2a99622c46df7))


### BREAKING CHANGES

* **stylelint-config-ffe:** stylelint-config-ffe does not any formatting rules, nor
does it any provide third party rules anymore. Consider using
stylelint-config-standard or a similar shared configuration in addition
to this package.
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





## [2.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/stylelint-config-ffe@2.0.1...@sb1/stylelint-config-ffe@2.0.2) (2024-08-06)

**Note:** Version bump only for package @sb1/stylelint-config-ffe





## [2.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/stylelint-config-ffe@2.0.0...@sb1/stylelint-config-ffe@2.0.1) (2024-05-03)

**Note:** Version bump only for package @sb1/stylelint-config-ffe

# [2.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/stylelint-config-ffe@1.0.2...@sb1/stylelint-config-ffe@2.0.0) (2022-10-28)

### Bug Fixes

-   **stylelint-config-ffe:** remove formatting rules and extensions ([254bf4e](https://github.com/SpareBank1/designsystem/commit/254bf4e9bc258a3105e01ca251ddac3d49505323))

### Features

-   **stylelint-config-ffe:** new rule checking for deprecated vars ([78dbfec](https://github.com/SpareBank1/designsystem/commit/78dbfece2d7f866bc5e3aa515af2a99622c46df7))

### BREAKING CHANGES

-   **stylelint-config-ffe:** stylelint-config-ffe does not any formatting rules, nor
    does it any provide third party rules anymore. Consider using
    stylelint-config-standard or a similar shared configuration in addition
    to this package.

## [1.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/stylelint-config-ffe@1.0.1...@sb1/stylelint-config-ffe@1.0.2) (2019-12-10)

### Bug Fixes

-   **stylelint-config-ffe:** increase nesting depth ([03e9c4c](https://github.com/SpareBank1/designsystem/commit/03e9c4ca34df06c107144a607a51eae604fdf613))

<a name="1.0.1"></a>

## [1.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/stylelint-config-ffe@1.0.0...@sb1/stylelint-config-ffe@1.0.1) (2018-08-29)

### Bug Fixes

-   **stylelint-config-ffe:** Remove conflicting rule ([a081385](https://github.com/SpareBank1/designsystem/commit/a081385))

<a name="1.0.0"></a>

# 1.0.0 (2018-02-25)

### Bug Fixes

-   **stylelint-config-ffe:** Ignore flex-flow shorthand ([0622fb7](https://github.com/SpareBank1/designsystem/commit/0622fb7))

### Chores

-   add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))

### Features

-   **stylelint-config-ffe:** Add contribute.md link to readme ([bbeafb4](https://github.com/SpareBank1/designsystem/commit/bbeafb4))

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

<a name="0.4.4"></a>

## [0.4.4](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.3...stylelint-config-ffe@0.4.4) (2018-02-22)

**Note:** Version bump only for package stylelint-config-ffe

<a name="0.4.3"></a>

## [0.4.3](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.2...stylelint-config-ffe@0.4.3) (2018-01-10)

**Note:** Version bump only for package stylelint-config-ffe

<a name="0.4.2"></a>

## [0.4.2](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.1...stylelint-config-ffe@0.4.2) (2018-01-04)

**Note:** Version bump only for package stylelint-config-ffe

<a name="0.4.1"></a>

## [0.4.1](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.0...stylelint-config-ffe@0.4.1) (2018-01-04)

### Bug Fixes

-   **stylelint-config-ffe:** Ignore flex-flow shorthand

<a name="0.4.0"></a>

# 0.4.0 (2017-12-22)

### Features

-   **stylelint-config-ffe:** Add contribute.md link to readme

## 0.3.0

Upgrade to latest version of `stylelint-config-standard`, which removes some deprecation warnings.

## 0.2.0

Adjusted rules to actual coding style used in FFE.

## 0.1.0

Initial release: slightly modified version of `stylelint-config-standard`.
