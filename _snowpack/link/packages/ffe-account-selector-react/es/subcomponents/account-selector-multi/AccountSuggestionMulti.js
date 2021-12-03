import React from '../../../../../../pkg/react.js';
import { bool } from '../../../../../../pkg/prop-types.js';
import { Checkbox } from '../../../../ffe-form-react/es/index.js';
import { accountFormatter, balanceWithCurrency } from '../../util/format.js';
import { Account, Locale } from '../../util/types.js';

function AccountSuggestionMulti(_ref) {
  var account = _ref.account,
      locale = _ref.locale,
      selected = _ref.selected;
  var accountNumber = account.accountNumber,
      balance = account.balance,
      name = account.name,
      currencyCode = account.currencyCode;
  var hasBalance = balance !== null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-suggestion-multi"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: selected,
    name: "my-checkbox-label",
    inline: false,
    tabIndex: -1,
    disabled: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-suggestion-multi__content-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ffe-account-suggestion-multi__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-suggestion-multi__details"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ffe-account-suggestion-multi__number"
  }, accountFormatter(accountNumber)), hasBalance && /*#__PURE__*/React.createElement("span", {
    className: "ffe-account-suggestion-multi__balance"
  }, balanceWithCurrency(balance, locale, currencyCode)))));
}

AccountSuggestionMulti.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
  selected: bool.isRequired
};
AccountSuggestionMulti.defaultProps = {
  selected: false
};
export default AccountSuggestionMulti;