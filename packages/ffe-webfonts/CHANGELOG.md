# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.2"></a>
## [2.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.0...@sb1/ffe-webfonts@2.0.2) (2018-03-07)




**Note:** Version bump only for package @sb1/ffe-webfonts

<a name="2.0.1"></a>
## [2.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-webfonts@2.0.0...@sb1/ffe-webfonts@2.0.1) (2018-03-02)




**Note:** Version bump only for package @sb1/ffe-webfonts

<a name="2.0.0"></a>
# 2.0.0 (2018-02-25)


### Chores

* add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))


### Features

* **ffe-webfonts:** New package with FFE webfonts ([f725f32](https://github.com/SpareBank1/designsystem/commit/f725f32))


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
* **ffe-webfonts:** This package contains all webfonts and font-face
definitions from ffe-core.

*Caveat*: TrueType font files are no longer included.  This effectively
drops support for Museo Sans webfont in IE 8 and older IEs.

Upgrade from ffe-core: Install ffe-webfonts and include the less file
accordingly the package's README.  Change your `@build-path` to `@fonts-path`.
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

* **ffe-webfonts:** New package with FFE webfonts


### BREAKING CHANGES

* **ffe-webfonts:** This package contains all webfonts and font-face
definitions from ffe-core.

*Caveat*: TrueType font files are no longer included.  This effectively
drops support for Museo Sans webfont in IE 8 and older IEs.

Upgrade from ffe-core: Install ffe-webfonts and include the less file
accordingly the package's README.  Change your `@build-path` to `@fonts-path`.
Please note that `fonts-path` is the actual `fonts`-folder and not the parent
folder.
