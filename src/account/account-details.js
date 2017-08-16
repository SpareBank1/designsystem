import React from 'react';
import { bool } from 'prop-types';
import {accountFormatter, balanceWithCurrency} from '../util/format';
import {Account, Locale} from '../util/types';

function AccountDetails({account, locale, showBalance = true}) {
  const {balance, accountNumber} = account;
  const hasBalance = balance != null;
  return (
    <div className='ffe-account-selector__details'>
      <div className='ffe-account-selector__details--left'>
        { accountFormatter(accountNumber) }
      </div>
      {showBalance && hasBalance &&
      <div className='ffe-account-selector__details--right'>
        { balanceWithCurrency(balance, locale) }
      </div>
      }
    </div>
  );
}

AccountDetails.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
  showBalance: bool,
};

export default AccountDetails;
