var _excluded = ["className", "icon", "condensed", "greyCharcoal", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../../pkg/react.js';
import classNames from '../../../../../pkg/classnames.js';
import { node, string, bool, func, oneOfType, elementType } from '../../../../../pkg/prop-types.js';
import CardBase from '../CardBase.js';
import * as components from '../components/index.js';

var IconCard = function IconCard(props) {
  var className = props.className,
      icon = props.icon,
      condensed = props.condensed,
      greyCharcoal = props.greyCharcoal,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(CardBase, _extends({
    className: classNames('ffe-icon-card', {
      'ffe-icon-card--condensed': condensed
    }, {
      'ffe-icon-card--grey-charcoal': greyCharcoal
    }, className)
  }, rest), /*#__PURE__*/React.cloneElement(icon, {
    className: classNames('ffe-icon-card__icon', icon.props.className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "ffe-icon-card__body"
  }, typeof children === 'function' ? children(components) : children));
};

IconCard.propTypes = {
  className: string,

  /** A rendered icon */
  icon: node.isRequired,

  /** Smaller icon and less space */
  condensed: bool,

  /** Icon and text will all be ffe-grey-charcoal */
  greyCharcoal: bool,

  /** The element to render the card as */
  element: oneOfType([func, string, elementType]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: oneOfType([func, node])
};
export default IconCard;