import { r as react } from '../common/index-09a9c4ff.js';
import { c as createCommonjsModule } from '../common/_commonjsHelpers-4f955397.js';
import { c as classnames } from '../common/index-5100710e.js';
import { C as ChevronIkon } from '../common/chevron-ikon-e4f7de91.js';
import { K as KryssIkon } from '../common/kryss-ikon-691c0bd1.js';
import '../common/index-8de1816d.js';

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

var _excluded$6 = ["ariaLoadingMessage", "buttonType", "children", "className", "condensed", "disabled", "element", "innerRef", "isLoading", "leftIcon", "rightIcon"];

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Internal component
 */

var BaseButton = function BaseButton(props) {
  var ariaLoadingMessage = props.ariaLoadingMessage,
      buttonType = props.buttonType,
      children = props.children,
      className = props.className,
      condensed = props.condensed,
      disabled = props.disabled,
      Element = props.element,
      innerRef = props.innerRef,
      isLoading = props.isLoading,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      rest = _objectWithoutProperties$6(props, _excluded$6);

  var supportsSpinner = ['action', 'primary', 'secondary'].includes(buttonType);
  return /*#__PURE__*/react.createElement(Element, _extends$b({
    "aria-busy": isLoading && supportsSpinner,
    "aria-disabled": disabled || isLoading && supportsSpinner,
    className: classnames('ffe-button', "ffe-button--".concat(buttonType), {
      'ffe-button--condensed': condensed
    }, {
      'ffe-button--loading': isLoading && supportsSpinner
    }, className),
    ref: innerRef
  }, rest), /*#__PURE__*/react.createElement("span", {
    className: "ffe-button__label"
  }, leftIcon && /*#__PURE__*/react.cloneElement(leftIcon, {
    className: 'ffe-button__icon ffe-button__icon--left'
  }), children, rightIcon && /*#__PURE__*/react.cloneElement(rightIcon, {
    className: 'ffe-button__icon ffe-button__icon--right'
  })), supportsSpinner && /*#__PURE__*/react.createElement("span", {
    "aria-hidden": !isLoading,
    "aria-label": ariaLoadingMessage,
    className: "ffe-button__spinner"
  }));
};

BaseButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: propTypes.string,

  /**
   * Enum of supported prop types. Used internally only.
   * @ignore
   */
  buttonType: propTypes.oneOf(['action', 'primary', 'secondary', 'shortcut', 'task']),

  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool,

  /** Disable a button in certain situations */
  disabled: propTypes.bool,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** Shows a loader if true */
  isLoading: propTypes.bool,

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node,

  /** Icon shown to the right of the label */
  rightIcon: propTypes.node
};
BaseButton.defaultProps = {
  ariaLoadingMessage: 'Vennligst vent',
  element: 'button'
};
var Button = BaseButton;

var _excluded$5 = ["className", "ghost"];

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ActionButton(props) {
  var className = props.className,
      ghost = props.ghost,
      rest = _objectWithoutProperties$5(props, _excluded$5);

  return /*#__PURE__*/react.createElement(Button, _extends$a({
    buttonType: "action",
    className: classnames(className, {
      'ffe-button--ghost': ghost
    })
  }, rest));
}
ActionButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: propTypes.string,

  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool,

  /** Disable a button in certain situations */
  disabled: propTypes.bool,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Applies the ghost modifier if true. */
  ghost: propTypes.bool,

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** Shows a loader if true */
  isLoading: propTypes.bool,

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node,

  /** Icon shown to the right of the label */
  rightIcon: propTypes.node
};
ActionButton.defaultProps = {
  ghost: false
};

var _excluded$4 = ["buttonType", "children", "className", "element", "innerRef", "leftIcon", "rightIcon"];

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Internal component
 * @ignore
 */

var InlineBaseButton = function InlineBaseButton(props) {
  var buttonType = props.buttonType,
      children = props.children,
      className = props.className,
      Element = props.element,
      innerRef = props.innerRef,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      rest = _objectWithoutProperties$4(props, _excluded$4);

  return /*#__PURE__*/react.createElement(Element, _extends$9({
    className: classnames('ffe-inline-button', "ffe-inline-button--".concat(buttonType), className),
    ref: innerRef
  }, rest), leftIcon && /*#__PURE__*/react.cloneElement(leftIcon, {
    className: 'ffe-inline-button__icon ffe-inline-button__icon--left'
  }), /*#__PURE__*/react.createElement("span", {
    className: "ffe-inline-button__label"
  }, children), rightIcon && /*#__PURE__*/react.cloneElement(rightIcon, {
    className: 'ffe-inline-button__icon ffe-inline-button__icon--right'
  }));
};

InlineBaseButton.propTypes = {
  /**
   * Enum of supported prop types. Used internally only.
   * @ignore
   */
  buttonType: propTypes.oneOf(['tertiary', 'back', 'expand']),

  /** The button label */
  children: propTypes.node.isRequired,

  /** Extra class names */
  className: propTypes.string,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.string, propTypes.func, propTypes.elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node,

  /** Icon shown to the right of the label */
  rightIcon: propTypes.node
};
InlineBaseButton.defaultProps = {
  element: 'button'
};
var InlineButton = InlineBaseButton;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var BackButton = function BackButton(props) {
  return /*#__PURE__*/react.createElement(InlineButton, _extends$8({
    buttonType: "back"
  }, props));
};

BackButton.propTypes = {
  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })])
};
var BackButton$1 = BackButton;

var _excluded$3 = ["className", "thin", "inline"];

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      thin = _ref.thin,
      inline = _ref.inline,
      rest = _objectWithoutProperties$3(_ref, _excluded$3);

  return /*#__PURE__*/react.createElement("div", _extends$7({
    className: classnames('ffe-button-group', {
      'ffe-button-group--thin': thin
    }, {
      'ffe-button-group--inline': inline
    }, className)
  }, rest));
};

ButtonGroup.propTypes = {
  /** Extra class name applied in addition to the FFE classes */
  className: propTypes.string,

  /** Applies the thin modifier to remove margins */
  thin: propTypes.bool,

  /** Applies the inline modifier to make all child buttons inline */
  inline: propTypes.bool
};
var ButtonGroup$1 = ButtonGroup;

var _excluded$2 = ["children", "className", "closeLabel", "element", "innerRef", "isExpanded", "leftIcon", "rightIcon"];

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ExpandButton = function ExpandButton(props) {
  var children = props.children,
      className = props.className,
      closeLabel = props.closeLabel,
      Element = props.element,
      innerRef = props.innerRef,
      isExpanded = props.isExpanded,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      rest = _objectWithoutProperties$2(props, _excluded$2);

  return /*#__PURE__*/react.createElement(Element, _extends$6({
    "aria-expanded": isExpanded,
    "aria-label": isExpanded ? closeLabel : undefined,
    className: classnames('ffe-button', 'ffe-button--expand', {
      'ffe-button--expanded': isExpanded
    }, className),
    ref: innerRef
  }, rest), isExpanded && /*#__PURE__*/react.createElement(KryssIkon, {
    className: "ffe-button__icon"
  }), !isExpanded && /*#__PURE__*/react.createElement(react.Fragment, null, leftIcon && /*#__PURE__*/react.cloneElement(leftIcon, {
    className: 'ffe-button__icon ffe-button__icon--left'
  }), children, rightIcon && /*#__PURE__*/react.cloneElement(rightIcon, {
    className: 'ffe-button__icon ffe-button__icon--right'
  })));
};

ExpandButton.propTypes = {
  /** The button label */
  children: propTypes.node.isRequired,

  /** Extra class names */
  className: propTypes.string,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** An accessible label for the close-button, only shown in the "isExpanded" state  */
  closeLabel: propTypes.string,

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node,

  /** Icon shown to the right of the label */
  rightIcon: propTypes.node,

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. */
  isExpanded: propTypes.bool.isRequired,

  /** Use to listen for clicks and toggle the `isExpanded` property together with whatever it is you're expanding. */
  onClick: propTypes.func.isRequired
};
ExpandButton.defaultProps = {
  closeLabel: 'Lukk',
  element: 'button'
};
var ExpandButton$1 = ExpandButton;

var _excluded$1 = ["isExpanded"];

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InlineExpandButton = function InlineExpandButton(props) {
  var isExpanded = props.isExpanded,
      rest = _objectWithoutProperties$1(props, _excluded$1);

  return /*#__PURE__*/react.createElement(InlineButton, _extends$5({
    buttonType: "expand",
    type: "button",
    rightIcon: /*#__PURE__*/react.createElement(ChevronIkon, {
      style: {
        marginLeft: '8px',
        transform: isExpanded ? 'rotateZ(180deg)' : 'none'
      }
    })
  }, rest));
};

InlineExpandButton.propTypes = {
  /** Text that should reflect the isExpanded state. */
  children: propTypes.node,

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** When true it will indicate the button is in its open state */
  isExpanded: propTypes.bool.isRequired,

  /** Listen for clicks to toggle the isExpanded state. */
  onClick: propTypes.func.isRequired
};
var InlineExpandButton$1 = InlineExpandButton;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var PrimaryButton = function PrimaryButton(props) {
  return /*#__PURE__*/react.createElement(Button, _extends$4({
    buttonType: "primary"
  }, props));
};

PrimaryButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: propTypes.string,

  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool,

  /** Disable a button in certain situations */
  disabled: propTypes.bool,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** Shows a loader if true */
  isLoading: propTypes.bool,

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node,

  /** Icon shown to the right of the label */
  rightIcon: propTypes.node
};
var PrimaryButton$1 = PrimaryButton;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SecondaryButton = function SecondaryButton(props) {
  return /*#__PURE__*/react.createElement(Button, _extends$3({
    buttonType: "secondary"
  }, props));
};

SecondaryButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: propTypes.string,

  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool,

  /** Disable a button in certain situations */
  disabled: propTypes.bool,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /**  Shows a loader if true */
  isLoading: propTypes.bool,

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node,

  /** Icon shown to the right of the label */
  rightIcon: propTypes.node
};
var SecondaryButton$1 = SecondaryButton;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var ShortcutButton = function ShortcutButton(props) {
  return /*#__PURE__*/react.createElement(Button, _extends$2({
    buttonType: "shortcut",
    rightIcon: /*#__PURE__*/react.createElement(ChevronIkon, null)
  }, props));
};

ShortcutButton.propTypes = {
  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool,

  /** Disable a button in certain situations */
  disabled: propTypes.bool,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node
};
var ShortcutButton$1 = ShortcutButton;

var _excluded = ["icon"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TaskButton = function TaskButton(_ref) {
  var icon = _ref.icon,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement(Button, _extends$1({
    buttonType: "task",
    leftIcon: icon
  }, rest));
};

TaskButton.propTypes = {
  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool,

  /** Disable a button in certain situations */
  disabled: propTypes.bool,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Task icon, show to the left of the label */
  icon: propTypes.node.isRequired,

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })])
};
var TaskButton$1 = TaskButton;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TertiaryButton = function TertiaryButton(props) {
  return /*#__PURE__*/react.createElement(InlineButton, _extends({
    buttonType: "tertiary"
  }, props));
};

TertiaryButton.propTypes = {
  /** The button label */
  children: propTypes.node,

  /** Extra class names */
  className: propTypes.string,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })]),

  /** Icon shown to the left of the label */
  leftIcon: propTypes.node,

  /** Icon shown to the right of the label */
  rightIcon: propTypes.node
};
var TertiaryButton$1 = TertiaryButton;

export { ActionButton, BackButton$1 as BackButton, ButtonGroup$1 as ButtonGroup, ExpandButton$1 as ExpandButton, InlineExpandButton$1 as InlineExpandButton, PrimaryButton$1 as PrimaryButton, SecondaryButton$1 as SecondaryButton, ShortcutButton$1 as ShortcutButton, TaskButton$1 as TaskButton, TertiaryButton$1 as TertiaryButton };
