import React from 'react';
import { bool } from 'prop-types';
import {accountFormatter, balanceWithCurrency} from '../util/format';
import {Account, Locale} from '../util/types';

const AccountSuggestionItem = ({account, locale, showBalance = true}) => {
  const {accountNumber, balance, name}= account;
  const hasBalance = balance !== null;
  return (
    <div className='ffe-account-suggestion__account'>
      <a className='ffe-account-suggestion__name ffe-link-text ffe-link-text--no-underline'>{ name }</a>
      <div className='ffe-account-suggestion__details'>
        <span className='ffe-account-suggestion__number'>
          { accountFormatter(accountNumber) }
        </span>
        {showBalance && hasBalance &&
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
  showBalance: bool,
};

export default AccountSuggestionItem;
