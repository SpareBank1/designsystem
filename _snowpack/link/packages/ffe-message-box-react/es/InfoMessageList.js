import React from '../../../../pkg/react.js';
import { string, node } from '../../../../pkg/prop-types.js';
export var InfoMessageListItem = function InfoMessageListItem(props) {
  return /*#__PURE__*/React.createElement("li", null, props.href && /*#__PURE__*/React.createElement("a", {
    href: props.href,
    className: "ffe-message-box__link"
  }, props.children), !props.href && props.children);
};
InfoMessageListItem.propTypes = {
  href: string,
  children: string.isRequired
};
export var InfoMessageList = function InfoMessageList(props) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "ffe-message-box__list"
  }, props.children);
};
InfoMessageList.propTypes = {
  children: node.isRequired
};