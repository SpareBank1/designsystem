import React, { PropTypes } from 'react';
import accountFormatter from '../util/account-formatter';
import { Account, Locale } from '../util/types';
import { balanceWithCurrency } from '../util/format';

const AccountSuggestionItem = ({account, locale}) => {
  const {accountNumber, balance, name}= account;
  return (
    <div className='nfe-account-suggestions__account'>
      <a className='nfe-account-suggestions__name'>{ name }</a>
      <div className='nfe-account-suggestions__details'>
        <span className='nfe-account-suggestions__account-number'>
          { accountFormatter(accountNumber) }
        </span>
        <span className='nfe-account-suggestions__balance'>
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
