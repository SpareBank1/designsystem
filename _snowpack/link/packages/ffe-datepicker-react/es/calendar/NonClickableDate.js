import React from '../../../../../pkg/react.js';
import { shape, number } from '../../../../../pkg/prop-types.js';
export default function NonClickableDate(props) {
  return /*#__PURE__*/React.createElement("td", {
    "aria-disabled": "true",
    "aria-selected": "false",
    className: "ffe-calendar__day",
    key: props.date.timestamp,
    role: "button"
  });
}
NonClickableDate.propTypes = {
  date: shape({
    timestamp: number.isRequired
  }).isRequired
};