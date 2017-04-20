# Changelog

## v4.2.0

* Added prop `srOnlyCaption` which visually hides the caption but keeps it available to screen readers.
* Added props `limit` and `offset` to render only a subset of given data.

## v4.1.1

* Reverted attempted fix on `onKeyDown`-events on expandable rows as it caused unforseen issues.
Consumers should be responsible for stopping event propagation when needed anyways.
  * Added `event.stopPropagation()` to buttons in table examples to demonstrate the need for this.
* Improved logic to collapse rows on sort.

## v4.1.0

* Added optional boolean props `condensed` and `smallHeader` to support table modifiers from `ffe-tables`.

## v4.0.1

* All rows will now collapse on sort.
We do this because expanded state belongs to the row number,
not to the row data. Thus expanding and then sorting would result
in the same row number being expanded, even though it gets new data.

## v4.0.0

* BREAKING: Major API changes as we introduce the magic table which is both expandable and sortable.
* BREAKING: Column header values can no longer be nodes, only strings are accepted.
* Added support for custom compare function on each sortable column through the column prop `compare`.
* Added support for explicitly making a column not sortable through the column prop `notSortable`.
* Removed `isRequired` on prop `children` in `TableRowExpandable` as this produced a warning for unexpandable rows in expandable table.
* Fixed issue where having a button in the clickable part of an expandable row could cause the row to expand onKeyDown on the button.
  * The consumer is still responsible for handling propagation of onClick-events.

### Migrating to v4.0.0

* Exports has changed from 3 components to a single default export.
* Tables are now made sortable by the boolean prop `sortable`.
* Tables are now made expandable by providing a function on prop `expandedContentMapper`.
  * This replaces both the boolean `expandable` and the mapping to `TableRowExpandable` in table `children`.
  * Please consult `README.md` for details about this function.

## v3.0.3

* Update dependency ffe-tables to 4.x
* Update dependency ffe-core to >= 8.2.3 < 9

## v3.0.2

* Fixed: When no children, or a falsy value, is passed as children to `TableRowExpandable` the row will set the expanded value in this.state to false in componentWillReceiveProps.

## v3.0.1

* Fixed: State change on props update in `SortableTable` will now only trigger if props have actually changed.
Also, this data will only be sorted if `sortBy` is set in component state.
* Fixed: Component will only update if props or state has actually changed
(avoid updating if equal props are given through a prop change in a parent component).

## v3.0.0

* BREAKING: Behavioural change on `TableRowExpandable`. If no children, or a falsy value is passed as children,
the row will not be expandable. This will remove chevron, tabIndex and event listeners from the `tr`.
This is intended used when there are no details available for the row, or if the expandable area contains
actions which are currently blocked on this item.
* Fixed: `TableRow` in a plain `ResponsiveTable` should not have a `tabIndex` (should not be focusable).

## v2.0.1

* Update dependency ffe-icons-react to ^2.3.0
* Update peerDependencies ffe-icons-react to ^2.3.0
* Removing sorting arrow in header cell if header is empty string

## v2.0.0

* BREAKING: `headers` prop is renamed to `columns` to include footers
* data is no longer a required prop in ResponsiveTable

### Migrating to v2.0.0
* Rename `headers` prop to `columns` in all tables
* Rename the `content` prop in the columns objects to `header`

change this:

```javascript
const headers = [
    { key: 'name', content: 'Varenavn' },
    { key: 'price', content: 'Pris', alignRight: true }
];
<ResponsiveTable headers={headers} data={data}>
```
to this:
```javascript
const columns = [
    { key: 'name', header: 'Varenavn' },
    { key: 'price', header: 'Pris', alignRight: true }
];
<ResponsiveTable columns={columns} data={data}>

```

## v1.0.2

* exports in index.js
* refactoring

## v1.0.1

* Update dependency ffe-icons-react to ^2.1.0

## v1.0.0

* Responsive table
* Sortable table
* Expandable row
* Update dependency ffe-tables to ^3.0.0

## v0.1.1

* Updgrade eslint to use latest FFE configuration

## v0.1.0

* Initial release
