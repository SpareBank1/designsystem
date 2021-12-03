function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useState } from '../../../../../../pkg/react.js';
import { func, string, arrayOf, bool, shape, object, oneOfType } from '../../../../../../pkg/prop-types.js';
import classNames from '../../../../../../pkg/classnames.js';
import SearchableDropdown from '../../../../ffe-searchable-dropdown-react/es/index.js';
import { AccountDetails, AccountSuggestionSingle } from '../../subcomponents/account-selector-single/index.js';
import { Account, Locale } from '../../util/types.js';
import { formatIncompleteAccountNumber } from '../../util/format.js';

var getAccountsWithCustomAccounts = function getAccountsWithCustomAccounts(_ref) {
  var accounts = _ref.accounts,
      selectedAccount = _ref.selectedAccount,
      inputValue = _ref.inputValue;
  var shouldAddSelectedAccountNotFoundInList = selectedAccount && selectedAccount.name === inputValue && !accounts.find(function (account) {
    return account.accountNumber === selectedAccount.accountNumber;
  });
  return shouldAddSelectedAccountNotFoundInList ? [].concat(_toConsumableArray(accounts), [selectedAccount]) : accounts;
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

  var _useState = useState((selectedAccount === null || selectedAccount === void 0 ? void 0 : selectedAccount.name) || ''),
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
  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-selector-single-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('ffe-account-selector-single', {
      'ffe-account-selector-single--with-space-for-details': !selectedAccount && withSpaceForDetails,
      className: className
    }),
    id: "".concat(id, "-account-selector-container")
  }, /*#__PURE__*/React.createElement(SearchableDropdown, {
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
    listElementBody: listElementBody || AccountSuggestionSingle,
    ariaInvalid: ariaInvalid,
    searchMatcher: searchMatcherIgnoringAccountNumberFormatting,
    selectedItem: selectedAccount,
    highCapacity: highCapacity,
    onOpen: onOpen,
    onClose: onClose
  }), selectedAccount && /*#__PURE__*/React.createElement(AccountDetails, {
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
  accounts: arrayOf(Account).isRequired,
  className: string,
  id: string.isRequired,

  /** 'nb', 'nn', or 'en' */
  locale: Locale.isRequired,

  /** Overrides default string for all locales. */
  noMatches: shape({
    text: string.isRequired,
    dropdownList: arrayOf(object)
  }),
  labelId: string.isRequired,

  /** Returns the selected account object */
  onAccountSelected: func.isRequired,

  /**
   * Called when emptying the input field and moving focus away from the account selector
   * */
  onReset: func.isRequired,
  selectedAccount: Account,

  /** Default false. */
  showBalance: bool,

  /** Default true. */
  formatAccountNumber: bool,

  /**
   * Allows selecting the text the user writes even if it does not match anything in the accounts array.
   * Useful e.g. if you want to pay to account that is not in your recipients list.
   */
  allowCustomAccount: bool,

  /** Custom element to use for each item in the dropdown list */
  listElementBody: func,

  /** Props passed to the input field */
  inputProps: shape(),

  /** Defines if should save space for account details that is shown when an account is selected */
  withSpaceForDetails: bool,

  /** Sets aria-invalid on input field  */
  ariaInvalid: oneOfType([string, bool]).isRequired,

  /**
   * For situations where AccountSelector might be populated with hundreds of accounts,
   * uses react-window for performance optimization, default false.
   * This prop will be passed on to SearchableDropdown.
   * The account selector with highCapacity is currently not working with VoiceOver on ios.
   */
  highCapacity: bool,

  /** Prop passed to the dropdown list */
  onClose: func,

  /** Prop passed to the dropdown list */
  onOpen: func
};
export default AccountSelector;