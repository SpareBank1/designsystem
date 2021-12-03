function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import { bool, func, oneOfType, string, node, object, shape, elementType } from '../../../../pkg/prop-types.js';
import Button from './BaseButton.js';

var SecondaryButton = function SecondaryButton(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    buttonType: "secondary"
  }, props));
};

SecondaryButton.propTypes = {
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

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: oneOfType([func, shape({
    current: object
  })]),

  /**  Shows a loader if true */
  isLoading: bool,

  /** Icon shown to the left of the label */
  leftIcon: node,

  /** Icon shown to the right of the label */
  rightIcon: node
};
export default SecondaryButton;