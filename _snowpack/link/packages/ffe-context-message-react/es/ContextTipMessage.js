function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import ContextMessage from './ContextMessage.js';

var ContextTipMessage = function ContextTipMessage(props) {
  return /*#__PURE__*/React.createElement(ContextMessage, _extends({
    messageType: "tip"
  }, props));
};

export default ContextTipMessage;