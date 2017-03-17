import React from 'react';
import {accountFormatter, balanceWithCurrency} from '../util/format';
import {Account, Locale} from '../util/types';
import {AccountBalanceHoc} from './account-balance-hoc';

const AccountSuggestionItem = ({account, locale}) => {
  const {accountNumber, balance, name}= account;
  return (
    <div className='account-suggestion__account'>
      <a className='account-suggestion__name'>{ name }</a>
      <div className='account-suggestion__details'>
        <span className='account-suggestion__account-number'>
          { accountFormatter(accountNumber) }
        </span>
        <AccountBalanceHoc balance={balance}>
          <span className='account-suggestion__balance'>
              { balanceWithCurrency(balance, locale)}
            </span>
        </AccountBalanceHoc>
      </div>
    </div>
  );
};

AccountSuggestionItem.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
};

export default AccountSuggestionItem;
