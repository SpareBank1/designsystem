var _excluded = ["type", "title", "icon", "content", "children", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { node, oneOf, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
var iconStyles = {
  width: '40px',
  height: '40px'
};

var BaseMessage = function BaseMessage(props) {
  var type = props.type,
      title = props.title,
      icon = props.icon,
      content = props.content,
      children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('ffe-message-box', className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: classNames('ffe-message-box__icon', "ffe-message-box__icon--".concat(type))
  }, /*#__PURE__*/React.cloneElement(icon, _objectSpread({
    style: iconStyles
  }, icon.props))), /*#__PURE__*/React.createElement("div", {
    className: classNames('ffe-message-box__box', "ffe-message-box__box--".concat(type))
  }, title && /*#__PURE__*/React.createElement("div", {
    className: classNames('ffe-h4', "ffe-message-box__title")
  }, title), content && /*#__PURE__*/React.createElement("p", null, content), !content && children));
};

BaseMessage.propTypes = {
  children: node,
  className: string,
  content: node,
  icon: node.isRequired,
  title: node,

  /**
   * Internal type enum for specifying the style of message box. Should not be used directly
   * @ignore
   */
  type: oneOf(['success', 'error', 'tips', 'info']).isRequired
};
export default BaseMessage;