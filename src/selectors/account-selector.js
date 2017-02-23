import React, {PropTypes} from 'react';
import BaseSelector from './base-selector';
import AccountSuggestionItem from '../account/account-suggestion';
import AccountNoMatch from '../account/account-nomatch';
import AccountDetails from '../account/account-details';
import {Account, Locale} from '../util/types';
import {accountFilter} from '../filter/filters';

function AccountSelector(props) {
  const {selectedAccount, locale, noMatches, onAccountSelected, accounts} = props;
  return (
    <div className='account-selector'>
      <BaseSelector
        renderSuggestion={(account) => <AccountSuggestionItem account={account} locale={locale}/>}
        renderNoMatches={() => <AccountNoMatch value={noMatches}/>}
        shouldHideSuggestionsOnSelect={true}
        shouldSelectHighlightedOnTab={true}
        suggestionFilter={accountFilter}
        onSelect={onAccountSelected}
        suggestions={accounts}
        {...props}
      />
      {selectedAccount &&
      <AccountDetails account={selectedAccount} locale={locale}/> }
    </div>
  );
}

AccountSelector.propTypes = {
  onAccountSelected : PropTypes.func.isRequired,
  accounts : PropTypes.arrayOf(Account),
  locale: Locale.isRequired,
  selectedAccount: Account,
  noMatches: PropTypes.string,
};

export default AccountSelector;
