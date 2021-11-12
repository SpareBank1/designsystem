import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import '../common/_commonjsHelpers-4f955397.js';

var _excluded$3 = ["className", "selected", "condensed"];

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Tab(props) {
  var className = props.className,
      selected = props.selected,
      condensed = props.condensed,
      rest = _objectWithoutProperties$3(props, _excluded$3);

  return /*#__PURE__*/react.createElement("button", _extends$3({
    role: "tab",
    "aria-selected": selected,
    className: classnames('ffe-tab', {
      'ffe-tab--selected': selected
    }, {
      'ffe-tab--condensed': condensed
    }, className)
  }, rest));
}
Tab.propTypes = {
  /** Selected tab button */
  selected: propTypes.bool,

  /** Compact style tab button */
  condensed: propTypes.bool,

  /** Additional css classes */
  className: propTypes.string,

  /** Id of the element it controls */
  'aria-controls': propTypes.string.isRequired
};

var _excluded$2 = ["className", "selected", "ghost", "condensed"];

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function TabButton(props) {
  var className = props.className,
      selected = props.selected,
      ghost = props.ghost,
      condensed = props.condensed,
      rest = _objectWithoutProperties$2(props, _excluded$2);

  return /*#__PURE__*/react.createElement("button", _extends$2({
    type: "button",
    role: "tab",
    "aria-selected": selected,
    className: classnames('ffe-tab-button', {
      'ffe-tab-button--selected': selected
    }, {
      'ffe-tab-button--ghost': ghost
    }, {
      'ffe-tab-button--condensed': condensed
    }, className)
  }, rest));
}
TabButton.propTypes = {
  /** Selected tab button */
  selected: propTypes.bool,

  /** Transparent background style tab button */
  ghost: propTypes.bool,

  /** Compact style tab button */
  condensed: propTypes.bool,

  /** Additional css classes */
  className: propTypes.string,

  /** Id of the element it controls */
  'aria-controls': propTypes.string.isRequired
};

var _excluded$1 = ["className", "thin"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function TabGroup(_ref) {
  var className = _ref.className,
      thin = _ref.thin,
      rest = _objectWithoutProperties$1(_ref, _excluded$1);

  return /*#__PURE__*/react.createElement("div", _extends$1({
    className: classnames('ffe-tab-group', {
      'ffe-tab-group--thin': thin
    }, className),
    role: "tablist"
  }, rest));
}
TabGroup.propTypes = {
  /** TabGroup contents - a group of Tabs */
  children: propTypes.node.isRequired,

  /** Additional css classes */
  className: propTypes.string,

  /** Applies the thin modifier to remove margins */
  thin: propTypes.bool
};

var _excluded = ["className", "thin"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function TabButtonGroup(_ref) {
  var className = _ref.className,
      thin = _ref.thin,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: classnames('ffe-tab-button-group', {
      'ffe-tab-button-group--thin': thin
    }, className),
    role: "tablist"
  }, rest));
}
TabButtonGroup.propTypes = {
  /** TabGroup contents - a group of Tabs */
  children: propTypes.node.isRequired,

  /** Additional css classes */
  className: propTypes.string,

  /** Applies the thin modifier to remove margins */
  thin: propTypes.bool
};

export { Tab, TabButton, TabButtonGroup, TabGroup };
