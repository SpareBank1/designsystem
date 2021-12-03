var _excluded = ["className", "immediate", "large"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      immediate = _ref.immediate,
      large = _ref.large,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("span", _extends({
    className: classNames('ffe-loading-spinner', {
      'ffe-loading-spinner--immediate': immediate
    }, {
      'ffe-loading-spinner--large': large
    }, className)
  }, rest));
};

Spinner.propTypes = {
  className: string,
  immediate: bool,
  large: bool
};
Spinner.defaultProps = {
  immediate: false,
  large: false
};
export default Spinner;