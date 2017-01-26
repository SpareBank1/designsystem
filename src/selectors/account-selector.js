import React, { PropTypes } from 'react';
import BaseSelector from './base-selector';
import AccountSuggestionItem from '../account/account-suggestion';
import AccountNoMatch from '../account/account-nomatch';
import AccountDetails from '../account/account-details';
import {Account, Locale} from '../util/types';


class AccountSelector extends React.Component {
  render() {
    const {selectedAccount, locale, noMatches, accounts, onAccountSelected} = this.props;
    return (
      <div>
        <BaseSelector
          renderSuggestion={(account)=> <AccountSuggestionItem account={account} locale={locale}/>}
          renderNoMatches={()=> <AccountNoMatch value={noMatches}/>}
          giveInputFocusOnSelect={true}
          giveInputFocusOnReset={true}
          suggestions={accounts}
          onSelect={onAccountSelected}
          {...this.props}
        />
        {selectedAccount &&
        <AccountDetails account={selectedAccount} locale={locale}/> }
      </div>
    );
  }
}

AccountSelector.propTypes = {
  selectedAccount: Account,
  locale: Locale.isRequired,
  noMatches : PropTypes.string,
};

export default AccountSelector;
