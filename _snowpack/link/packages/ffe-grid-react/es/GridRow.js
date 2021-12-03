var _excluded = ["background", "className", "children", "element", "reverse", "topPadding"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, node, oneOf, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import backgroundColors, { removedColors } from './background-colors.js';
export default function GridRow(_ref) {
  var background = _ref.background,
      className = _ref.className,
      children = _ref.children,
      element = _ref.element,
      reverse = _ref.reverse,
      topPadding = _ref.topPadding,
      rest = _objectWithoutProperties(_ref, _excluded);

  var content = children;
  var hasBackgroundColor = backgroundColors.includes(background);
  var hasRemovedColor = removedColors.includes(background);

  if (hasBackgroundColor) {
    content = /*#__PURE__*/React.createElement("div", {
      className: "ffe-grid__row-wrapper"
    }, children);
  }

  if (hasRemovedColor) {
    throw new Error("Support for the ".concat(background, " background on <GridRow> has been removed, please see the CHANGELOG"));
  }

  var Element = element || 'div';
  return /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames(className, 'ffe-grid__row', _defineProperty({}, "ffe-grid__row--bg-".concat(background), hasBackgroundColor), {
      'ffe-grid__row--reverse': reverse
    }, {
      'ffe-grid__row--top-padding': topPadding
    })
  }, rest), content);
}
GridRow.defaultProps = {
  topPadding: false
};
GridRow.propTypes = {
  /** Supported background colors */
  background: oneOf(['frost-30', 'sand', 'sand-70', 'sand-30', 'syrin-70', 'syrin-30', 'vann', 'vann-30', 'fjell', 'hvit']),

  /** Any extra classes are attached to the root node, in addition to ffe-grid__row classes */
  className: string,

  /** All children of a `<GridRow />` must be `<GridCol />`. */
  children: node,

  /** Specify the DOM element being used to create the GridRow */
  element: string,

  /** If true, columns are reversed */
  reverse: bool,

  /** If true, row receives top padding. Useful for when you have background colored rows */
  topPadding: bool
};