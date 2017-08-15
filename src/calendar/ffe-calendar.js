import React, { Component } from 'react';
import { func, string } from 'prop-types';
import uuid from 'uuid';
import ActiveDate from './activeDate';
import LeadDate from './leadDate';
import Header from './header';
import KeyCode from '../util/keyCode';
import simpleDate from '../datelogic/simpledate';
import simpleCalendar from '../datelogic/simplecalendar';

export default class Datepicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      calendar: simpleCalendar(
        simpleDate.fromString(props.selectedDate),
        props.minDate,
        props.maxDate,
        props.language
      ),
    };

    this.onBlur = props.onBlurHandler;

    this.datepickerId = `ffe-calendar-${uuid.v4()}`;
    this.dateShouldSetFocusOnInitialMount = false;

    this.keyDown = this.keyDown.bind(this);
    this.mouseClick = this.mouseClick.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.focusHandler = this.focusHandler.bind(this);

    this.renderDate = this.renderDate.bind(this);
    this.renderWeek = this.renderWeek.bind(this);
    this.renderDay = this.renderDay.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDate !== this.props.selectedDate) {
      this.setState({
        calendar: simpleCalendar(
          simpleDate.fromString(nextProps.selectedDate),
          nextProps.minDate,
          nextProps.maxDate,
          nextProps.language
        ),
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.selectedDate !== this.props.selectedDate;
  }

  keyDown(event) {
    const calendar = this.state.calendar;

    const scrollableEvents = [
      KeyCode.PGUP,
      KeyCode.PGDWN,
      KeyCode.END,
      KeyCode.HOME,
      KeyCode.LEFT,
      KeyCode.UP,
      KeyCode.RIGHT,
      KeyCode.DOWN,
    ];
    if (scrollableEvents.includes(event.which)) {
      event.preventDefault();
    }

    switch (event.which) {
      case KeyCode.ENTER:
        if (calendar.isDateWithinDateRange(calendar.focusedDate)) {
          calendar.selectFocusedDate();
          this.props.onDatePicked(calendar.selected());
        }
        event.preventDefault();
        break;
      case KeyCode.TAB:
        if (this.onBlur) {
          this.onBlur(event);
        }
        break;
      case KeyCode.ESC:
        this.props.escKeyHandler(event);
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

  mouseClick(date) {
    const pickedDate = simpleDate.fromTimestamp(date.timestamp);
    if (this.state.calendar.isDateWithinDateRange(pickedDate)) {
      this.state.calendar.selectTimestamp(date.timestamp);
      this.props.onDatePicked(this.state.calendar.selected());
    }
  }

  focusHandler() {
    this.dateShouldSetFocusOnInitialMount = true;
  }

  nextMonth(evt) {
    evt.preventDefault();
    this.state.calendar.nextMonth();
    this.forceUpdate();
  }

  previousMonth(evt) {
    evt.preventDefault();
    this.state.calendar.previousMonth();
    this.forceUpdate();
  }

  renderDate(date, index) {
    if (date.isLead) {
      return (
        <LeadDate key={ date.date } date={ date } />
      );
    }
    return (
      <ActiveDate
        date={ date }
        headers={ `header__${this.datepickerId}__${index}` }
        key={ date.date }
        onClick={ this.mouseClick }
        setFocusOnInitialMount={ this.dateShouldSetFocusOnInitialMount }
      />
    );
  }

  renderWeek(week) {
    return (
      <tr
        key={ `week-${week.number}` }
        role="row"
      >
        { week.dates.map(this.renderDate) }
      </tr>
    );
  }

  renderDay(day, index) {
    return (
      <th
        aria-label={ day.name }
        className="ffe-calendar__weekday"
        id={ `header__${this.datepickerId}__${index}` }
        key={ day.name }
        role="columnheader"
      >
        <span title={ day.name }>
          { day.shortName }
        </span>
      </th>
    );
  }

  render() {
    const {
      calendar,
    } = this.state;

    return (
      <div
        aria-labelledby={`${this.datepickerId}-title`}
        className={ this.props.calendarClassName || 'ffe-calendar' }
        onFocus={ this.focusHandler }
        role="region"
      >
      <Header
        datepickerId={ this.datepickerId }
        month={ calendar.focusedMonth() }
        nextMonthHandler={ this.nextMonth }
        nextMonthLabel={ calendar.nextName() }
        previousMonthHandler={ this.previousMonth }
        previousMonthLabel={ calendar.previousName() }
        year={ calendar.focusedYear() }
      />
      <table
        className="ffe-calendar__grid"
        role="grid"
        onKeyDown={ this.keyDown }
        aria-labelledby={`${this.datepickerId}__month-label`}
      >
        <thead>
          <tr role="row">
            { calendar.dayNames().map(this.renderDay) }
          </tr>
        </thead>
        <tbody>
          { calendar.visibleDates().map(this.renderWeek) }
        </tbody>
      </table>
    </div>);
  }
}

Datepicker.propTypes = {
  calendarClassName: string,
  escKeyHandler: func,
  language: string.isRequired,
  maxDate: string,
  minDate: string,
  onBlurHandler: func,
  onDatePicked: func.isRequired,
  selectedDate: string,
};
