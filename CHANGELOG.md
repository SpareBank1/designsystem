# Changelog

## v.3.0.0

* BREAKING: Behavioural change on `TableRowExpandable`. If no children, or a falsy value is passed as children, the row will not be expandable. This will remove chevron, tabIndex and event listeners from the `tr`. This is intended used when there are no details available for the row, or if the expandable area contains actions which are currently blocked on this item.
* Fixed: `TableRow` in a plain `ResponsiveTable` should not have a `tabIndex` (should not be focusable).

## v2.0.1

* Update dependency ffe-icons-react to ^2.3.0
* Update peerDependencies ffe-icons-react to ^2.3.0
* Removing sorting arrow in header cell if header is empty string

## v2.0.0

* BREAKING: `headers` prop is renamed to `columns` to include footers
* data is no longer a required prop in ResponsiveTable

### Migrating to v.2.0.0
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
