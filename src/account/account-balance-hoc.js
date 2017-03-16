import { PropTypes } from 'react';

export function AccountBalanceHoc({balance, children}) {
  return balance !== undefined && children;
}

AccountBalanceHoc.propTypes = {
  balance : PropTypes.number,
  children : PropTypes.element.isRequired,
};
