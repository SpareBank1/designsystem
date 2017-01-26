import React, { PropTypes } from 'react';
import AccountDetails from '../details/account-details';

import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import AccountSuggestionItem from '../account/account-suggestion-item';
import AccountSuggestionEmpty from '../account/account-suggestion-empty-item';
import { accountFilter } from '../filter/filters';
import { Locale } from '../util/types';
import { KeyCodes } from '../util/types';


class AccountSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.showHideSuggestions = this.showHideSuggestions.bind(this);
    this.onAccountSelect = this.onAccountSelect.bind(this);
    this.onInputReset = this.onInputReset.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);

    this.state = {
      showSuggestions: false,
      hasFocus: false,
      onFocusJustCalled: false,
    };
  }

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
    //This insures that onBlur is not called when focus is moved within this component
    setTimeout(()=> {
      if (!this.state.onFocusJustCalled) {
        this.setState({hasFocus: false, showSuggestions: false}, this.props.onBlur);
      }
    });

    this.setState({
      onFocusJustCalled: false,
    });
  }

  showHideSuggestions(show, cb = ()=> {}) {
    return ()=> {
      this.setState({showSuggestions: show}, cb);
    }
  }

  onAccountSelect(account) {
    const {onAccountSelected} = this.props;
    this.showHideSuggestions(false, ()=> {
      onAccountSelected(account);
      this.input.focus();
    })();
  }

  onInputReset() {
    const {onChange} = this.props;
    onChange('');
    this.input.focus();
  }

  onInputKeyDown({which, altKey}) {
    const {showSuggestions} = this.state;
    switch (which) {
      case KeyCodes.DOWN :
        if (altKey && !showSuggestions) {
          this.showHideSuggestions(true)()
        }
        if (showSuggestions) {
          this.suggestionList.setHiglightedIndex(0);
        }
        break;
      case KeyCodes.UP :
        if (altKey && showSuggestions) {
          this.showHideSuggestions(false)()
        }
        break;
      case KeyCodes.ESC:
        this.onInputReset();
        break;
    }
  }


  render() {
    const {value, placeholder, accounts, locale, noMatches, selectedAccount} = this.props;
    const {showSuggestions} = this.state;
    return (
      <div>
        <Input
          inputFieldRef={(input)=> {this.input = input}}
          value={value}
          onChange={this.onInputChange}
          onReset={this.onInputReset}
          resetLabel={''}
          onKeyDown={this.onInputKeyDown}
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
          ref={(suggestionList)=> {this.suggestionList = suggestionList}}
          suggestions={accounts.filter(accountFilter(value))}
          renderSuggestion={(account)=> <AccountSuggestionItem account={account} locale={locale}/>}
          renderNoSuggestion={()=> <AccountSuggestionEmpty value={noMatches}/>}
          onSelect={this.onAccountSelect}
          onClose={this.showHideSuggestions(false)}
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
  onFocus: () => {},
};

export default AccountSelector;
