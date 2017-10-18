import React, {Component} from 'react';
import {accounts as accountArray} from './example-data';
import AccountSelector from '../src/selectors/account-selector';
import { Account } from '../src/util/types';

class AccountSelectorExample extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onAccountSelected = this.onAccountSelected.bind(this);
    this.state = {
      selectedAccount: props.selectedAccount,
      value: props.selectedAccount ? props.selectedAccount.name : ''
    };
  }

  onChange(value) {
    console.log('onchange', value);
    this.setState({selectedAccount: null, value});
  }

  onBlur() {
    console.log('onblur');
  }

  onFocus() {
    console.log('onfocus');
  }

  onClick() {
    console.log('onclick');
  }

  onAccountSelected(account) {
    console.log('account selected', account);
    this.setState({
      selectedAccount: account,
      value: account.name,
    });
  }

  onReset() {
    console.log('onreset');
    this.setState({value: '', selectedAccount: null});
  }

  render() {
    const {selectedAccount, value} = this.state;
    return (
      <div className="selector">
        <label htmlFor="account-selector" className="ffe-form-label ffe-form-label--block selector-label">Velg konto</label>
        <AccountSelector
          value={value}
          accounts={accountArray}
          onAccountSelected={this.onAccountSelected}
          onChange={this.onChange}
          onReset={this.onReset}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onClick={this.onClick}
          selectedAccount={selectedAccount}
          noMatches='Ingen'
          locale='nb'
          id='account-selector'
          suggestionsHeightMax={500}
        />
      </div>
    );
  }
}

AccountSelectorExample.propTypes = {
  selectedAccount: Account
};

export default AccountSelectorExample;
