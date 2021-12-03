import React from '../../../../../../pkg/react.js';
import { string } from '../../../../../../pkg/prop-types.js';
import { Locale } from '../../util/types.js';
import txt from '../../i18n/i18n.js';

var AccountNoMatch = function AccountNoMatch(_ref) {
  var value = _ref.value,
      locale = _ref.locale;
  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-suggestion-multi__nomatches"
  }, /*#__PURE__*/React.createElement("span", null, value || txt[locale].NO_ACCOUNTS_FOUND));
};

AccountNoMatch.propTypes = {
  value: string,
  locale: Locale.isRequired
};
export default AccountNoMatch;