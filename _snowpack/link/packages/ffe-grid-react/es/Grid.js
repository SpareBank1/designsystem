var _excluded = ["children", "className", "condensed", "element", "topPadding"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import classNames from '../../../../pkg/classnames.js';
import { bool, node, string } from '../../../../pkg/prop-types.js';
export default function Grid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      condensed = _ref.condensed,
      element = _ref.element,
      topPadding = _ref.topPadding,
      rest = _objectWithoutProperties(_ref, _excluded);

  var Element = element || 'div';
  return /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames(className, 'ffe-grid', {
      'ffe-grid--condensed': condensed
    }, {
      'ffe-grid--no-top-padding': !topPadding
    })
  }, rest), children);
}
Grid.defaultProps = {
  topPadding: true
};
Grid.propTypes = {
  /** Any children of a Grid must be a GridRow */
  children: node,

  /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
  className: string,

  /** For a more compact grid */
  condensed: bool,

  /** Specify the DOM element being used to create the Grid */
  element: string,

  /** Add top padding */
  topPadding: bool
};