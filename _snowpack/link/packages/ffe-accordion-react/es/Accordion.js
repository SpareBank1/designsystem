var _excluded = ["children", "headingLevel", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { createRef, useEffect, useState } from '../../../../pkg/react.js';
import { node, oneOf, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
var ARROW_UP = 'ArrowUp';
var ARROW_DOWN = 'ArrowDown';
var HOME = 'Home';
var END = 'End';

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      headingLevel = _ref.headingLevel,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHeadingFocused = _useState2[0],
      setIsHeadingFocuses = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      refs = _useState4[0],
      setRefs = _useState4[1];

  var handleFocus = function handleFocus() {
    return setIsHeadingFocuses(true);
  };

  var handleBlur = function handleBlur() {
    return setIsHeadingFocuses(false);
  };

  useEffect(function () {
    setRefs(function (prevRefs) {
      return Array(children.length).fill(null).map(function (_, i) {
        return prevRefs[i] || /*#__PURE__*/createRef();
      });
    });
  }, [children.length]);

  var handleKeyDown = function handleKeyDown(event) {
    if (isHeadingFocused) {
      if ([HOME, END, ARROW_UP, ARROW_DOWN].some(function (key) {
        return key === event.key;
      })) {
        event.preventDefault();
      }

      var focusIndex = refs.findIndex(function (ref) {
        return ref.current === document.activeElement;
      });

      if (event.key === HOME) {
        refs[0].current.focus();
      } else if (event.key === END) {
        refs[refs.length - 1].current.focus();
      } else if (event.key === ARROW_UP) {
        if (focusIndex === 0) {
          refs[refs.length - 1].current.focus();
        } else {
          refs[focusIndex - 1].current.focus();
        }
      } else if (event.key === ARROW_DOWN) {
        if (focusIndex === refs.length - 1) {
          refs[0].current.focus();
        } else {
          refs[focusIndex + 1].current.focus();
        }
      }
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    // eslint-disable-line jsx-a11y/no-static-element-interactions
    onKeyDown: handleKeyDown,
    className: classNames(className, 'ffe-accordion', {
      'ffe-accordion--focus': isHeadingFocused
    })
  }, rest), React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.cloneElement(child, {
      headingLevel: headingLevel,
      ref: refs[index],
      onFocus: handleFocus,
      onBlur: handleBlur
    });
  }));
};

Accordion.propTypes = {
  /** Accordion items */
  children: node,

  /** The level of headings in the AccordionItems */
  headingLevel: oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /** Class assigned the container */
  className: string
};
export default Accordion;