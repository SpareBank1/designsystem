import React, { PropTypes } from 'react';
import {accountFormatter} from '../util/format';
import { balanceWithCurrency } from '../util/format';
import { Account, Locale } from '../util/types';

function AccountDetails({account, locale}) {
  const {balance, accountNumber} = account;
  return (
    <div className="highlighted-account-details">
      <div className="highlighted-account-details--left">
        { accountFormatter(accountNumber) }
      </div>
      { account.balance &&
      <div className="highlighted-account-details--right">
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
