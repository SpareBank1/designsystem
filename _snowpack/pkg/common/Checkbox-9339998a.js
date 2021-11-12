import { r as react } from './index-09a9c4ff.js';
import { p as propTypes } from './index-8de1816d.js';
import { c as classnames } from './index-5100710e.js';
import { v as v4 } from './v4-a40bed11.js';

var _excluded = ["children", "hiddenLabel", "inline", "noMargins"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Checkbox = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var children = props.children,
      hiddenLabel = props.hiddenLabel,
      inline = props.inline,
      noMargins = props.noMargins,
      rest = _objectWithoutProperties(props, _excluded);

  var id = props.id || "checkbox-".concat(v4());
  var labelProps = {
    className: classnames({
      'ffe-checkbox': true,
      'ffe-checkbox--inline': inline,
      'ffe-checkbox--no-margin': noMargins,
      'ffe-checkbox--hidden-label': hiddenLabel
    }),
    htmlFor: id
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", _extends({
    ref: ref,
    className: "ffe-hidden-checkbox",
    id: id,
    type: "checkbox"
  }, rest)), typeof children === 'function' ? children(labelProps) :
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-for
  react.createElement("label", labelProps, !hiddenLabel && children));
});
Checkbox.propTypes = {
  /** Removes vertical margins from the checkbox */
  noMargins: propTypes.bool,

  /** If you plan to render the checkbox without a visible label */
  hiddenLabel: propTypes.bool,

  /** Override the automatically generated ID */
  id: propTypes.string,
  inline: propTypes.bool,

  /** The label for the checkbox */
  children: propTypes.oneOfType([propTypes.node, propTypes.func])
};
Checkbox.defaultProps = {
  inline: true
};
var Checkbox$1 = Checkbox;

export { Checkbox$1 as C };
