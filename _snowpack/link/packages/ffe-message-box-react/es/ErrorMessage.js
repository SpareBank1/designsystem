var _excluded = ["alert"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { node, string, bool } from '../../../../pkg/prop-types.js';
import UtropstegnIkon from '../../ffe-icons-react/lib/utropstegn-ikon.js';
import BaseMessage from './BaseMessage.js';

var ErrorMessage = function ErrorMessage(props) {
  var alert = props.alert,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(BaseMessage, _extends({
    type: "error",
    icon: /*#__PURE__*/React.createElement(UtropstegnIkon, {
      "aria-hidden": "true"
    }),
    role: alert ? 'alert' : false
  }, rest));
};

ErrorMessage.defaultProps = {
  alert: true
};
ErrorMessage.propTypes = {
  /** The content of the message box */
  children: node,

  /** Any extra class names to the wrapping DOM node */
  className: string,

  /**
   * Deprecated. Use `children` instead.
   * @deprecated
   */
  content: node,

  /** The icon to show. Has a default value, but can be overridden */
  icon: node,

  /** An optional title for the message */
  title: node,

  /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
  alert: bool
};
export default ErrorMessage;