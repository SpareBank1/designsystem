function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from '../../../../../pkg/react.js';
import { func, string } from '../../../../../pkg/prop-types.js';
import { v4 as uuid } from '../../../../../pkg/uuid.js';
import ClickableDate from './ClickableDate.js';
import NonClickableDate from './NonClickableDate.js';
import Header from './Header.js';
import KeyCode from '../util/keyCode.js';
import simpleDate from '../datelogic/simpledate.js';
import simpleCalendar from '../datelogic/simplecalendar.js';

var Calendar = /*#__PURE__*/function (_Component) {
  _inherits(Calendar, _Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "clickableDateRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "prevMonthButtonElementRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "nextMonthButtonElementRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "focusTrap", function (event) {
      var activeElement = document.activeElement;

      if (event.keyCode === KeyCode.TAB) {
        event.preventDefault();

        if (event.shiftKey) {
          if (activeElement === _this.clickableDateRef.current) {
            _this.nextMonthButtonElementRef.current.focus();

            _this.setState({
              isFocusingHeader: true
            });
          }

          if (activeElement === _this.nextMonthButtonElementRef.current) {
            _this.prevMonthButtonElementRef.current.focus();
          }

          if (activeElement === _this.prevMonthButtonElementRef.current) {
            _this.clickableDateRef.current.focus();

            _this.setState({
              isFocusingHeader: false
            });

            _this.forceUpdate();
          }
        } else {
          if (activeElement === _this.clickableDateRef.current) {
            _this.prevMonthButtonElementRef.current.focus();

            _this.setState({
              isFocusingHeader: true
            });
          }

          if (activeElement === _this.prevMonthButtonElementRef.current) {
            _this.nextMonthButtonElementRef.current.focus();
          }

          if (activeElement === _this.nextMonthButtonElementRef.current) {
            _this.clickableDateRef.current.focus();

            _this.setState({
              isFocusingHeader: false
            });

            _this.forceUpdate();
          }
        }
      }
    });

    _this.state = {
      calendar: simpleCalendar(simpleDate.fromString(props.selectedDate), props.minDate, props.maxDate, props.language),
      isFocusingHeader: false
    };
    _this.datepickerId = "ffe-calendar-".concat(uuid());
    _this.keyDown = _this.keyDown.bind(_assertThisInitialized(_this));
    _this.mouseClick = _this.mouseClick.bind(_assertThisInitialized(_this));
    _this.nextMonth = _this.nextMonth.bind(_assertThisInitialized(_this));
    _this.previousMonth = _this.previousMonth.bind(_assertThisInitialized(_this));
    _this.focusHandler = _this.focusHandler.bind(_assertThisInitialized(_this));
    _this.wrapperBlurHandler = _this.wrapperBlurHandler.bind(_assertThisInitialized(_this));
    _this.renderDate = _this.renderDate.bind(_assertThisInitialized(_this));
    _this.renderWeek = _this.renderWeek.bind(_assertThisInitialized(_this));
    _this.renderDay = _this.renderDay.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidUpdate",
    value:
    /* eslint-disable react/no-did-update-set-state */
    function componentDidUpdate(prevProps) {
      if (prevProps.selectedDate !== this.props.selectedDate) {
        this.setState({
          calendar: simpleCalendar(simpleDate.fromString(this.props.selectedDate), this.props.minDate, this.props.maxDate, this.props.language)
        }, this.forceUpdate);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.selectedDate !== this.props.selectedDate;
    }
  }, {
    key: "keyDown",
    value: function keyDown(event) {
      var calendar = this.state.calendar;
      var scrollableEvents = [KeyCode.PGUP, KeyCode.PGDWN, KeyCode.END, KeyCode.HOME, KeyCode.LEFT, KeyCode.UP, KeyCode.RIGHT, KeyCode.DOWN];

      if (scrollableEvents.includes(event.which)) {
        event.preventDefault();
        this.forceDateFocus = true;
      }

      switch (event.which) {
        case KeyCode.ENTER:
          if (calendar.isDateWithinDateRange(calendar.focusedDate)) {
            calendar.selectFocusedDate();
            this.props.onDatePicked(calendar.selected());
          }

          event.preventDefault();
          break;

        case KeyCode.ESC:
          this.props.escKeyHandler(event);
          break;

        case KeyCode.TAB:
          break;

        case KeyCode.PGUP:
          if (event.altKey) {
            calendar.previousYear();
          } else {
            calendar.previousMonth();
          }

          break;

        case KeyCode.PGDWN:
          if (event.altKey) {
            calendar.nextYear();
          } else {
            calendar.nextMonth();
          }

          break;

        case KeyCode.END:
          calendar.lastDateOfMonth();
          break;

        case KeyCode.HOME:
          calendar.firstDateOfMonth();
          break;

        case KeyCode.LEFT:
          calendar.previousDay();
          break;

        case KeyCode.UP:
          calendar.previousWeek();
          break;

        case KeyCode.RIGHT:
          calendar.nextDay();
          break;

        case KeyCode.DOWN:
          calendar.nextWeek();
          break;

        default:
          return;
      }

      this.forceUpdate();
    }
  }, {
    key: "mouseClick",
    value: function mouseClick(date) {
      var pickedDate = simpleDate.fromTimestamp(date.timestamp);

      if (this.state.calendar.isDateWithinDateRange(pickedDate)) {
        this.state.calendar.selectTimestamp(date.timestamp);
        this.props.onDatePicked(this.state.calendar.selected());
      }
    }
  }, {
    key: "focusHandler",
    value: function focusHandler(evt) {
      if (this._wrapper && this._wrapper.contains(evt.target)) {
        this.forceDateFocus = true;
      }
    }
  }, {
    key: "wrapperBlurHandler",
    value: function wrapperBlurHandler() {
      this.forceDateFocus = false;
    }
  }, {
    key: "nextMonth",
    value: function nextMonth(evt) {
      evt.preventDefault();
      this.state.calendar.nextMonth();
      this.forceUpdate();
    }
  }, {
    key: "previousMonth",
    value: function previousMonth(evt) {
      evt.preventDefault();
      this.state.calendar.previousMonth();
      this.forceUpdate();
    }
  }, {
    key: "renderDate",
    value: function renderDate(date, index) {
      var calendar = this.state.calendar;

      if (date.isNonClickableDate) {
        return /*#__PURE__*/React.createElement(NonClickableDate, {
          key: date.date,
          date: date
        });
      }

      return /*#__PURE__*/React.createElement(ClickableDate, {
        date: date,
        month: calendar.focusedMonth(),
        year: calendar.focusedYear(),
        headers: "header__".concat(this.datepickerId, "__").concat(index),
        key: date.date,
        onClick: this.mouseClick,
        language: this.props.language,
        dateButtonRef: date.isFocus ? this.clickableDateRef : undefined,
        isFocusingHeader: this.state.isFocusingHeader
      });
    }
  }, {
    key: "renderWeek",
    value: function renderWeek(week) {
      return /*#__PURE__*/React.createElement("tr", {
        key: "week-".concat(week.number),
        role: "presentation"
      }, week.dates.map(this.renderDate));
    }
  }, {
    key: "renderDay",
    value: function renderDay(day, index) {
      return /*#__PURE__*/React.createElement("th", {
        "aria-label": day.name,
        className: "ffe-calendar__weekday",
        id: "header__".concat(this.datepickerId, "__").concat(index),
        key: day.name
      }, /*#__PURE__*/React.createElement("span", {
        title: day.name
      }, day.shortName));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var calendar = this.state.calendar;
      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

      return /*#__PURE__*/React.createElement("div", {
        role: "dialog",
        "aria-modal": true
      }, /*#__PURE__*/React.createElement("div", {
        ref: function ref(c) {
          _this2._wrapper = c;
        },
        "aria-labelledby": "".concat(this.datepickerId, "-title"),
        className: this.props.calendarClassName || 'ffe-calendar',
        onFocus: this.focusHandler,
        onBlur: this.wrapperBlurHandler,
        role: "application",
        onKeyDown: this.focusTrap
      }, /*#__PURE__*/React.createElement(Header, {
        datepickerId: this.datepickerId,
        month: calendar.focusedMonth(),
        nextMonthHandler: this.nextMonth,
        nextMonthLabel: calendar.nextName(),
        previousMonthHandler: this.previousMonth,
        previousMonthLabel: calendar.previousName(),
        year: calendar.focusedYear(),
        prevMonthButtonElement: this.prevMonthButtonElementRef,
        nextMonthButtonElement: this.nextMonthButtonElementRef
      }), /*#__PURE__*/React.createElement("table", {
        className: "ffe-calendar__grid",
        onKeyDown: this.keyDown,
        role: "presentation"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, calendar.dayNames().map(this.renderDay))), /*#__PURE__*/React.createElement("tbody", null, calendar.visibleDates().map(this.renderWeek)))));
      /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    }
  }]);

  return Calendar;
}(Component);

export { Calendar as default };
Calendar.propTypes = {
  calendarClassName: string,
  escKeyHandler: func,
  language: string.isRequired,
  maxDate: string,
  minDate: string,
  onBlurHandler: func,
  onDatePicked: func.isRequired,
  selectedDate: string
};