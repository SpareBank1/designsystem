# Changelog

## Deprecation notice
The following classes are deprecated. Support will be dropped in a future major release:

* `ffe-number-list` (use `ffe-numbered-list`)
* `ffe-stylized-number-list` (use `ffe-stylized-numbered-list`)

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
