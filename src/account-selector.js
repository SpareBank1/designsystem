import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import AccountSuggestionList from './account-suggestion-list';
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
    return {
      showAccountSuggestions: false,
      showResetButton: false,
      selectedAccount: null,
      value: '',
      filteredAccounts: [],
    };
  }

  componentWillReceiveProps({accounts}) {
    const {value} = this.state;
    this.setState({
      filteredAccounts: this.filterAccounts(accounts, value),
    });
  }
  onInputFocus() {
    const newState = {
      showAccountSuggestions: true,
    };

    if (this.state.value) {
      newState.selectedAccount = this.state.filteredAccounts[0];
    }
    this.setState(newState);
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
        this.onAccountSelect(this.state.selectedAccount);
        break;
      case KeyCode.TAB:
        this.onInputTab(evt);
        break;
      default:
        return;
    }
  }

  onInputTab(evt) {
    const newState = {
      showAccountSuggestions: false,
    };
    if (this.state.selectedAccount) {
      newState.value = this.state.selectedAccount.name;
    }
    this.setState(newState);
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
    const {selectedAccount, value}= this.state;
    const {onBlur} = this.props;
    if (selectedAccount) {
      return onBlur(selectedAccount.accountNumber);
    }
    onBlur(value);
  }

  onInputChange(evt) {
    const value = evt.target.value;
    const {accounts} = this.props;
    const filteredAccounts = this.filterAccounts(accounts, value);
    const selectedAccount =
      value.length > 0 && filteredAccounts.length > 0 ? filteredAccounts[0] : null;
    this.setState({
      value,
      selectedAccount,
      filteredAccounts,
      showResetButton: value.length > 0,
      showAccountSuggestions: true,
    }, () => this.props.onChange(this.state.value));
  }

  onAccountSelect(account) {
    const {accounts} = this.props;
    const {accountNumber} = account;
    const filteredAccounts = this.filterAccounts(accounts, accountNumber);
    if (account) {
      this.setState({
        value: account.name,
        showAccountSuggestions: false,
        filteredAccounts,
        selectedAccount: account,
        showResetButton: true,
      }, () => this.props.onChange(accountNumber));
    }
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
    if (account) {
      this.setState({
        selectedAccount: account,
        value: account.name,
      }, this.scrollHighlightedAccountIntoView);
    }
  }

  reset(focus) {
    const state = this.getDefaultState();
    state.showAccountSuggestions = focus;
    this.setState(state, () => {
      if (focus) {
        this._accountInput.focus();
      }
      this.props.onChange(this.state.value);
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

  render() {
    const assignTo = name => component => { this[name] = component; };
    const {locale} = this.props;
    let {filteredAccounts} = this.state;
    return (
      <div
        className="nfe-account-selector"
        role="combobox"
        aria-expanded={ this.state.showAccountSuggestions }
        ref={assignTo('_root')}
      >
        <input
          onFocus={ this.onInputFocus }
          value={ this.state.value }
          onChange={ this.onInputChange }
          className="ffe-input-field nfe-account-selector__search"
          onKeyDown={ this.onInputKeyDown }
          ref={ assignTo('_accountInput') }
          placeholder={this.props.placeholder}
          id={ this.props.id }
          onBlur={this.onBlur}
          aria-autocomplete="inline"
          aria-invalid={this.props.ariaInvalid}
        />
        {this.state.showResetButton ?
          <button
            aria-label={ i18n[this.props.locale].RESET_SEARCH }
            className="nfe-account-selector__reset-button"
            onClick={ this.reset.bind(true) }
            onKeyDown={ this.onResetButtonKeydown }
            tabIndex="-1"
          >
            <KryssIkon className="nfe-account-selector__reset-icon" />
          </button> :
          null
        }
        <AccountDetails
          account={ this.state.selectedAccount }
          locale={ locale }
        />
        { this.state.showAccountSuggestions && filteredAccounts.length ?
          <ScrollArea
            speed={ 0.8 }
            className="nfe-account-selector__scroll"
            contentClassName="content"
            horizontal={ false }
            style={{ maxHeight: '240px' }}
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
            <AccountSuggestionList
              locale={locale}
              accounts={ filteredAccounts }
              onSelect={ this.onAccountSelect }
              selectedAccount={ this.state.selectedAccount }
              ref={ assignTo('_suggestionList') }
            />
          </ScrollArea>
          : null}
      </div>
    );
  }
}

AccountSelector.propTypes = {
  accounts: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  locale: PropTypes.oneOf(["nb", "nn" ,"en"]),
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  id: PropTypes.string,
};

AccountSelector.defaultProps = {
  ariaInvalid: false,
  placeholder : PropTypes.string,
  locale : 'nb',
  id : PropTypes.string,
  onBlur: () => {},
};

