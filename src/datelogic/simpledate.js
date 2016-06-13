const dateRegex = /(\d{2})\.(\d{2})\.(\d{4})/;

function isDate(date) {
  return !!date && typeof date === 'object' &&
    Object.prototype.toString.call(date) === '[object Date]';
}

function SimpleDate(date) {
  if (typeof date === 'string') {
    this.internalDate = new Date(date.replace(dateRegex, '$3-$2-$1'));
  } else if (isDate(date)) {
    this.internalDate = date;
  } else {
    this.internalDate = new Date();
  }
}

export default function SimpleDateFactory(...args) {
  return new SimpleDate(...args);
}

// Constructors
SimpleDateFactory.today = function today() {
  return new SimpleDate();
};

SimpleDateFactory.fromString = function fromString(string) {
  const newDate = new SimpleDate();
  const match = dateRegex.exec(string);

  if (!match) {
    return null;
  }

  const [, date, month, year] = match;

  newDate.setYear(year);
  newDate.setMonth(month - 1); // Months are 0-indexed
  newDate.setDate(date); // Need to set date last, to avoid month-overflow
  if (newDate.date() !== date * 1 ||
    newDate.month() + 1 !== month * 1 ||
    newDate.year() !== year * 1) {
    return null;
  }

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
  let date = period === 'D' ? this.date() + offset : this.date();
  const month = period === 'M' ? this.month() + offset : this.month();
  const year = period === 'Y' ? this.year() + offset : this.year();

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
  return this.date() === other.date()
    && this.month() === other.month()
    && this.year() === other.year();
};

SimpleDate.prototype.isBefore = function isBefore(other) {
  return this.timestamp() < other.timestamp();
};

SimpleDate.prototype.isAfter = function isAfter(other) {
  return this.timestamp() > other.timestamp();
};

SimpleDate.prototype.clone = function clone() {
  const date = new Date(this.year(), this.month(), this.date());
  return new SimpleDate(date);
};

SimpleDate.prototype.format = function format() {
  const day = this.date() < 10 ? `0${this.date()}` : this.date();
  const month = this.month() + 1 < 10 ? `0${this.month() + 1}` : this.month();
  return `${day}.${month}.${this.year()}`;
};
