import React, { PropTypes } from 'react';
import accountFormatter from '../util/account-formatter';
import { balanceWithCurrency } from '../util/format';
import { Account, Locale } from '../util/types';

function AccountDetails({account, locale}) {
  const {balance, accountNumber} = account;
  return (
    <div className="nfe-account-selector__selected-account-details">
      <div className="nfe-account-selector__selected-account-details--left">
        { accountFormatter(accountNumber) }
      </div>
      { account.balance &&
      <div className="nfe-account-selector__selected-account-details--right">
        { balanceWithCurrency(balance, locale) }
      </div>
      }
    </div>
  );
}

AccountDetails.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired
};

export default AccountDetails;
