import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import AccountSuggestionList from './account-suggestion-list';
import AccountSuggestionsEmpty from './account-suggestions-empty';
import AccountDetails from './account-details';

// https://github.com/souhe/reactScrollbar/issues/35
import ScrollArea from 'react-scrollbar/dist/no-css';

import i18n from './i18n/i18n';
import KryssIkon from 'ffe-icons-react/kryss-ikon';
import KeyCode from './util/keyCode';
import accountFilter from './account-filter';

export default class AccountSelector extends Component {

  constructor(props) {
    super(props);
    this.state = this.getDefaultState();

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onResetButtonKeydown = this.onResetButtonKeydown.bind(this);
    this.onEscKeyPressed = this.onEscKeyPressed.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.reset = this.reset.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onAccountSelect = this.onAccountSelect.bind(this);
    this.highlightNextAccount = this.highlightNextAccount.bind(this);
    this.highlightPrevAccount = this.highlightPrevAccount.bind(this);
    this.globalClickHandler = this.globalClickHandler.bind(this);
    this.filterAccounts = this.filterAccounts.bind(this);
  }

  getDefaultState() {
    const {accounts, selectedAccount, value} = {...this.defaultProps, ...this.props};
    const filteredAccounts = this.filterAccounts(accounts, value);
    const showResetButton = !!(selectedAccount || value);
    const showAccountSuggestions = false;
    return {showAccountSuggestions, showResetButton, selectedAccount, value, filteredAccounts};
  }

  getBlankState() {
    const {accounts} = this.props;
    return {
      showAccountSuggestions: false,
      showResetButton: false,
      selectedAccount: null,
      value: '',
      filteredAccounts: this.filterAccounts(accounts, ''),
      accountSelectedFromDropdown: false,
    };
  }

  componentWillReceiveProps({accounts}) {
    const {value} = this.state;
    this.setState({
      filteredAccounts: this.filterAccounts(accounts, value),
    });
  }

  onInputFocus() {
    const {onFocus} = this.props;
    const {value, filteredAccounts} = this.state;
    const selectedAccount = value ? filteredAccounts[0] : null;
    this.setState({
      selectedAccount,
      showAccountSuggestions: true,
    }, () => {
      onFocus();
    });
    this.addGlobalEventListeners();
  }

  onInputKeyDown(evt) {
    switch (evt.which) {
      case KeyCode.DOWN:
        this.highlightNextAccount();
        break;
      case KeyCode.UP:
        this.highlightPrevAccount();
        break;
      case KeyCode.HOME:
        this.highlightFirstAccount();
        break;
      case KeyCode.END:
        this.highlightLastAccount();
        break;
      case KeyCode.ESC:
        this.onEscKeyPressed();
        break;
      case KeyCode.ENTER:
        evt.preventDefault();
        this.onAccountSelect(this.state.selectedAccount, false);
        break;
      case KeyCode.TAB:
        this.onInputTab(evt);
        break;
      default:
        return;
    }
  }

  onInputTab(evt) {
    const {selectedAccount, value} = this.state;
    const selectedValue = selectedAccount ? selectedAccount.name : value;
    this.setState({
      value: selectedValue,
      showAccountSuggestions: false,
    }, () => {
      if (selectedAccount) {
        this.onAccountSelect(selectedAccount, false);
      }
    });
  }

  onResetButtonKeydown(evt) {
    if (evt.which === KeyCode.TAB && !evt.shiftKey) {
      this.onBlur();
    }
  }

  onEscKeyPressed() {
    this.reset(true);
  }

  onBlur() {
    this.removeGlobalEventListeners();
    const {selectedAccount, value, accountSelectedFromDropdown, resetField} = this.state;
    const {onBlur} = this.props;
    let blurReturn = value;
    if (selectedAccount) {
      const inputMatchesValidAccountName = value.toLowerCase() === selectedAccount.name.toLowerCase();
      const inputMatchesValidAccountNumber = value === selectedAccount.accountNumber;
      if (inputMatchesValidAccountName || inputMatchesValidAccountNumber) {
        this.onAccountSelect(selectedAccount, false);
        blurReturn = selectedAccount.accountNumber;
      }
      else {
        this.setState({
          selectedAccount: null
        });
      }
    }

    // Prevent blur if an account is selected from the dropdown or if the reset button is pressed
    if (accountSelectedFromDropdown || resetField) {
      this.setState({
        accountSelectedFromDropdown: false,
        resetField: false,
      });
      return;
    }

    this.setState({
      showAccountSuggestions: false,
    });

    onBlur(blurReturn);
  }

  onInputChange(evt) {
    const value = evt.target.value;
    const {accounts, onChange} = this.props;
    const filteredAccounts = this.filterAccounts(accounts, value);
    const selectedAccount =
      value.length > 0 && filteredAccounts.length > 0 ? filteredAccounts[0] : null;
    this.setState({
      value,
      selectedAccount,
      filteredAccounts,
      showResetButton: value.length > 0,
      showAccountSuggestions: true,
      accountSelectedFromDropdown : false,
    }, () => onChange(value));
  }

  onAccountSelect(account, fromDropdown) {
    const {accounts, onChange, onAccountSelected} = this.props;
    const {accountNumber} = account;
    const filteredAccounts = this.filterAccounts(accounts, accountNumber);
    const changed = this.state.selectedAccount !== account;

    this.setState({
      filteredAccounts,
      value: account.name,
      selectedAccount: account,
      showAccountSuggestions: false,
      showResetButton: true,
      accountSelectedFromDropdown: fromDropdown,
    }, () => {
      if (changed) {
        onChange(accountNumber);
      }
      onAccountSelected(accountNumber);
    });
  }

  highlightFirstAccount() {
    const {filteredAccounts} = this.state;
    if (filteredAccounts.length > 0) {
      this.highlightAccount(filteredAccounts[0]);
    }
  }

  highlightLastAccount() {
    const {filteredAccounts} = this.state;
    if (filteredAccounts.length > 0) {
      this.highlightAccount(filteredAccounts[filteredAccounts.length - 1]);
    }
  }

  highlightAccount(account) {
    if (account && this.state.showAccountSuggestions) {
      this.setState({
        selectedAccount: account,
        showResetButton : true,
        value: account.name,
      }, this.scrollHighlightedAccountIntoView);
    }
  }

  reset(setFocus = true ) {
    const {onChange, onAccountSelected} = this.props;
    const state = {...this.getBlankState(), showAccountSuggestions: false, resetField: false };

    if (setFocus) {
      // The inputfield looses focus when we click the reset button, so we need to give it back
      this._accountInput.focus();
      state.showAccountSuggestions = true;
      state.resetField = true;
    }

    this.setState(state, () => {
      onChange(state.selectedAccount);
      onAccountSelected(state.selectedAccount);
    });
  }

  scrollHighlightedAccountIntoView() {
    const selectedAccount = this._suggestionList.getSelectedDOM();
    const accountRect = selectedAccount.getBoundingClientRect();

    const frame = ReactDOM.findDOMNode(this._scrollarea);
    const frameRect = frame.getBoundingClientRect();

    if (accountRect.bottom > frameRect.bottom) {
      this._scrollarea.scrollArea.scrollYTo(
        selectedAccount.offsetTop + selectedAccount.offsetHeight - frame.offsetHeight
      );
    } else if (accountRect.top < frameRect.top) {
      this._scrollarea.scrollArea.scrollYTo(selectedAccount.offsetTop);
    }
  }

  highlightNextAccount() {
    const {filteredAccounts} = this.state;
    let newAccountIndex = filteredAccounts.indexOf(this.state.selectedAccount) + 1;
    if (newAccountIndex === filteredAccounts.length) {
      newAccountIndex = 0;
    }
    this.highlightAccount(filteredAccounts[newAccountIndex]);
  }

  highlightPrevAccount() {
    const {filteredAccounts} = this.state;
    let newAccountIndex = filteredAccounts.indexOf(this.state.selectedAccount) - 1;
    if (newAccountIndex < 0) {
      newAccountIndex = filteredAccounts.length - 1;
    }
    this.highlightAccount(filteredAccounts[newAccountIndex]);
  }

  addGlobalEventListeners() {
    window.addEventListener('click', this.globalClickHandler, true);
    window.addEventListener('keyup', this.globalEscKeyHandler, true);
  }

  removeGlobalEventListeners() {
    window.removeEventListener('click', this.globalClickHandler);
    window.removeEventListener('keyup', this.globalEscKeyHandler);
  }

  globalClickHandler(evt) {
    if ((this.state.showAccountSuggestions && !this._root.contains(evt.target))) {
      this.setState({
        showAccountSuggestions: false,
      });
      this.removeGlobalEventListeners();
    }
  }

  filterAccounts(accounts, value) {
    return accounts.filter(accountFilter(value));
  }

  componentDidUpdate() {
    const {accountSelectedFromDropdown, resetField} = this.state;
    // Prevent blur if an account is selected from the dropdown or if the reset button is pressed
    if (accountSelectedFromDropdown || resetField) {
        this._accountInput.focus();
    }
  }

  render() {
    const assignTo = name => component => { this[name] = component; };
    const {locale, placeholder, id, ariaInvalid, noMatches} = this.props;
    const {filteredAccounts, showAccountSuggestions, value, selectedAccount, showResetButton} = this.state;
    console.log("show sugggestions?", showAccountSuggestions);
    return (
      <div
        className="nfe-account-selector"
        role="combobox"
        aria-expanded={ showAccountSuggestions }
        ref={assignTo('_root')}
      >
        <input
          onFocus={ this.onInputFocus }
          value={ value }
          onChange={ this.onInputChange }
          className="ffe-input-field nfe-account-selector__search"
          onKeyDown={ this.onInputKeyDown }
          ref={ assignTo('_accountInput') }
          placeholder={placeholder}
          id={ id }
          onBlur={this.onBlur}
          aria-autocomplete="inline"
          aria-invalid={ariaInvalid}
          autoComplete="off"
        />
        {showResetButton ?
          <button
            aria-label={ i18n[locale].RESET_SEARCH }
            className="nfe-account-selector__reset-button"
            onMouseDown={ this.reset }
            onKeyDown={ this.onResetButtonKeydown }
            tabIndex="-1"
          >
            <KryssIkon className="nfe-account-selector__reset-icon"/>
          </button> :
          null
        }
        <AccountDetails
          account={ selectedAccount }
          locale={ locale }
        />
        { showAccountSuggestions && (filteredAccounts.length || noMatches) ?
          <ScrollArea
            speed={ 0.8 }
            className="nfe-account-selector__scroll"
            contentClassName="content"
            horizontal={ false }
            style={{maxHeight: '240px'}}
            ref={ assignTo('_scrollarea') }
            verticalScrollbarStyle={{
              background: '#676767',
              borderRadius: '4px',
              width: '5px',
            }}
            verticalContainerStyle={{
              width: '6px',
              background: 'transparent',
              opacity: '1',
            }}
          >
            { filteredAccounts.length ?
              <AccountSuggestionList
                locale={locale}
                accounts={ filteredAccounts }
                onSelect={ (account, fromDropdown) => this.onAccountSelect(account, fromDropdown) }
                selectedAccount={ selectedAccount }
                ref={ assignTo('_suggestionList') }
              />
              : <AccountSuggestionsEmpty value={ noMatches }/>
            }
          </ScrollArea>
          : null}
      </div>
    );
  }
}

AccountSelector.propTypes = {
  accounts: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onAccountSelected: PropTypes.func,
  locale: PropTypes.oneOf(["nb", "nn", "en"]),
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  noMatches: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  id: PropTypes.string,
  selectedAccount: PropTypes.object,
  value: PropTypes.string,
};

AccountSelector.defaultProps = {
  ariaInvalid: false,
  placeholder: '',
  locale: 'nb',
  id: PropTypes.string,
  selectedAccount: null,
  value: '',
  onAccountSelected: () => {},
  onBlur: () => {},
  onFocus: () => {},
};
