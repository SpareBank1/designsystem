import React from 'react';
import {accountFormatter, balanceWithCurrency} from '../util/format';
import {Account, Locale} from '../util/types';
import {AccountBalanceHoc} from './account-balance-hoc';


function AccountDetails({account, locale}) {
  const {balance, accountNumber} = account;
  return (
    <div className='ffe-account-selector__details'>
      <div className='ffe-account-selector__details--left'>
        { accountFormatter(accountNumber) }
      </div>
      <AccountBalanceHoc balance={balance}>
        <div className='ffe-account-selector__details--right'>
          { balanceWithCurrency(balance, locale) }
        </div>
      </AccountBalanceHoc>
    </div>
  );
}

AccountDetails.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired
};

export default AccountDetails;
