import React, {PropTypes} from 'react';
import BaseSelector from './base-selector';
import AccountSuggestionItem from '../account/account-suggestion';
import AccountNoMatch from '../account/account-nomatch';
import AccountDetails from '../account/account-details';
import {Account, Locale} from '../util/types';
import {accountFilter} from '../filter/filters';
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
  id: PropTypes.string.isRequired,
  accounts : PropTypes.arrayOf(Account),
  locale: Locale.isRequired,
  selectedAccount: Account,
  noMatches: PropTypes.string,
  className : PropTypes.string,
};

export default AccountSelector;
