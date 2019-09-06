# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [8.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/eslint-config-ffe@8.0.3...@sb1/eslint-config-ffe@8.1.0) (2019-08-30)

### Features

-   **eslint-config-ffe:** add rules for React hooks ([f0c48b1](https://github.com/SpareBank1/designsystem/commit/f0c48b1))

## [8.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/eslint-config-ffe@8.0.2...@sb1/eslint-config-ffe@8.0.3) (2018-12-04)

**Note:** Version bump only for package @sb1/eslint-config-ffe

<a name="8.0.2"></a>

## [8.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/eslint-config-ffe@8.0.1...@sb1/eslint-config-ffe@8.0.2) (2018-08-15)

**Note:** Version bump only for package @sb1/eslint-config-ffe

<a name="8.0.1"></a>

## [8.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/eslint-config-ffe@8.0.0...@sb1/eslint-config-ffe@8.0.1) (2018-08-09)

**Note:** Version bump only for package @sb1/eslint-config-ffe

<a name="8.0.0"></a>

# 8.0.0 (2018-02-25)

### Bug Fixes

-   Replace eslint ignore with customized lint rule. ([d98ed78](https://github.com/SpareBank1/designsystem/commit/d98ed78))

### Chores

-   add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))

### Features

-   **eslint-config-ffe:** Add contribute.md link to readme ([68645d6](https://github.com/SpareBank1/designsystem/commit/68645d6))
-   **eslint-config-ffe:** Upgrade to eslint 4 ([cd8b1c6](https://github.com/SpareBank1/designsystem/commit/cd8b1c6))

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

-   **eslint-config-ffe:** Removes deprecated ecmaFeature setting and drops
    support for eslint 3 and older.

<a name="7.0.2"></a>

## [7.0.2](https://github.com/SpareBank1/designsystem/compare/eslint-config-ffe@7.0.1...eslint-config-ffe@7.0.2) (2018-02-22)

**Note:** Version bump only for package eslint-config-ffe

<a name="7.0.1"></a>

## [7.0.1](https://github.com/SpareBank1/designsystem/compare/eslint-config-ffe@7.0.0...eslint-config-ffe@7.0.1) (2018-01-10)

### Bug Fixes

-   Replace eslint ignore with customized lint rule.

<a name="7.0.0"></a>

# 7.0.0 (2017-12-22)

### Features

-   **eslint-config-ffe:** Add contribute.md link to readme
-   **eslint-config-ffe:** Upgrade to eslint 4

### BREAKING CHANGES

-   **eslint-config-ffe:** Removes deprecated ecmaFeature setting and drops
    support for eslint 3 and older.

## 6.0.2 (13.10.2017)

-   (patch) added support for `eslint-plugin-react@7`
-   (patch) added various devDependencies

## 6.0.1 (08.03.2017)

-   (patch) at least one rule in `eslint-plugin-react` no longer work without an array prop.

# 6.0.0 (29.12.2016)

-   (breaking) jsx-a11y rules are included by default and require eslint-plugin-jsx-a11y.

# 5.1.0 (28.12.2016)

-   (feature) Include rules for eslint-plugin-jsx-a11y. Consumers must explicit included the rules.

## 5.0.1 (18.10.2016)

-   (patch) Remove eslint-plugin-import from peerDependencies, we get that from eslint-config-ffe-base. To avoid having to maintain the version number in two places.

# 5.0.0 (04.10.2016)

-   (patch) Add eslint@3.0.0 to peerDependencies
-   (patch) Update eslint-plugin-import to 1.10.1 to get updated peerDependencies
-   (breaking) Add elinst-plugin-react@6.0.0 to peerDependencies

# 4.0.0 (20.09.2016)

-   (breaking) Enforce line brake after first prop in components if multiline props
-   (breaking) Enforce closing tag of components to be on new line if multiline props

# 3.0.0 (10.08.2016)

-   (breaking) Add new version of eslint-config-ffe-base which removes the "no-eq-null"-rule

# 2.0.0 (12.05.2016)

-   (breaking) Move most rules to eslint-config-ffe-base

## 1.0.1 (06.05.2016)

-   (bugfix) Removed duplicate rule "no-duplicates"
-   (feature) Added "prop-types" rule
-   (bugfix) Added "ignoreStateless"-option to "no-multi-comp"-rule

# 1.0.0 (02.05.2016)

-   Initial release
