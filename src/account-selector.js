import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AccountSuggestionList from './account-suggestion-list';
import AccountDetails from './account-details';

// https://github.com/souhe/reactScrollbar/issues/35
import ScrollArea from 'react-scrollbar/dist/no-css';

import i18n from './i18n/i18n';
import KryssIkon from 'ffe-icons-react/kryss-ikon';
import KeyCode from './util/keyCode';
import accountFilter from './account-filter';

export default class AccountSelector extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAccountSuggestions: false,
      showResetButton: false,
      value: '',
      selectedAccount: null,
      accounts: props.accounts,
    };

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onResetButtonKeydown = this.onResetButtonKeydown.bind(this);
    this.onEscKeyPressed = this.onEscKeyPressed.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onAccountSelect = this.onAccountSelect.bind(this);
    this.highlightNextAccount = this.highlightNextAccount.bind(this);
    this.highlightPrevAccount = this.highlightPrevAccount.bind(this);
    this.globalEscKeyHandler = this.globalEscKeyHandler.bind(this);
    this.globalClickHandler = this.globalClickHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      accounts : nextProps.accounts
    });
  }

  onInputFocus() {
    const newState = {
      showAccountSuggestions: true,
    };

    if (this.state.value.length > 0) {
      newState.selectedAccount = this.state.accounts[0];
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
    if (!this.state.showResetButton || evt.shiftKey) {
      this.onBlur();
    }
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
      }, () => this.props.onChange(account.accountNumber));
    }
  }

  highlightFirstAccount() {
    if (this.state.accounts.length > 0) {
      this.highlightAccount(this.state.accounts[0]);
    }
  }

  highlightLastAccount() {
    if (this.state.accounts.length > 0) {
      this.highlightAccount(this.state.accounts[this.state.accounts.length - 1]);
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

  resetSearch() {
    this.setState({
      value: '',
      accounts: this.props.accounts,
      selectedAccount: null,
      showAccountSuggestions: true,
      showResetButton: false,
    }, () => {
      this._accountInput.focus();
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
    let newAccountIndex = this.state.accounts.indexOf(this.state.selectedAccount) + 1;
    if (newAccountIndex === this.state.accounts.length) {
      newAccountIndex = 0;
    }
    this.highlightAccount(this.state.accounts[newAccountIndex]);
  }

  highlightPrevAccount() {
    let newAccountIndex = this.state.accounts.indexOf(this.state.selectedAccount) - 1;
    if (newAccountIndex < 0) {
      newAccountIndex = this.state.accounts.length - 1;
    }
    this.highlightAccount(this.state.accounts[newAccountIndex]);
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
          aria-autocomplete="inline"
          aria-invalid={this.props.ariaInvalid}
        />
        {this.state.showResetButton ?
          <button
            aria-label={ i18n[this.props.locale].RESET_SEARCH }
            className="nfe-account-selector__reset-button"
            onClick={ this.resetSearch }
            onKeyDown={ this.onResetButtonKeydown }
            tabIndex="-1"
          >
            <KryssIkon className="nfe-account-selector__reset-icon" />
          </button> :
          null
        }
        <AccountDetails account={ this.state.selectedAccount } />
        { this.state.showAccountSuggestions && this.state.accounts.length ?
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
              accounts={ this.state.accounts }
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
  id : PropTypes.string,
};

AccountSelector.defaultValues = {
  locale: 'nb',
  accounts: [],
  onBlur: () => {},
};
