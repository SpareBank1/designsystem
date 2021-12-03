var _excluded = ["children", "className", "error", "inline", "noMargin", "withBorder", "lookLike", "textCenter"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../../pkg/react.js';
import classNames from '../../../../../pkg/classnames.js';
import { bool, oneOf, node, string } from '../../../../../pkg/prop-types.js';

var makeHeading = function makeHeading(level) {
  var Heading = function Heading(props) {
    var children = props.children,
        className = props.className,
        error = props.error,
        inline = props.inline,
        noMargin = props.noMargin,
        withBorder = props.withBorder,
        lookLike = props.lookLike,
        textCenter = props.textCenter,
        rest = _objectWithoutProperties(props, _excluded);

    var H = "h".concat(level);
    var headingClass = "ffe-h".concat(lookLike ? lookLike : level);
    return /*#__PURE__*/React.createElement(H, _extends({}, rest, {
      className: classNames(headingClass, _defineProperty({}, "".concat(headingClass, "--error"), error), _defineProperty({}, "".concat(headingClass, "--inline"), inline), _defineProperty({}, "".concat(headingClass, "--no-margin"), noMargin), _defineProperty({}, "".concat(headingClass, "--with-border"), withBorder), _defineProperty({}, "".concat(headingClass, "--text-center"), textCenter), className)
    }), children);
  };

  Heading.propTypes = {
    children: node.isRequired,
    className: string,
    error: bool,
    inline: bool,
    lookLike: oneOf([1, 2, 3, 4, 5, 6]),
    noMargin: bool,
    withBorder: bool,
    textCenter: bool
  };
  return Heading;
};

export var Heading1 = makeHeading(1);
export var Heading2 = makeHeading(2);
export var Heading3 = makeHeading(3);
export var Heading4 = makeHeading(4);
export var Heading5 = makeHeading(5);
export var Heading6 = makeHeading(6);