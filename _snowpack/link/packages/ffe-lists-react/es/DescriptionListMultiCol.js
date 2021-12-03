var _excluded = ["children", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { node, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';

var DescriptionListMultiCol = function DescriptionListMultiCol(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded);

  var pairs = [];
  React.Children.forEach(children, function (child, i) {
    var j = i % 2;

    if (j === 0) {
      pairs.push([]);
    }

    pairs[Math.floor(i / 2)][j] = child;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('ffe-description-list-multicol', className)
  }, rest), pairs.map(function (pair, idx) {
    return /*#__PURE__*/React.createElement("dl", {
      className: "ffe-description-list-multicol__avoid-break",
      key: idx
    }, pair[0], pair[1]);
  }));
};

DescriptionListMultiCol.propTypes = {
  /** List items */
  children: node.isRequired,

  /** Any extra classes */
  className: string
};
export default DescriptionListMultiCol;