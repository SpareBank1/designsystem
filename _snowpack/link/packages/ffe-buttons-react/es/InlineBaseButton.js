var _excluded = ["buttonType", "children", "className", "element", "innerRef", "leftIcon", "rightIcon"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { func, string, oneOf, oneOfType, node, object, shape, elementType } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
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
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames('ffe-inline-button', "ffe-inline-button--".concat(buttonType), className),
    ref: innerRef
  }, rest), leftIcon && /*#__PURE__*/React.cloneElement(leftIcon, {
    className: 'ffe-inline-button__icon ffe-inline-button__icon--left'
  }), /*#__PURE__*/React.createElement("span", {
    className: "ffe-inline-button__label"
  }, children), rightIcon && /*#__PURE__*/React.cloneElement(rightIcon, {
    className: 'ffe-inline-button__icon ffe-inline-button__icon--right'
  }));
};

InlineBaseButton.propTypes = {
  /**
   * Enum of supported prop types. Used internally only.
   * @ignore
   */
  buttonType: oneOf(['tertiary', 'back', 'expand']),

  /** The button label */
  children: node.isRequired,

  /** Extra class names */
  className: string,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: oneOfType([string, func, elementType]),

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: oneOfType([func, shape({
    current: object
  })]),

  /** Icon shown to the left of the label */
  leftIcon: node,

  /** Icon shown to the right of the label */
  rightIcon: node
};
InlineBaseButton.defaultProps = {
  element: 'button'
};
export default InlineBaseButton;