function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import HakeIkon from '../../ffe-icons-react/lib/hake-ikon.js';
import SystemMessage from './SystemMessage.js';
export default function SystemSuccessMessage(props) {
  return /*#__PURE__*/React.createElement(SystemMessage, _extends({
    modifier: "success",
    icon: /*#__PURE__*/React.createElement(HakeIkon, null)
  }, props));
}