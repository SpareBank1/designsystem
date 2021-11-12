import { r as react } from '../common/index-09a9c4ff.js';
import { c as classnames } from '../common/index-5100710e.js';
import { c as createCommonjsModule } from '../common/_commonjsHelpers-4f955397.js';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var _excluded$8 = ["className", "element", "children"];

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CardBase = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
      Element = props.element,
      children = props.children,
      rest = _objectWithoutProperties$8(props, _excluded$8);

  return /*#__PURE__*/react.createElement(Element, _extends$8({
    className: classnames('ffe-card-base', className),
    ref: ref
  }, rest), children);
});
CardBase.defaultProps = {
  element: 'div'
};
CardBase.propTypes = {
  className: propTypes.string,
  children: propTypes.node,

  /** The element to render the card as */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType])
};
var CardBase$1 = CardBase;

var _excluded$7 = ["className", "element"];

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ComponentBase = function ComponentBase(_ref) {
  var className = _ref.className,
      Element = _ref.element,
      rest = _objectWithoutProperties$7(_ref, _excluded$7);

  return /*#__PURE__*/react.createElement(Element, _extends$7({
    className: classnames('ffe-card-component', className)
  }, rest));
};

ComponentBase.defaultProps = {
  element: 'p'
};
ComponentBase.propTypes = {
  className: propTypes.string,
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),
  children: propTypes.node
};
var ComponentBase$1 = ComponentBase;

var _excluded$6 = ["className"];

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardName = function CardName(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties$6(_ref, _excluded$6);

  return /*#__PURE__*/react.createElement(ComponentBase$1, _extends$6({
    className: classnames('ffe-card-component--card-name', className)
  }, rest));
};

CardName.propTypes = {
  className: propTypes.string
};
var CardName$1 = CardName;

var _excluded$5 = ["className"];

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Subtext = function Subtext(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties$5(_ref, _excluded$5);

  return /*#__PURE__*/react.createElement(ComponentBase$1, _extends$5({
    className: classnames('ffe-card-component--subtext', className)
  }, rest));
};

Subtext.propTypes = {
  className: propTypes.string
};
var Subtext$1 = Subtext;

var _excluded$4 = ["className"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties$4(_ref, _excluded$4);

  return /*#__PURE__*/react.createElement(ComponentBase$1, _extends$4({
    className: classnames('ffe-card-component--text', className)
  }, rest));
};

Text.propTypes = {
  className: propTypes.string
};
var Text$1 = Text;

var _excluded$3 = ["className", "overflowEllipsis"];

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Title = function Title(_ref) {
  var className = _ref.className,
      overflowEllipsis = _ref.overflowEllipsis,
      rest = _objectWithoutProperties$3(_ref, _excluded$3);

  return /*#__PURE__*/react.createElement(ComponentBase$1, _extends$3({
    className: classnames('ffe-card-component--title', {
      'ffe-card-component--title--overflow-ellipsis': overflowEllipsis
    }, className)
  }, rest));
};

Title.defaultProps = {
  overflowEllipsis: true
};
Title.propTypes = {
  className: propTypes.string,

  /** Disable wrapping and hide overflow with ellipsis */
  overflowEllipsis: propTypes.bool
};
var Title$1 = Title;

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CardName: CardName$1,
  Subtext: Subtext$1,
  Text: Text$1,
  Title: Title$1
});

var _excluded$2 = ["className", "leftAlign", "children"];

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextCard = function TextCard(props) {
  var className = props.className,
      leftAlign = props.leftAlign,
      children = props.children,
      rest = _objectWithoutProperties$2(props, _excluded$2);

  return /*#__PURE__*/react.createElement(CardBase$1, _extends$2({
    className: classnames('ffe-text-card', {
      'ffe-text-card--left-align': leftAlign
    }, className)
  }, rest), typeof children === 'function' ? children(components) : children);
};

TextCard.propTypes = {
  className: propTypes.string,

  /** Left-aligned text on the card */
  leftAlign: propTypes.bool,

  /** The element to render the card as */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: propTypes.oneOfType([propTypes.func, propTypes.node])
};
var TextCard$1 = TextCard;

var _excluded$1 = ["className", "icon", "condensed", "greyCharcoal", "children"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconCard = function IconCard(props) {
  var className = props.className,
      icon = props.icon,
      condensed = props.condensed,
      greyCharcoal = props.greyCharcoal,
      children = props.children,
      rest = _objectWithoutProperties$1(props, _excluded$1);

  return /*#__PURE__*/react.createElement(CardBase$1, _extends$1({
    className: classnames('ffe-icon-card', {
      'ffe-icon-card--condensed': condensed
    }, {
      'ffe-icon-card--grey-charcoal': greyCharcoal
    }, className)
  }, rest), /*#__PURE__*/react.cloneElement(icon, {
    className: classnames('ffe-icon-card__icon', icon.props.className)
  }), /*#__PURE__*/react.createElement("div", {
    className: "ffe-icon-card__body"
  }, typeof children === 'function' ? children(components) : children));
};

IconCard.propTypes = {
  className: propTypes.string,

  /** A rendered icon */
  icon: propTypes.node.isRequired,

  /** Smaller icon and less space */
  condensed: propTypes.bool,

  /** Icon and text will all be ffe-grey-charcoal */
  greyCharcoal: propTypes.bool,

  /** The element to render the card as */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: propTypes.oneOfType([propTypes.func, propTypes.node])
};
var IconCard$1 = IconCard;

var _excluded = ["className", "image", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ImageCard = function ImageCard(props) {
  var className = props.className,
      image = props.image,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement(CardBase$1, _extends({
    className: classnames('ffe-image-card', className)
  }, rest), /*#__PURE__*/react.createElement("div", {
    className: "ffe-image-card__image"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-image-card__image__overlay"
  }), image), /*#__PURE__*/react.createElement("div", {
    className: "ffe-image-card__body"
  }, typeof children === 'function' ? children(components) : children));
};

ImageCard.propTypes = {
  className: propTypes.string,

  /** A rendered image */
  image: propTypes.node.isRequired,

  /** The element to render the card as */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: propTypes.oneOfType([propTypes.func, propTypes.node])
};
var ImageCard$1 = ImageCard;

export { CardBase$1 as CardBase, IconCard$1 as IconCard, ImageCard$1 as ImageCard, TextCard$1 as TextCard };
