import React, { Component } from 'react';
import { accounts as accountArray } from './example-data';
import AccountSelector from '../src/selectors/account-selector';

class AccountSelectorExample extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onAccountSelected = this.onAccountSelected.bind(this);
    this.state = {value: ''};
  }

  onChange(value) {
    console.log('onchange', value);
    this.setState({value});
  }

  onBlur() {
    console.log('onblur');
  }

  onFocus() {
    console.log('onfocus');
  }

  onAccountSelected(account) {
    console.log('account selected', account);
    this.setState({
      selectedAccount : account,
      value : account.name,
    });
  }

  onReset(){
    console.log('onreset');
    this.setState({value : '', selectedAccount : null});
  }

  render() {
    const {selectedAccount, value} = this.state;
    return (
      <div className="selector">
        <label htmlFor="custom-id" className="ffe-form-label ffe-form-label--block selector-label">Velg konto</label>
        <AccountSelector
          value={value}
          accounts={accountArray}
          onAccountSelected={this.onAccountSelected}
          onChange={this.onChange}
          onReset={this.onReset}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          selectedAccount={selectedAccount}
          noMatches='Ingen'
          locale='nb'
          suggestionsHeightMax={500}
        />
      </div>
    );
  }
}
export default AccountSelectorExample;
