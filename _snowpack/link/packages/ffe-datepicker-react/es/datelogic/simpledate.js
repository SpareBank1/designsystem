function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import errorTypes from './error-types.js';
import { validateDate } from '../util/dateUtil.js';

function isDate(date) {
  return !!date && _typeof(date) === 'object' && Object.prototype.toString.call(date) === '[object Date]';
}

function SimpleDate(date) {
  if (isDate(date)) {
    this.internalDate = date;
  } else {
    this.internalDate = new Date();
  }
}

export default function SimpleDateFactory() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(SimpleDate, args);
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
    onError(errorTypes.INVALID_DATE_FORMAT);
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
    onError(errorTypes.INVALID_DATE);
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