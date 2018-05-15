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
Bruk av render funksjoner for columns: cellRender, columnHeaderRender, columnFooterRender.

For hele tabellen: rowRender, headerRender, footerRender.

```js
const classNames = require('classnames');
const HakeIkon = require('@sb1/ffe-icons-react/lib').HakeIkon;
const KryssIkon = require('@sb1/ffe-icons-react/lib').KryssIkon;

const generateCheckbox = value => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            {value ? (
                <HakeIkon className="ffe-table__expand-icon" />
            ) : (
                <KryssIkon className="ffe-table__expand-icon" />
            )}
        </div>
    );
};

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

data.map(e => {
    e.syntetic = e.age > 18 && formatNumber(e.networth) > 10000;
});

const ageSum = data.map(e => e.age).reduce((total, num) => {
    return total + num;
});

const networthSum = data
    .map(e => formatNumber(e.networth))
    .reduce((total, num) => {
        return total + num;
    });

const columnsAdvanced = [
    { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },
    { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },
    {
        key: 'age',
        header: 'Alder',
        footer: ageSum / data.length,
        alignRight: true,
        cellRender: (value, col, props) => {
            return (
                <React.Fragment>
                    {value} {value > 18 ? ' (voksen)' : ''}
                </React.Fragment>
            );
        },
    },
    {
        key: 'syntetic',
        header: 'Syntetisk felt',
        alignRight: true,
        notSortable: true,
        cellRender: (value, col, props) => {
            return (
                <React.Fragment>
                    {props.cells.age > 18 &&
                    formatNumber(props.cells.networth) > 10000
                        ? 'voksen, formue > 10000'
                        : ''}
                </React.Fragment>
            );
        },
    },
    {
        key: 'syntetic',
        header: 'Sparing',
        alignRight: true,
        columnHeaderRender: (
            value,
            dataWindow,
            spanProps,
            thProps,
            columns,
        ) => {
            dataWindowSum = dataWindow
                .map(e => (e.syntetic ? 1 : 0))
                .reduce((total, num) => {
                    return total + num;
                });
            return (
                <th key={thProps.key} {...thProps}>
                    <span {...spanProps}>
                        {value} ({dataWindowSum})
                    </span>
                </th>
            );
        },
        cellRender: (value, col, props) => {
            return (
                <React.Fragment>
                    {' '}
                    {value ? generateCheckbox(value) : generateCheckbox(false)}
                </React.Fragment>
            );
        },
    },
    {
        key: 'networth',
        header: 'Formue',
        footer: '5 348 760,23',
        alignRight: true,
        compare: currencyCompare,

        columnFooterRender: (
            value,
            dataWindow,
            tdPorps,
            spanProps,
            columns,
            index,
        ) => {
            return (
                <th key={tdPorps.key} {...tdPorps}>
                    <span {...spanProps}>
                        {Number(networthSum / 4).toFixed(2)}
                    </span>
                </th>
            );
        },
    },
    { key: 'button', header: 'Poke', notSortable: true },
];

// Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy
const expandedContentMapper = row =>
    row.address && <span>Adresse: {row.address}</span>;

// function is called when table sorting changes.
const onSort = ({ sortBy, descending, tableData }) => {};

<Table
    columns={columnsAdvanced}
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
    headerRender={(trprops, columns) => {
        return (
            <React.Fragment>
                <tr {...trprops}>
                    <th
                        colSpan={3}
                        className="ffe-table__heading"
                        style={{ textAlign: 'center' }}
                    >
                        Personlig
                    </th>
                    <th colSpan={2} className="ffe-table__heading" />
                    <th colSpan={3} className="ffe-table__heading">
                        Overskrift
                    </th>
                </tr>
                <tr {...trprops}/>
            </React.Fragment>
        );
    }}
    footerRender={(trprops, columns) => {
        return (
            <React.Fragment>
                <tr {...trprops}/>
                <tr {...trprops}>
                    <td className="ffe-table__cell" data-th="Navn">
                        <span className="ffe-table__content">Total</span>
                    </td>
                    <td className="ffe-table__cell" data-th="E-post">
                        <span className="ffe-table__content" />
                    </td>
                    <td className="ffe-table__cell" data-th="Alder">
                        <span className="ffe-table__content ffe-table__content--text-right" />
                    </td>
                    <td className="ffe-table__cell" data-th="Syntetisk felt">
                        <span className="ffe-table__content ffe-table__content--text-right" />
                    </td>
                    <td className="ffe-table__cell" />
                    <th className="ffe-table__cell" data-th="Formue">
                        <span className="ffe-table__content ffe-table__content--text-right">
                            {networthSum}
                        </span>
                    </th>
                    <td className="ffe-table__cell" data-th="Poke">
                        <span className="ffe-table__content" />
                    </td>
                    <td className="ffe-table__cell" data-th="">
                        <span className="ffe-table__content ffe-table__content--text-right" />
                    </td>
                </tr>
            </React.Fragment>
        );
    }}
    rowRender={(trprops, props, index) => {
        const odd = index % 2 === 1;
        return <tr
                {...trprops}
                className={classNames(
                    trprops.className,
                    'ffe-table__row-expandable',
                    { odd: odd },
                )}
                onClick={event => {
                    console.log('rowRenderClick!', index);
                    trprops.onClick(event);
                }}
                title={props.cells['name']}
            >
            {trprops.children}
            </tr>
            
        ;
    }}
/>;
```
