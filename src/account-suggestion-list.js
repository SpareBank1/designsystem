import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AccountSuggestion from './account-suggestion';

export default class AccountSuggestionList extends Component {

  getSelectedDOM() {
    return ReactDOM.findDOMNode(this._selectedElement);
  }

  render() {
    const { accounts, onSelect, highlightedAccount, locale } = this.props;

    if (accounts.length === 0) {
      return null;
    }

    const highlightedAccountIndex = accounts.indexOf(highlightedAccount);
    const refIfIshighlightedAccountIndex = index => component => {
      if (highlightedAccountIndex === index) {
        this._selectedElement = component;
      }
    };

    return (
      <ul className="nfe-account-suggestions" role="listbox">
        {accounts.map((account, index) => (
          <li className="nfe-account-suggestions__item" key={ account.accountNumber }>
            <AccountSuggestion
              locale={locale}
              account={ account }
              onSelect={ onSelect }
              ref={ refIfIshighlightedAccountIndex(index) }
              highlighted={ highlightedAccountIndex === index }
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
  highlightedAccount: PropTypes.object,
  locale: PropTypes.oneOf(["nb", "nn" ,"en"]),
};

AccountSuggestionList.defaultValues = {
  accounts: [],
  onSelect: () => {},
};
