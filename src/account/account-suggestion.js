import React, { PropTypes } from 'react';
import { accountFormatter } from '../util/format';
import { Account, Locale } from '../util/types';
import { balanceWithCurrency } from '../util/format';

const AccountSuggestionItem = ({account, locale}) => {
  const {accountNumber, balance, name}= account;
  return (
    <div className='account-suggestion__account'>
      <a className='account-suggestion__name'>{ name }</a>
      <div className='account-suggestion__details'>
        <span className='account-suggestion__account-number'>
          { accountFormatter(accountNumber) }
        </span>
        <span className='account-suggestion__balance'>
            { balanceWithCurrency(balance, locale)}
          </span>
      </div>
    </div>
  );
};

AccountSuggestionItem.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
};

export default AccountSuggestionItem;
