# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>
# 2.0.0 (2018-02-25)


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




<a name="1.0.10"></a>
## [1.0.10](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.9...ffe-decorators-react@1.0.10) (2018-02-23)




**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.9"></a>
## [1.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.8...ffe-decorators-react@1.0.9) (2018-02-22)




**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.8"></a>
## [1.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.7...ffe-decorators-react@1.0.8) (2018-01-30)




**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.7"></a>
## [1.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.6...ffe-decorators-react@1.0.7) (2018-01-22)




**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.6"></a>
## [1.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.5...ffe-decorators-react@1.0.6) (2018-01-19)




**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.5"></a>
## [1.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.4...ffe-decorators-react@1.0.5) (2018-01-18)




**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.4"></a>

## [1.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.3...ffe-decorators-react@1.0.4) (2018-01-12)

**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.3"></a>

## [1.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.2...ffe-decorators-react@1.0.3) (2018-01-12)

**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.2"></a>

## [1.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-decorators-react@1.0.1...ffe-decorators-react@1.0.2) (2018-01-12)

**Note:** Version bump only for package ffe-decorators-react

<a name="1.0.1"></a>

## 1.0.1 (2018-01-12)

**Note:** Version bump only for package ffe-decorators-react

# 1.0.0

* First release.
