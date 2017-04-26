# Formatters and how to use them

This document will document all formatters, how to use them and what to
expect when invoking them. For more detailed documentation, please visit
the relevant tests, as they provide more information on edge case behavior.

### `account-number(accNumber)`

Formats an account number to the correct format separated with non breaking
space characters.

```javascript
import formatAccountNumber from 'ffe-formatters/account-number';

formatAccountNumber('90010012345') === '9001 00 12345'
```

### `amount(number [, options])`

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

formatAmount(1000) === 'kr. 1 000,-'
formatAmount(13.37) === 'kr. 13,37'
formatAmount(1000, { prefix: '', postfix: 'kroner'}) === '1 000,- kroner'
```

### `date(timestamp)`

Formats timestamps, `Date`-objects  and `moment` instances to the correct
format.

```javascript
import formatDate from 'ffe-formatters/date';

formatDate(new Date('2000', 0, 1)) === '01.01.2000'
formatDate(moment('20000101')) === '01.01.2000'
formatDate(946681200000) === '01.01.2000'
```

### `km(distance)`

Formats distances in kilometers in the correct format with non breaking
space characters.

```javascript
import formatKm from 'ffe-formatters/km';

formatKm(160520) === '160 520 km'
```


### `number(num [, decimals = 0])`

Formats numbers to the correct format separated with non breaking
space characters. Ignores decimals by default, but accepts the
number for decimals as a second argument.

```javascript
import formatNumber from 'ffe-formatters/number';

formatNumber(1000000) === '1 000 000'
formatNumber(1234.567) === '1 234'
formatNumber(1234.567, 2) === '1 234,56'
```

### `ssn(fødselsnummer)`

Formats a Norwegian SSN (fødselsnummer) to the correct format separated with
non breaking space characters.

```javascript
import formatSsn from 'ffe-formatters/ssn';

formatSsn('01010112345') === '010101 12345'
```
