# Changelog

## v.3.0.1
* Added `--sm-2-cols` modifier to support 2 columns on small screens in `ffe-description-list-multicol` 

## v.3.0.0
* Breaking:
  * Refactored and renamed description lists in order to more correctly follow BEM naming convention
  	* Renamed `ffe-description-list--flex` to `ffe-description-list`
  	* Renamed `ffe-description-list--multicolumn` to `ffe-description-list-multicol`
  * Removed `ffe-number-list` (use `ffe-numbered-list`)
  * Removed `ffe-stylized-number-list` (use `ffe-stylized-numbered-list`)
* Added `--md` and `--lg` modifiers for `ffe-description-list`

## v.2.3.0
* Added `--bg-sand` modifier for `ffe-check-list`

## v.2.2.0
* Added aliases `.ffe-numbered-list` for `.ffe-number-list` and `.ffe-stylized-numbered-list` for `ffe-stylized-number-list`

## v.2.1.0
* Added `ffe-check-list`
* Added `ffe-stylized-number-list`

## v.2.0.1

* Updated "main"-entry in package.json with correct path

## v.2.0.0
* Breaking:
  * renamed `less/description-list.less` to `less/description-list.less`
  * renamed `less/list.less` to `less/regular-lists.less`
  * moved entry-point `ffe-lists.less` to `less/lists.less`

This is consistent with how `.less` files are named similar to their package names in the other packages that were exported from core.
