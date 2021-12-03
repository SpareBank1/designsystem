var _excluded = ["animationLengthMs", "onClose", "icon", "headerText", "compact", "messageType", "style", "showCloseButton", "headerElement", "headerElementId", "contentElementId", "children", "className", "locale"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useRef, cloneElement } from '../../../../pkg/react.js';
import { number, node, string, bool, element, oneOf, func, object } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import KryssIkon from '../../ffe-icons-react/lib/kryss-ikon.js';
import acceptedLocales from './locale/accepted-locales.js';
import texts from './locale/texts.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';
/**
 * Base component for all four types of context messages.
 *
 * *Should never be used directly!*
 * Please use one of the four versions exported from this package.
 */

var ContextMessage = function ContextMessage(_ref) {
  var animationLengthMs = _ref.animationLengthMs,
      onClose = _ref.onClose,
      icon = _ref.icon,
      headerText = _ref.headerText,
      compact = _ref.compact,
      messageType = _ref.messageType,
      style = _ref.style,
      showCloseButton = _ref.showCloseButton,
      headerElement = _ref.headerElement,
      headerElementId = _ref.headerElementId,
      contentElementId = _ref.contentElementId,
      children = _ref.children,
      className = _ref.className,
      locale = _ref.locale,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isClosed = _useState2[0],
      setIsClosed = _useState2[1];

  var container = useRef(null);

  var _headerElementId = useRef(headerElementId || uuid());

  var _contentElementId = useRef(contentElementId || uuid());

  var handleClose = function handleClose(event) {
    container.current.style.height = "".concat(container.current.offsetHeight, "px");
    setTimeout(function () {
      container.current.style.height = 0;
    }, 0);
    setTimeout(function () {
      setIsClosed(true);
      onClose(event);
    }, animationLengthMs);
    return false;
  };

  if (isClosed) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: container,
    "aria-describedby": _contentElementId.current,
    "aria-labelledby": headerText && _headerElementId.current,
    className: classNames('ffe-context-message', "ffe-context-message--".concat(messageType), {
      'ffe-context-message--compact': compact
    }, className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      transition: "height ".concat(animationLengthMs / 1000, "s")
    })
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ffe-context-message-content"
  }, icon && /*#__PURE__*/React.createElement("div", {
    className: "ffe-context-message-content__icon"
  }, /*#__PURE__*/cloneElement(icon, {
    className: classNames('ffe-context-message-content__icon-svg', icon.props.className)
  })), /*#__PURE__*/React.createElement("div", null, headerText && /*#__PURE__*/React.createElement(headerElement, {
    id: _headerElementId.current,
    className: 'ffe-context-message-content__header'
  }, headerText), /*#__PURE__*/React.createElement("div", {
    className: "ffe-body-text",
    id: _contentElementId.current
  }, children))), showCloseButton && /*#__PURE__*/React.createElement("button", {
    "aria-label": "".concat(texts[locale].FFE_CONTEXT_MESSAGE_CLOSE, " ").concat(headerText || ''),
    className: "ffe-context-message-content__close-button",
    onClick: handleClose,
    type: "button"
  }, /*#__PURE__*/React.createElement(KryssIkon, {
    className: "ffe-context-message-content__close-button-svg",
    "aria-hidden": "true"
  })));
};

export default ContextMessage;
ContextMessage.propTypes = {
  animationLengthMs: number,

  /** The content shown in the context box */
  children: node.isRequired,

  /** Classes are added in addition to the relevant context message classes */
  className: string,

  /** Renders a more compact version of the context message */
  compact: bool,

  /** ID for the children container */
  contentElementId: string,
  headerText: string,

  /** ID for the header container */
  headerElementId: string,

  /* HTML element for the header */
  headerElement: string,
  icon: element,

  /** Decides the language of the aria-label for the close icon */
  locale: oneOf(acceptedLocales),

  /** Provided by the wrapper component */
  messageType: oneOf(['info', 'tip', 'success', 'error']),

  /** Callback for when the context message has been closed (after the animation) */
  onClose: func,
  showCloseButton: bool,

  /** Styles applied to the outermost element. `height` will be overridden */
  style: object
};
ContextMessage.defaultProps = {
  animationLengthMs: 300,
  compact: false,
  headerElement: 'div',
  locale: 'nb',
  onClose: function onClose() {},
  showCloseButton: false,
  style: {}
};