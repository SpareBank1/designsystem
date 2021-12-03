import React from '../../../../../../pkg/react.js';
import { bool, arrayOf, string } from '../../../../../../pkg/prop-types.js';
import classNames from '../../../../../../pkg/classnames.js';
import { accountFormatter, balanceWithCurrency } from '../../util/format.js';
import { Account, Locale } from '../../util/types.js';

var AccountSuggestionItem = function AccountSuggestionItem(_ref) {
  var item = _ref.item,
      isHighlighted = _ref.isHighlighted,
      locale = _ref.locale,
      dropdownAttributes = _ref.dropdownAttributes;
  var accountNumber = item.accountNumber,
      balance = item.balance,
      name = item.name,
      currencyCode = item.currencyCode;
  var shouldShowBalance = dropdownAttributes.includes('balance') && typeof balance === 'number';
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('ffe-account-suggestion-single', {
      'ffe-account-suggestion-single--highlighted': isHighlighted
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "ffe-account-suggestion-single__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-suggestion-single__details"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ffe-account-suggestion-single__number"
  }, accountFormatter(accountNumber)), shouldShowBalance && /*#__PURE__*/React.createElement("span", {
    className: "ffe-account-suggestion-single__balance"
  }, balanceWithCurrency(balance, locale, currencyCode))));
};

AccountSuggestionItem.propTypes = {
  item: Account.isRequired,
  locale: Locale.isRequired,
  isHighlighted: bool.isRequired,
  dropdownAttributes: arrayOf(string).isRequired
};
export default AccountSuggestionItem;