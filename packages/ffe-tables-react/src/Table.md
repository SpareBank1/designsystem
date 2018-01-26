# Table

Alle tabell-kolonner må ha en overskrift (UU). Kolonnene kan være sorterbare.
Hele raden er klikkbar dersom den skal ekspanderes.
Vi har to varianter; en med normal fontstørrelse og en med redusert fontstørrelse.
Ved særleg kompliserte tabeller / mye informasjon kan fontstørrelsen reduseres.

Innrykk: I BM vil man kunne oppleve at man trenger å markere flere ekspanderinger.
Heller enn å markere dette med innrykk, definerer man dette nå ved hjelp av farge.

For å kunne definere en tabell, så trenger du to arrays - en med kolonner og en med dataen.

Slik ser det ut:

```js
const columns = [
    { key: 'name', header: 'Navn' },
    { key: 'age', header: 'Alder' },
];
const data = [
    { name: 'Anders', age: 32 },
    { name: 'Erik', age: 25 },
    { name: 'Gunn', age: 29 },
    { name: 'Safi', age: 42 },
    { name: 'Sandra', age: 42 },
];

<Table caption="Utviklere" columns={columns} data={data} />;
```

Både `columns` og `Table` har en del props tilgjengelige.
Disse er nærmere dokumentert i `Table.propTypes`.

Et mer komplekst eksempel kan se slik ut:

```js
const Button = ({ children }) => (
    // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen
    <button onClick={e => e.stopPropagation()}>{children}</button>
);

const data = [
    {
        id: 0,
        name: 'Ola Normann',
        email: 'ola@normann.no',
        address: 'Gateveien 2',
        age: 23,
        networth: '12 693 005,93',
        button: <Button>poke</Button>,
    },
    {
        id: 1,
        name: 'Sivert Svenska',
        email: 'sivert@svenska.se',
        age: 45,
        networth: '9 005,93',
        button: <Button>poke</Button>,
    },
    {
        id: 2,
        name: 'Daniel Dansk',
        email: 'daniel@dansk.dk',
        address: <Button>legg til adresse</Button>,
        age: 39,
        networth: '8 693 005,93',
        button: <Button>poke</Button>,
    },
    {
        id: 3,
        name: 'Lille Ole',
        email: 'lilleole@gmail.com',
        address: <Button>legg til adresse</Button>,
        age: 9,
        networth: '23,12',
        button: <Button>poke</Button>,
    },
];

const formatNumber = num =>
    Number(
        num
            .toString()
            .replace(/\s/g, '')
            .replace(/,/g, '.'),
    );
const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);

const columns = [
    { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },
    { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },
    {
        key: 'age',
        header: 'Alder',
        footer: '29',
        alignRight: true,
        hideOnMobile: true,
    },
    {
        key: 'networth',
        header: 'Formue',
        footer: '5 348 760,23',
        alignRight: true,
        compare: currencyCompare,
    },
    { key: 'button', header: 'Poke', notSortable: true },
];

// Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy
const expandedContentMapper = row =>
    row.address && <span>Adresse: {row.address}</span>;

// function is called when table sorting changes.
const onSort = ({sortBy, descending, tableData}) => {};

<Table
    columns={columns}
    data={data}
    expandedContentMapper={expandedContentMapper}
    sortable={true}
    sortBy={'age'}
    descending={true}
    condensed={true}
    smallHeader={true}
    columnLayoutMobile={true}
    breakpoint={'none'}
    caption="Masse spennende data"
    onSort={onSort}
/>;
```
