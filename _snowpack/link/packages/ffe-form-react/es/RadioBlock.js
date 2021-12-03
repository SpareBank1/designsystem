function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["checked", "children", "className", "innerRef", "label", "labelClass", "name", "selectedValue", "showChildren", "value"];

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

import React, { Component } from '../../../../pkg/react.js';
import { bool, node, oneOfType, string, func, object, shape } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';

var RadioBlock = /*#__PURE__*/function (_Component) {
  _inherits(RadioBlock, _Component);

  var _super = _createSuper(RadioBlock);

  function RadioBlock() {
    var _this;

    _classCallCheck(this, RadioBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "id", "radio-block-".concat(uuid()));

    return _this;
  }

  _createClass(RadioBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          children = _this$props.children,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          name = _this$props.name,
          selectedValue = _this$props.selectedValue,
          showChildren = _this$props.showChildren,
          value = _this$props.value,
          inputProps = _objectWithoutProperties(_this$props, _excluded);

      var isSelected = checked || selectedValue === value;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('ffe-radio-block', className)
      }, /*#__PURE__*/React.createElement("input", _extends({
        checked: isSelected,
        className: "ffe-radio-input",
        id: this.id,
        ref: innerRef,
        type: "radio",
        name: name,
        value: value,
        "aria-describedby": children ? "".concat(this.id, "-described") : undefined
      }, inputProps)), /*#__PURE__*/React.createElement("div", {
        className: "ffe-radio-block__content"
      }, /*#__PURE__*/React.createElement("label", {
        className: classNames('ffe-radio-block__header', labelClass),
        htmlFor: this.id
      }, label), (isSelected || showChildren) && /*#__PURE__*/React.createElement("div", {
        className: classNames('ffe-radio-block__wrapper', {
          'ffe-radio-block__wrapper--empty': !children
        }),
        id: "".concat(this.id, "-described")
      }, children)));
    }
  }]);

  return RadioBlock;
}(Component);

RadioBlock.propTypes = {
  /** Whether or not the radio block is selected */
  checked: bool,

  /** The content rendered when choice is selected */
  children: node,

  /** Additional class names applied to the outer div */
  className: string,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  innerRef: oneOfType([func, shape({
    current: object
  })]),

  /** The always visible label of the radio block */
  label: oneOfType([node, string]).isRequired,

  /** Additional class names applied to the label element */
  labelClass: string,

  /** The name of the radio button set */
  name: string.isRequired,

  /** The selected value of the radio button set */
  selectedValue: string,

  /** Whether or not children are always visible */
  showChildren: bool,

  /** The value of the radio block */
  value: string.isRequired
};
export default RadioBlock;