# Formatters and how to use them

This document will document all formatters, how to use them and what to
expect when invoking them. For more detailed documentation, please visit
the relevant tests, as they provide more information on edge case behavior.

### `formatAccountNumber(accNumber)`

Formats an account number to the correct format separated with non breaking
space characters.

```javascript
import formatAccountNumber from 'ffe-formatters/lib/formatAccountNumber';

formatAccountNumber('90010012345') === '9001 00 12345'
```

### `formatCurrency(number [, opts])`

Formats an amount of currency with the correct prefix, postfix and decimals,
all separated by non breaking space characters.

The function accepts an optional second `opts`-object, with two keys:

```javascript
{
  prefix, // default 'kr. '
  postfix, // default ',-' if integer, '' if decimal
}
```

```javascript
import formatCurrency from 'ffe-formatters/lib/formatCurrency';

formatCurrency(1000) === 'kr. 1 000,-'
formatCurrency(13.37) === 'kr. 13,37'
formatCurrency(1000, { prefix: '', postfix: 'kroner'}) === '1 000,- kroner'
```

### `formatDate(timestamp)`

Formats timestamps, `Date`-objects  and `moment` instances to the correct
format.

```javascript
import formatDate from 'ffe-formatters/lib/formatDate';

formatDate(new Date('2000', 0, 1)) === '01.01.2000'
formatDate(moment('20000101')) === '01.01.2000'
formatDate(946681200000) === '01.01.2000'
```

### `formatDistance(distance[, opts])`

Formats distances in kilometers in the correct format with non breaking
space characters. Defaults to `km` as a suffix, but can be overridden with
the `unit` parameter in the `opts` argument if needed.

```javascript
import formatDistance from 'ffe-formatters/lib/formatDistance';

formatDistance(160520) === '160 520 km'
formatDistance(12345, { unit: 'mi' }) === '12 345 mi'
```

### `formatNumber(num [, opts])`

Formats numbers to the correct format separated with non breaking
space characters. Ignores decimals by default, but accepts the
number for decimals as a `decimals`-prop to the `opts`-argument.

```javascript
import formatNumber from 'ffe-formatters/lib/formatNumber';

formatNumber(1000000) === '1 000 000'
formatNumber(1234.567) === '1 234'
formatNumber(1234.567, { decimals: 2 }) === '1 234,56'
```

### `formatPercentage(num [, opts])`

Formats percentages to the correct format separated with non breaking
space characters. Returns as few decimals as possible. By default there's
a two digit maximum on decimals, but this can be overridden by the `maxDecimals`
property in the `opts` argument if needed.

```javascript
import formatPercentage from 'ffe-formatters/lib/formatPercentage';

formatPercentage(0.10) === '10 %';
formatPercentage(0.123456) === '12.35 %' // rounds the overflowing decimals
formatPercentage(0.123456, { maxDecimals: 4 }) === '12.3456'
```

### `formatFodselsnummer(fodselsnummer)`

Formats a Norwegian fødselsnummer to the correct format separated with
non breaking space characters.

```javascript
import formatFodselsnummer from 'ffe-formatters/lib/formatFodselsnummer';

formatFodselsnummer('01010112345') === '010101 12345'
```
