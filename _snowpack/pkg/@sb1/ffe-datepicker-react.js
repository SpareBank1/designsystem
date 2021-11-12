import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import { C as ChevronIkon } from '../common/chevron-ikon-e4f7de91.js';
import { v as v4 } from '../common/v4-a40bed11.js';
import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../common/_commonjsHelpers-4f955397.js';

function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf$4(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$4(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$4(this, result); }; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

var ClickableDate = /*#__PURE__*/function (_Component) {
  _inherits$4(ClickableDate, _Component);

  var _super = _createSuper$4(ClickableDate);

  function ClickableDate() {
    _classCallCheck$4(this, ClickableDate);

    return _super.apply(this, arguments);
  }

  _createClass$4(ClickableDate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusIfNeeded();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.focusIfNeeded();
    }
  }, {
    key: "focusIfNeeded",
    value: function focusIfNeeded() {
      var _this$props = this.props,
          date = _this$props.date,
          isFocusingHeader = _this$props.isFocusingHeader,
          dateButtonRef = _this$props.dateButtonRef;

      if (date.isFocus && !isFocusingHeader) {
        dateButtonRef.current.focus();
      }
    }
  }, {
    key: "dateClassName",
    value: function dateClassName() {
      var _this$props2 = this.props,
          date = _this$props2.date,
          isFocusingHeader = _this$props2.isFocusingHeader;
      var isEnabled = date.isEnabled,
          isFocus = date.isFocus,
          isSelected = date.isSelected,
          isToday = date.isToday;
      return classnames({
        'ffe-calendar__date': true,
        'ffe-calendar__date--today': isToday,
        'ffe-calendar__date--focus': isFocus && !isFocusingHeader,
        'ffe-calendar__date--disabled': !isEnabled,
        'ffe-calendar__date--selected': isSelected,
        'ffe-calendar__date--disabled-focus': !isEnabled && isFocus
      });
    }
  }, {
    key: "tabIndex",
    value: function tabIndex() {
      return this.props.date.isFocus ? 0 : -1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          date = _this$props3.date,
          headers = _this$props3.headers,
          _onClick = _this$props3.onClick,
          language = _this$props3.language,
          dateButtonRef = _this$props3.dateButtonRef,
          month = _this$props3.month,
          year = _this$props3.year;
      var monthName = language === 'en' ? month : month.toLowerCase();
      return /*#__PURE__*/react.createElement("td", {
        className: "ffe-calendar__day",
        headers: headers,
        role: "button",
        ref: dateButtonRef,
        "aria-disabled": !date.isEnabled,
        "aria-selected": date.isSelected,
        "aria-label": "".concat(date.date, ". ").concat(monthName, " ").concat(year),
        tabIndex: this.tabIndex(),
        onClick: function onClick() {
          return _onClick(date);
        }
      }, /*#__PURE__*/react.createElement("span", {
        className: this.dateClassName(),
        "aria-hidden": "true"
      }, date.date));
    }
  }]);

  return ClickableDate;
}(react.Component);
ClickableDate.propTypes = {
  date: propTypes.shape({
    date: propTypes.oneOfType([propTypes.func, propTypes.number]),
    isEnabled: propTypes.bool,
    isFocus: propTypes.bool,
    isSelected: propTypes.bool,
    isToday: propTypes.bool
  }).isRequired,
  month: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  headers: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  language: propTypes.string.isRequired,
  dateButtonRef: propTypes.object,
  isFocusingHeader: propTypes.bool.isRequired
};

function NonClickableDate(props) {
  return /*#__PURE__*/react.createElement("td", {
    "aria-disabled": "true",
    "aria-selected": "false",
    className: "ffe-calendar__day",
    key: props.date.timestamp,
    role: "button"
  });
}
NonClickableDate.propTypes = {
  date: propTypes.shape({
    timestamp: propTypes.number.isRequired
  }).isRequired
};

function Header(props) {
  var datepickerId = props.datepickerId,
      month = props.month,
      nextMonthHandler = props.nextMonthHandler,
      nextMonthLabel = props.nextMonthLabel,
      previousMonthHandler = props.previousMonthHandler,
      previousMonthLabel = props.previousMonthLabel,
      year = props.year,
      prevMonthButtonElement = props.prevMonthButtonElement,
      nextMonthButtonElement = props.nextMonthButtonElement;
  return /*#__PURE__*/react.createElement("div", {
    className: "ffe-calendar__header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-calendar__header-inner-wrapper"
  }, /*#__PURE__*/react.createElement("button", {
    className: "ffe-calendar__month-nav ffe-calendar__previous",
    onClick: previousMonthHandler,
    "aria-label": previousMonthLabel,
    type: "button",
    ref: prevMonthButtonElement,
    tabIndex: -1
  }, /*#__PURE__*/react.createElement(ChevronIkon, {
    className: "ffe-calendar__icon-prev"
  })), /*#__PURE__*/react.createElement("header", {
    "aria-live": "polite",
    className: "ffe-calendar__title",
    id: "".concat(datepickerId, "-title")
  }, /*#__PURE__*/react.createElement("div", {
    id: "".concat(datepickerId, "__month-label")
  }, /*#__PURE__*/react.createElement("span", {
    className: "ffe-calendar__month"
  }, month), /*#__PURE__*/react.createElement("span", {
    className: "ffe-calendar__year"
  }, year))), /*#__PURE__*/react.createElement("button", {
    className: "ffe-calendar__month-nav ffe-calendar__next",
    onClick: nextMonthHandler,
    "aria-label": nextMonthLabel,
    type: "button",
    ref: nextMonthButtonElement,
    tabIndex: -1
  }, /*#__PURE__*/react.createElement(ChevronIkon, {
    className: "ffe-calendar__icon-next"
  }))));
}
Header.propTypes = {
  datepickerId: propTypes.string.isRequired,
  month: propTypes.string.isRequired,
  nextMonthHandler: propTypes.func.isRequired,
  nextMonthLabel: propTypes.string.isRequired,
  previousMonthHandler: propTypes.func.isRequired,
  previousMonthLabel: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  prevMonthButtonElement: propTypes.object.isRequired,
  nextMonthButtonElement: propTypes.object.isRequired
};

var KeyCode = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  PGUP: 33,
  PGDWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var dateErrorTypes = {
  INVALID_DATE_FORMAT: 'INVALID_DATE_FORMAT',
  INVALID_DATE: 'INVALID_DATE',
  MAX_DATE: 'MAX_DATE',
  MIN_DATE: 'MIN_DATE'
};

var dateRegex = /^(\d{1,2})(\.| |-|\/)?(\d{0,2})\2?(\d{0,2}(\d{2})?)$/;
function validateDate(string) {
  return dateRegex.exec(string);
}

function _construct$1(Parent, args, Class) { if (_isNativeReflectConstruct$5()) { _construct$1 = Reflect.construct; } else { _construct$1 = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf$5(instance, Class.prototype); return instance; }; } return _construct$1.apply(null, arguments); }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function isDate(date) {
  return !!date && _typeof$4(date) === 'object' && Object.prototype.toString.call(date) === '[object Date]';
}

function SimpleDate(date) {
  if (isDate(date)) {
    this.internalDate = date;
  } else {
    this.internalDate = new Date();
  }
}

function SimpleDateFactory() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct$1(SimpleDate, args);
} // Constructors

SimpleDateFactory.today = function today() {
  return new SimpleDate();
};

function beforeYear(year, yearLimit) {
  return parseInt(year, 10) < yearLimit;
}
/*
  If given a one- or two-digit year we assume this century.
  E.g: 01.01.17 will yield 01.01.2017, not 01.01.1917 (JS default)
  Else they'll have to use 4-digit year.
*/


function deriveOneOrTwoDigitYear(year) {
  var yearDate = new Date(year, 0);
  var fullYear = yearDate.getFullYear();

  if (beforeYear(fullYear, 2000)) {
    return yearDate.getFullYear() + 100;
  }

  return yearDate.getFullYear();
}
/*
  If given a three-digit year we assume this millennium.
  E.g: 0101017 will yield 01.01.2017, or 0101117 01.01.2117
  Else they'll have to use 4-digit year.
*/


function deriveThreeDigitYear(year) {
  return "2".concat(year);
}

var noop = function noop() {};

SimpleDateFactory.fromString = function fromString(string) {
  var onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
  var match = validateDate(string);

  if (!match) {
    onError(dateErrorTypes.INVALID_DATE_FORMAT);
    return null;
  }

  var date = match[1];
  var month = match[3];
  var year = match[4];

  if (year.length === 1 || year.length === 2) {
    year = deriveOneOrTwoDigitYear(year);
  }

  if (year.length === 3) {
    year = deriveThreeDigitYear(year);
  } // If no year and/or month is input, use todays month and/or year


  var today = new Date();

  if (!month) {
    month = today.getMonth() + 1;
  }

  if (!year) {
    year = today.getFullYear();
  }

  var newDate = new SimpleDate(new Date(year, month - 1, date));

  if (newDate.date() !== date * 1 || newDate.month() + 1 !== month * 1 || newDate.year() !== year * 1) {
    onError(dateErrorTypes.INVALID_DATE);
    return null;
  }

  onSuccess(newDate);
  return newDate;
};

SimpleDateFactory.fromTimestamp = function fromTimestamp(timestamp) {
  return new SimpleDate(new Date(timestamp));
};

SimpleDate.prototype.setTimestamp = function setTimestamp(timestamp) {
  this.internalDate = new Date(timestamp);
};

SimpleDate.prototype.setDate = function setDate(date) {
  this.internalDate = new Date(this.year(), this.month(), date);
};

SimpleDate.prototype.setMonth = function setMonth(month) {
  this.internalDate = new Date(this.year(), month, this.date());
};

SimpleDate.prototype.setYear = function setYear(year) {
  this.internalDate = new Date(year, this.month(), this.date());
};

SimpleDate.prototype.setFullDate = function setFullDate(year, month, date) {
  this.internalDate = new Date(year, month, date);
};

function daysInMonthInternal(year, month) {
  return 32 - new Date(year, month, 32).getDate();
}

SimpleDate.prototype.adjust = function adjust(period, offset) {
  var date = period === 'D' ? this.date() + offset : this.date();
  var month = period === 'M' ? this.month() + offset : this.month();
  var year = period === 'Y' ? this.year() + offset : this.year();

  if (period !== 'D') {
    date = Math.max(1, Math.min(date, daysInMonthInternal(year, month)));
  }

  this.internalDate = new Date(year, month, date);
};

SimpleDate.prototype.daysInMonth = function daysInMonth() {
  return daysInMonthInternal(this.year(), this.month());
};

SimpleDate.prototype.day = function day() {
  return this.internalDate.getDay();
};

SimpleDate.prototype.date = function date() {
  return this.internalDate.getDate();
};

SimpleDate.prototype.month = function month() {
  return this.internalDate.getMonth();
};

SimpleDate.prototype.year = function year() {
  return this.internalDate.getFullYear();
};

SimpleDate.prototype.timestamp = function timestamp() {
  return this.internalDate.valueOf();
};

SimpleDate.prototype.equal = function equal(other) {
  return this.date() === other.date() && this.month() === other.month() && this.year() === other.year();
};

SimpleDate.prototype.isBefore = function isBefore(other) {
  return this.timestamp() < other.timestamp();
};

SimpleDate.prototype.isAfter = function isAfter(other) {
  return this.timestamp() > other.timestamp();
};

SimpleDate.prototype.clone = function clone() {
  var date = new Date(this.year(), this.month(), this.date());
  return new SimpleDate(date);
};

SimpleDate.prototype.format = function format() {
  var day = this.date() < 10 ? "0".concat(this.date()) : this.date();
  var normalizedMonthNumber = this.month() + 1;
  var month = normalizedMonthNumber < 10 ? "0".concat(normalizedMonthNumber) : normalizedMonthNumber;
  return "".concat(day, ".").concat(month, ".").concat(this.year());
};

var en = {
  DAY_1_SHORT: 'Mon',
  DAY_2_SHORT: 'Tue',
  DAY_3_SHORT: 'Wed',
  DAY_4_SHORT: 'Thu',
  DAY_5_SHORT: 'Fri',
  DAY_6_SHORT: 'Sat',
  DAY_0_SHORT: 'Sun',
  DAY_1: 'Monday',
  DAY_2: 'Tuesday',
  DAY_3: 'Wednesday',
  DAY_4: 'Thursday',
  DAY_5: 'Friday',
  DAY_6: 'Saturday',
  DAY_0: 'Sunday',
  MONTH_1_SHORT: 'Jan',
  MONTH_2_SHORT: 'Feb',
  MONTH_3_SHORT: 'Mar',
  MONTH_4_SHORT: 'Apr',
  MONTH_5_SHORT: 'May',
  MONTH_6_SHORT: 'Jun',
  MONTH_7_SHORT: 'Jul',
  MONTH_8_SHORT: 'Aug',
  MONTH_9_SHORT: 'Sep',
  MONTH_10_SHORT: 'Oct',
  MONTH_11_SHORT: 'Nov',
  MONTH_12_SHORT: 'Dec',
  MONTH_1: 'January',
  MONTH_2: 'February',
  MONTH_3: 'March',
  MONTH_4: 'April',
  MONTH_5: 'May',
  MONTH_6: 'June',
  MONTH_7: 'July',
  MONTH_8: 'August',
  MONTH_9: 'September',
  MONTH_10: 'October',
  MONTH_11: 'November',
  MONTH_12: 'December',
  PREVIOUS: 'Previous',
  NEXT: 'Next',
  PREVIOUS_SHORT: 'Prev',
  NEXT_SHORT: 'Next',
  PREVIOUS_MONTH: 'Previous month',
  NEXT_MONTH: 'Next month',
  FIRST_DAY_OF_WEEK: 0,
  INVALID_DATE_FORMAT: 'Date must be in this format: dd.mm.yyyy',
  INVALID_DATE: 'Invalid date',
  MIN_DATE: 'Given date is too far back',
  MAX_DATE: 'Given date is too far ahead',
  CHOOSE_DATE: 'Choose date',
  CHANGE_DATE: 'Change date',
  CHOSEN_DATE: 'chosen date is',
  DATE_FORMAT: 'dd.mm.yyyy'
};

var nn = {
  DAY_1_SHORT: 'Man',
  DAY_2_SHORT: 'Tir',
  DAY_3_SHORT: 'Ons',
  DAY_4_SHORT: 'Tor',
  DAY_5_SHORT: 'Fre',
  DAY_6_SHORT: 'Lør',
  DAY_0_SHORT: 'Søn',
  DAY_1: 'Mandag',
  DAY_2: 'Tirsdag',
  DAY_3: 'Onsdag',
  DAY_4: 'Torsdag',
  DAY_5: 'Fredag',
  DAY_6: 'Lørdag',
  DAY_0: 'Søndag',
  MONTH_1_SHORT: 'Jan',
  MONTH_2_SHORT: 'Feb',
  MONTH_3_SHORT: 'Mar',
  MONTH_4_SHORT: 'Apr',
  MONTH_5_SHORT: 'Mai',
  MONTH_6_SHORT: 'Jun',
  MONTH_7_SHORT: 'Jul',
  MONTH_8_SHORT: 'Aug',
  MONTH_9_SHORT: 'Sep',
  MONTH_10_SHORT: 'Okt',
  MONTH_11_SHORT: 'Nov',
  MONTH_12_SHORT: 'Des',
  MONTH_1: 'Januar',
  MONTH_2: 'Februar',
  MONTH_3: 'Mars',
  MONTH_4: 'April',
  MONTH_5: 'Mai',
  MONTH_6: 'Juni',
  MONTH_7: 'Juli',
  MONTH_8: 'August',
  MONTH_9: 'September',
  MONTH_10: 'Oktober',
  MONTH_11: 'November',
  MONTH_12: 'Desember',
  PREVIOUS: 'Forrige',
  NEXT: 'Neste',
  PREVIOUS_SHORT: 'Forrige',
  NEXT_SHORT: 'Neste',
  PREVIOUS_MONTH: 'Forrige månad',
  NEXT_MONTH: 'Neste månad',
  FIRST_DAY_OF_WEEK: 1,
  INVALID_DATE_FORMAT: 'Dato må skrives på dette formatet: dd.mm.åååå',
  INVALID_DATE: 'Ugyldig dato',
  MIN_DATE: 'Oppgitt dato er for langt tilbake',
  MAX_DATE: 'Oppgitt dato er for langt frem',
  CHOOSE_DATE: 'Velg dato',
  CHANGE_DATE: 'Endre dato',
  CHOSEN_DATE: 'valt dato er',
  DATE_FORMAT: 'dd.mm.åååå'
};

var nb = {
  DAY_1_SHORT: 'Man',
  DAY_2_SHORT: 'Tir',
  DAY_3_SHORT: 'Ons',
  DAY_4_SHORT: 'Tor',
  DAY_5_SHORT: 'Fre',
  DAY_6_SHORT: 'Lør',
  DAY_0_SHORT: 'Søn',
  DAY_1: 'Mandag',
  DAY_2: 'Tirsdag',
  DAY_3: 'Onsdag',
  DAY_4: 'Torsdag',
  DAY_5: 'Fredag',
  DAY_6: 'Lørdag',
  DAY_0: 'Søndag',
  MONTH_1_SHORT: 'Jan',
  MONTH_2_SHORT: 'Feb',
  MONTH_3_SHORT: 'Mar',
  MONTH_4_SHORT: 'Apr',
  MONTH_5_SHORT: 'Mai',
  MONTH_6_SHORT: 'Jun',
  MONTH_7_SHORT: 'Jul',
  MONTH_8_SHORT: 'Aug',
  MONTH_9_SHORT: 'Sep',
  MONTH_10_SHORT: 'Okt',
  MONTH_11_SHORT: 'Nov',
  MONTH_12_SHORT: 'Des',
  MONTH_1: 'Januar',
  MONTH_2: 'Februar',
  MONTH_3: 'Mars',
  MONTH_4: 'April',
  MONTH_5: 'Mai',
  MONTH_6: 'Juni',
  MONTH_7: 'Juli',
  MONTH_8: 'August',
  MONTH_9: 'September',
  MONTH_10: 'Oktober',
  MONTH_11: 'November',
  MONTH_12: 'Desember',
  PREVIOUS: 'Forrige',
  NEXT: 'Neste',
  PREVIOUS_SHORT: 'Forrige',
  NEXT_SHORT: 'Neste',
  PREVIOUS_MONTH: 'Forrige måned',
  NEXT_MONTH: 'Neste måned',
  FIRST_DAY_OF_WEEK: 1,
  INVALID_DATE_FORMAT: 'Dato må skrives på dette formatet: dd.mm.åååå',
  INVALID_DATE: 'Ugyldig dato',
  MIN_DATE: 'Oppgitt dato er for langt tilbake',
  MAX_DATE: 'Oppgitt dato er for langt frem',
  CHOOSE_DATE: 'Velg dato',
  CHANGE_DATE: 'Endre dato',
  CHOSEN_DATE: 'valgt dato er',
  DATE_FORMAT: 'dd.mm.åååå'
};

var i18n = {
  nb: nb,
  nn: nn,
  en: en
};

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct$4()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf$4(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }
var msInADay = 86400000;
var supportedLocales = ['nb', 'nn', 'en'];

function SimpleCalendar(initialDate, minDate, maxDate, locale) {
  this.locale = supportedLocales.indexOf(locale) !== -1 ? locale : 'nb';
  this.focusedDate = initialDate ? initialDate.clone() : SimpleDateFactory.today();
  this.selectedDate = initialDate ? initialDate.clone() : initialDate;
  this.minDate = minDate ? SimpleDateFactory.fromString(minDate) : null;
  this.maxDate = maxDate ? SimpleDateFactory.fromString(maxDate) : null; // Settings

  this.firstDay = i18n[this.locale].FIRST_DAY_OF_WEEK;
}

function SimpleCalendarFactory() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(SimpleCalendar, args);
}

function iso8601Week(date) {
  // Clone date
  var checkDate = date.clone(); // Find Thursday of this week starting on Monday

  checkDate.setDate(date.date() + 4 - (date.day() || 7)); // Copy time of Thursday of this week

  var time = checkDate.timestamp(); // Adjust to Jan 1

  checkDate.setMonth(0);
  checkDate.setDate(1);
  var daysSince1Jan = (time - checkDate.timestamp()) / msInADay; // Return the correct weeknumber

  return Math.floor(Math.round(daysSince1Jan / 7) + 1);
}

function firstDayOfMonth(simpledate) {
  var clone = simpledate.clone();
  clone.setDate(1);
  return clone.day();
}

function isDateWithinMinMax(date, minDate, maxDate) {
  if (minDate && date.isBefore(minDate)) {
    return false;
  }

  if (maxDate && date.isAfter(maxDate)) {
    return false;
  }

  return true;
}

SimpleCalendar.prototype.visibleDates = function visibleDates() {
  var result = [];
  var leadDays = (firstDayOfMonth(this.focusedDate) - this.firstDay + 7) % 7;
  var currentDate = this.focusedDate.clone();
  currentDate.setDate(1 - leadDays);
  var rows = Math.ceil((leadDays + this.focusedDate.daysInMonth()) / 7);

  for (var row = 0; row < rows; row++) {
    var week = {
      number: iso8601Week(currentDate),
      dates: []
    };
    result.push(week);

    for (var dayx = 0; dayx < 7; dayx++) {
      var date = {
        date: currentDate.date(),
        timestamp: currentDate.timestamp(),
        isNonClickableDate: currentDate.month() !== this.focusedDate.month(),
        isToday: currentDate.equal(SimpleDateFactory.today()),
        isFocus: currentDate.equal(this.focusedDate),
        isSelected: this.hasSelected() && currentDate.equal(this.selectedDate),
        isEnabled: isDateWithinMinMax(currentDate, this.minDate, this.maxDate)
      };
      week.dates.push(date);
      currentDate.adjust('D', 1);
    }
  }

  return result;
};

SimpleCalendar.prototype.clone = function clone() {};

SimpleCalendar.prototype.focusedMonth = function focusedMonth() {
  return i18n[this.locale]["MONTH_".concat(this.focusedDate.month() + 1)];
};

SimpleCalendar.prototype.focusedYear = function focusedYear() {
  return this.focusedDate.year();
};

SimpleCalendar.prototype.dayNames = function dayNames() {
  var result = [];

  for (var i = this.firstDay; i < this.firstDay + 7; i++) {
    result.push({
      name: i18n[this.locale]["DAY_".concat(i % 7)],
      shortName: i18n[this.locale]["DAY_".concat(i % 7, "_SHORT")]
    });
  }

  return result;
};

SimpleCalendar.prototype.previousName = function prevName() {
  return i18n[this.locale].PREVIOUS_MONTH;
};

SimpleCalendar.prototype.nextName = function nextName() {
  return i18n[this.locale].NEXT_MONTH;
};

SimpleCalendar.prototype.nextYear = function nextYear() {
  this.focusedDate.adjust('Y', 1);
};

SimpleCalendar.prototype.previousYear = function previousYear() {
  this.focusedDate.adjust('Y', -1);
};

SimpleCalendar.prototype.nextMonth = function nextMonth() {
  this.focusedDate.adjust('M', 1);
};

SimpleCalendar.prototype.previousMonth = function previousMonth() {
  this.focusedDate.adjust('M', -1);
};

SimpleCalendar.prototype.nextWeek = function nextWeek() {
  this.focusedDate.adjust('D', 7);
};

SimpleCalendar.prototype.previousWeek = function previousWeek() {
  this.focusedDate.adjust('D', -7);
};

SimpleCalendar.prototype.nextDay = function nextDay() {
  this.focusedDate.adjust('D', 1);
};

SimpleCalendar.prototype.previousDay = function previousDay() {
  this.focusedDate.adjust('D', -1);
};

SimpleCalendar.prototype.firstDateOfMonth = function firstDateOfMonth() {
  this.focusedDate.setDate(1);
};

SimpleCalendar.prototype.lastDateOfMonth = function lastDateOfMonth() {
  this.focusedDate.setDate(this.focusedDate.daysInMonth());
};

SimpleCalendar.prototype.selectFocusedDate = function selectFocusedDate() {
  this.selectedDate = this.focusedDate.clone();
};

SimpleCalendar.prototype.isDateWithinDateRange = function isDateWithinDateRange(date) {
  return isDateWithinMinMax(date, this.minDate, this.maxDate);
};

SimpleCalendar.prototype.selectTimestamp = function selectTimestamp(timestamp) {
  this.focusedDate = SimpleDateFactory.fromTimestamp(timestamp);
  this.selectFocusedDate();
};

SimpleCalendar.prototype.selectDateString = function selectDateString(datestring) {
  var newDate = SimpleDateFactory.fromString(datestring);

  if (!newDate) {
    return;
  }

  this.selectedDate = newDate.clone();
  this.focusedDate = newDate.clone();
};

SimpleCalendar.prototype.hasSelected = function hasSelected() {
  return !!this.selectedDate;
};

SimpleCalendar.prototype.selected = function selected() {
  return this.selectedDate ? this.selectedDate.format() : '';
};

SimpleCalendar.prototype.focused = function focused() {
  return this.focusedDate ? this.focusedDate.format() : '';
};

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar$1 = /*#__PURE__*/function (_Component) {
  _inherits$3(Calendar, _Component);

  var _super = _createSuper$3(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck$3(this, Calendar);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$3(_this), "clickableDateRef", /*#__PURE__*/react.createRef());

    _defineProperty$1(_assertThisInitialized$3(_this), "prevMonthButtonElementRef", /*#__PURE__*/react.createRef());

    _defineProperty$1(_assertThisInitialized$3(_this), "nextMonthButtonElementRef", /*#__PURE__*/react.createRef());

    _defineProperty$1(_assertThisInitialized$3(_this), "focusTrap", function (event) {
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
      calendar: SimpleCalendarFactory(SimpleDateFactory.fromString(props.selectedDate), props.minDate, props.maxDate, props.language),
      isFocusingHeader: false
    };
    _this.datepickerId = "ffe-calendar-".concat(v4());
    _this.keyDown = _this.keyDown.bind(_assertThisInitialized$3(_this));
    _this.mouseClick = _this.mouseClick.bind(_assertThisInitialized$3(_this));
    _this.nextMonth = _this.nextMonth.bind(_assertThisInitialized$3(_this));
    _this.previousMonth = _this.previousMonth.bind(_assertThisInitialized$3(_this));
    _this.focusHandler = _this.focusHandler.bind(_assertThisInitialized$3(_this));
    _this.wrapperBlurHandler = _this.wrapperBlurHandler.bind(_assertThisInitialized$3(_this));
    _this.renderDate = _this.renderDate.bind(_assertThisInitialized$3(_this));
    _this.renderWeek = _this.renderWeek.bind(_assertThisInitialized$3(_this));
    _this.renderDay = _this.renderDay.bind(_assertThisInitialized$3(_this));
    return _this;
  }

  _createClass$3(Calendar, [{
    key: "componentDidUpdate",
    value:
    /* eslint-disable react/no-did-update-set-state */
    function componentDidUpdate(prevProps) {
      if (prevProps.selectedDate !== this.props.selectedDate) {
        this.setState({
          calendar: SimpleCalendarFactory(SimpleDateFactory.fromString(this.props.selectedDate), this.props.minDate, this.props.maxDate, this.props.language)
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
      var pickedDate = SimpleDateFactory.fromTimestamp(date.timestamp);

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
        return /*#__PURE__*/react.createElement(NonClickableDate, {
          key: date.date,
          date: date
        });
      }

      return /*#__PURE__*/react.createElement(ClickableDate, {
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
      return /*#__PURE__*/react.createElement("tr", {
        key: "week-".concat(week.number),
        role: "presentation"
      }, week.dates.map(this.renderDate));
    }
  }, {
    key: "renderDay",
    value: function renderDay(day, index) {
      return /*#__PURE__*/react.createElement("th", {
        "aria-label": day.name,
        className: "ffe-calendar__weekday",
        id: "header__".concat(this.datepickerId, "__").concat(index),
        key: day.name
      }, /*#__PURE__*/react.createElement("span", {
        title: day.name
      }, day.shortName));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var calendar = this.state.calendar;
      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

      return /*#__PURE__*/react.createElement("div", {
        role: "dialog",
        "aria-modal": true
      }, /*#__PURE__*/react.createElement("div", {
        ref: function ref(c) {
          _this2._wrapper = c;
        },
        "aria-labelledby": "".concat(this.datepickerId, "-title"),
        className: this.props.calendarClassName || 'ffe-calendar',
        onFocus: this.focusHandler,
        onBlur: this.wrapperBlurHandler,
        role: "application",
        onKeyDown: this.focusTrap
      }, /*#__PURE__*/react.createElement(Header, {
        datepickerId: this.datepickerId,
        month: calendar.focusedMonth(),
        nextMonthHandler: this.nextMonth,
        nextMonthLabel: calendar.nextName(),
        previousMonthHandler: this.previousMonth,
        previousMonthLabel: calendar.previousName(),
        year: calendar.focusedYear(),
        prevMonthButtonElement: this.prevMonthButtonElementRef,
        nextMonthButtonElement: this.nextMonthButtonElementRef
      }), /*#__PURE__*/react.createElement("table", {
        className: "ffe-calendar__grid",
        onKeyDown: this.keyDown,
        role: "presentation"
      }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, calendar.dayNames().map(this.renderDay))), /*#__PURE__*/react.createElement("tbody", null, calendar.visibleDates().map(this.renderWeek)))));
      /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    }
  }]);

  return Calendar;
}(react.Component);
Calendar$1.propTypes = {
  calendarClassName: propTypes.string,
  escKeyHandler: propTypes.func,
  language: propTypes.string.isRequired,
  maxDate: propTypes.string,
  minDate: propTypes.string,
  onBlurHandler: propTypes.func,
  onDatePicked: propTypes.func.isRequired,
  selectedDate: propTypes.string
};

var Calendar = Calendar$1;

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

var Input = /*#__PURE__*/function (_Component) {
  _inherits$2(Input, _Component);

  var _super = _createSuper$2(Input);

  function Input() {
    _classCallCheck$2(this, Input);

    return _super.apply(this, arguments);
  }

  _createClass$2(Input, [{
    key: "focus",
    value: function focus() {
      this._input.focus();
    }
  }, {
    key: "inputClassNames",
    value: function inputClassNames(extraClassNames) {
      return classnames('ffe-input-field ffe-dateinput__field', extraClassNames);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          ariaInvalid = _this$props.ariaInvalid,
          _this$props$inputProp = _this$props.inputProps,
          inputProps = _this$props$inputProp === void 0 ? {} : _this$props$inputProp,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onKeyDown = _this$props.onKeyDown,
          value = _this$props.value,
          _this$props$language = _this$props.language,
          language = _this$props$language === void 0 ? 'nb' : _this$props$language;
      return /*#__PURE__*/react.createElement("input", _extends({
        "aria-invalid": String(this.props['aria-invalid'] || ariaInvalid),
        maxLength: "10",
        onBlur: onBlur,
        onChange: onChange,
        onKeyDown: onKeyDown,
        ref: function ref(c) {
          _this._input = c;
        },
        "aria-placeholder": i18n[language].DATE_FORMAT,
        value: value
      }, inputProps, {
        className: this.inputClassNames(inputProps.className)
      }));
    }
  }]);

  return Input;
}(react.Component);
Input.propTypes = {
  'aria-invalid': propTypes.string,
  ariaInvalid: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  inputProps: propTypes.shape({
    className: propTypes.string
  }),
  onBlur: propTypes.func,
  onChange: propTypes.func.isRequired,
  onKeyDown: propTypes.func,
  value: propTypes.string.isRequired,
  fullWidth: propTypes.bool,
  language: propTypes.oneOf(['nb', 'nn', 'en'])
};

var DateInput = Input;

var kalenderIkon = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;


var PropTypes = propTypes;
var svg = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m56.3,46.3l0,0c5,0 7.5,-2.5 7.5,-6.3l0,-33.7c0,-3.8 -3.8,-6.3 -7.5,-6.3l0,0c-3.8,0 -7.5,2.5 -7.5,6.3l0,32.5c0,3.7 3.7,7.5 7.5,7.5l0,0zm87.5,0l0,0c5,0 7.5,-2.5 7.5,-6.3l0,-33.7c0,-3.8 -2.5,-6.3 -6.3,-6.3l-1.2,0c-3.8,0 -6.3,2.5 -6.3,6.3l0,32.5c-1.2,3.7 2.5,7.5 6.3,7.5l0,0z" }),
    react.createElement("path", { d: "m85,118.8c2.5,2.5 3.8,2.5 6.3,0l1.2,-1.3c1.3,-1.2 1.3,-2.5 1.3,-2.5l0,0l0,3.8l0,23.7l-7.5,0c-2.5,0 -3.8,1.3 -3.8,3.8l0,3.7c0,2.5 1.3,3.8 3.8,3.8l28.7,0c2.5,0 3.8,-1.3 3.8,-3.8l0,-3.7c0,-2.5 -1.3,-3.8 -3.8,-3.8l-7.5,0l0,-38.7c0,-2.5 -1.2,-3.8 -5,-3.8l-3.7,0c-2.5,0 -3.8,0 -5,1.3l-10,10c-2.5,1.2 -2.5,3.7 0,6.2l1.2,1.3l0,0zm101.3,-95l-16.3,0l0,15c0,13.7 -11.2,25 -25,25l-1.2,0c-13.8,0 -25,-11.3 -25,-25l0,-15l-36.3,0l0,15c0,13.7 -11.2,25 -25,25l-1.2,0c-13.8,0 -25,-11.3 -25,-25l0,-15l-17.5,0c-7.5,0 -13.8,6.2 -13.8,13.7l0,148.8c0,7.5 6.3,13.7 13.8,13.7l172.5,0c7.5,0 13.7,-6.2 13.7,-13.7l0,-148.8c0,-7.5 -6.2,-13.7 -13.7,-13.7l0,0zm-2.5,160l-167.5,0l0,-103.8l166.2,0l0,103.8l1.3,0z" }));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign({}, svg.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon.displayName = 'KalenderIkon';
exports["default"] = Icon;
});

var KalenderIkon = /*@__PURE__*/getDefaultExportFromCjs(kalenderIkon);

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

var Button = /*#__PURE__*/function (_Component) {
  _inherits$1(Button, _Component);

  var _super = _createSuper$1(Button);

  function Button() {
    _classCallCheck$1(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass$1(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          language = _this$props.language,
          onClick = _this$props.onClick,
          buttonRef = _this$props.buttonRef;
      var buttonLabel = validateDate(value) ? "".concat(i18n[language].CHANGE_DATE, ", ").concat(i18n[language].CHOSEN_DATE, " ").concat(value) : i18n[language].CHOOSE_DATE;
      return /*#__PURE__*/react.createElement("button", {
        ref: buttonRef,
        onClick: onClick,
        className: "ffe-datepicker__button",
        "aria-label": buttonLabel,
        type: "button"
      }, /*#__PURE__*/react.createElement(KalenderIkon, {
        className: "ffe-datepicker__icon"
      }));
    }
  }]);

  return Button;
}(react.Component);
Button.propTypes = {
  value: propTypes.string.isRequired,
  language: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  buttonRef: propTypes.object.isRequired
};

var CalendarButton = Button;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Datepicker$1 = /*#__PURE__*/function (_Component) {
  _inherits(Datepicker, _Component);

  var _super = _createSuper(Datepicker);

  function Datepicker(props) {
    var _this;

    _classCallCheck(this, Datepicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buttonRef", /*#__PURE__*/react.createRef());

    _defineProperty(_assertThisInitialized(_this), "debounceCalendar", lodash_debounce(function (value) {
      if (value !== _this.state.lastValidDate && validateDate(value)) {
        _this.setState({
          calendarActiveDate: value,
          lastValidDate: value
        });
      }
    }, 250));

    _this.state = {
      displayDatePicker: false,
      minDate: props.minDate,
      maxDate: props.maxDate,
      lastValidDate: '',
      calendarActiveDate: validateDate(props.value) ? props.value : ''
    };
    _this.datepickerId = v4();
    _this.openCalendar = _this.openCalendar.bind(_assertThisInitialized(_this));
    _this.closeCalendar = _this.closeCalendar.bind(_assertThisInitialized(_this));
    _this.closeCalendarSetInputFocus = _this.closeCalendarSetInputFocus.bind(_assertThisInitialized(_this));
    _this.calendarButtonClickHandler = _this.calendarButtonClickHandler.bind(_assertThisInitialized(_this));
    _this.addFlagOnClickEventClickHandler = _this.addFlagOnClickEventClickHandler.bind(_assertThisInitialized(_this));
    _this.globalClickHandler = _this.globalClickHandler.bind(_assertThisInitialized(_this));
    _this.escKeyHandler = _this.escKeyHandler.bind(_assertThisInitialized(_this));
    _this.datePickedHandler = _this.datePickedHandler.bind(_assertThisInitialized(_this));
    _this.divBlurHandler = _this.divBlurHandler.bind(_assertThisInitialized(_this));
    _this.onInputKeydown = _this.onInputKeydown.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onError = _this.onError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Datepicker, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeGlobalEventListeners();
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var valueChangedAndDatepickerIsToggled = prevProps.value !== this.props.value && prevState.displayDatePicker && !this.state.displayDatePicker;

      if (this.props.minDate && this.props.minDate !== this.state.minDate || this.props.maxDate && this.props.maxDate !== this.state.maxDate) {
        this.setState({
          minDate: this.props.minDate,
          maxDate: this.props.maxDate
        }, this.validateDateIntervals);
      }

      if (valueChangedAndDatepickerIsToggled) {
        this.validateDateIntervals();
      }

      this.debounceCalendar(this.props.value);
    }
  }, {
    key: "onError",
    value: function onError(type) {
      var _this$props = this.props,
          language = _this$props.language,
          onError = _this$props.onError;
      var errorText = i18n[language][type];
      return onError ? onError(type, errorText) : errorText;
    }
  }, {
    key: "validateDateIntervals",
    value: function validateDateIntervals() {
      var _this2 = this;

      var nextState = {};
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          value = _this$props2.value,
          onValidationComplete = _this$props2.onValidationComplete;

      var error = function error(type) {
        var errorMessage = _this2.onError(type);

        nextState = {
          errorMessage: errorMessage,
          ariaInvalid: true
        };
      };

      SimpleDateFactory.fromString(value, function (date) {
        nextState = {
          ariaInvalid: false
        };
        var formattedDate = date.format();

        if (formattedDate !== value) {
          onChange(formattedDate);
        }

        var minDate = SimpleDateFactory.fromString(_this2.state.minDate);
        var maxDate = SimpleDateFactory.fromString(_this2.state.maxDate);

        if (_this2.state.minDate && minDate && date.isBefore(minDate)) {
          error(dateErrorTypes.MIN_DATE);
        } else if (_this2.state.maxDate && maxDate && date.isAfter(maxDate)) {
          error(dateErrorTypes.MAX_DATE);
        }

        _this2.setState({
          lastValidDate: formattedDate
        });

        onValidationComplete(formattedDate);
      }, function (errorType) {
        var emptyValue = value === '';

        if (emptyValue && _this2.state.errorMessage) {
          nextState = {
            ariaInvalid: false,
            errorMessage: null
          };
          onValidationComplete(value);
          return;
        } else if (emptyValue) {
          nextState = _objectSpread({}, _this2.state);
          onValidationComplete(value);
          return;
        }

        error(errorType);
        onValidationComplete(value);
      });
      this.setState(nextState);
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur() {
      this.validateDateIntervals();
    }
  }, {
    key: "onInputKeydown",
    value: function onInputKeydown(evt) {
      if (evt.which === KeyCode.ENTER) {
        evt.preventDefault();
        this.validateDateIntervals();
      }
    }
  }, {
    key: "escKeyHandler",
    value: function escKeyHandler(evt) {
      if (evt.which === KeyCode.ESC) {
        this.closeCalendarSetInputFocus();
      }
    }
  }, {
    key: "globalClickHandler",
    value: function globalClickHandler(evt) {
      if (this.state.displayDatePicker && evt.__datepickerID !== this.datepickerId) {
        this.closeCalendar();
      }
    }
  }, {
    key: "calendarButtonClickHandler",
    value: function calendarButtonClickHandler() {
      this.validateDateIntervals();

      if (!this.state.displayDatePicker) {
        this.openCalendar();
      } else {
        this.closeCalendar();
      }
    }
    /**
     * Adds a flag on the click event so that the globalClickHandler()
     * can determine whether or not the ID matches. Makes it so that only one datepicker can be open at the same time
     */

  }, {
    key: "addFlagOnClickEventClickHandler",
    value: function addFlagOnClickEventClickHandler(evt) {
      // eslint-disable-next-line no-param-reassign
      evt.nativeEvent.__datepickerID = this.datepickerId;
    }
  }, {
    key: "divBlurHandler",
    value: function divBlurHandler(evt) {
      var isBluringWithDisplayDatePickerFalse = evt.target === this.dateInputRef._input && evt.currentTarget === this._datepickerNode && !this.state.displayDatePicker;

      if (isBluringWithDisplayDatePickerFalse) {
        this.removeGlobalEventListeners();
      }
    }
  }, {
    key: "datePickedHandler",
    value: function datePickedHandler(date) {
      var _this3 = this;

      this.props.onChange(date);
      this.props.onValidationComplete(date);
      this.removeGlobalEventListeners();
      this.setState({
        displayDatePicker: false,
        calendarActiveDate: date
      }, function () {
        return _this3.buttonRef.current.focus();
      });
    }
  }, {
    key: "openCalendar",
    value: function openCalendar() {
      this.setState({
        displayDatePicker: true
      });
      this.removeGlobalEventListeners();
      this.addGlobalEventListeners();
    }
  }, {
    key: "closeCalendar",
    value: function closeCalendar() {
      this.removeGlobalEventListeners();
      this.setState({
        displayDatePicker: false
      });
      this.validateDateIntervals();
    }
  }, {
    key: "closeCalendarSetInputFocus",
    value: function closeCalendarSetInputFocus() {
      var _this4 = this;

      this.removeGlobalEventListeners();
      this.setState({
        displayDatePicker: false
      }, function () {
        return _this4.buttonRef.current.focus();
      });
      this.validateDateIntervals();
    }
  }, {
    key: "addGlobalEventListeners",
    value: function addGlobalEventListeners() {
      window.addEventListener('click', this.globalClickHandler);
      window.addEventListener('keyup', this.escKeyHandler);
    }
  }, {
    key: "removeGlobalEventListeners",
    value: function removeGlobalEventListeners() {
      window.removeEventListener('click', this.globalClickHandler);
      window.removeEventListener('keyup', this.escKeyHandler);
    }
  }, {
    key: "ariaInvalid",
    value: function ariaInvalid() {
      var ariaInvalid = this.props['aria-invalid'] || this.props.ariaInvalid;
      return [null, undefined].every(function (val) {
        return val !== ariaInvalid;
      }) ? String(ariaInvalid) : String(this.state.ariaInvalid);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props3 = this.props,
          hideErrors = _this$props3.hideErrors,
          _this$props3$inputPro = _this$props3.inputProps,
          inputProps = _this$props3$inputPro === void 0 ? {} : _this$props3$inputPro,
          label = _this$props3.label,
          language = _this$props3.language,
          _onChange = _this$props3.onChange,
          value = _this$props3.value,
          fullWidth = _this$props3.fullWidth;
      var _this$state = this.state,
          minDate = _this$state.minDate,
          maxDate = _this$state.maxDate;

      if (this.state.ariaInvalid && !inputProps['aria-describedby']) {
        inputProps['aria-describedby'] = "date-input-validation-".concat(this.datepickerId);
      }

      var calendarClassName = classnames('ffe-calendar ffe-calendar--datepicker', {
        'ffe-calendar--datepicker--above': this.props.calendarAbove
      });
      var datepickerClassName = classnames('ffe-datepicker', {
        'ffe-datepicker--full-width': fullWidth
      });
      return /*#__PURE__*/react.createElement("div", null, label && /*#__PURE__*/react.createElement("label", {
        className: "ffe-form-label ffe-form-label--block",
        htmlFor: inputProps.id,
        id: "ffe-datepicker-label-".concat(this.datepickerId)
      }, label), /*#__PURE__*/react.createElement("div", {
        "aria-labelledby": label ? "ffe-datepicker-label-".concat(this.datepickerId) : undefined,
        role: "none",
        "aria-label": label ? undefined : i18n[language].CHOOSE_DATE,
        className: datepickerClassName,
        onClick: this.addFlagOnClickEventClickHandler,
        ref: function ref(c) {
          _this5._datepickerNode = c;
        },
        tabIndex: -1
      }, /*#__PURE__*/react.createElement("div", {
        className: "ffe-datepicker--wrapper"
      }, /*#__PURE__*/react.createElement(DateInput, {
        "aria-invalid": this.ariaInvalid(),
        inputProps: inputProps,
        onBlur: this.onInputBlur,
        onChange: function onChange(evt) {
          return _onChange(evt.target.value);
        },
        onKeyDown: this.onInputKeydown,
        ref: function ref(c) {
          _this5.dateInputRef = c;
        },
        value: value,
        fullWidth: fullWidth,
        language: language
      }), /*#__PURE__*/react.createElement(CalendarButton, {
        onClick: this.calendarButtonClickHandler,
        value: value,
        language: language,
        buttonRef: this.buttonRef
      })), this.state.displayDatePicker && /*#__PURE__*/react.createElement(Calendar, {
        calendarClassName: calendarClassName,
        escKeyHandler: this.escKeyHandler,
        language: language,
        maxDate: maxDate,
        minDate: minDate,
        onDatePicked: this.datePickedHandler,
        selectedDate: this.state.calendarActiveDate,
        onBlurHandler: this.blurHandler,
        ref: function ref(c) {
          _this5.datepickerCalendar = c;
        }
      })), this.state.ariaInvalid && !hideErrors && /*#__PURE__*/react.createElement("div", {
        id: "date-input-validation-".concat(this.datepickerId),
        className: "ffe-body-text ffe-field-error-message",
        role: "alert"
      }, this.state.errorMessage));
    }
  }]);

  return Datepicker;
}(react.Component);
Datepicker$1.defaultProps = {
  language: 'nb',
  keepDisplayStateOnError: false,
  onValidationComplete: function onValidationComplete() {},
  fullWidth: false
};
Datepicker$1.propTypes = {
  'aria-invalid': propTypes.string,
  ariaInvalid: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  calendarAbove: propTypes.bool,
  hideErrors: propTypes.bool,
  onValidationComplete: propTypes.func,
  inputProps: propTypes.shape({
    className: propTypes.string,
    id: propTypes.string
  }),
  label: propTypes.string,
  language: propTypes.string,
  maxDate: propTypes.string,
  minDate: propTypes.string,
  onChange: propTypes.func.isRequired,
  onError: propTypes.func,
  value: propTypes.string.isRequired,
  keepDisplayStateOnError: propTypes.bool,
  fullWidth: propTypes.bool
};

var Datepicker = Datepicker$1;

export { Calendar, Datepicker as default };
