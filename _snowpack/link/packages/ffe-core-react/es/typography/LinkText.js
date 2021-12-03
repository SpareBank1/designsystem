var _excluded = ["className", "element", "underline"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../../pkg/react.js';
import { bool, func, node, oneOfType, string, elementType } from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';

var LinkText = function LinkText(props) {
  var className = props.className,
      Element = props.element,
      underline = props.underline,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames('ffe-link-text', {
      'ffe-link-text--no-underline': !underline
    }, className)
  }, rest));
};

LinkText.defaultProps = {
  element: 'a',
  underline: true
};
LinkText.propTypes = {
  children: node.isRequired,
  className: string,

  /** The rendered element, like a `react-router` `<Link />` */
  element: oneOfType([func, string, elementType]),
  underline: bool
};
export default LinkText;