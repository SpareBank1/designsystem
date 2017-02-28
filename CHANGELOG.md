# Changelog

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
* .ffe-grid__row--bg-blue
* .ffe-grid__col--no-bottom-padding

## v1.0.0
* Initial release
