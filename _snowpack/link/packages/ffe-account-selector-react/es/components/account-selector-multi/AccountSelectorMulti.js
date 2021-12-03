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

/* eslint jsx-a11y/no-static-element-interactions:0 */
import React from '../../../../../../pkg/react.js';
import { func, string, arrayOf, bool } from '../../../../../../pkg/prop-types.js';
import autoBind from '../../../../../../pkg/react-auto-bind.js';
import { Checkbox } from '../../../../ffe-form-react/es/index.js';
import BaseSelector from '../base-selector/index.js';
import { AccountNoMatch, AccountSuggestionMulti, SuggestionListStatusBar } from '../../subcomponents/account-selector-multi/index.js';
import { Account, Locale, KeyCodes } from '../../util/types.js';
import { accountFilter } from '../../filter/filters.js';
import txt from '../../i18n/i18n.js';
var allAccountsElement = {
  id: 'all-accounts',
  accountNumber: ''
};

var renderSelectAll = function renderSelectAll(allSelected, locale) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-suggestion-multi ffe-account-suggestion-multi__select-all"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: allSelected,
    name: "ffe-account-suggestion-multi__select-all-label",
    inline: false,
    tabIndex: -1,
    disabled: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-suggestion-multi__content-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ffe-account-suggestion-multi__name"
  }, txt[locale].SELECT_ALL)));
};

var AccountSelectorMulti = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountSelectorMulti, _React$Component);

  var _super = _createSuper(AccountSelectorMulti);

  function AccountSelectorMulti(props) {
    var _this;

    _classCallCheck(this, AccountSelectorMulti);

    _this = _super.call(this, props);
    autoBind(_assertThisInitialized(_this));
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
        return /*#__PURE__*/React.createElement(AccountSuggestionMulti, {
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
        return !isLoading && /*#__PURE__*/React.createElement(SuggestionListStatusBar, {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "ffe-account-selector-multi",
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/React.createElement(BaseSelector, _extends({
        renderSuggestion: function renderSuggestion(account) {
          return _this2.renderSuggestion(account);
        },
        renderNoMatches: function renderNoMatches() {
          return /*#__PURE__*/React.createElement(AccountNoMatch, {
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
}(React.Component);

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
  accounts: arrayOf(Account),
  id: string.isRequired,
  isLoading: bool,

  /** 'nb', 'nn', or 'en' */
  locale: Locale.isRequired,

  /** Overrides default string for all locales. */
  noMatches: string,

  /** Called when an account is clicked */
  onAccountSelected: func.isRequired,
  onChange: func,
  onFocus: func,
  onBlur: func.isRequired,
  onSelectAll: func,

  /**
   * Array of objects:
   *  {
   *      accountNumber: string.isRequired,
   *      balance: number,
   *      currencyCode: string.
   *      name: string.isRequired,
   *  }
   */
  selectedAccounts: arrayOf(Account),
  showSelectAllOption: bool,
  value: string,

  /**
   * For situations where AccountSelector might be populated with hundreds of accounts
   * uses react-window for performance optimization, default false
   */
  highCapacity: bool
};
export default AccountSelectorMulti;