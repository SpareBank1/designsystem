import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import '../common/_commonjsHelpers-4f955397.js';

var _excluded$b = ["className", "condensed"];

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function _objectWithoutProperties$b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BulletList = function BulletList(_ref) {
  var className = _ref.className,
      condensed = _ref.condensed,
      rest = _objectWithoutProperties$b(_ref, _excluded$b);

  return /*#__PURE__*/react.createElement("ul", _extends$b({
    className: classnames('ffe-bullet-list', {
      'ffe-bullet-list--condensed': condensed
    }, className)
  }, rest));
};

BulletList.propTypes = {
  /** List items */
  children: propTypes.node.isRequired,

  /** Any extra classes */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool
};
var BulletList$1 = BulletList;

var _excluded$a = ["className"];

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BulletListItem = function BulletListItem(props) {
  var className = props.className,
      rest = _objectWithoutProperties$a(props, _excluded$a);

  return /*#__PURE__*/react.createElement("li", _extends$a({
    className: classnames('ffe-bullet-list__item', className)
  }, rest));
};

BulletListItem.propTypes = {
  children: propTypes.node,

  /** Any extra classes */
  className: propTypes.string
};
var BulletListItem$1 = BulletListItem;

var _excluded$9 = ["className", "columns"];

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CheckList = function CheckList(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      rest = _objectWithoutProperties$9(_ref, _excluded$9);

  return /*#__PURE__*/react.createElement("ul", _extends$9({
    className: classnames('ffe-check-list', {
      'ffe-check-list--two-columns': Number(columns) === 2
    }, className)
  }, rest));
};

CheckList.propTypes = {
  /** List items */
  children: propTypes.node.isRequired,

  /** Any extra classes */
  className: propTypes.string,
  columns: propTypes.oneOf([1, 2, '1', '2'])
};
CheckList.defaultProps = {
  columns: 1
};
var CheckList$1 = CheckList;

var _excluded$8 = ["className", "isCross"];

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CheckListItem = function CheckListItem(props) {
  var className = props.className,
      isCross = props.isCross,
      rest = _objectWithoutProperties$8(props, _excluded$8);

  return /*#__PURE__*/react.createElement("li", _extends$8({
    className: classnames('ffe-check-list__item', {
      'ffe-check-list__item--cross': isCross
    }, className)
  }, rest));
};

CheckListItem.propTypes = {
  children: propTypes.node,

  /** Any extra classes */
  className: propTypes.string,

  /** If true, render a red cross instead of a green checkmark */
  isCross: propTypes.bool
};
CheckListItem.defaultProps = {
  isCross: false
};
var CheckListItem$1 = CheckListItem;

var _excluded$7 = ["className", "condensed"];

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NumberedList = function NumberedList(_ref) {
  var className = _ref.className,
      condensed = _ref.condensed,
      rest = _objectWithoutProperties$7(_ref, _excluded$7);

  return /*#__PURE__*/react.createElement("ol", _extends$7({
    className: classnames('ffe-numbered-list', {
      'ffe-numbered-list--condensed': condensed
    }, className)
  }, rest));
};

NumberedList.propTypes = {
  /** List items */
  children: propTypes.node.isRequired,

  /** Any extra classes */
  className: propTypes.string,

  /** Condensed modifier. Use in condensed designs */
  condensed: propTypes.bool
};
var NumberedList$1 = NumberedList;

var _excluded$6 = ["className"];

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NumberedListItem = function NumberedListItem(props) {
  var className = props.className,
      rest = _objectWithoutProperties$6(props, _excluded$6);

  return /*#__PURE__*/react.createElement("li", _extends$6({
    className: classnames('ffe-numbered-list__item', className)
  }, rest));
};

NumberedListItem.propTypes = {
  children: propTypes.node,

  /** Any extra classes */
  className: propTypes.string
};
var NumberedListItem$1 = NumberedListItem;

var _excluded$5 = ["className"];

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StylizedNumberedList = function StylizedNumberedList(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties$5(_ref, _excluded$5);

  return /*#__PURE__*/react.createElement("ol", _extends$5({
    className: classnames('ffe-stylized-numbered-list', className)
  }, rest));
};

StylizedNumberedList.propTypes = {
  /** List items */
  children: propTypes.node.isRequired,

  /** Any extra classes */
  className: propTypes.string
};
var StylizedNumberedList$1 = StylizedNumberedList;

var _excluded$4 = ["className"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StylizedNumberedListItem = function StylizedNumberedListItem(props) {
  var className = props.className,
      rest = _objectWithoutProperties$4(props, _excluded$4);

  return /*#__PURE__*/react.createElement("li", _extends$4({
    className: classnames('ffe-stylized-numbered-list__item', className)
  }, rest));
};

StylizedNumberedListItem.propTypes = {
  children: propTypes.node,

  /** Any extra classes */
  className: propTypes.string
};
var StylizedNumberedListItem$1 = StylizedNumberedListItem;

var _excluded$3 = ["medium", "large", "className", "horizontal"];

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DescriptionList = function DescriptionList(_ref) {
  var medium = _ref.medium,
      large = _ref.large,
      className = _ref.className,
      horizontal = _ref.horizontal,
      rest = _objectWithoutProperties$3(_ref, _excluded$3);

  return /*#__PURE__*/react.createElement("dl", _extends$3({
    className: classnames('ffe-description-list', {
      'ffe-description-list--horizontal': horizontal
    }, {
      'ffe-description-list--md': medium
    }, {
      'ffe-description-list--lg': large
    }, className)
  }, rest));
};

DescriptionList.propTypes = {
  /** List items */
  children: propTypes.node.isRequired,

  /** Any extra classes */
  className: propTypes.string,

  /** Medium list. Can't be used with `large` prop */
  medium: propTypes.bool,

  /** Large list. Can't be used with `medium` prop */
  large: propTypes.bool,

  /** Displays dts and dds inline*/
  horizontal: propTypes.bool
};
var DescriptionList$1 = DescriptionList;

var _excluded$2 = ["children", "className"];

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DescriptionListMultiCol = function DescriptionListMultiCol(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties$2(_ref, _excluded$2);

  var pairs = [];
  react.Children.forEach(children, function (child, i) {
    var j = i % 2;

    if (j === 0) {
      pairs.push([]);
    }

    pairs[Math.floor(i / 2)][j] = child;
  });
  return /*#__PURE__*/react.createElement("div", _extends$2({
    className: classnames('ffe-description-list-multicol', className)
  }, rest), pairs.map(function (pair, idx) {
    return /*#__PURE__*/react.createElement("dl", {
      className: "ffe-description-list-multicol__avoid-break",
      key: idx
    }, pair[0], pair[1]);
  }));
};

DescriptionListMultiCol.propTypes = {
  /** List items */
  children: propTypes.node.isRequired,

  /** Any extra classes */
  className: propTypes.string
};
var DescriptionListMultiCol$1 = DescriptionListMultiCol;

var _excluded$1 = ["className"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DescriptionListTerm = function DescriptionListTerm(props) {
  var className = props.className,
      rest = _objectWithoutProperties$1(props, _excluded$1);

  return /*#__PURE__*/react.createElement("dt", _extends$1({
    className: classnames('ffe-description-list__term', className)
  }, rest));
};

DescriptionListTerm.propTypes = {
  children: propTypes.node,

  /** Any extra classes */
  className: propTypes.string
};
var DescriptionListTerm$1 = DescriptionListTerm;

var _excluded = ["className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DescriptionListDescription = function DescriptionListDescription(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement("dd", _extends({
    className: classnames('ffe-description-list__description', className)
  }, rest));
};

DescriptionListDescription.propTypes = {
  children: propTypes.node,

  /** Any extra classes */
  className: propTypes.string
};
var DescriptionListDescription$1 = DescriptionListDescription;

export { BulletList$1 as BulletList, BulletListItem$1 as BulletListItem, CheckList$1 as CheckList, CheckListItem$1 as CheckListItem, DescriptionList$1 as DescriptionList, DescriptionListDescription$1 as DescriptionListDescription, DescriptionListMultiCol$1 as DescriptionListMultiCol, DescriptionListTerm$1 as DescriptionListTerm, NumberedList$1 as NumberedList, NumberedListItem$1 as NumberedListItem, StylizedNumberedList$1 as StylizedNumberedList, StylizedNumberedListItem$1 as StylizedNumberedListItem };
