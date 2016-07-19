# nfe-account-selector-react

A React account selector with autocomplete in ffe styling.

## Install

```
$ npm install --save nfe-account-selector-react
```

## Usage

```javascript
import AccountSelector from 'nfe-account-selector-react';

const accounts = [
{
    name: 'Tax account',
    accountNumber: '12345678912',
    balance: 66546.99,
    currencyCode: 'USD',
  },
]

<AccountSelector
    accounts={ accounts }
    onChange={ onChange }
    onAccountSelected={ onAccountSelected }
    onBlur={ onBlur }
    locale="nb"
    ariaInvalid={false}
    placeholder="Select account"
    id="custom-id"
    selectedAccount={ getAccount(accounts, value) }
    value={ value ? getAccount(accounts, value).name : '' }
/>
```
- accounts: Array of account objects where only "name" is a required prop.
- onChange: callback who will receive a string value with either the users typed value or the account number for the account the user selected.
- onBlur: same as onChange, but called when the component looses focus.
- locale: Either "nb", "nn" or "en". Defaults to "nb" if not set.
- placeholder (optional): Set the placeholder attribute of the input field.
- id (optional): Set the id attribute of the input field so a label can be associated with the field.
- ariaInvalid: signifies validation errors.
- selectedAccount: Sets the selected account number and balance under the selector box when for example navigating from summary page back to registration page.
- value: Sets the selected value in the selector box when for example navigating from summary page back to registration page.

You must also import the styles
```css
@import "node_modules/nfe-account-selector-react/styles/account-selector.less";
@import "node_modules/nfe-account-selector-react/styles/account-suggestions.less";
```

## Example

To view live example `npm start`

