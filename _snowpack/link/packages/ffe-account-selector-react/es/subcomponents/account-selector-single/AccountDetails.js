import React from '../../../../../../pkg/react.js';
import { bool } from '../../../../../../pkg/prop-types.js';
import { accountFormatter, balanceWithCurrency } from '../../util/format.js';
import { Account, Locale } from '../../util/types.js';

function AccountDetails(_ref) {
  var account = _ref.account,
      locale = _ref.locale,
      _ref$showBalance = _ref.showBalance,
      showBalance = _ref$showBalance === void 0 ? true : _ref$showBalance;
  var balance = account.balance,
      accountNumber = account.accountNumber,
      currencyCode = account.currencyCode;
  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-small-text ffe-account-selector-single__details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-selector-single__details--left"
  }, accountFormatter(accountNumber)), showBalance && /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-selector-single__details--right"
  }, balanceWithCurrency(balance, locale, currencyCode)));
}

AccountDetails.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
  showBalance: bool
};
export default AccountDetails;