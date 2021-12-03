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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../../../pkg/react.js';
import { string, bool, func, oneOfType, object, shape, node } from '../../../../pkg/prop-types.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';
import classNames from '../../../../pkg/classnames.js';
import i18n from './i18n/i18n.js';
import ErrorFieldMessage from './ErrorFieldMessage.js';

var PhoneNumber = /*#__PURE__*/function (_React$Component) {
  _inherits(PhoneNumber, _React$Component);

  var _super = _createSuper(PhoneNumber);

  function PhoneNumber() {
    var _this;

    _classCallCheck(this, PhoneNumber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "numberId", uuid());

    _defineProperty(_assertThisInitialized(_this), "countryCodeId", uuid());

    _defineProperty(_assertThisInitialized(_this), "fieldMessageId", "input-".concat(uuid(), "-fieldmessage"));

    return _this;
  }

  _createClass(PhoneNumber, [{
    key: "render",
    value: function render() {
      var _fieldMessage, _fieldMessage$props;

      var _this$props = this.props,
          number = _this$props.number,
          countryCode = _this$props.countryCode,
          onCountryCodeChange = _this$props.onCountryCodeChange,
          onNumberChange = _this$props.onNumberChange,
          onCountryCodeBlur = _this$props.onCountryCodeBlur,
          onNumberBlur = _this$props.onNumberBlur,
          disabled = _this$props.disabled,
          countryCodeFieldMessage = _this$props.countryCodeFieldMessage,
          numberFieldMessage = _this$props.numberFieldMessage,
          countryCodeAndNumberFieldMessage = _this$props.countryCodeAndNumberFieldMessage,
          className = _this$props.className,
          extraMargin = _this$props.extraMargin,
          countryCodeRef = _this$props.countryCodeRef,
          numberRef = _this$props.numberRef;
      var fieldMessage;

      if (countryCodeAndNumberFieldMessage) {
        fieldMessage = countryCodeAndNumberFieldMessage;
      } else if (countryCodeFieldMessage && numberFieldMessage) {
        console.error('You should use countryCodeAndNumberFieldMessage when both countryCode and number contains an error');
      } else if (countryCodeFieldMessage) {
        fieldMessage = countryCodeFieldMessage;
      } else if (numberFieldMessage) {
        fieldMessage = numberFieldMessage;
      }

      var fieldMessageId = ((_fieldMessage = fieldMessage) === null || _fieldMessage === void 0 ? void 0 : (_fieldMessage$props = _fieldMessage.props) === null || _fieldMessage$props === void 0 ? void 0 : _fieldMessage$props.id) || this.fieldMessageId;
      var supportedLocales = ['nb', 'nn', 'en'];
      var text = i18n[supportedLocales.indexOf(this.props.locale) !== -1 ? this.props.locale : 'nb'];
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('ffe-phone-number', 'ffe-input-group', {
          'ffe-input-group--message': fieldMessage
        }, {
          'ffe-input-group--no-extra-margin': !extraMargin
        }, className)
      }, /*#__PURE__*/React.createElement("div", {
        className: "ffe-phone-number__input-group"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ffe-phone-number__country-code"
      }, /*#__PURE__*/React.createElement("label", {
        className: "ffe-form-label",
        htmlFor: this.countryCodeId
      }, text.COUNTRY_CODE), /*#__PURE__*/React.createElement("div", {
        className: "ffe-phone-number__input-group"
      }, /*#__PURE__*/React.createElement("span", {
        className: "ffe-phone-number__plus"
      }, "+"), /*#__PURE__*/React.createElement("input", {
        id: this.countryCodeId,
        className: classNames('ffe-input-field', 'ffe-phone-number__country-code-input'),
        type: "tel",
        disabled: disabled,
        value: countryCode,
        "aria-invalid": !!(countryCodeFieldMessage || countryCodeAndNumberFieldMessage),
        "aria-describedby": !!(countryCodeFieldMessage || countryCodeAndNumberFieldMessage) ? fieldMessageId : undefined,
        onChange: onCountryCodeChange,
        onBlur: onCountryCodeBlur,
        ref: countryCodeRef
      }))), /*#__PURE__*/React.createElement("div", {
        className: "ffe-phone-number__number"
      }, /*#__PURE__*/React.createElement("label", {
        className: "ffe-form-label",
        htmlFor: this.numberId
      }, text.PHONE_NUMBER), /*#__PURE__*/React.createElement("input", {
        id: this.numberId,
        type: "tel",
        className: classNames('ffe-input-field', 'ffe-phone-number__phone-input'),
        onChange: onNumberChange,
        onBlur: onNumberBlur,
        value: number,
        "aria-invalid": !!(numberFieldMessage || countryCodeAndNumberFieldMessage),
        "aria-describedby": !!(numberFieldMessage || countryCodeAndNumberFieldMessage) ? fieldMessageId : undefined,
        disabled: disabled,
        ref: numberRef
      }))), typeof fieldMessage === 'string' && /*#__PURE__*/React.createElement(ErrorFieldMessage, {
        element: "p",
        id: fieldMessageId
      }, fieldMessage), /*#__PURE__*/React.isValidElement(fieldMessage) && /*#__PURE__*/React.cloneElement(fieldMessage, {
        id: fieldMessageId
      }));
    }
  }]);

  return PhoneNumber;
}(React.Component);

export { PhoneNumber as default };

var noop = function noop() {};

PhoneNumber.propTypes = {
  number: string,
  countryCode: string,
  onCountryCodeChange: func,
  onNumberChange: func,
  onCountryCodeBlur: func,
  onNumberBlur: func,
  locale: string,
  disabled: bool,

  /** String or ErrorFieldMessage component with message */
  countryCodeFieldMessage: oneOfType([string, node]),

  /** String or ErrorFieldMessage component with message */
  numberFieldMessage: oneOfType([string, node]),

  /** String or ErrorFieldMessage component with message,
   * this should should be set when both countryCode and number is in an invalid state.
   * If both countryCodeFieldMessage and numberFieldMessage is set and not this prop,
   * the component will throw an Error.
   */
  countryCodeAndNumberFieldMessage: oneOfType([string, node]),
  className: string,

  /** Reserve space for showing `fieldMessage`s so content below don't move
   *  vertically if an errormessage shows up. Note that this will only reserve
   *  space for one line of content, so keep messages short.
   */
  extraMargin: bool,

  /** Ref-setting function, or ref created by useRef, passed to the country code input element */
  countryCodeRef: oneOfType([func, shape({
    current: object
  })]),

  /** Ref-setting function, or ref created by useRef, passed to the number input element */
  numberRef: oneOfType([func, shape({
    current: object
  })])
};
PhoneNumber.defaultProps = {
  countryCode: '47',
  locale: 'nb',
  onCountryCodeChange: noop,
  onNumberChange: noop,
  onCountryCodeBlur: noop,
  onNumberBlur: noop,
  extraMargin: true
};