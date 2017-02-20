# ffe-tables-react
A flexible component for dealing with tables, FFE and React.

## Install

```
$ npm install --save ffe-core ffe-tables ffe-tables-react
```

`ffe-tables-react` has peer dependencies on `ffe-core` and `ffe-tables`.


## Usage

#### Columns
The `columns` prop is _required_, and expects an array of objects like this:

```javascript
const columns = [
    { key: 'name', header: 'Navn' },
    { key: 'age', header: 'Alder', alignRight: true }
];
```
The `key` prop in `columns` corresponds to the prop you want to display in the data array object.
The `alignRight` prop in will align the entire column

##### Footer
To add a footer to a column simply include a `footer` prop in the column-object like so:
```javascript
const columns = [
    { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },
    { key: 'age', header: 'Alder', footer: '37,67', alignRight: true }
];
```
Footers are compatible with all table variations

#### Data
The `data` prop is _required*_, and expects an array of object like this:

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
Note: the `address` prop will not be displayed since it's not defined in the `columns`.
*Not required when using a `ResponsiveTable` with `TableRowExpandable`.

### Responsive table
The `<ResponsiveTable />` component lets you create simple, yet flexible tables based on your data:

```javascript
<ResponsiveTable
    columns={Array}
    data={Array}
/>
```

#### Expandable rows
The `<TableRowExpandable />` component lets you create clickable tablerows that can expand complimentary content.
Use it as a child to `<ResponsiveTable />` with the `expandable={true}` prop. No need to pass the `data` prop.

```javascript
<ResponsiveTable
    columns={columns}
    expandable={true}>
      {
        tableData.map((row, index) => (
          <TableRowExpandable
            cells={ row }
            columns={columns}
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

The `columns` prop is _required_, and expects the same array passed to `<ResponsiveTable />`.
The `cells` prop is _required_, and expects one of the objects in the `data` array passed to `<ResponsiveTable />`.

##### Unexpandable expandable
Should you have the need to make some of your `TableRowExpandable` unexpandable (for lack of details or whatever)
this can be achieved by not passing children, or passing a `falsy` value like this:

```javascript
<TableRowExpandable
  cells={ row }
  columns={columns}
  key={ index }>
      { row.address && (
          <div>
              <p>This content will be revealed on expand<p>
              <p>Address: { row.address }</p>
          </div>
      )}
</TableRowExpandable>
```

In this example, if the person does not hav an address, the row will not be expandable.

### Sortable table
The `<SortableTable />` component lets you create simple, flexible and sortable table. It expects the same props as `<ResponsiveTable />`.

```javascript
<SortableTable
    columns={Array}
    data={Array}
/>
```
`<SortableTable />` is not sortable on screen width < 768px (@breakpoint-md)

## Examples

To view live example tables, run `npm start`
