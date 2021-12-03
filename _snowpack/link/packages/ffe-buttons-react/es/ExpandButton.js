var _excluded = ["children", "className", "closeLabel", "element", "innerRef", "isExpanded", "leftIcon", "rightIcon"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from '../../../../pkg/react.js';
import { bool, func, oneOfType, string, node, object, shape, elementType } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import KryssIkon from '../../ffe-icons-react/lib/kryss-ikon.js';

var ExpandButton = function ExpandButton(props) {
  var children = props.children,
      className = props.className,
      closeLabel = props.closeLabel,
      Element = props.element,
      innerRef = props.innerRef,
      isExpanded = props.isExpanded,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Element, _extends({
    "aria-expanded": isExpanded,
    "aria-label": isExpanded ? closeLabel : undefined,
    className: classNames('ffe-button', 'ffe-button--expand', {
      'ffe-button--expanded': isExpanded
    }, className),
    ref: innerRef
  }, rest), isExpanded && /*#__PURE__*/React.createElement(KryssIkon, {
    className: "ffe-button__icon"
  }), !isExpanded && /*#__PURE__*/React.createElement(Fragment, null, leftIcon && /*#__PURE__*/React.cloneElement(leftIcon, {
    className: 'ffe-button__icon ffe-button__icon--left'
  }), children, rightIcon && /*#__PURE__*/React.cloneElement(rightIcon, {
    className: 'ffe-button__icon ffe-button__icon--right'
  })));
};

ExpandButton.propTypes = {
  /** The button label */
  children: node.isRequired,

  /** Extra class names */
  className: string,

  /** The rendered element, like an `<a />` or `<Link />` */
  element: oneOfType([func, string, elementType]),

  /** An accessible label for the close-button, only shown in the "isExpanded" state  */
  closeLabel: string,

  /** Icon shown to the left of the label */
  leftIcon: node,

  /** Icon shown to the right of the label */
  rightIcon: node,

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: oneOfType([func, shape({
    current: object
  })]),

  /** When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. */
  isExpanded: bool.isRequired,

  /** Use to listen for clicks and toggle the `isExpanded` property together with whatever it is you're expanding. */
  onClick: func.isRequired
};
ExpandButton.defaultProps = {
  closeLabel: 'Lukk',
  element: 'button'
};
export default ExpandButton;