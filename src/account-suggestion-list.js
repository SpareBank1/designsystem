import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AccountSuggestion from './account-suggestion';

export default class AccountSuggestionList extends Component {

  getSelectedDOM() {
    return ReactDOM.findDOMNode(this._selectedElement);
  }

  render() {
    const { accounts, onSelect, selectedAccount } = this.props;

    if (accounts.length === 0) {
      return null;
    }

    const selectedAccountIndex = accounts.indexOf(selectedAccount);
    const refIfIsSelectedAccountIndex = index => component => {
      if (selectedAccountIndex === index) {
        this._selectedElement = component;
      }
    };

    return (
      <ul className="nfe-account-suggestions" role="listbox">
        {accounts.map((account, index) => (
          <li className="nfe-account-suggestions__item" key={ account.accountNumber }>
            <AccountSuggestion
              account={ account }
              onSelect={ onSelect }
              ref={ refIfIsSelectedAccountIndex(index) }
              highlighted={ selectedAccountIndex === index }
            />
          </li>
        ))}
      </ul>
    );
  }
}

AccountSuggestionList.propTypes = {
  accounts: PropTypes.array,
  onSelect: PropTypes.func,
  selectedAccount: PropTypes.object,
};

AccountSuggestionList.defaultValues = {
  accounts: [],
  onSelect: () => {},
};
