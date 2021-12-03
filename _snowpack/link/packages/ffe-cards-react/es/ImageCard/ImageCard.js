var _excluded = ["className", "image", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../../pkg/react.js';
import classNames from '../../../../../pkg/classnames.js';
import { node, string, func, oneOfType, elementType } from '../../../../../pkg/prop-types.js';
import CardBase from '../CardBase.js';
import * as components from '../components/index.js';

var ImageCard = function ImageCard(props) {
  var className = props.className,
      image = props.image,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(CardBase, _extends({
    className: classNames('ffe-image-card', className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ffe-image-card__image"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-image-card__image__overlay"
  }), image), /*#__PURE__*/React.createElement("div", {
    className: "ffe-image-card__body"
  }, typeof children === 'function' ? children(components) : children));
};

ImageCard.propTypes = {
  className: string,

  /** A rendered image */
  image: node.isRequired,

  /** The element to render the card as */
  element: oneOfType([func, string, elementType]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: oneOfType([func, node])
};
export default ImageCard;