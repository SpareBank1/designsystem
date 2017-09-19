import React, { Component } from 'react';
import autoBind from 'react-auto-bind';
import { func, string, arrayOf, bool } from 'prop-types';
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
    autoBind(this);

    this.baseSelector = null;

    this.enableFilter = false;
  }

  renderSuggestion(account) {
    return (
      <AccountSuggestionItem
        account={account}
        locale={this.props.locale}
        showBalance={this.props.showBalance}
      />
    );
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

  onSuggestionSelect(suggestion) {
    if (suggestion) {
        this.baseSelector.showOrHideSuggestions(false, () => this.onAccountSelect(suggestion));
    }
  }

  filterSuggestions() {
    const {  value, accounts } = this.props;
    const suggFilt = createAccountFilter(this.enableFilter);
    return accounts.filter(suggFilt(value));
  }


  render() {
    const {
      className,
      id,
      locale,
      selectedAccount,
      showBalance,
    } = this.props;
    return (
      <div
        className={classNames('ffe-account-selector', className)}
        id={`${id}-container`}
      >
        <BaseSelector
          ref={baseSelector => {this.baseSelector = baseSelector;}}
          renderSuggestion={this.renderSuggestion}
          renderNoMatches={this.renderNoMatches}
          shouldHideSuggestionsOnSelect={true}
          shouldSelectHighlightedOnTab={true}
          shouldHideSuggestionsOnBlur={true}
          shouldHideSuggestionsOnReset={false}
          onSuggestionSelect={this.onSuggestionSelect}
          suggestionFilter={createAccountFilter(this.enableFilter)}
          suggestions={this.filterSuggestions()}
          {...this.props}
          onSelect={this.onAccountSelect}
          onChange={this.onInputChange}
        />
        {selectedAccount &&
        <AccountDetails
          account={selectedAccount}
          locale={locale}
          showBalance={showBalance}
        />
        }
      </div>
    );
  }
}

AccountSelector.propTypes = {
  accounts: arrayOf(Account),
  className: string,
  value: string.isRequired,
  id: string.isRequired,
  locale: Locale.isRequired,
  noMatches: string,
  onAccountSelected: func.isRequired,
  onChange : func.isRequired,
  selectedAccount: Account,
  showBalance: bool,
};

export default AccountSelector;
