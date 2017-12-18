# Table

Alle tabell-kolonner må ha en overskrift (UU). Kolonnene kan være sorterbare. Hele raden er klikkbar dersom den skal
ekspanderes. Vi har to varianter; en med normal fontstørrelse og en med redusert fontstørrelse. Ved særleg kompliserte
tabeller / mye informasjon kan fontstørrelsen reduseres.

Innrykk: I BM vil man kunne oppleve at man trenger å markere flere ekspanderinger. Heller enn å markere dette med
innrykk, definerer man dette nå ved hjelp av farge.

For å kunne definere en tabell, så trenger du to arrays - en med kolonner og en med dataen. Slik ser de ut:

```js static
const columns = [
    { key: 'name', heading: 'Navn'},
    { key: 'age', heading: 'Alder' },
];
const data = [
    { name: 'Anders' alder: 32 },
    { name: 'Erik' alder: 25 },
    { name: 'Gunn' alder: 29 },
    { name: 'Safi' alder: 42 },
    { name: 'Sandra' alder: 42 },
];
```

Slik ser det ut:

```js
const columns = [
    { key: 'name', heading: 'Navn'},
    { key: 'age', heading: 'Alder' },
];
const data = [
    { name: 'Anders' alder: 32 },
    { name: 'Erik' alder: 25 },
    { name: 'Gunn' alder: 29 },
    { name: 'Safi' alder: 42 },
    { name: 'Sandra' alder: 42 },
];

<Table
    caption="Utviklere"
    columns={columns}
    data={data}
/>
```

En tabell kan være sorterbar:

```js
const columns = [
    { key: 'name', heading: 'Navn'},
    { key: 'age', heading: 'Alder' },
];
const data = [
    { name: 'Anders' alder: 32 },
    { name: 'Erik' alder: 25 },
    { name: 'Gunn' alder: 29 },
    { name: 'Safi' alder: 42 },
    { name: 'Sandra' alder: 42 },
];

<Table
    caption="Utviklere"
    columns={columns}
    data={data}
    sortable={true}
/>
```

Du kan også spesifisere hvordan tabellen skal være sortert i utgangspunktet, f.eks. på alder
med eldst først:

```js
const columns = [
    { key: 'name', heading: 'Navn'},
    { key: 'age', heading: 'Alder' },
];
const data = [
    { name: 'Anders' alder: 32 },
    { name: 'Erik' alder: 25 },
    { name: 'Gunn' alder: 29 },
    { name: 'Safi' alder: 42 },
    { name: 'Sandra' alder: 42 },
];

<Table
    caption="Utviklere"
    columns={columns}
    data={data}
    sortable={{ sortBy: 'age', descending: true }}
/>
```

En tabell kan være paginert:

```js
const columns = [
    { key: 'name', heading: 'Navn'},
    { key: 'age', heading: 'Alder' },
];
let data = [
    { name: 'Anders' alder: 32 },
    { name: 'Erik' alder: 25 },
    { name: 'Gunn' alder: 29 },
    { name: 'Safi' alder: 42 },
    { name: 'Sandra' alder: 42 },
];
data = [...data, ...data];

<Table
    caption="Utviklere"
    columns={columns}
    data={data}
    limit={4}
/>
```

Du kan også få en mer kompakt tabell:

```js
const columns = [
    { key: 'name', heading: 'Navn'},
    { key: 'age', heading: 'Alder' },
];
const data = [
    { name: 'Anders' alder: 32 },
    { name: 'Erik' alder: 25 },
    { name: 'Gunn' alder: 29 },
    { name: 'Safi' alder: 42 },
    { name: 'Sandra' alder: 42 },
];

<Table
    caption="Utviklere"
    columns={columns}
    condensed={true}
    data={data}
/>
```

Det er støtte for ekspanderbare rader:

```js
const columns = [
    { key: 'name', heading: 'Navn'},
    { key: 'age', heading: 'Alder' },
];
const data = [
    { name: 'Anders' alder: 32, beskrivelse: 'Flittig' },
    { name: 'Erik' alder: 25 },
    { name: 'Gunn' alder: 29, beskrivelse: 'Flink' },
    { name: 'Safi' alder: 42, beskrivelse: 'Grundig' },
    { name: 'Sandra' alder: 42 },
];
data = [...data, ...data];

<Table
    caption="Utviklere"
    columns={columns}
    data={data}
    expandedContentMapper={row => row.beskrivelse && <span>Blir ofte omtalt som "{row.beskrivelse}"</span>}
/>
```