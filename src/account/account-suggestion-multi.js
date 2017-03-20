import React, {PropTypes} from 'react';
import Checkbox from 'ffe-checkbox-react';
import {accountFormatter, balanceWithCurrency} from '../util/format';
import {Account, Locale} from '../util/types';
import {AccountBalanceHoc} from './account-balance-hoc';

const AccountSuggestionItemMulti = ({account, locale, selected, onChange}) => {
  const {accountNumber, balance, name}= account;
  return (
    <div className='account-suggestion__account--multi' onMouseDown={(e) => {e.preventDefault();}}>
      <Checkbox
        checked={selected}
        name='my-checkbox-label'
        inline={ false }
        tabIndex={-1}
        onChange={() => {}}
        onMouseDown={() => {}}
      />
      <div className='account-suggestion__content-wrapper'>
        <a className='account-suggestion__name'>{name}</a>
        <div className='account-suggestion__details'>
          <span className='account-suggestion__account-number'>
            {accountFormatter(accountNumber)}
          </span>
          <AccountBalanceHoc balance={balance}>
            <span className='account-suggestion__balance'>
              {balanceWithCurrency(balance, locale)}
            </span>
          </AccountBalanceHoc>
        </div>
      </div>
    </div>
  );
};

AccountSuggestionItemMulti.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

AccountSuggestionItemMulti.defaultProps = {
  selected: false
};

export default AccountSuggestionItemMulti;
