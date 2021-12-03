import React from '../../../../../pkg/react.js';
import { func, number, object, string } from '../../../../../pkg/prop-types.js';
import ChevronIkon from '../../../ffe-icons-react/lib/chevron-ikon.js';
export default function Header(props) {
  var datepickerId = props.datepickerId,
      month = props.month,
      nextMonthHandler = props.nextMonthHandler,
      nextMonthLabel = props.nextMonthLabel,
      previousMonthHandler = props.previousMonthHandler,
      previousMonthLabel = props.previousMonthLabel,
      year = props.year,
      prevMonthButtonElement = props.prevMonthButtonElement,
      nextMonthButtonElement = props.nextMonthButtonElement;
  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-calendar__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-calendar__header-inner-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ffe-calendar__month-nav ffe-calendar__previous",
    onClick: previousMonthHandler,
    "aria-label": previousMonthLabel,
    type: "button",
    ref: prevMonthButtonElement,
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(ChevronIkon, {
    className: "ffe-calendar__icon-prev"
  })), /*#__PURE__*/React.createElement("header", {
    "aria-live": "polite",
    className: "ffe-calendar__title",
    id: "".concat(datepickerId, "-title")
  }, /*#__PURE__*/React.createElement("div", {
    id: "".concat(datepickerId, "__month-label")
  }, /*#__PURE__*/React.createElement("span", {
    className: "ffe-calendar__month"
  }, month), /*#__PURE__*/React.createElement("span", {
    className: "ffe-calendar__year"
  }, year))), /*#__PURE__*/React.createElement("button", {
    className: "ffe-calendar__month-nav ffe-calendar__next",
    onClick: nextMonthHandler,
    "aria-label": nextMonthLabel,
    type: "button",
    ref: nextMonthButtonElement,
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(ChevronIkon, {
    className: "ffe-calendar__icon-next"
  }))));
}
Header.propTypes = {
  datepickerId: string.isRequired,
  month: string.isRequired,
  nextMonthHandler: func.isRequired,
  nextMonthLabel: string.isRequired,
  previousMonthHandler: func.isRequired,
  previousMonthLabel: string.isRequired,
  year: number.isRequired,
  prevMonthButtonElement: object.isRequired,
  nextMonthButtonElement: object.isRequired
};