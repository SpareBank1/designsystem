var _excluded = ["childCount", "children", "index", "className", "cta"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, node, number, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import { GridCol } from '../../ffe-grid-react/es/index.js';

var getColCount = function getColCount(total, current) {
  if (total === 1) {
    return 7;
  }

  if (total < 3 && current === total - 1) {
    return 4;
  }

  return 2;
};

export default function DetailContent(props) {
  var childCount = props.childCount,
      children = props.children,
      index = props.index,
      className = props.className,
      cta = props.cta,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(GridCol, _extends({
    className: classNames(className, 'ffe-details-list-react__content', {
      'ffe-details-list-react__content--action': cta
    }),
    sm: 12,
    md: {
      cols: 8,
      offset: 2
    },
    lg: {
      cols: getColCount(childCount, index),
      offset: 0
    },
    bottomPadding: false
  }, rest), children);
}
DetailContent.propTypes = {
  /**
   * Internal prop used for knowing the total amount of columns, provided by `Detail`
   * @ignore
   */
  childCount: number,

  /**
   * The contents of the column
   */
  children: node.isRequired,

  /**
   * Internal prop used for knowing which column is being rendered, provided by `Detail`
   * @ignore
   */
  index: number,

  /**
   * Any CSS classes that should be included on the rendered content
   */
  className: string,

  /**
   * Indicate if this should be rendered as a call to action and moved to the end of the row
   * @ignore
   */
  cta: bool
};