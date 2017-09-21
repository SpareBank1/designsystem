import React from 'react';
import autoBind from 'react-auto-bind';
import { accounts } from './example-data';
import AccountSelectorMulti from '../src/selectors/account-selector-multi';

class AccountSelectorMultiWithAllExample extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      value: '',
      selectedAccounts: []
    };
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
    const {selectedAccounts} = this.state;
    const filteredAccounts = selectedAccounts.filter(a => a.accountNumber !== account.accountNumber);
    if (filteredAccounts.length < selectedAccounts.length) {
      this.setState({selectedAccounts: filteredAccounts});
    } else {
      this.setState({selectedAccounts: [...selectedAccounts, account]});
    }
  }

  onSelectAll() {
    const {selectedAccounts} = this.state;
    this.setState({selectedAccounts: selectedAccounts.length === accounts.length ? [] :  [...accounts]});
  }

  onReset() {
    console.log('onreset');
    this.setState({value: ''});
  }

  placeholderText() {
    const {selectedAccounts} = this.state;
    if (selectedAccounts.length === 0) {
      return 'Ingen kontoer valgt';
    } else if (selectedAccounts.length === 1) {
      return '1 konto valgt';
    }
    return `${selectedAccounts.length} kontoer valgt`;
  }

  render() {
    const {value, selectedAccounts} = this.state;
    return (
      <div className="selector">
        <label htmlFor="custom-id" className="ffe-form-label ffe-form-label--block selector-label">Velg konto</label>
        <AccountSelectorMulti
          value={value}
          placeholder={this.placeholderText()}
          showSelectAllOption={true}
          onSelectAll={this.onSelectAll}
          accounts={accounts}
          onAccountSelected={this.onAccountSelected}
          onChange={this.onChange}
          onReset={this.onReset}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          selectedAccounts={selectedAccounts}
          noMatches='Ingen'
          locale='nb'
          id = 'account-selector-multi'
          suggestionsHeightMax={500}
        />
      </div>
    );
  }
}

export default AccountSelectorMultiWithAllExample;
