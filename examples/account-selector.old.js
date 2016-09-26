import React from 'react';
import { render } from 'react-dom';
import AccountSelector, { AccountSelectorMulti } from '../src/account-selector';
import BaseSelector from '../src/selectors/base-selector';
//import AccountSelectorMulti from '../src/selectors/account-selector-multi';
import { accounts, accountGroups, people } from './example-data';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Account selector';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const accountSelectorDOM = document.createElement('section');
document.body.appendChild(accountSelectorDOM);

const value = '42010205683';

function getAccount(accounts, accountNumber) {
  const account = accounts.find(account => account.accountNumber === accountNumber);
  return account;
}

function onChange(accountNumberOrUserInput) {
  console.log('account changed', accountNumberOrUserInput);
}

function onBlur(value) {
  console.log(`account selector lost focus, account number or input value: ${value}`);
}

function onFocus() {
  console.log('account selector gained focus');
}

function onAccountSelected(value) {
  console.log('account selected', value);
}

function renderMultiselectStatus(selectedItems) {
  if (selectedItems.length === 0) {
    return 'Ingen kontoer valgt';
  } else if (selectedItems.length === 1) {
    return `${selectedItems.length} konto valgt`;
  }
  return `${selectedItems.length} kontoer valgt`;
}

function renderPersonRow({item}) {
  return <div className="person-suggestion">{item.name}</div>;
}

function personFilter(query) {
  return (item) => {
    return item.name.toLowerCase().indexOf(query) !== -1;
  };
}

function personSelected(person) {
  console.log('selected person', person);
}

render(
  <div>
    <div className="selector">
      <label htmlFor="custom-id" className="ffe-form-label selector-label">Velg konto</label>
      <AccountSelector
        accounts={ accounts }
        onChange={ onChange }
        onBlur={ onBlur }
        onFocus={ onFocus }
        locale="nb"
        placeholder="Velg Konto"
        noMatches="Ingen kontoer"
        id="custom-id"
        value={  value ? getAccount(accounts, value).name : '' }
        selectedAccount={ getAccount(accounts, value) }
      />
    </div>
    <div className="selector">
      <label htmlFor="multiselector" className="ffe-form-label selector-label">Velg konto</label>
      <AccountSelectorMulti
        accounts={ accountGroups }
        locale="nb"
        id="multiselector"
        placeholder="Velg konto"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={ onFocus }
        onAccountSelected={onAccountSelected}
        noMatches="Ingen kontoer"
        renderMultiselectStatus={renderMultiselectStatus}
      />
    </div>
    <div className="selector">
      <label htmlFor="general-selector" className="ffe-form-label selector-label">Velg person</label>
      <BaseSelector
        items={ people }
        renderItemRow={ renderPersonRow }
        multiple={ false }
        onChange={ onChange }
        filter={ personFilter }
        locale="nb"
        inputId="person-input"
        placeholder="Velg person"
        noMatches="Ingen personer matchet"
        selectedItems={[]}
        onFocus={onFocus}
        value=""
        onItemSelected={personSelected}
      />
    </div>
  </div>
  , accountSelectorDOM);
