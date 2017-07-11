# Changelog

## v.6.0.1

* Moved `--columns-sm` to container level to avoid being dependent on markup changes in several places. This change is breaking in relation to `v.6.0.0`, but is published as a patch due to `v.6.0.0` being a mere few hours old.

## v.6.0.0

* BREAKING: Refactored styling for small screens
	* Removed the `--vertical` modifier - vertical view is now default on small screens
	* Added `--columns-sm` modifier to preserve the column layout which was previously default on small screens
* Fixed text color for table headers displayed as pseudo elements
* Added `--hide-sm` modifier to support hiding columns on small screens
* Added margin-bottom to `.ffe-responsive-table__content` on small screens to separate cells more clearly

## v.5.2.1

* Support both versions 9 and 10 of `ffe-core`

## v.5.2.0

* Added `--hide-md` modifier in order to be able to responsively hide columns

## v.5.1.2

* Specified font size of `--condensed` modifier to 14px
* Added example of condensed table

## v.5.1.1

* Replaced hardcoded transition properties with variables from ffe-core

## v.5.1.0

* Added modifier `--text-left` that left-aligns the content of headings and cells. Use it with `.ffe-responsive-table`.

## v.5.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## v.4.0.1

* Update dependency to ffe-core to ensure all colors are correct

## v.4.0.0

* BREAKING: Refactored styling to reflect design guidelines
	* More vertical padding in table rows by default
	* Added default horizontal padding in table cells on small screens
	* Changed th color to ffe-blue-royal
	* Changed background colors in expandable rows
	* Different border and text styling in table footers
* Rewrote styling to less syntax
* Specified icon height to fix IE bug where chevron causes table row height issues
* Added `--condensed` modifier to decrease default vertical padding in table rows

## v.3.0.1

* Fixed broken animation in `ffe-expandable-row`

## v.3.0.0

* BREAKING: Removes element styling on table elements.
All table child elements MUST HAVE its corresponding classname. Take a look at the migrationg guide og the examples
* Adds styling for `ffe-sortable-table` and `ffe-expandable-row`.
* Adds a `--collapsed` modifier to `ffe-responsive-table__row` and `ffe-responsive-table__cell` to prevent them taking
up any space. Used on the `.expand-icon` and the row that holds the content to be expanded.
* Adds a `--text-right` modifier to `ffe-responsive-table__content`

## Migrating to v.3.0.0 ##
Make sure all table child elements have the following classnames:
```
<caption
    class="ffe-responsive-table__caption">
<thead
    class="ffe-responsive-table__head">
<tr
    class="ffe-responsive-table__row">
<td
    class="ffe-responsive-table__cell">
<footer
    class="ffe-responsive-table__footer">
```

`<tbody>`  (still) don't require classname

**Visual diff**

No visual diff. The tables in the examples have been updated to use caption instead of `<h2>`.

## v.2.1.0

Adds a `--vertical` modifier to `ffe-responsive-table__content` which makes the table-headers
and table-cell stack vertically. This was implicitly supported and even documented in the
example but this release gives that concept an explicit modifier.

## v.2.0.0

This release removes a lot of specificity from the package, making it easier to override
locally. This is a breaking change in the case where the consumer has applied styling to
a `.ffe-responsive-table` table's children that has been overridden by this package.
Hopefully such code does not exist in large quantities, but please check your implementations
after upgrading.

This release also introduces class names for all styled elements within a
`.ffe-responsive-table` table. This way, we can do away with styling DOM-elements completely
in a future major version. Please go through your implementations and add the appropriate
class names (use the [less-file](less/responsive-table.less) for documentation).

There are no visual or functional differences between 1.0.1 and 2.0.0.

## v.1.0.1

This release has added `border-collapse: collapse` to `.ffe-responsive-table`.

**Visual diff**

Consumers of `.ffe-responsive-table` will now have borders even if they don't use common-ui.
