var _excluded = ["bottomPadding", "children", "className", "element", "lg", "md", "sm"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React, { Component, createRef } from '../../../../pkg/react.js';
import { bool, node, number, oneOf, oneOfType, shape, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import backgroundColors, { removedColors } from './background-colors.js';

function camelCaseToDashCase(str) {
  return str.split('').reduce(function (previous, current) {
    return /[A-Z]/.test(current) ? "".concat(previous, "-").concat(current.toLowerCase()) : "".concat(previous).concat(current);
  });
}

var MODIFIER_LIST = ['around', 'background', 'between', 'bottom', 'center', 'end', 'horizontal', 'middle', 'reverse', 'start', 'centerText', 'top'];

var sizeClasses = function sizeClasses(size, def) {
  var _classNames;

  switch (_typeof(def)) {
    case 'undefined':
      return '';

    case 'object':
      return classNames((_classNames = {}, _defineProperty(_classNames, "ffe-grid__col--".concat(size, "-").concat(def.cols), def.cols || def.cols === 0), _defineProperty(_classNames, "ffe-grid__col--".concat(size, "-offset-").concat(def.offset), def.offset || def.offset === 0), _classNames));

    default:
      return "ffe-grid__col--".concat(size, "-").concat(def);
  }
};

var modifiers = function modifiers(props) {
  return Object.keys(props).filter(function (key) {
    return MODIFIER_LIST.indexOf(key) !== -1 && !!props[key];
  }).map(function (key) {
    return "ffe-grid__col--".concat(camelCaseToDashCase(key));
  }).join(' ');
};

var backgroundClass = function backgroundClass(_ref) {
  var background = _ref.background;

  if (!background) {
    return null;
  }

  if (removedColors.includes(background)) {
    throw new Error("Support for the ".concat(background, " background on <GridCol> has been removed, please see the CHANGELOG"));
  }

  return backgroundColors.includes(background) ? "ffe-grid__col--bg-".concat(background) : null;
};

var GridCol = /*#__PURE__*/function (_Component) {
  _inherits(GridCol, _Component);

  var _super = _createSuper(GridCol);

  function GridCol() {
    var _this;

    _classCallCheck(this, GridCol);

    _this = _super.call(this);
    _this.ref = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(GridCol, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bottomPadding = _this$props.bottomPadding,
          children = _this$props.children,
          className = _this$props.className,
          Element = _this$props.element,
          lg = _this$props.lg,
          md = _this$props.md,
          sm = _this$props.sm,
          rest = _objectWithoutProperties(_this$props, _excluded);

      Object.keys(rest).forEach(function (key) {
        if (MODIFIER_LIST.includes(key)) {
          delete rest[key];
        }
      });
      var classes = [className, sizeClasses('lg', lg), sizeClasses('md', md), sizeClasses('sm', !sm && !lg && !md ? 12 : sm), modifiers(this.props), backgroundClass(this.props), !bottomPadding ? 'ffe-grid__col--no-bottom-padding' : null].filter(function (x) {
        return x;
      }).join(' ');
      return /*#__PURE__*/React.createElement(Element, _extends({
        className: classes,
        ref: this.ref
      }, rest), children);
    }
  }]);

  return GridCol;
}(Component);

export { GridCol as default };
GridCol.defaultProps = {
  bottomPadding: true,
  element: 'div'
};
GridCol.propTypes = {
  /** Supported background colors */
  background: oneOf(['frost-30', 'sand', 'sand-70', 'sand-30', 'syrin-70', 'syrin-30', 'vann', 'vann-30', 'fjell', 'hvit']),

  /** Any extra classes are attached to the root node, in addition to ffe-grid__col classes */
  className: string,

  /** Specify the DOM element being used to create the GridCol */
  element: node,

  /** Distribute remaining space around the content elements */
  around: bool,

  /** Distribute remaining space between the content elements */
  between: bool,

  /** Place content elements at the bottom of the column */
  bottom: bool,

  /** Center content horizontally */
  center: bool,

  /** Center text content horizontally */
  centerText: bool,

  /** The content of the column */
  children: node,

  /** Place content elements to the right of the column */
  end: bool,

  /** Layout column content horizontally and flip flex direction */
  horizontal: bool,

  /** Center content vertically */
  middle: bool,

  /** Add bottom padding */
  bottomPadding: bool,

  /** Reverse layout direction */
  reverse: bool,

  /** Place content elements to the left of the column */
  start: bool,

  /** Place content elements at the top of the column */
  top: bool,

  /** Size modifiers for small screen sizes */
  sm: oneOfType([
  /** Number of columns, 0-12 */
  number,
  /** Number of columns, 0-12 */
  string, shape({
    /** Number of columns, 0-12 */
    cols: oneOfType([number, string]),

    /** Number of colums offset, 0-12 */
    offset: oneOfType([number, string])
  })]),

  /** Size modifiers for medium screen sizes */
  md: oneOfType([
  /** Number of columns, 0-12 */
  number,
  /** Number of columns, 0-12 */
  string, shape({
    /** Number of columns, 0-12 */
    cols: oneOfType([number, string]),

    /** Number of colums offset, 0-12 */
    offset: oneOfType([number, string])
  })]),

  /** Size modifiers for large screen sizes */
  lg: oneOfType([
  /** Number of columns, 0-12 */
  number,
  /** Number of columns, 0-12 */
  string, shape({
    /** Number of columns, 0-12 */
    cols: oneOfType([number, string]),

    /** Number of colums offset, 0-12 */
    offset: oneOfType([number, string])
  })])
};