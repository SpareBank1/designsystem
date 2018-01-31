Presentasjon av valuta, datoer, prosenter, og tall kan gjøres på mange
forskjellige måter.

For å presentere disse ulike tingene likt på tvers har vi samlet
formateringsfunksjoner på ett sted som utviklere kan bruke i pakken
`ffe-formatters`.

Her er hvordan vi presenterer et utvalg av informasjon:

```js
const formatters = require('./src');
const Table = require('../ffe-tables-react/lib').default;

const columns = [
    { key: 'type', header: 'Type' },
    { key: 'example', header: 'Eksempel' },
];

const data = [
    { type: 'Datoer', example: formatters.formatDate(Date.now()) },
    { type: 'Tall', example: formatters.formatNumber(100000) },
    { type: 'Valuta', example: formatters.formatCurrency(1000) },
    { type: 'Prosenter', example: formatters.formatPercentage(7) },
    {
        type: 'Kontonummer',
        example: formatters.formatAccountNumber('12345678901'),
    },
    {
        type: 'Fødselsnummer',
        example: formatters.formatFodselsnummer('12345678901'),
    },
    { type: 'Avstander', example: formatters.formatDistance(50) },
];

<Table columns={columns} data={data} />;
```
