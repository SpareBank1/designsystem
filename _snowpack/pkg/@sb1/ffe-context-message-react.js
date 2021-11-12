import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import { K as KryssIkon } from '../common/kryss-ikon-691c0bd1.js';
import { v as v4 } from '../common/v4-a40bed11.js';
import '../common/_commonjsHelpers-4f955397.js';

var acceptedLocales = ['nb', 'nn', 'en'];

var nb = {};
var nn = {};
var en = {};
nb.FFE_CONTEXT_MESSAGE_CLOSE = 'Lukk';
nn.FFE_CONTEXT_MESSAGE_CLOSE = 'Lukk';
en.FFE_CONTEXT_MESSAGE_CLOSE = 'Close';
var texts = {
  nb: nb,
  nn: nn,
  en: en
};

var _excluded$1 = ["animationLengthMs", "onClose", "icon", "headerText", "compact", "messageType", "style", "showCloseButton", "headerElement", "headerElementId", "contentElementId", "children", "className", "locale"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Base component for all four types of context messages.
 *
 * *Should never be used directly!*
 * Please use one of the four versions exported from this package.
 */

var ContextMessage = function ContextMessage(_ref) {
  var animationLengthMs = _ref.animationLengthMs,
      onClose = _ref.onClose,
      icon = _ref.icon,
      headerText = _ref.headerText,
      compact = _ref.compact,
      messageType = _ref.messageType,
      style = _ref.style,
      showCloseButton = _ref.showCloseButton,
      headerElement = _ref.headerElement,
      headerElementId = _ref.headerElementId,
      contentElementId = _ref.contentElementId,
      children = _ref.children,
      className = _ref.className,
      locale = _ref.locale,
      rest = _objectWithoutProperties$1(_ref, _excluded$1);

  var _useState = react.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isClosed = _useState2[0],
      setIsClosed = _useState2[1];

  var container = react.useRef(null);

  var _headerElementId = react.useRef(headerElementId || v4());

  var _contentElementId = react.useRef(contentElementId || v4());

  var handleClose = function handleClose(event) {
    container.current.style.height = "".concat(container.current.offsetHeight, "px");
    setTimeout(function () {
      container.current.style.height = 0;
    }, 0);
    setTimeout(function () {
      setIsClosed(true);
      onClose(event);
    }, animationLengthMs);
    return false;
  };

  if (isClosed) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", _extends$4({
    ref: container,
    "aria-describedby": _contentElementId.current,
    "aria-labelledby": headerText && _headerElementId.current,
    className: classnames('ffe-context-message', "ffe-context-message--".concat(messageType), {
      'ffe-context-message--compact': compact
    }, className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      transition: "height ".concat(animationLengthMs / 1000, "s")
    })
  }, rest), /*#__PURE__*/react.createElement("div", {
    className: "ffe-context-message-content"
  }, icon && /*#__PURE__*/react.createElement("div", {
    className: "ffe-context-message-content__icon"
  }, /*#__PURE__*/react.cloneElement(icon, {
    className: classnames('ffe-context-message-content__icon-svg', icon.props.className)
  })), /*#__PURE__*/react.createElement("div", null, headerText && /*#__PURE__*/react.createElement(headerElement, {
    id: _headerElementId.current,
    className: 'ffe-context-message-content__header'
  }, headerText), /*#__PURE__*/react.createElement("div", {
    className: "ffe-body-text",
    id: _contentElementId.current
  }, children))), showCloseButton && /*#__PURE__*/react.createElement("button", {
    "aria-label": "".concat(texts[locale].FFE_CONTEXT_MESSAGE_CLOSE, " ").concat(headerText || ''),
    className: "ffe-context-message-content__close-button",
    onClick: handleClose,
    type: "button"
  }, /*#__PURE__*/react.createElement(KryssIkon, {
    className: "ffe-context-message-content__close-button-svg",
    "aria-hidden": "true"
  })));
};

var ContextMessage$1 = ContextMessage;
ContextMessage.propTypes = {
  animationLengthMs: propTypes.number,

  /** The content shown in the context box */
  children: propTypes.node.isRequired,

  /** Classes are added in addition to the relevant context message classes */
  className: propTypes.string,

  /** Renders a more compact version of the context message */
  compact: propTypes.bool,

  /** ID for the children container */
  contentElementId: propTypes.string,
  headerText: propTypes.string,

  /** ID for the header container */
  headerElementId: propTypes.string,

  /* HTML element for the header */
  headerElement: propTypes.string,
  icon: propTypes.element,

  /** Decides the language of the aria-label for the close icon */
  locale: propTypes.oneOf(acceptedLocales),

  /** Provided by the wrapper component */
  messageType: propTypes.oneOf(['info', 'tip', 'success', 'error']),

  /** Callback for when the context message has been closed (after the animation) */
  onClose: propTypes.func,
  showCloseButton: propTypes.bool,

  /** Styles applied to the outermost element. `height` will be overridden */
  style: propTypes.object
};
ContextMessage.defaultProps = {
  animationLengthMs: 300,
  compact: false,
  headerElement: 'div',
  locale: 'nb',
  onClose: function onClose() {},
  showCloseButton: false,
  style: {}
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var ContextInfoMessage = function ContextInfoMessage(props) {
  return /*#__PURE__*/react.createElement(ContextMessage$1, _extends$3({
    messageType: "info"
  }, props));
};

var ContextInfoMessage$1 = ContextInfoMessage;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var ContextTipMessage = function ContextTipMessage(props) {
  return /*#__PURE__*/react.createElement(ContextMessage$1, _extends$2({
    messageType: "tip"
  }, props));
};

var ContextTipMessage$1 = ContextTipMessage;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var ContextSuccessMessage = function ContextSuccessMessage(props) {
  return /*#__PURE__*/react.createElement(ContextMessage$1, _extends$1({
    messageType: "success"
  }, props));
};

var ContextSuccessMessage$1 = ContextSuccessMessage;

var _excluded = ["alert"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ContextErrorMessage = function ContextErrorMessage(props) {
  var alert = props.alert,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement(ContextMessage$1, _extends({
    messageType: "error",
    role: alert ? 'alert' : false
  }, rest));
};

ContextErrorMessage.propTypes = {
  animationLengthMs: propTypes.number,

  /** The content shown in the context box */
  children: propTypes.node.isRequired,

  /** Classes are added in addition to the relevant context message classes */
  className: propTypes.string,

  /** Renders a more compact version of the context message */
  compact: propTypes.bool,

  /** ID for the children container */
  contentElementId: propTypes.string,
  header: propTypes.string,

  /** ID for the header container */
  headerElementId: propTypes.string,
  icon: propTypes.element,

  /** Decides the language of the aria-label for the close icon */
  locale: propTypes.oneOf(acceptedLocales),

  /** Provided by the wrapper component */
  messageType: propTypes.oneOf(['info', 'tip', 'success', 'error']),

  /** Callback for when the context message has been closed (after the animation) */
  onClose: propTypes.func,
  showCloseButton: propTypes.bool,

  /** Styles applied to the outermost element. `height` will be overridden */
  style: propTypes.object,

  /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
  alert: propTypes.bool
};
ContextErrorMessage.defaultProps = {
  animationLengthMs: 300,
  compact: false,
  locale: 'nb',
  onClose: function onClose() {},
  showCloseButton: false,
  style: {},
  alert: true
};
var ContextErrorMessage$1 = ContextErrorMessage;

export { ContextErrorMessage$1 as ContextErrorMessage, ContextInfoMessage$1 as ContextInfoMessage, ContextSuccessMessage$1 as ContextSuccessMessage, ContextTipMessage$1 as ContextTipMessage };
