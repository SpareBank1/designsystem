var _excluded = ["ariaLoadingMessage", "buttonType", "children", "className", "condensed", "element", "innerRef", "isLoading", "leftIcon", "rightIcon", "onClick"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, func, node, oneOf, oneOfType, string, object, shape, elementType } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
/**
 * Internal component
 */

var BaseButton = function BaseButton(props) {
  var ariaLoadingMessage = props.ariaLoadingMessage,
      buttonType = props.buttonType,
      children = props.children,
      className = props.className,
      condensed = props.condensed,
      Element = props.element,
      innerRef = props.innerRef,
      isLoading = props.isLoading,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      _onClick = props.onClick,
      rest = _objectWithoutProperties(props, _excluded);

  var supportsSpinner = ['action', 'primary', 'secondary'].includes(buttonType);
  return /*#__PURE__*/React.createElement(Element, _extends({
    "aria-busy": isLoading && supportsSpinner,
    "aria-disabled": rest.disabled || isLoading && supportsSpinner,
    className: classNames('ffe-button', "ffe-button--".concat(buttonType), {
      'ffe-button--condensed': condensed
    }, {
      'ffe-button--loading': isLoading && supportsSpinner
    }, className),
    ref: innerRef,
    onClick: function onClick(event) {
      if (isLoading && supportsSpinner) {
        event.preventDefault();
        event.stopPropagation();
      } else if (_onClick) {
        _onClick(event);
      }
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ffe-button__label"
  }, leftIcon && /*#__PURE__*/React.cloneElement(leftIcon, {
    className: 'ffe-button__icon ffe-button__icon--left'
  }), children, rightIcon && /*#__PURE__*/React.cloneElement(rightIcon, {
    className: 'ffe-button__icon ffe-button__icon--right'
  })), supportsSpinner && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": !isLoading,
    "aria-label": ariaLoadingMessage,
    className: "ffe-button__spinner"
  }));
};

BaseButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: string,

  /**
   * Enum of supported prop types. Used internally only.
   * @ignore
   */
  buttonType: oneOf(['action', 'primary', 'secondary', 'shortcut', 'task']),

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

  /** Shows a loader if true */
  isLoading: bool,

  /** Icon shown to the left of the label */
  leftIcon: node,

  /** Icon shown to the right of the label */
  rightIcon: node,

  /** Called when button is clicked if not loading or disabled */
  onClick: func
};
BaseButton.defaultProps = {
  ariaLoadingMessage: 'Vennligst vent',
  element: 'button'
};
export default BaseButton;