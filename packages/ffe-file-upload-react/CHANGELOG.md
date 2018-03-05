# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.1"></a>
## [3.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-file-upload-react@3.0.0...@sb1/ffe-file-upload-react@3.0.1) (2018-03-02)


### Bug Fixes

* Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))




<a name="3.0.0"></a>
# 3.0.0 (2018-02-25)


### Chores

* **ffe-file-upload-react:** Moving in ([870b07f](https://github.com/SpareBank1/designsystem/commit/870b07f))
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
* **ffe-file-upload-react:** Requires React 16.2 or newer

With this ffe-file-upload-react is moved to the monorepo. A breaking
change is introduced to remove support for React 15. The upgrade should
be a drop-in upgrade for users of React 16.2 or newer.




<a name="2.0.6"></a>
## [2.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-file-upload-react@2.0.5...ffe-file-upload-react@2.0.6) (2018-02-23)




**Note:** Version bump only for package ffe-file-upload-react

<a name="2.0.5"></a>
## [2.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-file-upload-react@2.0.4...ffe-file-upload-react@2.0.5) (2018-02-22)




**Note:** Version bump only for package ffe-file-upload-react

<a name="2.0.4"></a>
## [2.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-file-upload-react@2.0.3...ffe-file-upload-react@2.0.4) (2018-02-16)




**Note:** Version bump only for package ffe-file-upload-react

<a name="2.0.3"></a>
## [2.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-file-upload-react@2.0.2...ffe-file-upload-react@2.0.3) (2018-01-22)




**Note:** Version bump only for package ffe-file-upload-react

<a name="2.0.2"></a>
## [2.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-file-upload-react@2.0.1...ffe-file-upload-react@2.0.2) (2018-01-19)




**Note:** Version bump only for package ffe-file-upload-react

<a name="2.0.1"></a>
## [2.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-file-upload-react@2.0.0...ffe-file-upload-react@2.0.1) (2018-01-18)




**Note:** Version bump only for package ffe-file-upload-react

<a name="2.0.0"></a>

# 2.0.0 (2018-01-12)

### Chores

* **ffe-file-upload-react:** Moving in

### BREAKING CHANGES

* **ffe-file-upload-react:** Requires React 16.2 or newer

With this ffe-file-upload-react is moved to the monorepo. A breaking
change is introduced to remove support for React 15. The upgrade should
be a drop-in upgrade for users of React 16.2 or newer.

# 1.2.0

* aria-label is now set by label

# 1.1.0

* Moved clearing of input to enable multiple upload
* Adding success and info message support
* Adding support for multiple error messages

## 1.0.1

* Fixed bug where file input element was not cleared after each upload(causing sequential upload of files with same filename to not perform onChange and therefore no upload)

# 1.0.0

* Initial version
