function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { bool, func, oneOfType, string, shape, oneOf } from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';
import i18n from '../i18n/i18n.js';

var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input() {
    _classCallCheck(this, Input);

    return _super.apply(this, arguments);
  }

  _createClass(Input, [{
    key: "focus",
    value: function focus() {
      this._input.focus();
    }
  }, {
    key: "inputClassNames",
    value: function inputClassNames(extraClassNames) {
      return classNames('ffe-input-field ffe-dateinput__field', extraClassNames);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          ariaInvalid = _this$props.ariaInvalid,
          _this$props$inputProp = _this$props.inputProps,
          inputProps = _this$props$inputProp === void 0 ? {} : _this$props$inputProp,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onKeyDown = _this$props.onKeyDown,
          value = _this$props.value,
          _this$props$language = _this$props.language,
          language = _this$props$language === void 0 ? 'nb' : _this$props$language;
      return /*#__PURE__*/React.createElement("input", _extends({
        "aria-invalid": String(this.props['aria-invalid'] || ariaInvalid),
        maxLength: "10",
        onBlur: onBlur,
        onChange: onChange,
        onKeyDown: onKeyDown,
        ref: function ref(c) {
          _this._input = c;
        },
        "aria-placeholder": i18n[language].DATE_FORMAT,
        value: value
      }, inputProps, {
        className: this.inputClassNames(inputProps.className)
      }));
    }
  }]);

  return Input;
}(Component);

export { Input as default };
Input.propTypes = {
  'aria-invalid': string,
  ariaInvalid: oneOfType([bool, string]),
  inputProps: shape({
    className: string
  }),
  onBlur: func,
  onChange: func.isRequired,
  onKeyDown: func,
  value: string.isRequired,
  fullWidth: bool,
  language: oneOf(['nb', 'nn', 'en'])
};