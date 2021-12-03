var _excluded = ["children", "className", "element", "type"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { node, string, oneOf } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
/**
 * Internal factory component
 * @ignore
 */

var BaseFieldMessage = function BaseFieldMessage(props) {
  var children = props.children,
      className = props.className,
      Element = props.element,
      type = props.type,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames("ffe-field-".concat(type, "-message"), className)
  }, rest), children);
};

BaseFieldMessage.defaultProps = {
  element: 'div'
};
BaseFieldMessage.propTypes = {
  children: node.isRequired,
  className: string,
  element: string,
  type: oneOf(['success', 'info', 'error']).isRequired
};
export default BaseFieldMessage;