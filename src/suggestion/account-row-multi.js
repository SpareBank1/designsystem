import React, { PropTypes } from 'react';
import { If } from 'nfe-if';
import amountFormatter from 'nfe-amount-formatter';
import Checkbox from 'ffe-checkbox-react';
import accountFormatter from '../util/account-formatter';

const AccountRowMulti = ({account, locale, selected}) => {
  const currencyCode = () => (account.currencyCode ? account.currencyCode : 'NOK');

  const onCheckboxChange = (evt) => {
    // Do nothing. Selections are handled in parent
  };

  return (
    <div className="nfe-account-suggestions__account--multi">
      <div className="nfe-account-suggestions__checkbox">
        <Checkbox
          checked={ selected }
          name="my-checkbox-label"
          inline={ false }
          tabIndex={ -1 }
          onChange={onCheckboxChange}
        />
      </div>
      <div className="nfe-account-suggestions__content-wrapper">
        <a className="nfe-account-suggestions__name">{ account.name }</a>
        <div className="nfe-account-suggestions__details">
          <span className="nfe-account-suggestions__account-number">
            { accountFormatter(account.accountNumber) }
          </span>
          <If condition={account.balance !== undefined}>
            <span className="nfe-account-suggestions__balance">
              { amountFormatter(account.balance, locale) } { currencyCode() }
            </span>
          </If>
        </div>
      </div>
    </div>
  );
};

AccountRowMulti.propTypes = {
  account: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

AccountRowMulti.defaultProps = {
  selected: false
};

export default AccountRowMulti;
