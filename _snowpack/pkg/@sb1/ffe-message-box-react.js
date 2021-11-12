import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { H as HakeIkon, U as UtropstegnIkon, I as InfoIkon } from '../common/info-ikon-9695e109.js';
import { c as classnames } from '../common/index-5100710e.js';
import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../common/_commonjsHelpers-4f955397.js';

var _excluded$1 = ["type", "title", "icon", "content", "children", "className"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var iconStyles = {
  width: '40px',
  height: '40px'
};

var BaseMessage = function BaseMessage(props) {
  var type = props.type,
      title = props.title,
      icon = props.icon,
      content = props.content,
      children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      rest = _objectWithoutProperties$1(props, _excluded$1);

  return /*#__PURE__*/react.createElement("div", _extends$4({
    className: classnames('ffe-message-box', className)
  }, rest), /*#__PURE__*/react.createElement("span", {
    className: classnames('ffe-message-box__icon', "ffe-message-box__icon--".concat(type))
  }, /*#__PURE__*/react.cloneElement(icon, _objectSpread({
    style: iconStyles
  }, icon.props))), /*#__PURE__*/react.createElement("div", {
    className: classnames('ffe-message-box__box', "ffe-message-box__box--".concat(type))
  }, title && /*#__PURE__*/react.createElement("div", {
    className: classnames('ffe-h4', "ffe-message-box__title")
  }, title), content && /*#__PURE__*/react.createElement("p", null, content), !content && children));
};

BaseMessage.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  content: propTypes.node,
  icon: propTypes.node.isRequired,
  title: propTypes.node,

  /**
   * Internal type enum for specifying the style of message box. Should not be used directly
   * @ignore
   */
  type: propTypes.oneOf(['success', 'error', 'tips', 'info']).isRequired
};
var BaseMessage$1 = BaseMessage;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SuccessMessage = function SuccessMessage(props) {
  return /*#__PURE__*/react.createElement(BaseMessage$1, _extends$3({
    type: "success",
    icon: /*#__PURE__*/react.createElement(HakeIkon, null)
  }, props));
};

SuccessMessage.propTypes = {
  /** The content of the message box */
  children: propTypes.node,

  /** Any extra class names to the wrapping DOM node */
  className: propTypes.string,

  /**
   * Deprecated. Use `children` instead.
   * @deprecated
   */
  content: propTypes.node,

  /** The icon to show. Has a default value, but can be overridden */
  icon: propTypes.node,

  /** An optional title for the message */
  title: propTypes.node
};
var SuccessMessage$1 = SuccessMessage;

var _excluded = ["alert"];

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ErrorMessage = function ErrorMessage(props) {
  var alert = props.alert,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement(BaseMessage$1, _extends$2({
    type: "error",
    icon: /*#__PURE__*/react.createElement(UtropstegnIkon, {
      "aria-hidden": "true"
    }),
    role: alert ? 'alert' : false
  }, rest));
};

ErrorMessage.defaultProps = {
  alert: true
};
ErrorMessage.propTypes = {
  /** The content of the message box */
  children: propTypes.node,

  /** Any extra class names to the wrapping DOM node */
  className: propTypes.string,

  /**
   * Deprecated. Use `children` instead.
   * @deprecated
   */
  content: propTypes.node,

  /** The icon to show. Has a default value, but can be overridden */
  icon: propTypes.node,

  /** An optional title for the message */
  title: propTypes.node,

  /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
  alert: propTypes.bool
};
var ErrorMessage$1 = ErrorMessage;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var InfoMessage = function InfoMessage(props) {
  return /*#__PURE__*/react.createElement(BaseMessage$1, _extends$1({
    type: "info",
    icon: /*#__PURE__*/react.createElement(InfoIkon, null)
  }, props));
};

InfoMessage.propTypes = {
  /** The content of the message box */
  children: propTypes.node,

  /** Any extra class names to the wrapping DOM node */
  className: propTypes.string,

  /**
   * Deprecated. Use `children` instead.
   * @deprecated
   */
  content: propTypes.node,

  /** The icon to show. Has a default value, but can be overridden */
  icon: propTypes.node,

  /** An optional title for the message */
  title: propTypes.node
};
var InfoMessage$1 = InfoMessage;

var lyspareIkon = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;


var PropTypes = propTypes;
var svg = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m100-0.0003388c-35.47,0-65.5,28.32-65.5,61.88,0,21.22,7.235,31.9,14.91,43.13,3.558,5.222,7.221,10.57,10.67,17.57,4.448,9.222,5.775,19.97,6.22,25.42v0.1389c0.4419,5.52,4.948,9.806,10.46,9.861h0.1042,46.28c5.56,0,10.23-4.306,10.56-9.861v-0.1389c0.3336-5.444,1.661-16.31,6.22-25.42,3.447-7,7.109-12.35,10.67-17.57,7.7-11.22,14.9-21.9,14.9-43.13,0-33.55-29.9-61.87-65.5-61.87zm0,13.13c28.02,0,52.47,22.75,52.47,48.75,0,17.22-5.31,25.02-12.65,35.8-3.558,5.222-7.679,11.32-11.57,19.1-5.004,10-6.804,21.24-7.471,28.13h-15.12l-0.0348-55.69,14.94-15.42c2.113-2.111,2.008-5.465-0.1042-7.465l-0.4517-0.4167c-2.113-2.111-5.435-2.007-7.436,0.1042l-12.4,12.92-12.54-12.91c-2-2.11-5.36-2.11-7.47-0.11l-0.4517,0.4167c-2.113,2-2.106,5.354-0.1042,7.465l14.87,15.35,0.03475,55.76h-15.22c-0.67-6.9-2.58-18.1-7.47-28.1-3.89-7.8-7.9-13.8-11.57-19.13-7.34-10.77-12.65-18.57-12.65-35.8,0-26,24.56-48.75,52.47-48.75zm-30.47,153.2c-3.002,0-5.316,2.458-5.316,5.347v2.431c0,3,2.425,5.347,5.316,5.347h62.16c3.002,0,5.351-2.458,5.351-5.347v-2.431c0-3-2.46-5.347-5.351-5.347h-62.16zm8.131,20.56c-3.002,0-5.351,2.458-5.351,5.347v2.431c0,3,2.46,5.347,5.351,5.347h45.9c3.002,0,5.351-2.458,5.351-5.347v-2.431c0-3-2.46-5.347-5.351-5.347h-45.9z" }));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign({}, svg.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon.displayName = 'LyspareIkon';
exports["default"] = Icon;
});

var LyspareIkon = /*@__PURE__*/getDefaultExportFromCjs(lyspareIkon);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TipsMessage = function TipsMessage(props) {
  return /*#__PURE__*/react.createElement(BaseMessage$1, _extends({
    type: "tips",
    icon: /*#__PURE__*/react.createElement(LyspareIkon, null)
  }, props));
};

TipsMessage.propTypes = {
  /** The content of the message box */
  children: propTypes.node,

  /** Any extra class names to the wrapping DOM node */
  className: propTypes.string,

  /**
   * Deprecated. Use `children` instead.
   * @deprecated
   */
  content: propTypes.node,

  /** The icon to show. Has a default value, but can be overridden */
  icon: propTypes.node,

  /** An optional title for the message */
  title: propTypes.node
};
var TipsMessage$1 = TipsMessage;

var InfoMessageListItem = function InfoMessageListItem(props) {
  return /*#__PURE__*/react.createElement("li", null, props.href && /*#__PURE__*/react.createElement("a", {
    href: props.href,
    className: "ffe-message-box__link"
  }, props.children), !props.href && props.children);
};
InfoMessageListItem.propTypes = {
  href: propTypes.string,
  children: propTypes.string.isRequired
};
var InfoMessageList = function InfoMessageList(props) {
  return /*#__PURE__*/react.createElement("ul", {
    className: "ffe-message-box__list"
  }, props.children);
};
InfoMessageList.propTypes = {
  children: propTypes.node.isRequired
};

export { ErrorMessage$1 as ErrorMessage, InfoMessage$1 as InfoMessage, InfoMessageList, InfoMessageListItem, SuccessMessage$1 as SuccessMessage, TipsMessage$1 as TipsMessage };
