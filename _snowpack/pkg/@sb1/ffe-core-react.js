import { p as propTypes } from '../common/Paragraph-c0d28da6.js';
export { M as MicroText, P as Paragraph } from '../common/Paragraph-c0d28da6.js';
import { r as react } from '../common/index-09a9c4ff.js';
import { c as classnames } from '../common/index-5100710e.js';
import '../common/_commonjsHelpers-4f955397.js';

var _excluded$6 = ["className"];

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function DividerLine(props) {
  var className = props.className,
      rest = _objectWithoutProperties$6(props, _excluded$6);

  return /*#__PURE__*/react.createElement("hr", _extends$6({
    className: classnames('ffe-divider-line', className),
    "aria-hidden": "true",
    role: "presentation"
  }, rest));
}
DividerLine.propTypes = {
  className: propTypes.string
};

var _excluded$5 = ["children", "className"];

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function EmphasizedText(props) {
  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$5(props, _excluded$5);

  return /*#__PURE__*/react.createElement("em", _extends$5({
    className: classnames('ffe-em-text', className)
  }, rest), children);
}
EmphasizedText.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string
};

var _excluded$4 = ["children", "className", "error", "inline", "noMargin", "withBorder", "lookLike", "textCenter"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var makeHeading = function makeHeading(level) {
  var Heading = function Heading(props) {
    var children = props.children,
        className = props.className,
        error = props.error,
        inline = props.inline,
        noMargin = props.noMargin,
        withBorder = props.withBorder,
        lookLike = props.lookLike,
        textCenter = props.textCenter,
        rest = _objectWithoutProperties$4(props, _excluded$4);

    var H = "h".concat(level);
    var headingClass = "ffe-h".concat(lookLike ? lookLike : level);
    return /*#__PURE__*/react.createElement(H, _extends$4({}, rest, {
      className: classnames(headingClass, _defineProperty({}, "".concat(headingClass, "--error"), error), _defineProperty({}, "".concat(headingClass, "--inline"), inline), _defineProperty({}, "".concat(headingClass, "--no-margin"), noMargin), _defineProperty({}, "".concat(headingClass, "--with-border"), withBorder), _defineProperty({}, "".concat(headingClass, "--text-center"), textCenter), className)
    }), children);
  };

  Heading.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    error: propTypes.bool,
    inline: propTypes.bool,
    lookLike: propTypes.oneOf([1, 2, 3, 4, 5, 6]),
    noMargin: propTypes.bool,
    withBorder: propTypes.bool,
    textCenter: propTypes.bool
  };
  return Heading;
};

var Heading1 = makeHeading(1);
var Heading2 = makeHeading(2);
var Heading3 = makeHeading(3);
var Heading4 = makeHeading(4);
var Heading5 = makeHeading(5);
var Heading6 = makeHeading(6);

var _excluded$3 = ["className", "element", "underline"];

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LinkText = function LinkText(props) {
  var className = props.className,
      Element = props.element,
      underline = props.underline,
      rest = _objectWithoutProperties$3(props, _excluded$3);

  return /*#__PURE__*/react.createElement(Element, _extends$3({
    className: classnames('ffe-link-text', {
      'ffe-link-text--no-underline': !underline
    }, className)
  }, rest));
};

LinkText.defaultProps = {
  element: 'a',
  underline: true
};
LinkText.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,

  /** The rendered element, like a `react-router` `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),
  underline: propTypes.bool
};
var LinkText$1 = LinkText;

var _excluded$2 = ["children", "className"];

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function PreformattedText(props) {
  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$2(props, _excluded$2);

  return /*#__PURE__*/react.createElement("pre", _extends$2({
    className: classnames('ffe-pre-text', className)
  }, rest), children);
}
PreformattedText.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string
};

var _excluded$1 = ["className", "element"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SmallText = function SmallText(_ref) {
  var className = _ref.className,
      Element = _ref.element,
      rest = _objectWithoutProperties$1(_ref, _excluded$1);

  return /*#__PURE__*/react.createElement(Element, _extends$1({
    className: classnames('ffe-small-text', className)
  }, rest));
};

SmallText.defaultProps = {
  element: 'span'
};
SmallText.propTypes = {
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),
  className: propTypes.string
};
var SmallText$1 = SmallText;

var _excluded = ["children", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function StrongText(props) {
  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement("strong", _extends({
    className: classnames('ffe-strong-text', className)
  }, rest), children);
}
StrongText.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string
};

export { DividerLine, EmphasizedText, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, LinkText$1 as LinkText, PreformattedText, SmallText$1 as SmallText, StrongText };
