# Changelog

## v.3.0.0

* Adds styling for `ffe-sortable-table` og `ffe-expandable-row`.
* Removes DOM styling on table elements
* Adds a `--collapsed` modifier to `ffe-responsive-table__row` and `ffe-responsive-table__cell` to prevent them taking
up any space. Used on the `.expand-icon` and the row that holds the content to be expanded.
* Adds a `--text-right` modifier to `ffe-responsive-table__content`

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
