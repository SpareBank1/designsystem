var _excluded = ["className", "element", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import classNames from '../../../../pkg/classnames.js';
import { oneOfType, node, func, string, elementType } from '../../../../pkg/prop-types.js';
var CardBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      Element = props.element,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames('ffe-card-base', className),
    ref: ref
  }, rest), children);
});
CardBase.defaultProps = {
  element: 'div'
};
CardBase.propTypes = {
  className: string,
  children: node,

  /** The element to render the card as */
  element: oneOfType([func, string, elementType])
};
export default CardBase;