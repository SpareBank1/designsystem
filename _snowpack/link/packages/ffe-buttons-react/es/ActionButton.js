var _excluded = ["className", "ghost"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, func, node, string, oneOfType, object, shape, elementType } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import Button from './BaseButton.js';
export default function ActionButton(props) {
  var className = props.className,
      ghost = props.ghost,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Button, _extends({
    buttonType: "action",
    className: classNames(className, {
      'ffe-button--ghost': ghost
    })
  }, rest));
}
ActionButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: string,

  /** The button label */
  children: node,

  /** Extra class names */
  className: string,

  /** Condensed modifier. Use in condensed designs */
  condensed: bool,

  /** Disable a button in certain situations */
  disabled: bool,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: oneOfType([func, string, elementType]),

  /** Applies the ghost modifier if true. */
  ghost: bool,

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: oneOfType([func, shape({
    current: object
  })]),

  /** Shows a loader if true */
  isLoading: bool,

  /** Icon shown to the left of the label */
  leftIcon: node,

  /** Icon shown to the right of the label */
  rightIcon: node
};
ActionButton.defaultProps = {
  ghost: false
};