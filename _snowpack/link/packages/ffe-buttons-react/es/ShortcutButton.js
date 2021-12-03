function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import { bool, func, node, string, oneOfType, object, shape, elementType } from '../../../../pkg/prop-types.js';
import ChevronIkon from '../../ffe-icons-react/lib/chevron-ikon.js';
import Button from './BaseButton.js';

var ShortcutButton = function ShortcutButton(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    buttonType: "shortcut",
    rightIcon: /*#__PURE__*/React.createElement(ChevronIkon, null)
  }, props));
};

ShortcutButton.propTypes = {
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

  /** Icon shown to the left of the label */
  leftIcon: node
};
export default ShortcutButton;