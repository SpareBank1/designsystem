import React from 'react';
import {accountFormatter, balanceWithCurrency} from '../util/format';
import {Account, Locale} from '../util/types';

const AccountSuggestionItem = ({account, locale}) => {
  const {accountNumber, balance, name}= account;
  const hasBalance = balance !== undefined;
  return (
    <div className='ffe-account-suggestion__account'>
      <a className='ffe-account-suggestion__name'>{ name }</a>
      <div className='ffe-account-suggestion__details'>
        <span className='ffe-account-suggestion__number'>
          { accountFormatter(accountNumber) }
        </span>
        {hasBalance &&
        <span className='ffe-account-suggestion__balance'>
          { balanceWithCurrency(balance, locale)}
        </span>
        }
      </div>
    </div>
  );
};

AccountSuggestionItem.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
};

export default AccountSuggestionItem;
