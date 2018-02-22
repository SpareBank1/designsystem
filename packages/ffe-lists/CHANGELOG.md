# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

    <a name="4.1.7"></a>
## [4.1.7](***REMOVED***) (2018-02-22)




**Note:** Version bump only for package ffe-lists

    <a name="4.1.6"></a>
## [4.1.6](***REMOVED***) (2018-02-20)




**Note:** Version bump only for package ffe-lists

  <a name="4.1.5"></a>
## [4.1.5](***REMOVED***) (2018-02-15)




**Note:** Version bump only for package ffe-lists

<a name="4.1.4"></a>
## [4.1.4](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-lists

<a name="4.1.3"></a>
## [4.1.3](***REMOVED***) (2018-01-22)




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
