import React, { PropTypes } from 'react';
import amountFormatter from 'nfe-amount-formatter';
import accountFormatter from './util/account-formatter';

export default function AccountDetails({ account }) {
  if (!account) {
    return null;
  }

  const currencyCode = account.currencyCode ? account.currencyCode : 'NOK';

  const balanceEl = account.balance !== undefined ?
    (<div className="nfe-account-selector__selected-account-details--right">
      { amountFormatter(account.balance) } { currencyCode }
    </div>) : null;

  return (
    <div className="nfe-account-selector__selected-account-details">
      <div className="nfe-account-selector__selected-account-details--left">
        { accountFormatter(account.accountNumber) }
      </div>
      { balanceEl }
    </div>
  );
}

AccountDetails.propTypes = {
  account: PropTypes.shape({
    accountNumber: PropTypes.string,
    balance: PropTypes.number,
  }),
};
