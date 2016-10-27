# Changelog

## v.2.0.0

This release removes a lot of specificity from the package, making it easier to override
locally. This is a breaking change in the case where the consumer has applied styling to
a `.ffe-responsive-table` table's children that has been overridden by this package.
Hopefully such code does not exist in large quantities, but please check your implementations
after upgrading.

## v.1.0.1

This release has added `border-collapse: collapse` to `.ffe-responsive-table`.

**Visual diff**

Consumers of `.ffe-responsive-table` will now have borders even if they don't use common-ui.
