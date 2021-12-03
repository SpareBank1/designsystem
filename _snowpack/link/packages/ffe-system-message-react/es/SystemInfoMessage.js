function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import InfoIkon from '../../ffe-icons-react/lib/info-ikon.js';
import SystemMessage from './SystemMessage.js';
export default function SystemInfoMessage(props) {
  return /*#__PURE__*/React.createElement(SystemMessage, _extends({
    modifier: "info",
    icon: /*#__PURE__*/React.createElement(InfoIkon, null)
  }, props));
}