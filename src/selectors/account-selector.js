import React, { Component } from 'react';
import { func, string, arrayOf } from 'prop-types';
import BaseSelector from './base-selector';
import AccountSuggestionItem from '../account/account-suggestion';
import AccountNoMatch from '../account/account-nomatch';
import AccountDetails from '../account/account-details';
import { Account, Locale } from '../util/types';
import { createAccountFilter } from '../filter/filters';
import classNames from 'classnames';

class AccountSelector extends Component {

  constructor(props) {
    super(props);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.renderNoMatches = this.renderNoMatches.bind(this);
    this.onAccountSelect = this.onAccountSelect.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.enableFilter = false;
  }

  renderSuggestion(account) {
    return <AccountSuggestionItem account={account} locale={this.props.locale}/>;
  }

  renderNoMatches() {
    return <AccountNoMatch value={this.props.noMatches} locale={this.props.locale}/>;
  }

  onAccountSelect(account) {
    this.enableFilter = false;
    this.props.onAccountSelected(account);
  }

  onInputChange(value) {
    this.enableFilter = true;
    this.props.onChange(value);
  }

  render() {
    const {
      selectedAccount,
      locale,
      accounts,
      id,
      className,
    } = this.props;
    return (
      <div
        className={classNames('ffe-account-selector', className)}
        id={`${id}-container`}
      >
        <BaseSelector
          renderSuggestion={this.renderSuggestion}
          renderNoMatches={this.renderNoMatches}
          shouldHideSuggestionsOnSelect={true}
          shouldSelectHighlightedOnTab={true}
          shouldHideSuggestionsOnBlur={true}
          shouldHideSuggestionsOnReset={false}
          suggestionFilter={createAccountFilter(this.enableFilter)}
          suggestions={accounts}
          {...this.props}
          onSelect={this.onAccountSelect}
          onChange={this.onInputChange}
        />
        {selectedAccount &&
        <AccountDetails account={selectedAccount} locale={locale}/> }
      </div>
    );
  }
}

AccountSelector.propTypes = {
  onAccountSelected: func.isRequired,
  onChange : func.isRequired,
  id: string.isRequired,
  accounts: arrayOf(Account),
  locale: Locale.isRequired,
  selectedAccount: Account,
  noMatches: string,
  className: string,
};

export default AccountSelector;
