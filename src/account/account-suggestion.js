import React from 'react';
import {accountFormatter, balanceWithCurrency} from '../util/format';
import {Account, Locale} from '../util/types';
import {AccountBalanceHoc} from './account-balance-hoc';

const AccountSuggestionItem = ({account, locale}) => {
  const {accountNumber, balance, name}= account;
  return (
    <div className='ffe-account-suggestion__account'>
      <a className='ffe-account-suggestion__name'>{ name }</a>
      <div className='ffe-account-suggestion__details'>
        <span className='ffe-account-suggestion__number'>
          { accountFormatter(accountNumber) }
        </span>
        <AccountBalanceHoc balance={balance}>
          <span className='ffe-account-suggestion__balance'>
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
