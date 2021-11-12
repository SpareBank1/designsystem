import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import '../common/_commonjsHelpers-4f955397.js';

var _excluded = ["className", "inline", "innerRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(props) {
  var className = props.className,
      inline = props.inline,
      innerRef = props.innerRef,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement("select", _extends({
    className: classnames('ffe-dropdown', {
      'ffe-dropdown--inline': inline
    }, className),
    ref: innerRef
  }, rest));
};

Dropdown.propTypes = {
  children: propTypes.node,
  inline: propTypes.bool,
  className: propTypes.string,

  /** Ref-setting function, or ref created by useRef, passed to the select element */
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.object
  })])
};
var Dropdown$1 = Dropdown;

export { Dropdown$1 as default };
