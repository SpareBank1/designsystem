import React, { PropTypes } from 'react';

import ActiveDate from './activeDate.js';
import DisabledDate from './disabledDate.js';
import Header from './header.js';

export default class Datepicker extends React.Component {

  constructor(props) {
    super(props);

    this.calendar = props.calendar;
    this.onChange = props.onChange;

    // TODO: Make dynamic
    this.datepickerId = 'ffe-datepicker-1';

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
    this.previousHandler = this.previousHandler.bind(this);

    this.renderDate = this.renderDate.bind(this);
    this.renderWeek = this.renderWeek.bind(this);
    this.renderDay = this.renderDay.bind(this);
  }

  keyDownHandler(event) {
    const codes = [13, 27, 33, 34, 35, 36, 37, 38, 39, 40];

    if (codes.indexOf(event.keyCode) === -1) {
      // Don't want uninteresting codes
      return;
    }

    const calendar = this.calendar;

    switch (event.keyCode) {
      case 13: // ENTER
        calendar.selectFocusedDate();
        this.onChange();
        return;
      case 27: // ESCAPE
        this.onChange();
        return;
      case 33: // PGDWN
        if (event.altKey) {
          calendar.nextYear();
        } else {
          calendar.nextMonth();
        }
        break;
      case 34: // PGUP
        if (event.altKey) {
          calendar.previousYear();
        } else {
          calendar.previousMonth();
        }
        break;
      case 35: // END
        calendar.lastDateOfMonth();
        break;
      case 36: // HOME
        calendar.firstDateOfMonth();
        break;
      case 37: // LEFT
        calendar.previousDay();
        break;
      case 38: // UP
        calendar.previousWeek();
        break;
      case 39: // RIGHT
        calendar.nextDay();
        break;
      case 40: // DOWN
        calendar.nextWeek();
        break;
      default:
        return;
    }

    this.forceUpdate();
  }

  mouseDownHandler(event) {
    // Using mouseDown-event because  we dont want the interaction between
    // pressing enter and triggering click on a button.
    if (event.target.nodeName === 'BUTTON') {
      const timestamp = parseInt(event.target.dataset.timestamp, 10);
      this.calendar.selectTimestamp(timestamp);
      this.onChange();
    }
  }

  nextHandler() {
    this.calendar.nextMonth();
    this.forceUpdate();
  }

  previousHandler() {
    this.calendar.previousMonth();
    this.forceUpdate();
  }

  renderDate(date) {
    if (date.isLead) {
      return <DisabledDate key={ date.date } date={ date } />;
    }
    return <ActiveDate key={ date.date } date={ date } datepickerId={ this.datepickerId } />;
  }

  renderWeek(week) {
    return <tr key={ `week-${week.number}` } role="row">{ week.dates.map(this.renderDate) }</tr>;
  }

  renderDay(day) {
    return (<th key={ day.name } role="columnheader" abbr={ day.name } aria-label={ day.name }>
      <span title={ day.name }>{ day.shortName }</span>
    </th>);
  }

  render() {
    return (<div
      className="ffe-datepicker" role="region"
      aria-labelledby={`${this.datepickerId}-title`}
    >
      <Header
        calendar={ this.calendar } datepickerId={ this.datepickerId }
        previousHandler={ this.previousHandler } nextHandler={ this.nextHandler }
      />
      <table
        className="ffe-datepicker__calendar" role="grid"
        aria-readonly="true" aria-labelledby={`${this.datepickerId}__month-label`}
        tabIndex="0" aria-activedescendant={`${this.datepickerId}__${'11'}`}
        // TODO: Fix live active descendant
        onKeyDown={ this.keyDownHandler }
        ref={ c => { this._body = c; } }
      >
        <thead role="presentation">
          <tr role="row">{this.calendar.dayNames().map(this.renderDay)}</tr>
        </thead>
        <tbody onMouseDown={ this.mouseDownHandler } role="presentation">
           { this.calendar.visibleDates().map(this.renderWeek) }
        </tbody>
      </table>
    </div>);
  }
}

Datepicker.propTypes = {
  calendar: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
