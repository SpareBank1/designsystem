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

    this.state = this.getDefaultState(props);

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
    this.globalEscKeyHandler = this.globalEscKeyHandler.bind(this);
    this.globalClickHandler = this.globalClickHandler.bind(this);
  }

  getDefaultState(props) {
    return {
      showAccountSuggestions: false,
      showResetButton: false,
      selectedAccount: null,
      value: '',
      accounts: props.accounts,
    };
  }

  onInputFocus() {
    const newState = {
      showAccountSuggestions: true,
    };

    if (this.state.value) {
      newState.selectedAccount = this.props.accounts[0];
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
    this.setState({
      showAccountSuggestions: false,
      selectedAccount: null,
    });
  }

  onBlur() {
    this.removeGlobalEventListeners();
    this.props.onBlur(this.state.value);
  }

  onInputChange(evt) {
    const value = evt.target.value;
    const filteredAccounts = this.props.accounts.filter(accountFilter(value));
    const selectedAccount =
      value.length > 0 && filteredAccounts.length > 0 ? filteredAccounts[0] : null;
    this.setState({
      value,
      selectedAccount,
      accounts: filteredAccounts,
      showResetButton: value.length > 0,
      showAccountSuggestions: true,
    }, () => this.props.onChange(this.state.value));
  }

  onAccountSelect(account) {
    if (account) {
      this.setState({
        value: account.name,
        showAccountSuggestions: false,
        accounts: this.props.accounts.filter(accountFilter(account.accountNumber)),
        selectedAccount: account,
        showResetButton: true,
      }, () => this.props.onAccountSelected(account.accountNumber));
    }
  }

  highlightFirstAccount() {
    const {accounts} = this.props;
    if (accounts.length > 0) {
      this.highlightAccount(accounts[0]);
    }
  }

  highlightLastAccount() {
    const {accounts} = this.props;
    if (accounts.length > 0) {
      this.highlightAccount(accounts[accounts.length - 1]);
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
    const state = this.getDefaultState(this.props);
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
    const {accounts} = this.props;
    let newAccountIndex = accounts.indexOf(this.state.selectedAccount) + 1;
    if (newAccountIndex === accounts.length) {
      newAccountIndex = 0;
    }
    this.highlightAccount(accounts[newAccountIndex]);
  }

  highlightPrevAccount() {
    const {accounts} = this.props;
    let newAccountIndex = accounts.indexOf(this.state.selectedAccount) - 1;
    if (newAccountIndex < 0) {
      newAccountIndex = accounts.length - 1;
    }
    this.highlightAccount(accounts[newAccountIndex]);
  }

  addGlobalEventListeners() {
    window.addEventListener('click', this.globalClickHandler, true);
    window.addEventListener('keyup', this.globalEscKeyHandler, true);
  }

  removeGlobalEventListeners() {
    window.removeEventListener('click', this.globalClickHandler);
    window.removeEventListener('keyup', this.globalEscKeyHandler);
  }

  globalEscKeyHandler(evt) {
    if (evt.which === KeyCode.ESC) {
      this.setState({
        showAccountSuggestions: false,
      });
    }
  }

  globalClickHandler(evt) {
    if ((this.state.showAccountSuggestions && !this._root.contains(evt.target))) {
      this.setState({
        showAccountSuggestions: false,
      });
      this.removeGlobalEventListeners();
    }
  }

  render() {
    const assignTo = name => component => { this[name] = component; };
    const {locale} = this.props;
    const {accounts} = this.state;
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
        { this.state.showAccountSuggestions && accounts.length ?
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
              accounts={ accounts }
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
  onAccountSelected : PropTypes.func,
  locale: PropTypes.oneOf(["nb", "nn" ,"en"]),
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  id: PropTypes.string,
};

AccountSelector.defaultProps = {
  ariaInvalid: false,
  onAccountSelected : () => {},
  placeholder : PropTypes.string,
  locale : 'nb',
  accounts : [],
  id : PropTypes.string,
};

