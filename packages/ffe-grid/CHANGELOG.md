# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="6.0.6"></a>
## [6.0.6](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-grid

      <a name="6.0.5"></a>

## [6.0.5](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-grid

    <a name="6.0.4"></a>

## [6.0.4](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-grid

  <a name="6.0.3"></a>

## [6.0.3](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-grid

<a name="6.0.2"></a>

## 6.0.2 (2018-01-05)

**Note:** Version bump only for package ffe-grid

# Changelog

## v.6.0.1

### Bugfix

* Made the `--start`, `--center`, `--end`, `--top`, `--middle` and `--bottom` modifiers work as close as possible to how they did before the `v6.0.0` change for horizontal columns. For vertical columns, the modifiers will work
like they do for horizontal columns while still stacking content vertically. Visual tests and examples have been
added to demonstrate this behaviour.

## v.6.0.0

This release fixes an issue with the original implementation, that needed to be done sooner or
later. It will require some manual testing for consumers. :-(

### Breaking changes

`ffe-grid__col--vertical` is removed. This behavior is now enabled by default. This might lead to
large visual changes in your application, so make sure to do the following check:

* Go through all your usage of `ffe-grid__col`. If they have the `ffe-grid__col--vertical` modifier,
you can safely remove it - no further change will be necessary.
* If your `ffe-grid__col` has more than one direct child / descendant, add the new modifier
`ffe-grid__col--horizontal` to keep things working the way they have.
* If your `ffe-grid__col` has a single child, this child will now keep it's original width. Inline
elements will be sized according to their content, while block elements will receive 100 % of the
column width. This might let you delete some custom modifiers, or it might lead to a visual
regression.

## New features

* Added new modifier `ffe-grid__col--horizontal` to let consumers flow flex-items horizontally

## v.5.6.3

* `ffe-grid__row--reverse` now reverses wrapped elements as well, as is expected.

## v.5.6.2

* Make `ffe-grid__col--no-bottom-padding` work for condensed grids also.

## v.5.6.1

* Make `ffe-grid__col--no-bottom-padding` work again.

## v.5.6.0

* Internal rewrite of grid library, reducing size from ~40kb to ~28kb (before gzip).
* The `ffe-grid__col` class is now obsolete, and has been removed. Consumers are encouraged to remove them from their
own code bases as well.

## v.5.5.1

* Fixed a bug where `.ffe-grid__row--reverse` did not work as expected when `.ffe-grid__row-wrapper` was set as it's child.

## v.5.5.0

* Added a new background modifier (`--bg-green-mint`) to `ffe-grid__row`.

## v.5.4.0

* Added a new background modifier (`--bg-grey-cloud`) to `ffe-grid__row`.

## v.5.3.1

* Make text and headers white when using `--bg-blue-royal`.

## v.5.3.0

* Added a new background modifier (`--bg-blue-royal`) to `ffe-grid__row`.

## v.5.2.0

* Added a new background modifier (`--bg-purple-magenta`) to `ffe-grid__row`.

## v.5.1.0

* Added a new background modifier (`--bg-blue-ice`) to `ffe-grid__row`.

## v.5.0.2

* Using left, right instead of start, end for text-align property to support IE.

## v.5.0.1

* Support both versions 9 and 10 of `ffe-core`

## v.5.0.0

### Breaking changes

* Renamed `ffe-grid__row--bg-blue` to `ffe-grid__row--bg-blue-pale` after `ffe-core` name change.

### New features

* Added `ffe-grid__row--bg-blue-cobalt` with the (you guessed it) `ffe-blue-cobalt` background colour.

## v.4.2.0

* Added two modifiers to columns, `--vertical` and `--reverse`.

## v.4.1.0

* Condensed variation with less gutter (modifier `ffe-grid--condensed`).

## v.4.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## v.3.1.0

* Added support for 0 column size

## v.3.0.1

* Bugfix: `.ffe-grid__row-wrapper` now treats columns that wrap to more than one row correctly

## v.3.0.0

* Breaking: `.ffe-grid__row--bg-sand` and `.ffe-grid__row--bg-blue` now require a `.ffe-grid__row-wrapper` around its columns. The background will then be full width while the content keeps to the grid size.

```html
<div class="ffe-grid__row ffe-grid__row--bg-sand ffe-grid__row--top-padding">
<div class="ffe-grid__row-wrapper">
<div class="ffe-grid__col--md-6">
<div class="ffe-grid__content"></div>
</div>
<div class="ffe-grid__col--md-6">
<div class="ffe-grid__content"></div>
</div>
</div>
</div>
```

## v.2.1.0

* New modifier: `.ffe-grid__row--bg-sand`, adds `@ffe-sand` background colour.
* New modifier: `.ffe-grid__row--top-padding`, adds padding to the top of a row.

## v.2.0.0

* Visual change: `ffe-grid` now by default has a 40px padding on top, which is the same padding
that are used between grid-rows.
* New modifier: `ffe-grid--no-top-padding` added, use this if you do not want the default padding.

## v1.2.2

* Bugfix: `--no-bottom-padding` modifer on `ffe-grid__col` now works

## v1.2.1

* Added meta-data for style guide

## v1.2.0

* Added support for 0 column offset

## v1.1.0

Added two new modifiers:

* .ffe-grid\_\_row--bg-blue
* .ffe-grid\_\_col--no-bottom-padding

## v1.0.0

* Initial release
