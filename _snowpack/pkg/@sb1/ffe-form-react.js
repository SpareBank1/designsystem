import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import { v as v4 } from '../common/v4-a40bed11.js';
import { _ as __pika_web_default_export_for_treeshaking__ } from '../common/Collapse-27c6d4b8.js';
export { C as Checkbox } from '../common/Checkbox-9339998a.js';
import '../common/_commonjsHelpers-4f955397.js';

var _excluded$a = ["children", "className", "element", "type"];

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Internal factory component
 * @ignore
 */

var BaseFieldMessage = function BaseFieldMessage(props) {
  var children = props.children,
      className = props.className,
      Element = props.element,
      type = props.type,
      rest = _objectWithoutProperties$a(props, _excluded$a);

  return /*#__PURE__*/react.createElement(Element, _extends$d({
    className: classnames("ffe-field-".concat(type, "-message"), className)
  }, rest), children);
};

BaseFieldMessage.defaultProps = {
  element: 'div'
};
BaseFieldMessage.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  element: propTypes.string,
  type: propTypes.oneOf(['success', 'info', 'error']).isRequired
};
var BaseFieldMessage$1 = BaseFieldMessage;

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

var ErrorFieldMessage = function ErrorFieldMessage(props) {
  return /*#__PURE__*/react.createElement(BaseFieldMessage$1, _extends$c({}, props, {
    type: "error",
    role: "alert"
  }));
};

var ErrorFieldMessage$1 = ErrorFieldMessage;

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

var InfoFieldMessage = function InfoFieldMessage(props) {
  return /*#__PURE__*/react.createElement(BaseFieldMessage$1, _extends$b({}, props, {
    type: "info"
  }));
};

var InfoFieldMessage$1 = InfoFieldMessage;

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var SuccessFieldMessage = function SuccessFieldMessage(props) {
  return /*#__PURE__*/react.createElement(BaseFieldMessage$1, _extends$a({}, props, {
    type: "success"
  }));
};

var SuccessFieldMessage$1 = SuccessFieldMessage;

var _excluded$9 = ["className", "inline", "textLike", "textRightAlign"];

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Input = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
      inline = props.inline,
      textLike = props.textLike,
      textRightAlign = props.textRightAlign,
      rest = _objectWithoutProperties$9(props, _excluded$9);

  return /*#__PURE__*/react.createElement("input", _extends$9({
    className: classnames('ffe-input-field', {
      'ffe-input-field--inline': inline
    }, {
      'ffe-input-field--text-like': textLike
    }, {
      'ffe-input-field--text-right-align': textRightAlign
    }, className),
    ref: ref
  }, rest));
});
Input.propTypes = {
  className: propTypes.string,

  /** Input fields default to `display: block;`. Set this to `true` to apply the inline modifier. */
  inline: propTypes.bool,

  /** Apply the text-like modifier by setting this to `true`. */
  textLike: propTypes.bool,

  /** Make the text right aligned */
  textRightAlign: propTypes.bool
};
var Input$1 = Input;

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

var _excluded$8 = ["aria-controls", "aria-label", "children", "className", "onClick", "tabIndex"];

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

var Tooltip = /*#__PURE__*/function (_React$Component) {
  _inherits$3(Tooltip, _React$Component);

  var _super = _createSuper$3(Tooltip);

  function Tooltip(_ref) {
    var _this;

    var isOpen = _ref.isOpen;

    _classCallCheck$3(this, Tooltip);

    _this = _super.call(this);
    _this.state = {
      isOpen: !!isOpen
    };
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized$3(_this));
    _this.tooltipId = v4();
    _this.tooltipButtonId = v4();
    return _this;
  }

  _createClass$3(Tooltip, [{
    key: "onToggle",
    value: function onToggle(evt) {
      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });

      if (this.props.onClick) {
        this.props.onClick(evt);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaControls = _this$props['aria-controls'],
          ariaLabel = _this$props['aria-label'],
          children = _this$props.children,
          className = _this$props.className;
          _this$props.onClick;
          var tabIndex = _this$props.tabIndex,
          rest = _objectWithoutProperties$8(_this$props, _excluded$8);

      var isOpen = this.state.isOpen;
      return /*#__PURE__*/react.createElement("span", _extends$8({}, rest, {
        className: classnames('ffe-tooltip', {
          'ffe-tooltip--open': isOpen
        })
      }), /*#__PURE__*/react.createElement("button", {
        "aria-expanded": isOpen,
        "aria-controls": children ? this.tooltipId : ariaControls,
        "aria-label": ariaLabel,
        className: "ffe-tooltip__icon",
        onClick: this.onToggle,
        type: "button",
        tabIndex: tabIndex,
        id: this.tooltipButtonId
      }, /*#__PURE__*/react.createElement("span", {
        "aria-hidden": true
      }, "?")), children && /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__, {
        className: "ffe-tooltip__text",
        id: this.tooltipId,
        isOpen: isOpen
      }, /*#__PURE__*/react.createElement("div", {
        className: classnames('ffe-small-text', className),
        role: isOpen ? 'status' : 'none'
      }, children)));
    }
  }]);

  return Tooltip;
}(react.Component);

Tooltip.propTypes = {
  /** Provide the id of the controlled element *unless* you're sending in children */
  'aria-controls': propTypes.string,

  /** Descriptive text for the Tooltip expand icon */
  'aria-label': propTypes.string,

  /** The children are rendered in the expanded tooltip. */
  children: propTypes.node,

  /** The className is set on the root node of the expanded tooltip. */
  className: propTypes.string,
  isOpen: propTypes.bool,

  /** Optional listener for clicks on the tooltip button. Is passed the event object. */
  onClick: propTypes.func,

  /** Sets the tabIndex of the tooltip button. */
  tabIndex: propTypes.number
};
Tooltip.defaultProps = {
  'aria-label': 'Vis hjelpetekst'
};
var Tooltip$1 = Tooltip;

var _excluded$7 = ["block", "children", "className", "htmlFor"];

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(_ref) {
  var block = _ref.block,
      children = _ref.children,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      rest = _objectWithoutProperties$7(_ref, _excluded$7);

  return /*#__PURE__*/react.createElement("label", _extends$7({
    className: classnames('ffe-form-label', className, {
      'ffe-form-label--block': block
    }),
    htmlFor: htmlFor
  }, rest), children);
};

Label.propTypes = {
  /**
   * Labels default to `display: inline-block;` to have tooltips appear immediately to the right.
   * Set this to `true` if you don't use tooltips and need the label to be `display: block;`.
   */
  block: propTypes.bool,
  children: propTypes.node.isRequired,
  className: propTypes.string,
  htmlFor: propTypes.string
};
var Label$1 = Label;

var _excluded$6 = ["inputId", "children", "className", "extraMargin", "description", "label", "fieldMessage", "tooltip", "onTooltipToggle", "labelId"];

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputGroup = function InputGroup(_ref) {
  var inputId = _ref.inputId,
      children = _ref.children,
      className = _ref.className,
      _ref$extraMargin = _ref.extraMargin,
      extraMargin = _ref$extraMargin === void 0 ? true : _ref$extraMargin,
      description = _ref.description,
      label = _ref.label,
      fieldMessage = _ref.fieldMessage,
      tooltip = _ref.tooltip,
      onTooltipToggle = _ref.onTooltipToggle,
      labelId = _ref.labelId,
      rest = _objectWithoutProperties$6(_ref, _excluded$6);

  var _useState = react.useState(inputId ? inputId : "input-".concat(v4())),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var descriptionId = description ? "".concat(id, "-description") : undefined;
  var fieldMessageReturn = typeof fieldMessage === 'function' ? fieldMessage("".concat(id, "-fieldmessage")) : null;

  if (react.Children.count(children) > 1) {
    throw new Error('This element does not support more than one child. If you need more than one element inside your ' + 'InputGroup, please use the function-as-a-child pattern outlined in the documentation.');
  }

  var getFieldMessageId = function getFieldMessageId() {
    var _fieldMessage$props;

    if (fieldMessage !== null && fieldMessage !== void 0 && (_fieldMessage$props = fieldMessage.props) !== null && _fieldMessage$props !== void 0 && _fieldMessage$props.id) {
      return fieldMessage.props.id;
    } else if (typeof fieldMessage === 'string' || fieldMessageReturn) {
      return "".concat(id, "-fieldmessage");
    }
  };

  var fieldMessageId = getFieldMessageId();

  if (onTooltipToggle && typeof tooltip !== 'boolean' && typeof tooltip !== 'string') {
    throw new Error('Only use the "onTooltipToggle" prop if you\'re not sending a component of type ' + '<Tooltip /> in the "tooltip" prop. If you are, use "onClick" on that component instead');
  }

  if (tooltip && description) {
    throw new Error('Don\'t use both "tooltip" and "description" on an <InputGroup />, pick one of them');
  }

  var isInvalid = !!fieldMessage && (typeof fieldMessage === 'string' || fieldMessage.type === ErrorFieldMessage$1 || !!fieldMessageReturn);
  var hasMessage = !!fieldMessage;
  var ariaDescribedBy = "".concat(fieldMessageId || '', " ").concat(descriptionId || '').trim() || undefined;
  var extraProps = {
    id: id,
    'aria-invalid': String(isInvalid),
    'aria-describedby': ariaDescribedBy
  };
  var modifiedChildren = typeof children === 'function' ? children(extraProps) : /*#__PURE__*/react.cloneElement(children, extraProps);
  return /*#__PURE__*/react.createElement("div", _extends$6({
    className: classnames('ffe-input-group', {
      'ffe-input-group--no-extra-margin': !extraMargin
    }, {
      'ffe-input-group--message': hasMessage
    }, className)
  }, rest), typeof label === 'string' && /*#__PURE__*/react.createElement(Label$1, {
    htmlFor: id,
    id: labelId
  }, label), /*#__PURE__*/react.isValidElement(label) && /*#__PURE__*/react.cloneElement(label, {
    htmlFor: id,
    id: labelId
  }), typeof tooltip === 'string' && /*#__PURE__*/react.createElement(Tooltip$1, {
    onClick: onTooltipToggle
  }, tooltip), tooltip === true && /*#__PURE__*/react.createElement(Tooltip$1, {
    onClick: onTooltipToggle
  }), /*#__PURE__*/react.isValidElement(tooltip) && tooltip, description && /*#__PURE__*/react.createElement("div", {
    className: "ffe-small-text",
    id: descriptionId
  }, description), modifiedChildren, typeof fieldMessage === 'string' && /*#__PURE__*/react.createElement(ErrorFieldMessage$1, {
    element: "p",
    id: fieldMessageId
  }, fieldMessage), /*#__PURE__*/react.isValidElement(fieldMessage) && /*#__PURE__*/react.cloneElement(fieldMessage, {
    id: fieldMessageId
  }), fieldMessageReturn);
};

InputGroup.propTypes = {
  /** The id that will be used on the input child if you don't want a generated one */
  inputId: propTypes.string,

  /** The id used on the label in this component. Could be necessary if your component needs a aria-labelledby. */
  labelId: propTypes.string,

  /** Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. */
  children: propTypes.oneOfType([propTypes.func, propTypes.node]).isRequired,
  className: propTypes.string,

  /** Reserve space for showing `fieldMessage`s so content below don't move
   *  vertically if an errormessage shows up. Note that this will only reserve
   *  space for one line of content, so keep messages short.
   */
  extraMargin: propTypes.bool,

  /** Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered. */
  fieldMessage: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),

  /** To just render a static, always visible tooltip, use this. */
  description: propTypes.string,

  /** Use the Label component if you need more flexibility in how the content is rendered. */
  label: propTypes.oneOfType([propTypes.node, propTypes.string]),
  onTooltipToggle: propTypes.func,

  /** Use the Tooltip component if you need more flexibility in how the content is rendered. */
  tooltip: propTypes.oneOfType([propTypes.bool, propTypes.node])
};
var InputGroup$1 = InputGroup;

var en = {
  COUNTRY_CODE: 'Country code',
  PHONE_NUMBER: 'Phone number'
};

var nn = {
  COUNTRY_CODE: 'Landskode',
  PHONE_NUMBER: 'Telefonnummer'
};

var nb = {
  COUNTRY_CODE: 'Landskode',
  PHONE_NUMBER: 'Telefonnummer'
};

var i18n = {
  nb: nb,
  nn: nn,
  en: en
};

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

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

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PhoneNumber = /*#__PURE__*/function (_React$Component) {
  _inherits$2(PhoneNumber, _React$Component);

  var _super = _createSuper$2(PhoneNumber);

  function PhoneNumber() {
    var _this;

    _classCallCheck$2(this, PhoneNumber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$3(_assertThisInitialized$2(_this), "numberId", v4());

    _defineProperty$3(_assertThisInitialized$2(_this), "countryCodeId", v4());

    _defineProperty$3(_assertThisInitialized$2(_this), "fieldMessageId", "input-".concat(v4(), "-fieldmessage"));

    return _this;
  }

  _createClass$2(PhoneNumber, [{
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
      return /*#__PURE__*/react.createElement("div", {
        className: classnames('ffe-phone-number', 'ffe-input-group', {
          'ffe-input-group--message': fieldMessage
        }, {
          'ffe-input-group--no-extra-margin': !extraMargin
        }, className)
      }, /*#__PURE__*/react.createElement("div", {
        className: "ffe-phone-number__input-group"
      }, /*#__PURE__*/react.createElement("div", {
        className: "ffe-phone-number__country-code"
      }, /*#__PURE__*/react.createElement("label", {
        className: "ffe-form-label",
        htmlFor: this.countryCodeId
      }, text.COUNTRY_CODE), /*#__PURE__*/react.createElement("div", {
        className: "ffe-phone-number__input-group"
      }, /*#__PURE__*/react.createElement("span", {
        className: "ffe-phone-number__plus"
      }, "+"), /*#__PURE__*/react.createElement("input", {
        id: this.countryCodeId,
        className: classnames('ffe-input-field', 'ffe-phone-number__country-code-input'),
        type: "tel",
        disabled: disabled,
        value: countryCode,
        "aria-invalid": !!(countryCodeFieldMessage || countryCodeAndNumberFieldMessage),
        "aria-describedby": !!(countryCodeFieldMessage || countryCodeAndNumberFieldMessage) ? fieldMessageId : undefined,
        onChange: onCountryCodeChange,
        onBlur: onCountryCodeBlur,
        ref: countryCodeRef
      }))), /*#__PURE__*/react.createElement("div", {
        className: "ffe-phone-number__number"
      }, /*#__PURE__*/react.createElement("label", {
        className: "ffe-form-label",
        htmlFor: this.numberId
      }, text.PHONE_NUMBER), /*#__PURE__*/react.createElement("input", {
        id: this.numberId,
        type: "tel",
        className: classnames('ffe-input-field', 'ffe-phone-number__phone-input'),
        onChange: onNumberChange,
        onBlur: onNumberBlur,
        value: number,
        "aria-invalid": !!(numberFieldMessage || countryCodeAndNumberFieldMessage),
        "aria-describedby": !!(numberFieldMessage || countryCodeAndNumberFieldMessage) ? fieldMessageId : undefined,
        disabled: disabled,
        ref: numberRef
      }))), typeof fieldMessage === 'string' && /*#__PURE__*/react.createElement(ErrorFieldMessage$1, {
        element: "p",
        id: fieldMessageId
      }, fieldMessage), /*#__PURE__*/react.isValidElement(fieldMessage) && /*#__PURE__*/react.cloneElement(fieldMessage, {
        id: fieldMessageId
      }));
    }
  }]);

  return PhoneNumber;
}(react.Component);

var noop = function noop() {};

PhoneNumber.propTypes = {
  number: propTypes.string,
  countryCode: propTypes.string,
  onCountryCodeChange: propTypes.func,
  onNumberChange: propTypes.func,
  onCountryCodeBlur: propTypes.func,
  onNumberBlur: propTypes.func,
  locale: propTypes.string,
  disabled: propTypes.bool,

  /** String or ErrorFieldMessage component with message */
  countryCodeFieldMessage: propTypes.oneOfType([propTypes.string, propTypes.node]),

  /** String or ErrorFieldMessage component with message */
  numberFieldMessage: propTypes.oneOfType([propTypes.string, propTypes.node]),

  /** String or ErrorFieldMessage component with message,
   * this should should be set when both countryCode and number is in an invalid state.
   * If both countryCodeFieldMessage and numberFieldMessage is set and not this prop,
   * the component will throw an Error.
   */
  countryCodeAndNumberFieldMessage: propTypes.oneOfType([propTypes.string, propTypes.node]),
  className: propTypes.string,

  /** Reserve space for showing `fieldMessage`s so content below don't move
   *  vertically if an errormessage shows up. Note that this will only reserve
   *  space for one line of content, so keep messages short.
   */
  extraMargin: propTypes.bool,

  /** Ref-setting function, or ref created by useRef, passed to the country code input element */
  countryCodeRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** Ref-setting function, or ref created by useRef, passed to the number input element */
  numberRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
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

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

var _excluded$5 = ["checked", "children", "className", "innerRef", "label", "labelClass", "name", "selectedValue", "showChildren", "value"];

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioBlock = /*#__PURE__*/function (_Component) {
  _inherits$1(RadioBlock, _Component);

  var _super = _createSuper$1(RadioBlock);

  function RadioBlock() {
    var _this;

    _classCallCheck$1(this, RadioBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$2(_assertThisInitialized$1(_this), "id", "radio-block-".concat(v4()));

    return _this;
  }

  _createClass$1(RadioBlock, [{
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
          inputProps = _objectWithoutProperties$5(_this$props, _excluded$5);

      var isSelected = checked || selectedValue === value;
      return /*#__PURE__*/react.createElement("div", {
        className: classnames('ffe-radio-block', className)
      }, /*#__PURE__*/react.createElement("input", _extends$5({
        checked: isSelected,
        className: "ffe-radio-input",
        id: this.id,
        ref: innerRef,
        type: "radio",
        name: name,
        value: value,
        "aria-describedby": children ? "".concat(this.id, "-described") : undefined
      }, inputProps)), /*#__PURE__*/react.createElement("div", {
        className: "ffe-radio-block__content"
      }, /*#__PURE__*/react.createElement("label", {
        className: classnames('ffe-radio-block__header', labelClass),
        htmlFor: this.id
      }, label), (isSelected || showChildren) && /*#__PURE__*/react.createElement("div", {
        className: classnames('ffe-radio-block__wrapper', {
          'ffe-radio-block__wrapper--empty': !children
        }),
        id: "".concat(this.id, "-described")
      }, children)));
    }
  }]);

  return RadioBlock;
}(react.Component);

RadioBlock.propTypes = {
  /** Whether or not the radio block is selected */
  checked: propTypes.bool,

  /** The content rendered when choice is selected */
  children: propTypes.node,

  /** Additional class names applied to the outer div */
  className: propTypes.string,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** The always visible label of the radio block */
  label: propTypes.oneOfType([propTypes.node, propTypes.string]).isRequired,

  /** Additional class names applied to the label element */
  labelClass: propTypes.string,

  /** The name of the radio button set */
  name: propTypes.string.isRequired,

  /** The selected value of the radio button set */
  selectedValue: propTypes.string,

  /** Whether or not children are always visible */
  showChildren: propTypes.bool,

  /** The value of the radio block */
  value: propTypes.string.isRequired
};
var RadioBlock$1 = RadioBlock;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded$4 = ["aria-invalid", "children", "checked", "className", "labelProps", "selectedValue", "tooltip", "tooltipProps", "value", "innerRef"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty$1(_assertThisInitialized(_this), "id", "base-radio-button-".concat(v4()));

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
          inputProps = _objectWithoutProperties$4(_this$props, _excluded$4);

      var labelClasses = classnames({
        'ffe-radio-button--invalid': ariaInvalid === 'true'
      }, {
        'ffe-radio-button--with-tooltip': tooltip
      }, className);
      var isSelected = selectedValue !== undefined ? selectedValue === value : checked;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", _extends$4({
        "aria-invalid": ariaInvalid,
        className: "ffe-radio-input",
        id: this.id,
        ref: innerRef,
        type: "radio",
        checked: isSelected,
        value: value
      }, inputProps)), /*#__PURE__*/react.createElement("label", _extends$4({
        htmlFor: this.id
      }, labelProps, {
        className: labelClasses
      }), children), tooltip && /*#__PURE__*/react.createElement(Tooltip$1, tooltipProps, tooltip));
    }
  }]);

  return BaseRadioButton;
}(react.Component);

BaseRadioButton.defaultProps = {
  labelProps: {},
  tooltipProps: {}
};
BaseRadioButton.propTypes = {
  /** Indicates whether the radio button is invalid or not */
  'aria-invalid': propTypes.oneOf(['true', 'false']),

  /** Whether or not the radio button is selected */
  checked: propTypes.bool,

  /** The label of the radio button */
  children: propTypes.node.isRequired,

  /** Additional class names applied to the label */
  className: propTypes.string,

  /** Additional props passed to the label element */
  labelProps: propTypes.shape({}),

  /** The name of the radio button */
  name: propTypes.string.isRequired,

  /** The selected value of the radio button set */
  selectedValue: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.number]),

  /** Tooltip providing further detail about the choice */
  tooltip: propTypes.string,

  /** Additional props passed to the Tooltip component */
  tooltipProps: propTypes.shape({}),

  /** The value of the radio button */
  value: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.number]).isRequired,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })])
};
var BaseRadioButton$1 = BaseRadioButton;

var _excluded$3 = ["className", "inline"];

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioButton = function RadioButton(props) {
  var className = props.className,
      inline = props.inline,
      rest = _objectWithoutProperties$3(props, _excluded$3);

  return /*#__PURE__*/react.createElement(BaseRadioButton$1, _extends$3({
    className: classnames('ffe-radio-button', {
      'ffe-radio-button--inline': inline
    }, className)
  }, rest));
};

RadioButton.propTypes = {
  /** Additional class names applied to the label */
  className: propTypes.string,

  /** Indicates whether the radio button is rendered inline or as a block */
  inline: propTypes.bool
};
var RadioButton$1 = RadioButton;

var _excluded$2 = ["aria-invalid", "children", "className", "extraMargin", "description", "fieldMessage", "inline", "label", "name", "selectedValue", "tooltip"];

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioButtonInputGroup = function RadioButtonInputGroup(props) {
  var ariaInvalid = props['aria-invalid'],
      children = props.children,
      className = props.className,
      extraMargin = props.extraMargin,
      description = props.description,
      fieldMessage = props.fieldMessage,
      inline = props.inline,
      label = props.label,
      name = props.name,
      selectedValue = props.selectedValue,
      tooltip = props.tooltip,
      rest = _objectWithoutProperties$2(props, _excluded$2);

  if (tooltip && description) {
    throw new Error('Don\'t use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them');
  }

  var buttonProps = {
    'aria-invalid': ariaInvalid || String(!!fieldMessage),
    inline: inline,
    name: name,
    onChange:
    /* istanbul ignore next */
    function onChange(f) {
      return f;
    },
    selectedValue: selectedValue
  };
  return /*#__PURE__*/react.createElement("fieldset", _extends$2({
    className: classnames('ffe-fieldset', 'ffe-input-group', {
      'ffe-fieldset--no-extra-margin': !extraMargin
    }, {
      'ffe-fieldset--error': !!fieldMessage
    }, className)
  }, rest), label && /*#__PURE__*/react.createElement("legend", {
    className: classnames('ffe-form-label', 'ffe-form-label--block')
  }, label, typeof tooltip === 'string' && /*#__PURE__*/react.createElement(Tooltip$1, null, tooltip), /*#__PURE__*/react.isValidElement(tooltip) && tooltip), typeof description === 'string' && /*#__PURE__*/react.createElement("div", {
    className: "ffe-small-text"
  }, description), /*#__PURE__*/react.isValidElement(description) && description, children(_objectSpread({}, buttonProps)), typeof fieldMessage === 'string' && /*#__PURE__*/react.createElement(ErrorFieldMessage$1, {
    element: "p"
  }, fieldMessage), /*#__PURE__*/react.isValidElement(fieldMessage) && fieldMessage);
};

RadioButtonInputGroup.propTypes = {
  /**
   * Indicates whether the radio buttons inside this radio button group is
   * invalid or not. Propagated to all children.
   * */
  'aria-invalid': propTypes.oneOf(['true', 'false']),

  /**
   * Function receiving props relevant to each radio button as an object
   * argument. Expected to return a set of radio buttons, which should get
   * these properties applied to them.
   * */
  children: propTypes.func.isRequired,

  /** Additional class names applied to the fieldset */
  className: propTypes.string,

  /** To just render a static, always visible tooltip, use this. */
  description: propTypes.oneOfType([propTypes.node, propTypes.string]),

  /** Reserve space for showing `fieldMessage`s so content below don't move
   *  vertically if an errormessage shows up. Note that this will only reserve
   *  space for one line of content, so keep messages short.
   */
  extraMargin: propTypes.bool,

  /** String or ErrorFieldMessage component with message */
  fieldMessage: propTypes.oneOfType([propTypes.node, propTypes.string]),

  /**
   * Indicates whether the radio buttons inside this radio button group is
   * rendered inline or as a block.
   * */
  inline: propTypes.bool,

  /**
   * The text describing the radio button set. Note that if you don't use this
   * prop but provide your own label you should make sure your solution passes
   * acessibility validation using a tool such as aXe DevTools.
   */
  label: propTypes.oneOfType([propTypes.node, propTypes.string]),

  /** The name of the radio button, required to avoid missing name */
  name: propTypes.string.isRequired,

  /** Change handler, receives value of selected radio button */
  onChange: propTypes.func,

  /** The currently selected value */
  selectedValue: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.number]),

  /**
   * String or Tooltip component with further detail about the radio button
   * set
   * */
  tooltip: propTypes.oneOfType([propTypes.node, propTypes.string])
};
RadioButtonInputGroup.defaultProps = {
  extraMargin: true
};
var RadioButtonInputGroup$1 = RadioButtonInputGroup;

var _excluded$1 = ["className", "leftLabel", "leftValue", "leftInnerRef", "rightLabel", "rightValue", "rightInnerRef", "condensed", "aria-invalid"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioSwitch = function RadioSwitch(props) {
  var className = props.className,
      leftLabel = props.leftLabel,
      leftValue = props.leftValue,
      leftInnerRef = props.leftInnerRef,
      rightLabel = props.rightLabel,
      rightValue = props.rightValue,
      rightInnerRef = props.rightInnerRef,
      condensed = props.condensed,
      ariaInvalid = props['aria-invalid'],
      rest = _objectWithoutProperties$1(props, _excluded$1);

  var noneSelected = [null, undefined, ''].includes(props.selectedValue);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BaseRadioButton$1, _extends$1({
    className: classnames('ffe-radio-switch', className, {
      'ffe-radio-switch--condensed': condensed
    }),
    value: leftValue,
    innerRef: leftInnerRef,
    "aria-invalid": String(ariaInvalid === 'true' && (props.selectedValue === leftValue || noneSelected))
  }, rest), leftLabel), /*#__PURE__*/react.createElement(BaseRadioButton$1, _extends$1({
    className: classnames('ffe-radio-switch', className, {
      'ffe-radio-switch--condensed': condensed
    }),
    value: rightValue,
    innerRef: rightInnerRef,
    "aria-invalid": String(ariaInvalid === 'true' && (props.selectedValue === rightValue || noneSelected))
  }, rest), rightLabel));
};

RadioSwitch.propTypes = {
  /** Additional class names applied to both radio buttons */
  className: propTypes.string,

  /** The label of the choice to the left */
  leftLabel: propTypes.string.isRequired,

  /** The value of the choice to the left */
  leftValue: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.number]).isRequired,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  leftInnerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** The label of the choice to the right */
  rightLabel: propTypes.string.isRequired,

  /** The value of the choice to the right */
  rightValue: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.number]).isRequired,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  rightInnerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** The selected value of the radio button set */
  selectedValue: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.number]),

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool,

  /**
   * Indicates whether the radio buttons inside this radio button group is
   * invalid or not. Propagated to all children.
   * */
  'aria-invalid': propTypes.oneOf(['true', 'false'])
};
var RadioSwitch$1 = RadioSwitch;

var _excluded = ["className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TextArea = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement("textarea", _extends({
    className: classnames('ffe-textarea', className),
    ref: ref
  }, rest));
});
TextArea.propTypes = {
  className: propTypes.string
};
var TextArea$1 = TextArea;

export { ErrorFieldMessage$1 as ErrorFieldMessage, InfoFieldMessage$1 as InfoFieldMessage, Input$1 as Input, InputGroup$1 as InputGroup, Label$1 as Label, PhoneNumber, RadioBlock$1 as RadioBlock, RadioButton$1 as RadioButton, RadioButtonInputGroup$1 as RadioButtonInputGroup, RadioSwitch$1 as RadioSwitch, SuccessFieldMessage$1 as SuccessFieldMessage, TextArea$1 as TextArea, Tooltip$1 as Tooltip };
