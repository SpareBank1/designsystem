# ffe-tables-react
A flexible component for dealing with tables, FFE and React.

## Install

```
$ npm install --save ffe-core ffe-tables ffe-tables-react
```

`ffe-tables-react` has peer dependencies on `ffe-core` and `ffe-tables`.


## Usage

The `<ResponsiveTable />` component lets you create simple, yet flexible tables based on your data:

```javascript
<ResponsiveTable
    headers={Array}
    data={Array}
/>
```

The `headers` prop is _required_, and expects an array of objects like this:

```javascript
const headers = [
    { key: 'name', content: 'Navn' },
    { key: 'age', content: 'Alder', alignRight: true }
];
```
The `key` prop in headers corresponds to the prop you want to display in the data array object.
The `alignRight` prop in headers will align the entire column

# Footers
To add a footer to simply include a `footerContent` prop to the corresponding header object, like so:
```javascript
const headers = [
    { key: 'name', content: 'Varenavn', footerContent: 'Sum' },
    { key: 'price', content: 'Pris', footerContent: 'kr 123,50' alignRight: true }
];
```

The `data` prop is _required_, and expects an array of object like this:

```javascript
const data = [
    {
        name: 'Ola Normann',
        address: 'Gateveien 2',
        age: 23
    },
    {
        name: 'Sivert Svenska',
        address: 'Gatuveio 7',
        age: 45,
    },
    {
        name: 'Daniel Dansk',
        address: <button>legg til adresse</button>,
        age: 45,
    }
]
```

Note: the `address` prop will not be displayed since it's not defined in the `headers`.

The `<SortableTable />` component lets you create simple, flexible and sortable table. It expects the same props as `<ResponsiveTable />`.

```javascript
<SortableTable
    headers={Array}
    data={Array}
/>
```
`<SortableTable />` is not sortable on screen width < 768px (@breakpoint-md)

The `<ExpandableRow />` component lets you create clickable tablerows that can expand complimentary content.
Use it as a child to `<ResponsiveTable />` with the `expandable={true}` prop
You need to pass the same `headers` prop to <TableRowExpandable />

```javascript
<ResponsiveTable
    headers={headers}
    data={tableData}
    expandable={true}>
      {
        tableData.map((row, index) => (
          <TableRowExpandable
            cells={ row }
            headers={headers}
            key={ index }>
                <div>
                    <p>This content will be revealed on expand<p>
                    <p>Address: { row.address }</p>
                </div>
          </TableRowExpandable>
        ))
      }
</ResponsiveTable>
```

The `headers` prop is _required_, and expects the same array passed to `<ResponsiveTable />`.
The `cells` prop is _required_, and expects one of the objects in the `data` array passed to `<ResponsiveTable />`.

## Examples

To view live example tables, run `npm start`
