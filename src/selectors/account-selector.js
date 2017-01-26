import React, { PropTypes } from 'react';
import AccountDetails from '../details/account-details';

import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import AccountSuggestionItem from '../account/account-suggestion-item';
import AccountSuggestionEmpty from '../account/account-suggestion-empty-item';
import { accountFilter } from '../filter/filters';
import { Locale } from '../util/types';


class AccountSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {showSuggestions: false, hasFocus: false, onFocusJustCalled: false};
  }


  // onBlur(selectedAccounts, inputValue) {
  //   this.props.onBlur(selectedAccounts[0], inputValue);
  // }

  // reset(inputFocus) {
  //   this.baseSelector.reset(inputFocus);
  // }

  onInputChange(input) {
    const {onChange} = this.props;
    this.setState({
      showSuggestions: true,
    });
    onChange(input);
  }

  onFocus(event) {
    event.stopPropagation();
    if (!this.state.hasFocus) {
      this.setState({hasFocus: true}, ()=> {
        this.props.onFocus();
      });
    }
    this.setState({
      onFocusJustCalled: true,
    });
  }

  onBlur(event) {
    event.stopPropagation();
    //In the case where onFocus is called right before onBlur, the timeout callback is executed when the onFocus is fully resolved.
    // This insures that onBlur is not called when focus is moved within this component
    setTimeout(()=> {
      if (!this.state.onFocusJustCalled) {
        this.setState({hasFocus: false}, this.props.onBlur);
      }
    });

    this.setState({
      onFocusJustCalled: false,
    });
  }


  render() {
    // const selectedItems = this.props.selectedAccount ? [this.props.selectedAccount] : [];


    // To provide backwards compatibility
    // const accounts = this.props.accounts.map(account => ({
    //     ...account,
    //     id: account.id || parseInt(account.accountNumber, 10)
    //   })
    // );
    const {value, placeholder, accounts, locale, noMatches, onAccountSelected, selectedAccount} = this.props;
    const {showSuggestions} = this.state;
    return (
      <div>
        <Input
          value={value}
          onChange={this.onInputChange}
          onReset={() => {}}
          resetLabel={''}
          onShowSuggestions={()=> this.setState({showSuggestions: true})}
          onHideSuggestions={()=> this.setState({showSuggestions: false})}
          isSuggestionsShowing={showSuggestions}
          id='id'
          placeholder={placeholder}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        {selectedAccount &&
        <AccountDetails account={selectedAccount} locale={locale}/> }
        {showSuggestions &&
        <SuggestionsList
          suggestions={accounts.filter(() => accountFilter(value))}
          renderSuggestion={(account)=> <AccountSuggestionItem account={account} locale={locale}/>}
          renderNoSuggestion={()=> <AccountSuggestionEmpty value={noMatches}/>}
          onSelect={onAccountSelected}
          onClose={()=> this.setState({showSuggestions: false})}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />}
      </div>
    );
  }
}

AccountSelector.propTypes = {
  accounts: PropTypes.array.isRequired,
  onAccountSelected: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  locale: Locale.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
  ariaInvalid: PropTypes.bool,
  noMatches: PropTypes.string,
  selectedAccount: PropTypes.object,
  renderItemRow: PropTypes.func
};

AccountSelector.defaultProps = {
  onChange: () => {},
  locale: 'nb',
  onBlur: () => {},
  ariaInvalid: false,
  value: '',
  onFocus: () => {}
};

export default AccountSelector;
