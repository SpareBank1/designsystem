var _excluded = ["alert"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { func, string, number, node, oneOf, bool } from '../../../../pkg/prop-types.js';
import UtropstegnIkon from '../../ffe-icons-react/lib/utropstegn-ikon.js';
import SystemMessage from './SystemMessage.js';
export default function SystemErrorMessage(props) {
  var alert = props.alert,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(SystemMessage, _extends({
    modifier: "error",
    icon: /*#__PURE__*/React.createElement(UtropstegnIkon, {
      "aria-hidden": "true"
    }),
    role: alert ? 'alert' : false
  }, rest));
}
SystemErrorMessage.defaultProps = {
  animationLengthMs: 300,
  locale: 'nb',
  onClose: function onClose(f) {
    return f;
  },
  alert: true
};
SystemErrorMessage.propTypes = {
  animationLengthMs: number,

  /** The content of the system message */
  children: node.isRequired,

  /** Additional classes added to the surrounding div */
  className: string,

  /** Override the default icon - use with caution! */
  icon: node,

  /** 'nb', 'nn', or 'en' */
  locale: oneOf(['en', 'nb', 'nn']),

  /**
   * The type of system message. Used internally only-
   * @ignore
   **/
  modifier: oneOf(['error', 'info', 'success', 'news']),

  /** Callback for when the system message has been closed (after animation ends) */
  onClose: func,

  /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
  alert: bool
};