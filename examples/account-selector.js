import React, { Component } from 'react';
import { accounts as accountArray } from './example-data';
import AccountSelector from '../src/selectors/account-selector';

const preSelectedAccountNumber = '42010205683';

function getAccount(accounts, accountNumber) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === accountNumber) {
      return accounts[i];
    }
  }
}


function renderNoSuggestion() {
  return (
    <h2>Ingen treff</h2>
  );
}

class AccountSelectorExample extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {value: ''};
  }

  onChange(value) {
    console.log('onchange', value);
    this.setState({value});
  }

  onBlur(selectedAccount, inputvalue) {
    console.log('account selector lost focus, selected account:', selectedAccount);
  }

  onFocus() {
    console.log('account selector gained focus');
  }

  onAccountSelected(value) {
    console.log('account selected', value.target.value);
  }

  renderAccount(account) {
    return (
      <h2>{account.name}</h2>
    );
  }

  render() {
    return (
      <div className="selector">
        <label htmlFor="custom-id" className="ffe-form-label ffe-form-label--block selector-label">Velg konto</label>
        <AccountSelector
          value={this.state.value}
          accounts={accountArray}
          onAccountSelected={this.onAccountSelected}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}
export default AccountSelectorExample;
