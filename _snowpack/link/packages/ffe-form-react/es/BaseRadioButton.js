function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["aria-invalid", "children", "checked", "className", "labelProps", "selectedValue", "tooltip", "tooltipProps", "value", "innerRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React, { Component, Fragment } from '../../../../pkg/react.js';
import classNames from '../../../../pkg/classnames.js';
import { bool, node, oneOf, oneOfType, shape, string, func, object, number } from '../../../../pkg/prop-types.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';
import Tooltip from './Tooltip.js';

var BaseRadioButton = /*#__PURE__*/function (_Component) {
  _inherits(BaseRadioButton, _Component);

  var _super = _createSuper(BaseRadioButton);

  function BaseRadioButton() {
    var _this;

    _classCallCheck(this, BaseRadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "id", "base-radio-button-".concat(uuid()));

    return _this;
  }

  _createClass(BaseRadioButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaInvalid = _this$props['aria-invalid'],
          children = _this$props.children,
          checked = _this$props.checked,
          className = _this$props.className,
          labelProps = _this$props.labelProps,
          selectedValue = _this$props.selectedValue,
          tooltip = _this$props.tooltip,
          tooltipProps = _this$props.tooltipProps,
          value = _this$props.value,
          innerRef = _this$props.innerRef,
          inputProps = _objectWithoutProperties(_this$props, _excluded);

      var labelClasses = classNames({
        'ffe-radio-button--invalid': ariaInvalid === 'true'
      }, {
        'ffe-radio-button--with-tooltip': tooltip
      }, className);
      var isSelected = selectedValue !== undefined ? selectedValue === value : checked;
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("input", _extends({
        "aria-invalid": ariaInvalid,
        className: "ffe-radio-input",
        id: this.id,
        ref: innerRef,
        type: "radio",
        checked: isSelected,
        value: value
      }, inputProps)), /*#__PURE__*/React.createElement("label", _extends({
        htmlFor: this.id
      }, labelProps, {
        className: labelClasses
      }), children), tooltip && /*#__PURE__*/React.createElement(Tooltip, tooltipProps, tooltip));
    }
  }]);

  return BaseRadioButton;
}(Component);

BaseRadioButton.defaultProps = {
  labelProps: {},
  tooltipProps: {}
};
BaseRadioButton.propTypes = {
  /** Indicates whether the radio button is invalid or not */
  'aria-invalid': oneOf(['true', 'false']),

  /** Whether or not the radio button is selected */
  checked: bool,

  /** The label of the radio button */
  children: node.isRequired,

  /** Additional class names applied to the label */
  className: string,

  /** Additional props passed to the label element */
  labelProps: shape({}),

  /** The name of the radio button */
  name: string.isRequired,

  /** The selected value of the radio button set */
  selectedValue: oneOfType([bool, string, number]),

  /** Tooltip providing further detail about the choice */
  tooltip: string,

  /** Additional props passed to the Tooltip component */
  tooltipProps: shape({}),

  /** The value of the radio button */
  value: oneOfType([bool, string, number]).isRequired,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  innerRef: oneOfType([func, shape({
    current: object
  })])
};
export default BaseRadioButton;