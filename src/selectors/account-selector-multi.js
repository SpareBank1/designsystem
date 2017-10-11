import React from 'react';
import { func, string, arrayOf, bool} from 'prop-types';
import BaseSelector from './base-selector';
import autoBind from 'react-auto-bind';
import AccountSuggestionMulti from '../account/account-suggestion-multi';
import AccountNoMatch from '../account/account-nomatch';
import { Account, Locale, KeyCodes } from '../util/types';
import { accountFilter } from '../filter/filters';
import Checkbox from 'ffe-checkbox-react';
import StatusBar from '../suggestion/suggestion-list-status-bar';
import txt from '../i18n/i18n';

const allAccountsElement = {id: "all-accounts", accountNumber: ""};

const renderSelectAll = (allSelected, locale) => (
    <div className='ffe-account-suggestion__account--multi ffe-account-suggestion__select-all'>
      <Checkbox
        checked={allSelected}
        name='ffe-account-suggestion__select-all-label'
        inline={ false }
        tabIndex={-1}
        disabled={ true }
      />
      <div className='ffe-account-suggestion__content-wrapper'>
        <span className='ffe-account-suggestion__name ffe-link-text ffe-link-text--no-underline'>{txt[locale].SELECT_ALL}</span>
      </div>
    </div>);

class AccountSelectorMulti extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      suggestionListHeight: 0
    };
  }

  filterSuggestions(value) {
    const { accounts, showSelectAllOption } = this.props;
    if (showSelectAllOption && !value) {
      return [allAccountsElement,...accounts.filter(accountFilter(value))];
    }
    return accounts.filter(accountFilter(value));
  }

  onSuggestionSelect(suggestion) {
    const { onAccountSelected } = this.props;
    if (suggestion) {
      if (suggestion.id === allAccountsElement.id) {
        this.props.onSelectAll();
        return;
      }
      onAccountSelected(suggestion);
    }
  }

  renderSuggestion(account) {
    const { locale, selectedAccounts, accounts } = this.props;
    const isSelected = selectedAccounts.filter(a => a.accountNumber === account.accountNumber);
    if ( account.id !== allAccountsElement.id ) {
      return (<AccountSuggestionMulti
        account={account}
        locale={locale}
        selected={isSelected.length > 0}
              />);
    } return renderSelectAll(selectedAccounts.length === accounts.length, locale);
  }

  onBlur() {
    if (!this.shouldShowSuggestions) {
      this.props.onBlur();
    }
    this.baseRef.showOrHideSuggestions(this.shouldShowSuggestions);
    this.shouldShowSuggestions = false;
  }

  onDone() {
    this.baseRef.showOrHideSuggestions(false);
    this.props.onBlur();
  }

  renderSuggestionDetails(listHeight) {
    if (this.baseRef) {
      let statusText;
      const { selectedAccounts, isLoading } = this.props;
      if (selectedAccounts.length === 0) {
        statusText = txt[this.props.locale].NO_ACCOUNTS_SELECTED;
      } else if (selectedAccounts === 1) {
        statusText = txt[this.props.locale].ONE_ACCOUNT_SELECTED;
      } else {
        statusText = `${selectedAccounts.length} ${txt[this.props.locale].MULTIPLE_ACCOUNTS_SELECTED}`;
      }
      const height = listHeight + this.baseRef.getInputHeight();
      return !isLoading &&
        <StatusBar
          renderSelectionStatus={() => statusText}
          onDone={this.onDone}
          labelDoneButton={txt[this.props.locale].DROPDOWN_MULTISELECT_DONE}
          style={{ position: 'absolute', zIndex: 100, top: height }}
        />;
    }
    return null;
  }

  onKeyDown(event) {
    if (event.which === KeyCodes.TAB) {
      this.shouldShowSuggestions = !event.shiftKey;
    }
  }


  render() {
    const { noMatches, onAccountSelected, locale, value } = this.props;
    return (
      <div
        className='ffe-account-selector'
        onKeyDown={this.onKeyDown}
      >
        <BaseSelector
          renderSuggestion={(account) => this.renderSuggestion(account)}
          renderNoMatches={() => <AccountNoMatch value={noMatches} locale={locale}/>}
          suggestionDetails={this.renderSuggestionDetails()}
          shouldHideSuggestionsOnSelect={false}
          shouldSelectHighlightedOnTab={false}
          shouldHideSuggestionsOnBlur={false}
          shouldHideSuggestionsOnReset={true}
          onSuggestionSelect={this.onSuggestionSelect}
          suggestionFilter={accountFilter}
          onSelect={onAccountSelected}
          locale={locale}
          onSuggestionListChange={(height) => {
            this.setState({ suggestionListHeight: height });
          }}
          suggestions={this.filterSuggestions(value)}
          ref={(element) => {
            this.baseRef = element;
          }}
          {...this.props}
          onBlur={(e) => this.onBlur(e)}
        />
        {this.state.suggestionListHeight > 0 && this.renderSuggestionDetails(this.state.suggestionListHeight)}
      </div>
    );
  }
}

AccountSelectorMulti.defaultProps = {
  onSelectAll: () => {},
  showSelectAllOption: false,
  isLoading: false
};

AccountSelectorMulti.propTypes = {
  onAccountSelected: func.isRequired,
  onSelectAll: func,
  accounts: arrayOf(Account),
  locale: Locale.isRequired,
  selectedAccounts: arrayOf(Account),
  showSelectAllOption: bool,
  noMatches: string,
  onBlur: func.isRequired,
  value: string,
  isLoading: bool
};

export default AccountSelectorMulti;
