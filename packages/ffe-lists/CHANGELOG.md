# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

    <a name="5.0.1"></a>
## [5.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-lists@5.0.0...@sb1/ffe-lists@5.0.1) (2018-03-02)


### Bug Fixes

* Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))




    <a name="5.0.0"></a>
# 5.0.0 (2018-02-25)


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




  <a name="4.1.8"></a>
## [4.1.8](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.7...ffe-lists@4.1.8) (2018-02-23)




**Note:** Version bump only for package ffe-lists

<a name="4.1.7"></a>
## [4.1.7](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.6...ffe-lists@4.1.7) (2018-02-22)




**Note:** Version bump only for package ffe-lists

<a name="4.1.6"></a>
## [4.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.5...ffe-lists@4.1.6) (2018-02-20)




**Note:** Version bump only for package ffe-lists

<a name="4.1.5"></a>
## [4.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.4...ffe-lists@4.1.5) (2018-02-15)




**Note:** Version bump only for package ffe-lists

<a name="4.1.4"></a>
## [4.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.3...ffe-lists@4.1.4) (2018-02-01)




**Note:** Version bump only for package ffe-lists

<a name="4.1.3"></a>
## [4.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-lists@4.1.2...ffe-lists@4.1.3) (2018-01-22)




**Note:** Version bump only for package ffe-lists

<a name="4.1.2"></a>

## 4.1.2 (2018-01-19)

**Note:** Version bump only for package ffe-lists

## 4.1.1

* `--condensed` now works on all screen sizes

# 4.1.0

* Add `--condensed` modifier for `.ffe-bullet-list`

## 4.0.1

* Support both versions 9 and 10 of `ffe-core`

# 4.0.0

### BREAKING CHANGES

* `ffe-core@9.x` is now a peerDependency of `ffe-lists`. You need to upgrade `ffe-core` to use this version.

### Improvements

* Use new color names from `ffe-core@9.x`
* Fix lint warnings

## 3.0.4

### Bugfixes

* Reverts the ffe-core major version bump as it causes builds to break for consumers who have not upgraded
to the new ffe-core major.

## 3.0.3

* Bumped ffe-core version, made minor adjustments to sync with the latest color setup

## 3.0.2

* Fix visual IE bug. When wrapping DescriptionList in a ffe-grid (because flex in flex?) the DescriptionList will not take full width (not even close). Thus we specify full width for DescriptionList.

## 3.0.1

* Added `--sm-2-cols` modifier to support 2 columns on small screens in `ffe-description-list-multicol`

# 3.0.0

* Breaking:
* Refactored and renamed description lists in order to more correctly follow BEM naming convention
_ Renamed `ffe-description-list--flex` to `ffe-description-list`
_ Renamed `ffe-description-list--multicolumn` to `ffe-description-list-multicol`
* Removed `ffe-number-list` (use `ffe-numbered-list`)
* Removed `ffe-stylized-number-list` (use `ffe-stylized-numbered-list`)
* Added `--md` and `--lg` modifiers for `ffe-description-list`

# 2.3.0

* Added `--bg-sand` modifier for `ffe-check-list`

# 2.2.0

* Added aliases `.ffe-numbered-list` for `.ffe-number-list` and `.ffe-stylized-numbered-list` for `ffe-stylized-number-list`

# 2.1.0

* Added `ffe-check-list`
* Added `ffe-stylized-number-list`

## 2.0.1

* Updated "main"-entry in package.json with correct path

# 2.0.0

* Breaking:
* renamed `less/description-list.less` to `less/description-list.less`
* renamed `less/list.less` to `less/regular-lists.less`
* moved entry-point `ffe-lists.less` to `less/lists.less`

This is consistent with how `.less` files are named similar to their package names in the other packages that were exported from core.
