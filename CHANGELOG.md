# Changelog

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
