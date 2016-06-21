import React, { PropTypes } from 'react';
import amountFormatter from 'nfe-amount-formatter';
import accountFormatter from './util/account-formatter';
import KeyCode from './util/keyCode';

export default class AccountSuggestion extends React.Component {

  render() {
    const { account, onSelect, highlighted } = this.props;
    const onSelectHandler = () => onSelect(account);
    const onKeyDownHandler = (evt) => {
      if (evt.which === KeyCode.ENTER) {
        onSelect(account);
      }
    };

    const currencyCode = () => (account.currencyCode ? account.currencyCode : 'NOK');

    const classNames = () => {
      let defaultClassNames = 'nfe-account-suggestions__account';
      if (highlighted) {
        defaultClassNames += ' nfe-account-suggestions__account--highligted';
      }
      return defaultClassNames;
    };

    const balanceEl = account.balance !== undefined ?
      (<span className="nfe-account-suggestions__balance">
        { amountFormatter(account.balance) } { currencyCode() }
      </span>) : null;

    return (
      <div
        className={ classNames() }
        role="option"
        onClick={ onSelectHandler }
        onKeyDown={ onKeyDownHandler }
      >
        <a className="nfe-account-suggestions__name">{ account.name }</a>
        <div className="nfe-account-suggestions__details">
          <span className="nfe-account-suggestions__account-number">
            { accountFormatter(account.accountNumber) }
          </span>
          { balanceEl }
        </div>
      </div>
    );
  }
}

AccountSuggestion.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    balance: PropTypes.number,
    currencyCode: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func,
  highlighted: PropTypes.bool,
};

