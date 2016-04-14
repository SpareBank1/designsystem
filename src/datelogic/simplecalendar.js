import i18n from '../i18n/i18n.js';
import simpleDate from './simpledate.js';

function SimpleCalendar(initialDate, locale) {
  this.locale = locale;
  this.focusedDate = initialDate ? initialDate.clone() : simpleDate.today();
  this.selectedDate = initialDate ? initialDate.clone() : initialDate;

  // Settings
  this.firstDay = i18n[this.locale].FIRST_DAY_OF_WEEK;
}

export default function SimpleCalendarFactory(...args) {
  return new SimpleCalendar(...args);
}

function iso8601Week(date) {
  // Clone date
  const checkDate = date.clone();

  // Find Thursday of this week starting on Monday
  checkDate.setDate(date.date() + 4 - (date.day() || 7));
  // Copy time of Thursday of this week
  const time = checkDate.timestamp();

  // Adjust to Jan 1
  checkDate.setMonth(0);
  checkDate.setDate(1);

  // 86400000ms = 1 day
  const daysSince1Jan = (time - checkDate.timestamp()) / 86400000;

  // Return the correct weeknumber
  return Math.floor(Math.round(daysSince1Jan / 7) + 1);
}

function firstDayOfMonth(simpledate) {
  const clone = simpledate.clone();
  clone.setDate(1);
  return clone.day();
}

SimpleCalendar.prototype.visibleDates = function visibleDates() {
  const result = [];

  const leadDays = (firstDayOfMonth(this.focusedDate) - this.firstDay + 7) % 7;

  const currentDate = this.focusedDate.clone();
  currentDate.setDate(1 - leadDays);

  const rows = Math.ceil((leadDays + this.focusedDate.daysInMonth()) / 7);

  for (let row = 0; row < rows; row++) {
    const week = {
      number: iso8601Week(currentDate),
      dates: [],
    };

    result.push(week);

    for (let dayx = 0; dayx < 7; dayx++) {
      const date = {
        date: currentDate.date(),
        timestamp: currentDate.timestamp(),
        isLead: currentDate.month() !== this.focusedDate.month(),
        isToday: currentDate.equal(simpleDate.today()),
        isFocus: currentDate.equal(this.focusedDate),
        isSelected: this.hasSelected() && currentDate.equal(this.selectedDate),
      };

      week.dates.push(date);

      currentDate.adjust('D', 1);
    }
  }
  return result;
};

SimpleCalendar.prototype.focusedMonth = function focusedMonth() {
  return i18n[this.locale][`MONTH_${this.focusedDate.month() + 1}`];
};

SimpleCalendar.prototype.focusedYear = function focusedYear() {
  return this.focusedDate.year();
};

SimpleCalendar.prototype.dayNames = function dayNames() {
  const result = [];
  for (let i = this.firstDay; i < this.firstDay + 7; i++) {
    result.push({
      name: i18n[this.locale][`DAY_${i % 7}`],
      shortName: i18n[this.locale][`DAY_${i % 7}_SHORT`],
    });
  }
  return result;
};

SimpleCalendar.prototype.previousName = function prevName() {
  return i18n[this.locale].PREVIOUS;
};

SimpleCalendar.prototype.previousShortName = function prevName() {
  return i18n[this.locale].PREVIOUS_SHORT;
};

SimpleCalendar.prototype.nextName = function nextName() {
  return i18n[this.locale].NEXT;
};

SimpleCalendar.prototype.nextShortName = function nextName() {
  return i18n[this.locale].NEXT_SHORT;
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

SimpleCalendar.prototype.selectTimestamp = function selectTimestamp(timestamp) {
  const newDate = simpleDate.fromTimestamp(timestamp);
  this.selectedDate = newDate.clone();
  this.focusedDate = newDate.clone();
};

SimpleCalendar.prototype.selectDateString = function selectDateString(datestring) {
  const newDate = simpleDate.fromString(datestring);

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
