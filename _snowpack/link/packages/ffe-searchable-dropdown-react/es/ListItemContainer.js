function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef } from '../../../../pkg/react.js';
import { any, bool, func, object, oneOfType, shape } from '../../../../pkg/prop-types.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';

var ListItemContainer = function ListItemContainer(_ref) {
  var item = _ref.item,
      isHighlighted = _ref.isHighlighted,
      children = _ref.children,
      forwardedRef = _ref.forwardedRef,
      onMouseEnter = _ref.onMouseEnter,
      onClick = _ref.onClick;
  var id = useRef("\xECtem-".concat(uuid()));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    React.createElement("div", {
      id: id.current,
      role: "option",
      onMouseEnter: onMouseEnter,
      "aria-selected": isHighlighted,
      ref: forwardedRef,
      onClick: onClick,
      className: "ffe-searchable-dropdown__list-item-container"
    }, children({
      item: item,
      isHighlighted: isHighlighted
    }))
  );
};

ListItemContainer.propTypes = {
  item: object.isRequired,
  isHighlighted: bool.isRequired,
  children: func.isRequired,
  forwardedRef: oneOfType([func, shape({
    current: any
  })]),
  onMouseEnter: func,
  onClick: func
};
export default /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(ListItemContainer, _extends({}, props, {
    forwardedRef: ref
  }));
});