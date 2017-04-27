# Formatters and how to use them

This document will document all formatters, how to use them and what to
expect when invoking them. For more detailed documentation, please visit
the relevant tests, as they provide more information on edge case behavior.

### `formatAccountNumber(accNumber)`

Formats an account number to the correct format separated with non breaking
space characters.

```javascript
import formatAccountNumber from 'ffe-formatters/account-number';
import { formatAccountNumber } from 'ffe-formatters';

formatAccountNumber('90010012345') === '9001 00 12345'
```

### `formatAmount(number [, options])`

Formats an amount with the correct prefix, postfix and decimals, all
separated by non breaking space characters.

The function accepts an optional second `options`-object, with two keys:

```javascript
{
  prefix, // default 'kr. '
  postfix, // default ',-' if integer, '' if decimal
}
```

```javascript
import formatAmount from 'ffe-formatters/amount';
import { formatAmount } from 'ffe-formatters';

formatAmount(1000) === 'kr. 1 000,-'
formatAmount(13.37) === 'kr. 13,37'
formatAmount(1000, { prefix: '', postfix: 'kroner'}) === '1 000,- kroner'
```

### `formatDate(timestamp)`

Formats timestamps, `Date`-objects  and `moment` instances to the correct
format.

```javascript
import formatDate from 'ffe-formatters/date';
import { formatDate } from 'ffe-formatters';

formatDate(new Date('2000', 0, 1)) === '01.01.2000'
formatDate(moment('20000101')) === '01.01.2000'
formatDate(946681200000) === '01.01.2000'
```

### `formatKm(distance)`

Formats distances in kilometers in the correct format with non breaking
space characters.

```javascript
import formatKm from 'ffe-formatters/km';
import { formatKm } from 'ffe-formatters';

formatKm(160520) === '160 520 km'
```

### `formatNumber(num [, decimals = 0])`

Formats numbers to the correct format separated with non breaking
space characters. Ignores decimals by default, but accepts the
number for decimals as a second argument.

```javascript
import formatNumber from 'ffe-formatters/number';
import { formatNumber } from 'ffe-formatters/number';

formatNumber(1000000) === '1 000 000'
formatNumber(1234.567) === '1 234'
formatNumber(1234.567, 2) === '1 234,56'
```

### `formatPercentage(num [, maxDecimals = 2])`

Formats percentages to the correct format separated with non breaking
space characters. Returns as few decimals as possible. By default there's
a two digit maximum on decimals, but this can be overridden by the second
optional argument if needed.

```javascript
import formatPercentage from 'ffe-formatters/percentage';
import { formatPercentage } from 'ffe-formatters';

formatPercentage(0.10) === '10 %';
formatPercentage(0.123456) === '12.35 %' // rounds the overflowing decimals
formatPercentage(0.123456, 4) === '12.3456'
```

### `formatSsn(fødselsnummer)`

Formats a Norwegian SSN (fødselsnummer) to the correct format separated with
non breaking space characters.

```javascript
import formatSsn from 'ffe-formatters/ssn';
import { formatSsn } from 'ffe-formatters';

formatSsn('01010112345') === '010101 12345'
```
