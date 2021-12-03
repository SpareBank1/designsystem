var _excluded = ["alert"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { number, node, string, bool, element, oneOf, func, object } from '../../../../pkg/prop-types.js';
import acceptedLocales from './locale/accepted-locales.js';
import ContextMessage from './ContextMessage.js';

var ContextErrorMessage = function ContextErrorMessage(props) {
  var alert = props.alert,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(ContextMessage, _extends({
    messageType: "error",
    role: alert ? 'alert' : false
  }, rest));
};

ContextErrorMessage.propTypes = {
  animationLengthMs: number,

  /** The content shown in the context box */
  children: node.isRequired,

  /** Classes are added in addition to the relevant context message classes */
  className: string,

  /** Renders a more compact version of the context message */
  compact: bool,

  /** ID for the children container */
  contentElementId: string,
  header: string,

  /** ID for the header container */
  headerElementId: string,
  icon: element,

  /** Decides the language of the aria-label for the close icon */
  locale: oneOf(acceptedLocales),

  /** Provided by the wrapper component */
  messageType: oneOf(['info', 'tip', 'success', 'error']),

  /** Callback for when the context message has been closed (after the animation) */
  onClose: func,
  showCloseButton: bool,

  /** Styles applied to the outermost element. `height` will be overridden */
  style: object,

  /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
  alert: bool
};
ContextErrorMessage.defaultProps = {
  animationLengthMs: 300,
  compact: false,
  locale: 'nb',
  onClose: function onClose() {},
  showCloseButton: false,
  style: {},
  alert: true
};
export default ContextErrorMessage;