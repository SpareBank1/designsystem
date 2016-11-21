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

The `headers` prop is _optional_, and expects an array of nodes like this:

```javascript
const headers = [
    <input type="checkbox" />,
    "First name",
    2016
];
```

The `data` prop is _optional_, and expects an array of arrays of nodes like this:

```javascript
const data = [
    ['row 1 column 1', 'row 1 column 2', 'row 1 column 3 etc', ],
    ['row 2 column 1', 'also support for components', <ActionButton onClick={this.onSave} />]
]
```


## Examples

To view live example tables, run `npm start`
