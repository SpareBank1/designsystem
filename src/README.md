# Formatters and how to use them

This document will document all formatters, how to use them and what to
expect when invoking them. For more detailed documentation, please visit
the relevant tests, as they provide more information on edge case behavior.

## Table of contents

- [`account-number`](#account-number)
- [`ssn`](#ssn)

### `account-number`

Formats an account number to the correct format separated with non breaking
space characters.

```javascript
import formatAccountNumber from 'ffe-formatters/account-number';

formatAccountNumber('90010012345') === '9001 00 12345'
```

### `ssn`

Formats a Norwegian SSN (fødselsnummer) to the correct format separated with
non breaking space characters.

```javascript
import formatSsn from 'ffe-formatters/ssn';

formatSsn('01010112345') === '010101 12345'
```
