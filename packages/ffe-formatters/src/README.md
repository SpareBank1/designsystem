### Tall

#### Valuta

```js static
import formatCurrency from '@sb1/ffe-formatters/lib/formatCurrency';
```

Kan gis et objekt som andre argument for å styre prefix og postfix:

```js static
{
  prefix, // default 'kr. '
  postfix, // default ',-' hvis heltall, '' hvis ikke
}
```

```js
const formatCurrency = require('./formatCurrency').default;
<React.Fragment>
    <div>{formatCurrency(100)}</div>
    <div>{formatCurrency(1000, { prefix: '', postfix: ' kroner' })}</div>
</React.Fragment>;
```

### Prosenter

```js static
import formatPercentage from '@sb1/ffe-formatters/lib/formatPercentage';
```

Gir prosenter det korrekte mellomrom mellom tall og `%` med et _non-breaking space_.
Runder av til så få desimaler som mulig, med en default cap på to desimaler. Dette
kan overstyres i `options`-objektet.

```js static
{
    maxDecimals, // default 2
    minDecimals, // default 0
}
```

```jsx
const formatPercentage = require('./formatPercentage').default;

<React.Fragment>
    <div>{formatPercentage(10.00001)}</div>
    <div>{formatPercentage(12.34567, { maxDecimals: 4 })}</div>
    <div>{formatPercentage(1, { minDecimals: 2 })}</div>
</React.Fragment>;
```

### Fødselsnummer

```js static
import formatFodselsnummer from '@sb1/ffe-formatters/lib/formatFodselsnummer';
```

Formatert i to deler med et _non-breaking space_.

```js
const formatFodselsnummer = require('./formatFodselsnummer').default;

<span>{formatFodselsnummer('01010112345')}</span>;
```

#### Kontonummer

```js static
import formatAccountNumber from '@sb1/ffe-formatters/lib/formatAccountNumber';
```

```jsx
const formatAccountNumber = require('./formatAccountNumber').default;

<span>{formatAccountNumber('90010012345')}</span>;
```

#### Tall generelt

Om ingen av de spesialiserte formateringsfunksjonene passer i en gitt sammenheng kan du bruke
`formatNumber`. Denne funksjonen utgjør basen i mange av funksjonene over.

```js static
import formatNumber from '@sb1/ffe-formatters/lib/formatNumber';
```

```js static
{
  decimals: 2, // default 0
  thousandSeparator: ',', // default ' ' (space)
  decimalMark: '.', // default ','
}
```

```jsx
const formatNumber = require('./formatNumber').default;

<React.Fragment>
    <div>{formatNumber(1000000)}</div>
    <div>{formatNumber(1234.567)}</div>
    <div>{formatNumber(1234.567, { decimals: 2 })}</div>
    <div>
        {formatNumber(1234.567, {
            decimals: 2,
            thousandSeparator: ',',
            decimalMark: '.',
        })}
    </div>
</React.Fragment>;
```

### Dato

```js static
import formatDate from '@sb1/ffe-formatters/lib/formatDate';
```

Formaterer timestamps, `Date`- og `moment`-objekter. **Støtter kun norsk locale!**

```jsx
const formatDate = require('./formatDate').default;

<React.Fragment>
    <div>{formatDate(new Date('2000', 0, 1))}</div>
    {/* <div>{formatDate(moment('20000101'))}</div> */}
    <div>{formatDate(946681200000)}</div>
</React.Fragment>;
```

### Avstander

```js static
import formatDistance from '@sb1/ffe-formatters/lib/formatDistance';
```

```js static
{
  units, // default 'km',
}
```

```jsx
const formatDistance = require('./formatDistance').default;

<React.Fragment>
    <div>{formatDistance(160520)}</div>
    <div>{formatDistance(12345, { unit: 'mi' })}</div>
</React.Fragment>;
```
