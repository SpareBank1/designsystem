var _excluded = ["children", "heading", "defaultOpen", "isOpen", "className", "onToggleOpen", "ariaLabel"],
    _excluded2 = ["headingLevel", "onFocus", "onBlur", "forwardedRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useRef, useState } from '../../../../pkg/react.js';
import { bool, func, node, string } from '../../../../pkg/prop-types.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';
import { ChevronIkon } from '../../ffe-icons-react/es/index.js';
import Collapse from '../../ffe-collapse-react/es/index.js';
import classNames from '../../../../pkg/classnames.js';

var AccordionItem = function AccordionItem(_ref) {
  var children = _ref.children,
      heading = _ref.heading,
      defaultOpen = _ref.defaultOpen,
      isOpen = _ref.isOpen,
      className = _ref.className,
      _ref$onToggleOpen = _ref.onToggleOpen,
      onToggleOpen = _ref$onToggleOpen === void 0 ? Function.prototype : _ref$onToggleOpen,
      ariaLabel = _ref.ariaLabel,
      accordionProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(defaultOpen),
      _useState2 = _slicedToArray(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAnimating = _useState4[0],
      setIsAnimating = _useState4[1];

  var buttonId = useRef(uuid());
  var contentId = useRef(uuid());
  useEffect(function () {
    if (isOpen != null) {
      setIsAnimating(true);
      setIsExpanded(isOpen);
    }
  }, [isOpen]);

  var handleOnClick = function handleOnClick() {
    onToggleOpen(!isExpanded);

    if (isOpen == null) {
      setIsAnimating(true);
      setIsExpanded(!isExpanded);
    }
  };

  var headingLevel = accordionProps.headingLevel,
      onFocus = accordionProps.onFocus,
      onBlur = accordionProps.onBlur,
      forwardedRef = accordionProps.forwardedRef,
      rest = _objectWithoutProperties(accordionProps, _excluded2);

  var collapseHidden = !isExpanded && !isAnimating;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(className, 'ffe-accordion-item', {
      'ffe-accordion-item--open': isExpanded
    })
  }, rest), /*#__PURE__*/React.createElement("h".concat(headingLevel), {
    className: 'ffe-h6'
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: buttonId.current,
    ref: forwardedRef,
    "aria-expanded": isExpanded ? 'true' : 'false',
    "aria-controls": contentId.current,
    "aria-label": ariaLabel,
    className: classNames('ffe-accordion__heading-button', {
      'ffe-accordion__heading-button--open': isExpanded
    }),
    onClick: handleOnClick,
    onFocus: onFocus,
    onBlur: onBlur
  }, /*#__PURE__*/React.createElement("span", {
    className: "ffe-accordion__heading-button-content"
  }, heading, /*#__PURE__*/React.createElement(ChevronIkon, {
    className: "ffe-accordion__heading-icon"
  })))), /*#__PURE__*/React.createElement(Collapse, {
    isOpen: isExpanded,
    onRest: function onRest() {
      return setIsAnimating(false);
    },
    id: contentId.current,
    "aria-labelledby": buttonId.current,
    hidden: collapseHidden,
    role: "region"
  }, !collapseHidden && /*#__PURE__*/React.createElement("div", {
    className: "ffe-accordion-body"
  }, children)));
};

AccordionItem.propTypes = {
  /** The heading */
  heading: node.isRequired,

  /** The content to appear when expanded */
  children: node.isRequired,

  /** Should it be open by default */
  defaultOpen: bool,

  /** Is the item open or collapsed? Used for overriding default behaviour */
  isOpen: bool,

  /** Class assigned the container */
  className: string,

  /** Callback when the item is open/closed */
  onToggleOpen: func,

  /** aria-label for the button */
  ariaLabel: string
};
export default /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AccordionItem, _extends({}, props, {
    forwardedRef: ref
  }));
});