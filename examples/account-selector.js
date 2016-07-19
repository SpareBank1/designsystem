import React from 'react';
import { render } from 'react-dom';
import AccountSelector from '../src/account-selector';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Account selector';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const accountSelectorDOM = document.createElement('section');
document.body.appendChild(accountSelectorDOM);

const accounts = [
  {
    name: 'Skattetrekkskonto',
    accountNumber: '42010205683',
    balance: 66546.99,
    currencyCode: 'USD',
  },
  {
    name: 'Matvererkonto',
    accountNumber: '42011841044',
    balance: 24566546.21,
  },
  {
    name: 'Something else konto',
    accountNumber: '42000186044',
    balance: 12566546.34,
    currencyCode: 'EUR',
  },
  {
    name: 'Et virkelig langt kontonavn',
    accountNumber: '42020382079',
    balance: 13466546.15,
  },
  {
    name: 'Lønnskonto',
    accountNumber: '42020382117',
    balance: 4566546,
  },
  {
    name: 'Martins konto',
    accountNumber: '42003346573',
    balance: 0,
  },
  {
    name: 'Terjes konto',
    accountNumber: '42022319331',
    balance: 999999.99,
  },
  {
    name: 'Apple Inc',
    accountNumber: '42000619307',
    balance: 9999997643.50,
  },
];

const value = '42010205683';

function getAccount(accounts, accountNumber) {
  return accounts.find(account => account.accountNumber === accountNumber);
}

function onChange(accountNumberOrUserInput) {
  console.log('account changed', accountNumberOrUserInput);
}

function onBlur() {
  console.log('account selector lost focus');
}

function onAccountSelected(accountNumber) {
  console.log(`account selected from dropdown: ${accountNumber}`);
}

render(
  <div>
    <label htmlFor="custom-id" className="ffe-form-label">Velg konto</label>
    <AccountSelector
      accounts={ accounts }
      onChange={ onChange }
      onAccountSelected={ onAccountSelected }
      onBlur={ onBlur }
      locale="nb"
      placeholder="Velg Konto"
      id="custom-id"
      value={  value ? getAccount(accounts, value).name : '' }
      selectedAccount={ getAccount(accounts, value) }
    />
  </div>
  , accountSelectorDOM);
