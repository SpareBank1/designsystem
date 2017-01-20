import React from 'react';
import { accounts as accountArray } from './example-data';
import SuggestionListContainer from '../src/suggestion/suggestion-list-container';

const AccountSelectorExample = () => {

  const preSelectedAccountNumber = '42010205683';

  function getAccount(accounts, accountNumber) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].accountNumber === accountNumber) {
        return accounts[i];
      }
    }
  }

  function onChange(accountNumberOrUserInput) {
    console.log('account changed', accountNumberOrUserInput);
  }

  function onBlur(selectedAccount, inputvalue) {
    console.log('account selector lost focus, selected account:', selectedAccount);
  }

  function onFocus() {
    console.log('account selector gained focus');
  }

  function onAccountSelected(value) {
    console.log('account selected', value);
  }

  function renderAccount(account) {
    return (
      <h2>{account.name}</h2>
    );
  }

  return (
    <div className="selector">
      <label htmlFor="custom-id" className="ffe-form-label ffe-form-label--block selector-label">Velg konto</label>
      <SuggestionListContainer suggestions={accountArray} onSelect={onAccountSelected} renderSuggestion={(account) => renderAccount(account)}/>
    </div>
  );
};

export default AccountSelectorExample;
