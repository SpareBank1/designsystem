import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import { n as numberFormat } from '../common/numberFormat-e9d2ffa9.js';
import { _ as __pika_web_default_export_for_treeshaking__, l as lib } from '../common/SearchableDropdown-22320add.js';
import { c as createCommonjsModule } from '../common/_commonjsHelpers-4f955397.js';
import { C as Checkbox } from '../common/Checkbox-9339998a.js';
import { K as KryssIkon } from '../common/kryss-ikon-6702249b.js';
import { C as ChevronIkon } from '../common/chevron-ikon-5cfb248f.js';
import { S as Spinner } from '../common/Spinner-c1c31f55.js';
import { _ as _inheritsLoose, a as _extends$6 } from '../common/inheritsLoose-7c4b188e.js';
import { m as memoizeOne } from '../common/memoize-one.esm-d455d955.js';
import '../common/react-lifecycles-compat.es-bd71b1aa.js';
import '../common/index-53825215.js';
import '../common/process-2545f00a.js';
import '../common/v4-a40bed11.js';
import '../common/Paragraph-c0d28da6.js';

var NON_BREAKING_SPACE = "\xA0";

function parseNumber(number) {
  if (!number || typeof number === 'number') {
    return number;
  }

  var parsed = number;

  if (typeof number === 'string') {
    parsed = parseFloat(number.replace(/[^\d,.-]/g, '').replace(/,/g, '.'));
  }

  if (Number.isNaN(parsed) || typeof parsed !== 'number') {
    return null;
  }

  return parsed;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function formatNumber(number) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _decimals$thousandSep = _objectSpread$2({
    decimals: 0,
    thousandSeparator: NON_BREAKING_SPACE,
    decimalMark: ','
  }, opts),
      decimals = _decimals$thousandSep.decimals,
      thousandSeparator = _decimals$thousandSep.thousandSeparator,
      decimalMark = _decimals$thousandSep.decimalMark;

  var toFormat = parseNumber(number);

  if (typeof toFormat !== 'number') {
    return number;
  }

  return "".concat(numberFormat(toFormat, decimals, decimalMark, thousandSeparator));
}

var _currencyAffixNOK;

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var nb$1 = 'nb';
var en$1 = 'en';
var nn$1 = 'nn';
var currencyAffixNOK = (_currencyAffixNOK = {}, _defineProperty$3(_currencyAffixNOK, nb$1, 'kr'), _defineProperty$3(_currencyAffixNOK, nn$1, 'kr'), _defineProperty$3(_currencyAffixNOK, en$1, 'NOK'), _currencyAffixNOK);
var KeyCodes = {
  TAB: 9,
  ENTER: 13,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PGUP: 33,
  PGDWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var Account = propTypes.shape({
  accountNumber: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  currencyCode: propTypes.string,
  balance: propTypes.number
});
var Locale = propTypes.oneOf([nb$1, nn$1, en$1]);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getWeightedSumOfDigits = function getWeightedSumOfDigits(accountNumber) {
  var weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
  var accountNumbersWeighted = weights.map(function (value, index) {
    return parseInt(accountNumber.charAt(index), 10) * value;
  });
  return accountNumbersWeighted.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
};

function isValidNorwegianAccountNumber(accountNumber) {
  if (accountNumber.length !== 11) {
    return false;
  }

  var sum = getWeightedSumOfDigits(accountNumber);
  return sum % 11 === 0;
}
function accountFormatter(accountNumber) {
  if (typeof accountNumber === 'string' && isValidNorwegianAccountNumber(accountNumber)) {
    return accountNumber.replace(/(\d{4})(\d{2})(\d{5})/g, '$1 $2 $3');
  }

  return accountNumber;
}
function balanceWithCurrency() {
  var balance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var locale = arguments.length > 1 ? arguments[1] : undefined;
  var currencyCode = arguments.length > 2 ? arguments[2] : undefined;
  var formatOptions = locale === 'en' ? {
    thousandSeparator: ',',
    decimalMark: '.'
  } : {};
  var amount = formatNumber(balance, _objectSpread$1({
    decimals: 2
  }, formatOptions));
  var currencyAffix = currencyCode && currencyCode !== 'NOK' ? currencyCode : currencyAffixNOK[locale];
  return locale === 'en' ? "".concat(currencyAffix, " ").concat(amount) : "".concat(amount, " ").concat(currencyAffix);
}
var formatIncompleteAccountNumber = function formatIncompleteAccountNumber(accountNumber) {
  var matchDigits = /^\d+$/;

  if (typeof accountNumber !== 'string' || !accountNumber) {
    return accountNumber;
  }

  var accountNumberWithoutSpaces = accountNumber.replace(/\s/g, ''); // remove spaces

  if (matchDigits.test(accountNumberWithoutSpaces)) {
    return accountNumberWithoutSpaces.replace(/(\d{4})(\d{1})/, '$1 $2').replace(/ (\d{2})(\d{1})/, ' $1 $2');
  }

  return accountNumber || '';
};

function AccountDetails(_ref) {
  var account = _ref.account,
      locale = _ref.locale,
      _ref$showBalance = _ref.showBalance,
      showBalance = _ref$showBalance === void 0 ? true : _ref$showBalance;
  var balance = account.balance,
      accountNumber = account.accountNumber,
      currencyCode = account.currencyCode;
  return /*#__PURE__*/react.createElement("div", {
    className: "ffe-small-text ffe-account-selector__details"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-selector__details--left"
  }, accountFormatter(accountNumber)), showBalance && /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-selector__details--right"
  }, balanceWithCurrency(balance, locale, currencyCode)));
}

AccountDetails.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
  showBalance: propTypes.bool
};

var en = {
  ACCOUNTSLIST_OPEN: 'Show account list',
  ACCOUNTSLIST_CLOSE: 'Close account list',
  RESET_SEARCH: 'Reset',
  DROPDOWN_MULTISELECT_DONE: 'Done',
  NO_ACCOUNTS_SELECTED: 'No accounts selected',
  NO_ACCOUNTS_FOUND: 'No accounts',
  ONE_ACCOUNT_SELECTED: '1 account selected',
  MULTIPLE_ACCOUNTS_SELECTED: 'accounts selected',
  SELECT_ALL: 'Select all'
};

var nn = {
  ACCOUNTSLIST_OPEN: 'Vis kontoliste',
  ACCOUNTSLIST_CLOSE: 'Skjul kontoliste',
  RESET_SEARCH: 'Nullstill',
  DROPDOWN_MULTISELECT_DONE: 'Ferdig',
  NO_ACCOUNTS_SELECTED: 'Ingen kontoar vald',
  NO_ACCOUNTS_FOUND: 'Ingen kontoar',
  ONE_ACCOUNT_SELECTED: '1 konto vald',
  MULTIPLE_ACCOUNTS_SELECTED: 'kontoar vald',
  SELECT_ALL: 'Velj alle'
};

var nb = {
  ACCOUNTSLIST_OPEN: 'Vis kontoliste',
  ACCOUNTSLIST_CLOSE: 'Skjul kontoliste',
  RESET_SEARCH: 'Nullstill',
  DROPDOWN_MULTISELECT_DONE: 'Ferdig',
  NO_ACCOUNTS_SELECTED: 'Ingen kontoer valgt',
  NO_ACCOUNTS_FOUND: 'Ingen kontoer',
  ONE_ACCOUNT_SELECTED: '1 konto valgt',
  MULTIPLE_ACCOUNTS_SELECTED: 'kontoer valgt',
  SELECT_ALL: 'Velg alle'
};

var txt = {
  nb: nb,
  nn: nn,
  en: en
};

var AccountNoMatch = function AccountNoMatch(_ref) {
  var value = _ref.value,
      locale = _ref.locale;
  return /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-suggestion__nomatches"
  }, /*#__PURE__*/react.createElement("span", null, value || txt[locale].NO_ACCOUNTS_FOUND));
};

AccountNoMatch.propTypes = {
  value: propTypes.string,
  locale: Locale.isRequired
};
var AccountNoMatch$1 = AccountNoMatch;

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
  return /*#__PURE__*/react.createElement("div", {
    className: classnames('ffe-account-suggestion ffe-account-suggestion__account', {
      'ffe-account-suggestion--highlighted': isHighlighted
    })
  }, /*#__PURE__*/react.createElement("span", {
    className: "ffe-account-suggestion__name ffe-link-text ffe-link-text--no-underline"
  }, name), /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-suggestion__details"
  }, /*#__PURE__*/react.createElement("span", {
    className: "ffe-account-suggestion__number"
  }, accountFormatter(accountNumber)), shouldShowBalance && /*#__PURE__*/react.createElement("span", {
    className: "ffe-account-suggestion__balance"
  }, balanceWithCurrency(balance, locale, currencyCode))));
};

AccountSuggestionItem.propTypes = {
  item: Account.isRequired,
  locale: Locale.isRequired,
  isHighlighted: propTypes.bool.isRequired,
  dropdownAttributes: propTypes.arrayOf(propTypes.string).isRequired
};
var AccountSuggestion = AccountSuggestionItem;

function AccountSuggestionMulti(_ref) {
  var account = _ref.account,
      locale = _ref.locale,
      selected = _ref.selected;
  var accountNumber = account.accountNumber,
      balance = account.balance,
      name = account.name,
      currencyCode = account.currencyCode;
  var hasBalance = balance !== null;
  return /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-suggestion__account--multi"
  }, /*#__PURE__*/react.createElement(Checkbox, {
    checked: selected,
    name: "my-checkbox-label",
    inline: false,
    tabIndex: -1,
    disabled: true
  }), /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-suggestion__content-wrapper"
  }, /*#__PURE__*/react.createElement("span", {
    className: "ffe-account-suggestion__name ffe-link-text ffe-link-text--no-underline"
  }, name), /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-suggestion__details"
  }, /*#__PURE__*/react.createElement("span", {
    className: "ffe-account-suggestion__number"
  }, accountFormatter(accountNumber)), hasBalance && /*#__PURE__*/react.createElement("span", {
    className: "ffe-account-suggestion__balance"
  }, balanceWithCurrency(balance, locale, currencyCode)))));
}

AccountSuggestionMulti.propTypes = {
  account: Account.isRequired,
  locale: Locale.isRequired,
  selected: propTypes.bool.isRequired
};
AccountSuggestionMulti.defaultProps = {
  selected: false
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getAccountsWithCustomAccounts = function getAccountsWithCustomAccounts(_ref) {
  var accounts = _ref.accounts,
      selectedAccount = _ref.selectedAccount,
      inputValue = _ref.inputValue;
  var shouldAddSelectedAccountNotFoundInList = selectedAccount && selectedAccount.name === inputValue && !accounts.find(function (account) {
    return account.accountNumber === selectedAccount.accountNumber;
  });
  return shouldAddSelectedAccountNotFoundInList ? [].concat(_toConsumableArray$1(accounts), [selectedAccount]) : accounts;
};

var AccountSelector = function AccountSelector(_ref2) {
  var className = _ref2.className,
      id = _ref2.id,
      locale = _ref2.locale,
      selectedAccount = _ref2.selectedAccount,
      _ref2$showBalance = _ref2.showBalance,
      showBalance = _ref2$showBalance === void 0 ? false : _ref2$showBalance,
      noMatches = _ref2.noMatches,
      accounts = _ref2.accounts,
      onAccountSelected = _ref2.onAccountSelected,
      _ref2$allowCustomAcco = _ref2.allowCustomAccount,
      allowCustomAccount = _ref2$allowCustomAcco === void 0 ? false : _ref2$allowCustomAcco,
      labelId = _ref2.labelId,
      listElementBody = _ref2.listElementBody,
      onReset = _ref2.onReset,
      inputProps = _ref2.inputProps,
      _ref2$formatAccountNu = _ref2.formatAccountNumber,
      formatAccountNumber = _ref2$formatAccountNu === void 0 ? true : _ref2$formatAccountNu,
      ariaInvalid = _ref2.ariaInvalid,
      _ref2$withSpaceForDet = _ref2.withSpaceForDetails,
      withSpaceForDetails = _ref2$withSpaceForDet === void 0 ? true : _ref2$withSpaceForDet,
      _ref2$highCapacity = _ref2.highCapacity,
      highCapacity = _ref2$highCapacity === void 0 ? false : _ref2$highCapacity,
      onOpen = _ref2.onOpen,
      onClose = _ref2.onClose;

  var _useState = react.useState((selectedAccount === null || selectedAccount === void 0 ? void 0 : selectedAccount.name) || ''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var formatter;

  if (formatAccountNumber) {
    formatter = formatIncompleteAccountNumber;
  }
  /*
   * This matcher function closely resembles the default one of SearchableDropdown,
   * but it ignores all spaces and periods so that account number formatting won't mess with the search.
   */


  var searchMatcherIgnoringAccountNumberFormatting = function searchMatcherIgnoringAccountNumberFormatting(searchString, searchAttributes) {
    return function (item) {
      var cleanString = function cleanString(value) {
        return "".concat(value).replace(/(\s|\.)/g, '') // Remove all spaces and periods
        .toLowerCase();
      };

      var cleanedSearchString = cleanString(searchString);
      return searchAttributes.some(function (searchAttribute) {
        return cleanString(item[searchAttribute]).includes(cleanedSearchString);
      });
    };
  };

  var onInputChange = function onInputChange(event) {
    setInputValue(event.target.value);

    if (inputProps !== null && inputProps !== void 0 && inputProps.onChange) {
      inputProps.onChange(event);
    }
  };

  var handleAccountSelected = function handleAccountSelected(value) {
    var hasResetSelection = value === null;
    var hasSelectedCustomAccount = !(value !== null && value !== void 0 && value.accountNumber);

    if (hasResetSelection) {
      setInputValue('');
      onReset();
    } else if (hasSelectedCustomAccount) {
      onAccountSelected({
        name: value.name,
        accountNumber: value.name
      });
      setInputValue(value.name);
    } else {
      onAccountSelected(value);
      setInputValue(value.name);
    }
  };

  var customNoMatch = allowCustomAccount && inputValue.trim() !== '' ? {
    dropdownList: [{
      name: formatter ? formatter(inputValue) : inputValue,
      accountNumber: ''
    }]
  } : noMatches;
  var dropdownAttributes = showBalance ? ['name', 'accountNumber', 'balance'] : ['name', 'accountNumber'];
  var dropdownList = allowCustomAccount ? getAccountsWithCustomAccounts({
    selectedAccount: selectedAccount,
    accounts: accounts,
    inputValue: inputValue
  }) : accounts;
  return /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-selector-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames('ffe-account-selector', {
      'ffe-account-selector--with-space-for-details': !selectedAccount && withSpaceForDetails,
      className: className
    }),
    id: "".concat(id, "-account-selector-container")
  }, /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__, {
    id: id,
    labelId: labelId,
    inputProps: _objectSpread(_objectSpread({}, inputProps), {}, {
      onChange: onInputChange
    }),
    dropdownAttributes: dropdownAttributes,
    dropdownList: dropdownList,
    noMatch: customNoMatch,
    formatter: formatter,
    onChange: handleAccountSelected,
    searchAttributes: ['name', 'accountNumber'],
    locale: locale,
    listElementBody: listElementBody || AccountSuggestion,
    ariaInvalid: ariaInvalid,
    searchMatcher: searchMatcherIgnoringAccountNumberFormatting,
    selectedItem: selectedAccount,
    highCapacity: highCapacity,
    onOpen: onOpen,
    onClose: onClose
  }), selectedAccount && /*#__PURE__*/react.createElement(AccountDetails, {
    account: selectedAccount,
    locale: locale,
    showBalance: showBalance && typeof selectedAccount.balance === 'number'
  })));
};

AccountSelector.propTypes = {
  /**
   * Array of objects:
   *  {
   *      accountNumber: string.isRequired,
   *      name: string.isRequired,
   *      balance: number,
   *      currencyCode: string,
   *  }
   */
  accounts: propTypes.arrayOf(Account).isRequired,
  className: propTypes.string,
  id: propTypes.string.isRequired,

  /** 'nb', 'nn', or 'en' */
  locale: Locale.isRequired,

  /** Overrides default string for all locales. */
  noMatches: propTypes.shape({
    text: propTypes.string.isRequired,
    dropdownList: propTypes.arrayOf(propTypes.object)
  }),
  labelId: propTypes.string.isRequired,

  /** Returns the selected account object */
  onAccountSelected: propTypes.func.isRequired,

  /**
   * Called when emptying the input field and moving focus away from the account selector
   * */
  onReset: propTypes.func.isRequired,
  selectedAccount: Account,

  /** Default false. */
  showBalance: propTypes.bool,

  /** Default true. */
  formatAccountNumber: propTypes.bool,

  /**
   * Allows selecting the text the user writes even if it does not match anything in the accounts array.
   * Useful e.g. if you want to pay to account that is not in your recipients list.
   */
  allowCustomAccount: propTypes.bool,

  /** Custom element to use for each item in the dropdown list */
  listElementBody: propTypes.func,

  /** Props passed to the input field */
  inputProps: propTypes.shape(),

  /** Defines if should save space for account details that is shown when an account is selected */
  withSpaceForDetails: propTypes.bool,

  /** Sets aria-invalid on input field  */
  ariaInvalid: propTypes.oneOfType([propTypes.string, propTypes.bool]).isRequired,

  /**
   * For situations where AccountSelector might be populated with hundreds of accounts,
   * uses react-window for performance optimization, default false.
   * This prop will be passed on to SearchableDropdown.
   * The account selector with highCapacity is currently not working with VoiceOver on ios.
   */
  highCapacity: propTypes.bool,

  /** Prop passed to the dropdown list */
  onClose: propTypes.func,

  /** Prop passed to the dropdown list */
  onOpen: propTypes.func
};
var AccountSelector$1 = AccountSelector;

var reactAutoBind_1 = createCommonjsModule(function (module) {

var exclude = ['render', 'componentWillReceiveProps', 'componentDidMount', 'componentDidUpdate', 'componentDidCatch', 'shouldComponentUpdate', 'componentWillUnmount', 'componentWillUpdate', 'forceUpdate', 'componentWillMount'];

var reactAutoBind = function reactAutoBind(self) {
	for (var _len = arguments.length, bindOnly = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		bindOnly[_key - 1] = arguments[_key];
	}

	(bindOnly.length && bindOnly || Object.getOwnPropertyNames(self.constructor.prototype)).forEach(function (key) {
		var val = self[key];

		if (key !== 'constructor' && typeof val === 'function') {
			if (exclude.indexOf(key) === -1) {
				self[key] = val.bind(self);
			}
		}
	});

	return self;
};

if (module.exports) {
	module.exports = reactAutoBind;
} else {
	window.reactAutoBind = reactAutoBind;
}
});

/* Because we are missing aria-controls (http://www.heydonworks.com/article/aria-controls-is-poop): */

var InputField = function InputField(props) {
  var onKeyDown = props.onKeyDown,
      id = props.id,
      placeholder = props.placeholder,
      isSuggestionsShowing = props.isSuggestionsShowing,
      ariaInvalid = props.ariaInvalid,
      onClick = props.onClick,
      inputFieldRef = props.inputFieldRef,
      highlightedIndex = props.highlightedIndex,
      suggestionListId = props.suggestionListId,
      name = props.name,
      readOnly = props.readOnly,
      locale = props.locale,
      value = props.value,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onChange = props.onChange,
      onReset = props.onReset;

  var handleChange = function handleChange(_ref) {
    var newValue = _ref.target.value;
    return onChange(newValue);
  };

  var handleReset = function handleReset(e) {
    e.preventDefault();
    onReset();
  };

  var onExpandOrCollapse = function onExpandOrCollapse(e) {
    e.preventDefault();

    if (isSuggestionsShowing) {
      onBlur();
    } else {
      e.currentTarget.previousElementSibling.focus();
      onFocus();
    }
  };

  var showReset = !readOnly && value.length > 0;
  return /*#__PURE__*/react.createElement("div", {
    role: "combobox",
    "aria-expanded": isSuggestionsShowing,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-activedescendant": highlightedIndex > -1 ? "suggestion-item-".concat(highlightedIndex) : null,
    "aria-owns": suggestionListId
  }, /*#__PURE__*/react.createElement("input", {
    className: "ffe-input-field ffe-base-selector__input-field",
    onKeyDown: onKeyDown,
    autoComplete: "off",
    value: value,
    id: id,
    placeholder: placeholder,
    ref: inputFieldRef,
    "aria-invalid": ariaInvalid,
    "aria-autocomplete": "list",
    name: name,
    onClick: onClick,
    onChange: handleChange,
    readOnly: readOnly
  }), showReset && /*#__PURE__*/react.createElement("button", {
    className: "ffe-base-selector__reset-button",
    onMouseDown: handleReset,
    tabIndex: -1,
    type: "button",
    "aria-label": txt[locale].RESET_SEARCH
  }, /*#__PURE__*/react.createElement(KryssIkon, {
    className: "ffe-base-selector__reset-button-icon"
  })), /*#__PURE__*/react.createElement("button", {
    className: "ffe-base-selector__expand-button",
    onMouseDown: onExpandOrCollapse,
    tabIndex: -1,
    type: "button",
    "aria-label": isSuggestionsShowing ? txt[locale].ACCOUNTSLIST_CLOSE : txt[locale].ACCOUNTSLIST_OPEN
  }, /*#__PURE__*/react.createElement(ChevronIkon, {
    className: classnames('ffe-base-selector__expand-button-icon ', {
      'ffe-base-selector__expand-button-icon--invalid': ariaInvalid
    })
  })));
};

InputField.propTypes = {
  onChange: propTypes.func.isRequired,
  onKeyDown: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  onReset: propTypes.func.isRequired,
  isSuggestionsShowing: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  readOnly: propTypes.bool,
  placeholder: propTypes.string,
  onBlur: propTypes.func,
  onFocus: propTypes.func,
  onClick: propTypes.func,
  ariaInvalid: propTypes.bool,
  inputFieldRef: propTypes.func,
  highlightedIndex: propTypes.number,
  suggestionListId: propTypes.string,
  name: propTypes.string,
  locale: Locale.isRequired
};
InputField.defaultProps = {
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  inputFieldRef: function inputFieldRef() {},
  ariaInvalid: false,
  readOnly: false
};
var InputField$1 = InputField;

function SuggestionItem$1(props) {
  var item = props.item,
      id = props.id,
      isHighlighted = props.isHighlighted,
      render = props.render,
      onSelect = props.onSelect,
      refHighlightedSuggestion = props.refHighlightedSuggestion;
  return /*#__PURE__*/react.createElement("li", {
    ref: function ref(itemRef) {
      if (itemRef && isHighlighted) {
        refHighlightedSuggestion(itemRef);
      }
    },
    role: "option",
    "aria-selected": isHighlighted,
    id: id,
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      onSelect(item);
    },
    className: classnames('ffe-account-suggestion', {
      'ffe-account-suggestion--highlighted': isHighlighted
    }),
    tabIndex: -1
  }, render(item));
}

SuggestionItem$1.propTypes = {
  item: propTypes.object.isRequired,
  id: propTypes.string.isRequired,
  isHighlighted: propTypes.bool.isRequired,
  render: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
  refHighlightedSuggestion: propTypes.func.isRequired
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
function SuggestionList$1(props) {
  var suggestions = props.suggestions,
      highlightedIndex = props.highlightedIndex,
      renderSuggestion = props.renderSuggestion,
      renderNoMatches = props.renderNoMatches,
      id = props.id,
      isLoading = props.isLoading;
  return isLoading ? /*#__PURE__*/react.createElement(Spinner, {
    center: true,
    large: true
  }) : /*#__PURE__*/react.createElement("ul", {
    className: "ffe-base-selector__suggestion-container-list",
    role: "listbox",
    id: id
  }, suggestions.length > 0 ? suggestions.map(function (item, index) {
    return /*#__PURE__*/react.createElement(SuggestionItem$1, _extends$5({}, props, {
      key: index,
      item: item,
      id: "suggestion-item-".concat(index),
      isHighlighted: index === highlightedIndex,
      render: renderSuggestion
    }));
  }) : /*#__PURE__*/react.createElement("li", null, renderNoMatches()));
}
SuggestionList$1.propTypes = {
  suggestions: propTypes.arrayOf(propTypes.object).isRequired,
  highlightedIndex: propTypes.number.isRequired,
  renderSuggestion: propTypes.func.isRequired,
  renderNoMatches: propTypes.func,
  id: propTypes.string.isRequired,
  isLoading: propTypes.bool
};
SuggestionList$1.defaultProps = {
  renderNoMatches: function renderNoMatches() {},
  isLoading: false
};

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

var SuggestionListContainer$1 = /*#__PURE__*/function (_React$Component) {
  _inherits$3(SuggestionListContainer, _React$Component);

  var _super = _createSuper$3(SuggestionListContainer);

  function SuggestionListContainer(props) {
    var _this;

    _classCallCheck$3(this, SuggestionListContainer);

    _this = _super.call(this, props);
    _this.refHighlightedSuggestion = _this.refHighlightedSuggestion.bind(_assertThisInitialized$4(_this));
    return _this;
  }

  _createClass$3(SuggestionListContainer, [{
    key: "refHighlightedSuggestion",
    value: function refHighlightedSuggestion(suggestionEl) {
      this.highlightedSuggestionHeight = suggestionEl.clientHeight;
    }
  }, {
    key: "_setScrollPos",
    value: function _setScrollPos(pos) {
      this.scrollbars.scrollTop(pos);
    }
  }, {
    key: "setScrollPosStart",
    value: function setScrollPosStart() {
      this._setScrollPos(0);
    }
  }, {
    key: "setScrollPosEnd",
    value: function setScrollPosEnd() {
      this._setScrollPos(this.scrollbars.getScrollHeight());
    }
  }, {
    key: "setScrollPosNext",
    value: function setScrollPosNext() {
      var highlightedIndex = this.props.highlightedIndex;

      this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight);
    }
  }, {
    key: "setScrollPosPrevious",
    value: function setScrollPosPrevious() {
      var highlightedIndex = this.props.highlightedIndex;

      this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight - this.highlightedSuggestionHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          heightMax = _this$props.heightMax,
          autoHeight = _this$props.autoHeight;
      return /*#__PURE__*/react.createElement("div", {
        className: "ffe-base-selector__suggestion-container",
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/react.createElement(lib.Scrollbars, {
        autoHeight: autoHeight,
        autoHeightMax: heightMax,
        ref: function ref(scrollbars) {
          if (scrollbars) {
            _this2.scrollbars = scrollbars;
          }
        }
      }, /*#__PURE__*/react.createElement(SuggestionList$1, _extends$4({
        refHighlightedSuggestion: this.refHighlightedSuggestion
      }, this.props))));
    }
  }]);

  return SuggestionListContainer;
}(react.Component);

SuggestionListContainer$1.propTypes = {
  highlightedIndex: propTypes.number.isRequired,
  heightMax: propTypes.number,
  autoHeight: propTypes.bool
};
SuggestionListContainer$1.defaultProps = {
  heightMax: 300,
  autoHeight: true
};
var SuggestionListContainer$2 = SuggestionListContainer$1;

var StatusBar = function StatusBar(_ref) {
  var onDone = _ref.onDone,
      renderSelectionStatus = _ref.renderSelectionStatus,
      labelDoneButton = _ref.labelDoneButton,
      style = _ref.style;

  var onKeyDown = function onKeyDown(evt) {
    if (evt.which === KeyCodes.TAB && !evt.shiftKey || evt.which === KeyCodes.ENTER) {
      onDone();
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-selector__dropdown-statusbar",
    style: style
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-selector__selection-status"
  }, renderSelectionStatus()), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "ffe-button ffe-button--primary ffe-account-selector__statusbar-button",
    tabIndex: "0",
    onMouseDown: onDone,
    onKeyDown: onKeyDown
  }, labelDoneButton));
};

StatusBar.propTypes = {
  onDone: propTypes.func.isRequired,
  renderSelectionStatus: propTypes.func.isRequired,
  labelDoneButton: propTypes.string.isRequired,
  style: propTypes.object.isRequired
};
var SuggestionListStatusBar = StatusBar;

function SuggestionItem(props) {
  var item = props.item,
      id = props.id,
      isHighlighted = props.isHighlighted,
      render = props.render,
      onSelect = props.onSelect,
      refHighlightedSuggestion = props.refHighlightedSuggestion,
      style = props.style;
  return /*#__PURE__*/react.createElement("li", {
    ref: function ref(itemRef) {
      if (itemRef && isHighlighted) {
        refHighlightedSuggestion(itemRef);
      }
    },
    role: "option",
    "aria-selected": isHighlighted,
    id: id,
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      onSelect(item);
    },
    className: classnames('ffe-account-suggestion', {
      'ffe-account-suggestion--highlighted': isHighlighted
    }),
    tabIndex: -1,
    style: style
  }, render(item));
}

SuggestionItem.propTypes = {
  item: propTypes.object.isRequired,
  id: propTypes.string.isRequired,
  isHighlighted: propTypes.bool.isRequired,
  render: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
  refHighlightedSuggestion: propTypes.func.isRequired,
  style: propTypes.object
};

function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized$3(_assertThisInitialized$3(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized$3(_assertThisInitialized$3(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoizeOne(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoizeOne(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoizeOne(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(react.createElement(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return react.createElement(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: _extends$6({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, react.createElement(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  _ref2.children;
      _ref2.direction;
      _ref2.height;
      _ref2.layout;
      _ref2.innerTagName;
      _ref2.outerTagName;
      _ref2.width;
  _ref3.instance;
};

var FixedSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    _ref7.itemSize;
  }
});

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var Row = function Row(props) {
  var style = props.style,
      index = props.index,
      _props$data = props.data,
      forwardProps = _props$data.forwardProps,
      suggestions = _props$data.suggestions,
      renderSuggestion = _props$data.renderSuggestion,
      highlightedIndex = _props$data.highlightedIndex;
  return /*#__PURE__*/react.createElement(SuggestionItem, _extends$3({}, forwardProps, {
    item: suggestions[index],
    id: "suggestion-item-".concat(index),
    isHighlighted: index === highlightedIndex,
    render: renderSuggestion,
    style: style
  }));
};

Row.propTypes = {
  style: propTypes.object,
  index: propTypes.number,
  data: propTypes.shape({
    forwardProps: propTypes.object,
    suggestions: propTypes.array,
    renderSuggestion: propTypes.func,
    highlightedIndex: propTypes.number
  })
};
function SuggestionList(props) {
  var suggestions = props.suggestions,
      highlightedIndex = props.highlightedIndex,
      renderSuggestion = props.renderSuggestion,
      renderNoMatches = props.renderNoMatches,
      id = props.id,
      isLoading = props.isLoading,
      height = props.height,
      itemSize = props.itemSize;
  return isLoading ? /*#__PURE__*/react.createElement(Spinner, {
    center: true,
    large: true
  }) : suggestions.length > 0 ? /*#__PURE__*/react.createElement(FixedSizeList, {
    height: suggestions.length * itemSize < height ? suggestions.length * itemSize : height,
    innerElementType: /*#__PURE__*/react.forwardRef(function (forwardProps, ref) {
      return /*#__PURE__*/react.createElement("ul", _extends$3({
        ref: ref,
        id: id,
        className: 'ffe-base-selector__suggestion-container-list',
        role: "listbox"
      }, forwardProps));
    }),
    itemCount: suggestions.length,
    itemSize: itemSize,
    itemData: {
      forwardProps: props,
      renderSuggestion: renderSuggestion,
      highlightedIndex: highlightedIndex,
      suggestions: suggestions
    },
    ref: props.refList,
    style: {
      overflow: false
    }
  }, Row) : /*#__PURE__*/react.createElement("ul", {
    className: "ffe-base-selector__suggestion-container-list",
    role: "listbox",
    id: id
  }, /*#__PURE__*/react.createElement("li", null, renderNoMatches()));
}
SuggestionList.propTypes = {
  suggestions: propTypes.arrayOf(propTypes.object).isRequired,
  highlightedIndex: propTypes.number.isRequired,
  renderSuggestion: propTypes.func.isRequired,
  renderNoMatches: propTypes.func,
  id: propTypes.string.isRequired,
  isLoading: propTypes.bool,
  refList: propTypes.object,
  height: propTypes.number,
  itemSize: propTypes.number
};
SuggestionList.defaultProps = {
  renderNoMatches: function renderNoMatches() {},
  isLoading: false,
  height: 300,
  itemSize: 55
};

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SuggestionListContainer = /*#__PURE__*/function (_React$Component) {
  _inherits$2(SuggestionListContainer, _React$Component);

  var _super = _createSuper$2(SuggestionListContainer);

  function SuggestionListContainer(props) {
    var _this;

    _classCallCheck$2(this, SuggestionListContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized$2(_this), "listRef", /*#__PURE__*/react.createRef());

    _defineProperty(_assertThisInitialized$2(_this), "handleScroll", function (_ref) {
      var target = _ref.target;
      var scrollTop = target.scrollTop;

      _this.listRef.current.scrollTo(scrollTop);
    });

    _this.refHighlightedSuggestion = _this.refHighlightedSuggestion.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$2(SuggestionListContainer, [{
    key: "refHighlightedSuggestion",
    value: function refHighlightedSuggestion(suggestionEl) {
      this.highlightedSuggestionHeight = suggestionEl.clientHeight;
    }
  }, {
    key: "_setScrollPos",
    value: function _setScrollPos(pos) {
      this.scrollbars.scrollTop(pos);
    }
  }, {
    key: "setScrollPosStart",
    value: function setScrollPosStart() {
      this._setScrollPos(0);
    }
  }, {
    key: "setScrollPosEnd",
    value: function setScrollPosEnd() {
      this._setScrollPos(this.scrollbars.getScrollHeight());
    }
  }, {
    key: "setScrollPosNext",
    value: function setScrollPosNext() {
      var highlightedIndex = this.props.highlightedIndex;

      this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight);
    }
  }, {
    key: "setScrollPosPrevious",
    value: function setScrollPosPrevious() {
      var highlightedIndex = this.props.highlightedIndex;

      this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight - this.highlightedSuggestionHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          heightMax = _this$props.heightMax,
          autoHeight = _this$props.autoHeight;
      return /*#__PURE__*/react.createElement("div", {
        className: "ffe-base-selector__suggestion-container",
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/react.createElement(lib.Scrollbars, {
        autoHeight: autoHeight,
        autoHeightMax: heightMax,
        ref: function ref(scrollbars) {
          if (scrollbars) {
            _this2.scrollbars = scrollbars;
          }
        },
        onScroll: this.handleScroll
      }, /*#__PURE__*/react.createElement(SuggestionList, _extends$2({
        height: heightMax,
        refList: this.listRef,
        refHighlightedSuggestion: this.refHighlightedSuggestion
      }, this.props))));
    }
  }]);

  return SuggestionListContainer;
}(react.Component);

SuggestionListContainer.propTypes = {
  highlightedIndex: propTypes.number.isRequired,
  heightMax: propTypes.number,
  autoHeight: propTypes.bool
};
SuggestionListContainer.defaultProps = {
  heightMax: 300,
  autoHeight: true
};
var SuggestionListContainerHighCapacity = SuggestionListContainer;

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

var BaseSelector = /*#__PURE__*/function (_Component) {
  _inherits$1(BaseSelector, _Component);

  var _super = _createSuper$1(BaseSelector);

  function BaseSelector(props) {
    var _this;

    _classCallCheck$1(this, BaseSelector);

    _this = _super.call(this, props);
    reactAutoBind_1(_assertThisInitialized$1(_this));
    _this.state = {
      showSuggestions: false,
      highlightedSuggestionIndex: -1,
      suggestionListId: 'suggestion-list'
    };
    return _this;
  }

  _createClass$1(BaseSelector, [{
    key: "_onSuggestionListChange",
    value: function _onSuggestionListChange() {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.onSuggestionListChange(_this2.getSuggestionListHeight());
      });
    }
  }, {
    key: "getSuggestionListHeight",
    value: function getSuggestionListHeight() {
      if (this.suggestionList) {
        return this.suggestionList.scrollbars.getClientHeight();
      }

      return 0;
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      this.input.focus();
    }
  }, {
    key: "getInputHeight",
    value: function getInputHeight() {
      if (this.input) {
        return this.input.getBoundingClientRect().height;
      }

      return 0;
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(val) {
      var _this3 = this;

      if (val !== this.props.value) {
        this.setState({
          showSuggestions: true,
          highlightedSuggestionIndex: -1
        }, function () {
          _this3.props.onChange(val);

          _this3._onSuggestionListChange();
        });
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      var _this$props = this.props,
          shouldShowSuggestionsOnFocus = _this$props.shouldShowSuggestionsOnFocus,
          onFocus = _this$props.onFocus;
      this.showOrHideSuggestions(shouldShowSuggestionsOnFocus, onFocus);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.showOrHideSuggestions(false, this.props.onBlur);
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var onClick = this.props.onClick;
      this.showOrHideSuggestions(true, onClick);
    }
  }, {
    key: "onInputReset",
    value: function onInputReset() {
      var shouldShowSuggestions = !this.props.shouldHideSuggestionsOnReset;
      this.showOrHideSuggestions(shouldShowSuggestions, this.props.onReset);
      setTimeout(this.setFocus);
    }
  }, {
    key: "showOrHideSuggestions",
    value: function showOrHideSuggestions(show) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var nextState = show ? {
        showSuggestions: show
      } : {
        showSuggestions: false,
        highlightedSuggestionIndex: -1
      };
      this.setState(nextState, cb);

      this._onSuggestionListChange();
    }
  }, {
    key: "setNextHighlighted",
    value: function setNextHighlighted() {
      var highlightedSuggestionIndex = this.state.highlightedSuggestionIndex;
      var suggestions = this.props.suggestions;
      var nextHighlightedSuggestionIndex = highlightedSuggestionIndex === suggestions.length - 1 ? 0 : highlightedSuggestionIndex + 1;
      this.setState({
        highlightedSuggestionIndex: nextHighlightedSuggestionIndex
      });

      if (nextHighlightedSuggestionIndex === 0) {
        this.suggestionList.setScrollPosStart();
        return;
      }

      this.suggestionList.setScrollPosNext();
    }
  }, {
    key: "setPreviousHighlighted",
    value: function setPreviousHighlighted() {
      var highlightedSuggestionIndex = this.state.highlightedSuggestionIndex;
      var suggestions = this.props.suggestions;
      var nextHighlightedSuggestionIndex = highlightedSuggestionIndex === 0 ? suggestions.length - 1 : highlightedSuggestionIndex - 1;
      this.setState({
        highlightedSuggestionIndex: nextHighlightedSuggestionIndex
      });

      if (nextHighlightedSuggestionIndex === suggestions.length - 1) {
        this.suggestionList.setScrollPosEnd();
        return;
      }

      this.suggestionList.setScrollPosPrevious();
    }
  }, {
    key: "setFirstHighlighted",
    value: function setFirstHighlighted() {
      this.setState({
        highlightedSuggestionIndex: 0
      });
      this.suggestionList.setScrollPosStart();
    }
  }, {
    key: "setLastHighlighted",
    value: function setLastHighlighted() {
      this.setState({
        highlightedSuggestionIndex: this.props.suggestions.length - 1
      });
      this.suggestionList.setScrollPosEnd();
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      var _this$state = this.state,
          showSuggestions = _this$state.showSuggestions,
          highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;
      var _this$props2 = this.props,
          shouldSelectHighlightedOnTab = _this$props2.shouldSelectHighlightedOnTab,
          suggestions = _this$props2.suggestions,
          onSuggestionSelect = _this$props2.onSuggestionSelect;
      var which = event.which,
          altKey = event.altKey;

      switch (which) {
        case KeyCodes.DOWN:
          if (altKey && !showSuggestions) {
            this.showOrHideSuggestions(true);
            break;
          }

          if (showSuggestions) {
            this.setNextHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.UP:
          if (altKey && showSuggestions) {
            this.showOrHideSuggestions(false);
            break;
          }

          if (showSuggestions) {
            this.setPreviousHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.ESC:
          this.onInputReset();
          break;

        case KeyCodes.HOME:
          if (showSuggestions && suggestions.length !== 0) {
            this.setFirstHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.END:
          if (showSuggestions && suggestions.length !== 0) {
            this.setLastHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.ENTER:
          if (showSuggestions) {
            event.preventDefault();
          }

          onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
          break;

        case KeyCodes.TAB:
          if (showSuggestions && shouldSelectHighlightedOnTab) {
            onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
          }

      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          value = _this$props3.value,
          placeholder = _this$props3.placeholder,
          suggestionsHeightMax = _this$props3.suggestionsHeightMax,
          ariaInvalid = _this$props3.ariaInvalid,
          id = _this$props3.id,
          name = _this$props3.name,
          suggestions = _this$props3.suggestions,
          onSuggestionSelect = _this$props3.onSuggestionSelect,
          readOnly = _this$props3.readOnly,
          locale = _this$props3.locale,
          highCapacity = _this$props3.highCapacity;
      var _this$state2 = this.state,
          showSuggestions = _this$state2.showSuggestions,
          highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex,
          suggestionListId = _this$state2.suggestionListId;
      return /*#__PURE__*/react.createElement("div", {
        className: "ffe-base-selector ffe-input-group ffe-input-group--no-extra-margin"
      }, /*#__PURE__*/react.createElement(InputField$1, {
        inputFieldRef: function inputFieldRef(input) {
          _this4.input = input;
        },
        value: value,
        onChange: this.onInputChange,
        onReset: this.onInputReset,
        onKeyDown: this.onInputKeyDown,
        isSuggestionsShowing: showSuggestions,
        placeholder: placeholder,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onClick: this.onClick,
        highlightedIndex: highlightedSuggestionIndex,
        suggestionListId: suggestionListId,
        ariaInvalid: ariaInvalid,
        id: id,
        name: name,
        readOnly: readOnly,
        locale: locale
      }), showSuggestions && !highCapacity && /*#__PURE__*/react.createElement(SuggestionListContainer$2, _extends$1({}, this.props, {
        ref: function ref(suggestionList) {
          _this4.suggestionList = suggestionList;
        },
        highlightedIndex: highlightedSuggestionIndex,
        suggestions: suggestions,
        heightMax: suggestionsHeightMax,
        onSelect: onSuggestionSelect,
        id: suggestionListId
      })), showSuggestions && highCapacity && /*#__PURE__*/react.createElement(SuggestionListContainerHighCapacity, _extends$1({}, this.props, {
        ref: function ref(suggestionList) {
          _this4.suggestionList = suggestionList;
        },
        highlightedIndex: highlightedSuggestionIndex,
        suggestions: suggestions,
        heightMax: suggestionsHeightMax,
        onSelect: onSuggestionSelect,
        id: suggestionListId
      })));
    }
  }]);

  return BaseSelector;
}(react.Component);

BaseSelector.propTypes = {
  suggestions: propTypes.arrayOf(propTypes.object).isRequired,
  suggestionFilter: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  locale: Locale.isRequired,
  shouldHideSuggestionsOnSelect: propTypes.bool.isRequired,
  shouldSelectHighlightedOnTab: propTypes.bool.isRequired,
  shouldHideSuggestionsOnBlur: propTypes.bool.isRequired,
  shouldHideSuggestionsOnReset: propTypes.bool.isRequired,
  shouldShowSuggestionsOnFocus: propTypes.bool,
  onSuggestionSelect: propTypes.func.isRequired,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onClick: propTypes.func,
  onReset: propTypes.func,
  onFocus: propTypes.func,
  onSuggestionListChange: propTypes.func,
  //provides the height of the suggestion list
  placeholder: propTypes.string,
  ariaInvalid: propTypes.bool,
  suggestionsHeightMax: propTypes.number,
  id: propTypes.string,
  name: propTypes.string,
  readOnly: propTypes.bool,
  highCapacity: propTypes.bool
};
BaseSelector.defaultProps = {
  onChange: Function.prototype,
  onBlur: Function.prototype,
  onClick: Function.prototype,
  onFocus: Function.prototype,
  onReset: Function.prototype,
  onSuggestionListChange: Function.prototype,
  ariaInvalid: false,
  placeholder: '',
  value: '',
  shouldShowSuggestionsOnFocus: true,
  highCapacity: false
};
var BaseSelector$1 = BaseSelector;

var COMMON_SEPARATORS = new RegExp(/[\s.]/g);
function accountFilter() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var nameQuery = query.toLowerCase();
  var accountNumberQuery = query.replace(COMMON_SEPARATORS, '');
  return function (account) {
    if (account.name.toLowerCase().includes(nameQuery)) {
      return true;
    } else if (String(account.accountNumber).replace(COMMON_SEPARATORS, '').includes(accountNumberQuery)) {
      return true;
    }

    return false;
  };
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var allAccountsElement = {
  id: 'all-accounts',
  accountNumber: ''
};

var renderSelectAll = function renderSelectAll(allSelected, locale) {
  return /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-suggestion__account--multi ffe-account-suggestion__select-all"
  }, /*#__PURE__*/react.createElement(Checkbox, {
    checked: allSelected,
    name: "ffe-account-suggestion__select-all-label",
    inline: false,
    tabIndex: -1,
    disabled: true
  }), /*#__PURE__*/react.createElement("div", {
    className: "ffe-account-suggestion__content-wrapper"
  }, /*#__PURE__*/react.createElement("span", {
    className: "ffe-account-suggestion__name ffe-link-text ffe-link-text--no-underline"
  }, txt[locale].SELECT_ALL)));
};

var AccountSelectorMulti = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountSelectorMulti, _React$Component);

  var _super = _createSuper(AccountSelectorMulti);

  function AccountSelectorMulti(props) {
    var _this;

    _classCallCheck(this, AccountSelectorMulti);

    _this = _super.call(this, props);
    reactAutoBind_1(_assertThisInitialized(_this));
    _this.state = {
      suggestionListHeight: 0
    };
    return _this;
  }

  _createClass(AccountSelectorMulti, [{
    key: "filterSuggestions",
    value: function filterSuggestions(value) {
      var _this$props = this.props,
          accounts = _this$props.accounts,
          showSelectAllOption = _this$props.showSelectAllOption;

      if (showSelectAllOption && !value) {
        return [allAccountsElement].concat(_toConsumableArray(accounts.filter(accountFilter(value))));
      }

      return accounts.filter(accountFilter(value));
    }
  }, {
    key: "onSuggestionSelect",
    value: function onSuggestionSelect(suggestion) {
      var _this$props2 = this.props,
          onAccountSelected = _this$props2.onAccountSelected,
          selectedAccounts = _this$props2.selectedAccounts,
          accounts = _this$props2.accounts;

      if (suggestion) {
        if (suggestion.id === allAccountsElement.id) {
          var allSelected = selectedAccounts.length === accounts.length;
          this.props.onSelectAll(!allSelected);
          return;
        }

        onAccountSelected(suggestion);
      }
    }
  }, {
    key: "renderSuggestion",
    value: function renderSuggestion(account) {
      var _this$props3 = this.props,
          locale = _this$props3.locale,
          selectedAccounts = _this$props3.selectedAccounts,
          accounts = _this$props3.accounts;
      var isSelected = selectedAccounts.filter(function (a) {
        return a.accountNumber === account.accountNumber;
      });

      if (account.id !== allAccountsElement.id) {
        return /*#__PURE__*/react.createElement(AccountSuggestionMulti, {
          account: account,
          locale: locale,
          selected: isSelected.length > 0
        });
      }

      return renderSelectAll(selectedAccounts.length === accounts.length, locale);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      if (!this.shouldShowSuggestions) {
        this.props.onBlur();
      }

      this.baseRef.showOrHideSuggestions(this.shouldShowSuggestions);
      this.shouldShowSuggestions = false;
    }
  }, {
    key: "onDone",
    value: function onDone() {
      this.baseRef.showOrHideSuggestions(false);
      this.props.onBlur();
    }
  }, {
    key: "renderSuggestionDetails",
    value: function renderSuggestionDetails(listHeight) {
      if (this.baseRef) {
        var statusText;
        var _this$props4 = this.props,
            selectedAccounts = _this$props4.selectedAccounts,
            isLoading = _this$props4.isLoading;

        if (selectedAccounts.length === 0) {
          statusText = txt[this.props.locale].NO_ACCOUNTS_SELECTED;
        } else if (selectedAccounts.length === 1) {
          statusText = txt[this.props.locale].ONE_ACCOUNT_SELECTED;
        } else {
          statusText = "".concat(selectedAccounts.length, " ").concat(txt[this.props.locale].MULTIPLE_ACCOUNTS_SELECTED);
        }

        var height = listHeight + this.baseRef.getInputHeight();
        return !isLoading && /*#__PURE__*/react.createElement(SuggestionListStatusBar, {
          renderSelectionStatus: function renderSelectionStatus() {
            return statusText;
          },
          onDone: this.onDone,
          labelDoneButton: txt[this.props.locale].DROPDOWN_MULTISELECT_DONE,
          style: {
            position: 'absolute',
            zIndex: 100,
            top: height
          }
        });
      }

      return null;
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.which === KeyCodes.TAB) {
        this.shouldShowSuggestions = !event.shiftKey;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          noMatches = _this$props5.noMatches,
          onAccountSelected = _this$props5.onAccountSelected,
          locale = _this$props5.locale,
          value = _this$props5.value,
          highCapacity = _this$props5.highCapacity;
      return /*#__PURE__*/react.createElement("div", {
        className: "ffe-account-selector",
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/react.createElement(BaseSelector$1, _extends({
        renderSuggestion: function renderSuggestion(account) {
          return _this2.renderSuggestion(account);
        },
        renderNoMatches: function renderNoMatches() {
          return /*#__PURE__*/react.createElement(AccountNoMatch$1, {
            value: noMatches,
            locale: locale
          });
        },
        suggestionDetails: this.renderSuggestionDetails(),
        shouldHideSuggestionsOnSelect: false,
        shouldSelectHighlightedOnTab: false,
        shouldHideSuggestionsOnBlur: false,
        shouldHideSuggestionsOnReset: true,
        onSuggestionSelect: this.onSuggestionSelect,
        suggestionFilter: accountFilter,
        onSelect: onAccountSelected,
        locale: locale,
        onSuggestionListChange: function onSuggestionListChange(height) {
          _this2.setState({
            suggestionListHeight: height
          });
        },
        suggestions: this.filterSuggestions(value),
        ref: function ref(element) {
          _this2.baseRef = element;
        }
      }, this.props, {
        onBlur: function onBlur(e) {
          return _this2.onBlur(e);
        },
        highCapacity: highCapacity
      })), this.state.suggestionListHeight > 0 && this.renderSuggestionDetails(this.state.suggestionListHeight));
    }
  }]);

  return AccountSelectorMulti;
}(react.Component);

AccountSelectorMulti.defaultProps = {
  onSelectAll: function onSelectAll() {},
  selectedAccounts: [],
  showSelectAllOption: false,
  isLoading: false
};
AccountSelectorMulti.propTypes = {
  /**
   * Array of objects:
   *  {
   *      accountNumber: string.isRequired,
   *      balance: number,
   *      currencyCode: string.
   *      name: string.isRequired,
   *  }
   */
  accounts: propTypes.arrayOf(Account),
  id: propTypes.string.isRequired,
  isLoading: propTypes.bool,

  /** 'nb', 'nn', or 'en' */
  locale: Locale.isRequired,

  /** Overrides default string for all locales. */
  noMatches: propTypes.string,

  /** Called when an account is clicked */
  onAccountSelected: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  onSelectAll: propTypes.func,

  /**
   * Array of objects:
   *  {
   *      accountNumber: string.isRequired,
   *      balance: number,
   *      currencyCode: string.
   *      name: string.isRequired,
   *  }
   */
  selectedAccounts: propTypes.arrayOf(Account),
  showSelectAllOption: propTypes.bool,
  value: propTypes.string,

  /**
   * For situations where AccountSelector might be populated with hundreds of accounts
   * uses react-window for performance optimization, default false
   */
  highCapacity: propTypes.bool
};
var AccountSelectorMulti$1 = AccountSelectorMulti;

export { AccountSelector$1 as AccountSelector, AccountSelectorMulti$1 as AccountSelectorMulti };
