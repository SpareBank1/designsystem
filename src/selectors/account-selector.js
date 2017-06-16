import React from 'react';
import { func, string, arrayOf } from 'prop-types';
import BaseSelector from './base-selector';
import AccountSuggestionItem from '../account/account-suggestion';
import AccountNoMatch from '../account/account-nomatch';
import AccountDetails from '../account/account-details';
import { Account, Locale } from '../util/types';
import { createAccountFilter } from '../filter/filters';
import classNames from 'classnames';

function AccountSelector(props) {
  const {
    selectedAccount,
    locale,
    noMatches,
    onAccountSelected,
    accounts,
    id,
    className
  } = props;
  return (
    <div
      className={classNames('ffe-account-selector', className)}
      id={`${id}-container`}
    >
      <BaseSelector
        renderSuggestion={(account) => <AccountSuggestionItem account={account} locale={locale}/>}
        renderNoMatches={() => <AccountNoMatch value={noMatches} locale={locale}/>}
        shouldHideSuggestionsOnSelect={true}
        shouldSelectHighlightedOnTab={true}
        shouldHideSuggestionsOnBlur={true}
        shouldHideSuggestionsOnReset={false}
        suggestionFilter={createAccountFilter(selectedAccount)}
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
  onAccountSelected : func.isRequired,
  id: string.isRequired,
  accounts : arrayOf(Account),
  locale: Locale.isRequired,
  selectedAccount: Account,
  noMatches: string,
  className : string,
};

export default AccountSelector;
