var _excluded = ["className", "inline", "innerRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, node, string, object, func, shape, oneOfType } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';

var Dropdown = function Dropdown(props) {
  var className = props.className,
      inline = props.inline,
      innerRef = props.innerRef,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("select", _extends({
    className: classNames('ffe-dropdown', {
      'ffe-dropdown--inline': inline
    }, className),
    ref: innerRef
  }, rest));
};

Dropdown.propTypes = {
  children: node,
  inline: bool,
  className: string,

  /** Ref-setting function, or ref created by useRef, passed to the select element */
  innerRef: oneOfType([func, shape({
    current: object
  })])
};
export default Dropdown;