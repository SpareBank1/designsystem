var _excluded = ["className", "inline", "textLike", "textRightAlign"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
var Input = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      inline = props.inline,
      textLike = props.textLike,
      textRightAlign = props.textRightAlign,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("input", _extends({
    className: classNames('ffe-input-field', {
      'ffe-input-field--inline': inline
    }, {
      'ffe-input-field--text-like': textLike
    }, {
      'ffe-input-field--text-right-align': textRightAlign
    }, className),
    ref: ref
  }, rest));
});
Input.propTypes = {
  className: string,

  /** Input fields default to `display: block;`. Set this to `true` to apply the inline modifier. */
  inline: bool,

  /** Apply the text-like modifier by setting this to `true`. */
  textLike: bool,

  /** Make the text right aligned */
  textRightAlign: bool
};
export default Input;