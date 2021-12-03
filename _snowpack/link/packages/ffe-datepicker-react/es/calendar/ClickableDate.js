function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React, { Component } from '../../../../../pkg/react.js';
import { bool, func, number, object, oneOfType, shape, string } from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';

var ClickableDate = /*#__PURE__*/function (_Component) {
  _inherits(ClickableDate, _Component);

  var _super = _createSuper(ClickableDate);

  function ClickableDate() {
    _classCallCheck(this, ClickableDate);

    return _super.apply(this, arguments);
  }

  _createClass(ClickableDate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusIfNeeded();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.focusIfNeeded();
    }
  }, {
    key: "focusIfNeeded",
    value: function focusIfNeeded() {
      var _this$props = this.props,
          date = _this$props.date,
          isFocusingHeader = _this$props.isFocusingHeader,
          dateButtonRef = _this$props.dateButtonRef;

      if (date.isFocus && !isFocusingHeader) {
        dateButtonRef.current.focus();
      }
    }
  }, {
    key: "dateClassName",
    value: function dateClassName() {
      var _this$props2 = this.props,
          date = _this$props2.date,
          isFocusingHeader = _this$props2.isFocusingHeader;
      var isEnabled = date.isEnabled,
          isFocus = date.isFocus,
          isSelected = date.isSelected,
          isToday = date.isToday;
      return classNames({
        'ffe-calendar__date': true,
        'ffe-calendar__date--today': isToday,
        'ffe-calendar__date--focus': isFocus && !isFocusingHeader,
        'ffe-calendar__date--disabled': !isEnabled,
        'ffe-calendar__date--selected': isSelected,
        'ffe-calendar__date--disabled-focus': !isEnabled && isFocus
      });
    }
  }, {
    key: "tabIndex",
    value: function tabIndex() {
      return this.props.date.isFocus ? 0 : -1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          date = _this$props3.date,
          headers = _this$props3.headers,
          _onClick = _this$props3.onClick,
          language = _this$props3.language,
          dateButtonRef = _this$props3.dateButtonRef,
          month = _this$props3.month,
          year = _this$props3.year;
      var monthName = language === 'en' ? month : month.toLowerCase();
      return /*#__PURE__*/React.createElement("td", {
        className: "ffe-calendar__day",
        headers: headers,
        role: "button",
        ref: dateButtonRef,
        "aria-disabled": !date.isEnabled,
        "aria-selected": date.isSelected,
        "aria-label": "".concat(date.date, ". ").concat(monthName, " ").concat(year),
        tabIndex: this.tabIndex(),
        onClick: function onClick() {
          return _onClick(date);
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: this.dateClassName(),
        "aria-hidden": "true"
      }, date.date));
    }
  }]);

  return ClickableDate;
}(Component);

export { ClickableDate as default };
ClickableDate.propTypes = {
  date: shape({
    date: oneOfType([func, number]),
    isEnabled: bool,
    isFocus: bool,
    isSelected: bool,
    isToday: bool
  }).isRequired,
  month: string.isRequired,
  year: number.isRequired,
  headers: string.isRequired,
  onClick: func.isRequired,
  language: string.isRequired,
  dateButtonRef: object,
  isFocusingHeader: bool.isRequired
};