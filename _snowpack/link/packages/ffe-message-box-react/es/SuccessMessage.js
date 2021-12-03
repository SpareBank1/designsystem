function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import { node, string } from '../../../../pkg/prop-types.js';
import HakeIkon from '../../ffe-icons-react/lib/hake-ikon.js';
import BaseMessage from './BaseMessage.js';

var SuccessMessage = function SuccessMessage(props) {
  return /*#__PURE__*/React.createElement(BaseMessage, _extends({
    type: "success",
    icon: /*#__PURE__*/React.createElement(HakeIkon, null)
  }, props));
};

SuccessMessage.propTypes = {
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
  title: node
};
export default SuccessMessage;