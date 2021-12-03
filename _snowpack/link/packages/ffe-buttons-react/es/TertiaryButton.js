function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import { func, node, oneOfType, string, object, shape, elementType } from '../../../../pkg/prop-types.js';
import InlineButton from './InlineBaseButton.js';

var TertiaryButton = function TertiaryButton(props) {
  return /*#__PURE__*/React.createElement(InlineButton, _extends({
    buttonType: "tertiary"
  }, props));
};

TertiaryButton.propTypes = {
  /** The button label */
  children: node,

  /** Extra class names */
  className: string,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: oneOfType([func, string, elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: oneOfType([func, shape({
    current: object
  })]),

  /** Icon shown to the left of the label */
  leftIcon: node,

  /** Icon shown to the right of the label */
  rightIcon: node
};
export default TertiaryButton;