import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';
import { v4 as uuid } from 'uuid';
import ClickableDate from './ClickableDate';
import NonClickableDate from './NonClickableDate';
import Header from './Header';
import KeyCode from '../util/keyCode';
import simpleDate from '../datelogic/simpledate';
import simpleCalendar from '../datelogic/simplecalendar';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calendar: simpleCalendar(
                simpleDate.fromString(props.selectedDate),
                props.minDate,
                props.maxDate,
                props.language,
            ),
            isFocusingHeader: false,
        };

        this.datepickerId = `ffe-calendar-${uuid()}`;

        this.keyDown = this.keyDown.bind(this);
        this.mouseClick = this.mouseClick.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.previousMonth = this.previousMonth.bind(this);
        this.focusHandler = this.focusHandler.bind(this);
        this.wrapperBlurHandler = this.wrapperBlurHandler.bind(this);

        this.renderDate = this.renderDate.bind(this);
        this.renderWeek = this.renderWeek.bind(this);
        this.renderDay = this.renderDay.bind(this);
    }

    clickableDateRef = React.createRef();
    prevMonthButtonElementRef = React.createRef();
    nextMonthButtonElementRef = React.createRef();

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps) {
        if (prevProps.selectedDate !== this.props.selectedDate) {
            this.setState(
                {
                    calendar: simpleCalendar(
                        simpleDate.fromString(this.props.selectedDate),
                        this.props.minDate,
                        this.props.maxDate,
                        this.props.language,
                    ),
                },
                this.forceUpdate,
            );
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

    mouseClick(date) {
        const pickedDate = simpleDate.fromTimestamp(date.timestamp);
        if (this.state.calendar.isDateWithinDateRange(pickedDate)) {
            this.state.calendar.selectTimestamp(date.timestamp);
            this.props.onDatePicked(this.state.calendar.selected());
        }
    }

    focusHandler(evt) {
        if (this._wrapper && this._wrapper.contains(evt.target)) {
            this.forceDateFocus = true;
        }
    }

    wrapperBlurHandler() {
        this.forceDateFocus = false;
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
        const { calendar } = this.state;

        if (date.isNonClickableDate) {
            return <NonClickableDate key={date.date} date={date} />;
        }

        return (
            <ClickableDate
                date={date}
                month={calendar.focusedMonth()}
                year={calendar.focusedYear()}
                headers={`header__${this.datepickerId}__${index}`}
                key={date.date}
                onClick={this.mouseClick}
                language={this.props.language}
                dateButtonRef={date.isFocus ? this.clickableDateRef : undefined}
                isFocusingHeader={this.state.isFocusingHeader}
                focusOnMount={this.props.focusOnMount}
            />
        );
    }

    renderWeek(week) {
        return (
            <tr key={`week-${week.number}`} role="presentation">
                {week.dates.map(this.renderDate)}
            </tr>
        );
    }

    renderDay(day, index) {
        return (
            <th
                aria-label={day.name}
                className="ffe-calendar__weekday"
                id={`header__${this.datepickerId}__${index}`}
                key={day.name}
            >
                <span title={day.name}>{day.shortName}</span>
            </th>
        );
    }

    focusTrap = event => {
        const activeElement = document.activeElement;

        if (event.keyCode === KeyCode.TAB) {
            event.preventDefault();
            if (event.shiftKey) {
                if (activeElement === this.clickableDateRef.current) {
                    this.nextMonthButtonElementRef.current.focus();
                    this.setState({ isFocusingHeader: true });
                }
                if (activeElement === this.nextMonthButtonElementRef.current) {
                    this.prevMonthButtonElementRef.current.focus();
                }
                if (activeElement === this.prevMonthButtonElementRef.current) {
                    this.clickableDateRef.current.focus();
                    this.setState({ isFocusingHeader: false });
                    this.forceUpdate();
                }
            } else {
                if (activeElement === this.clickableDateRef.current) {
                    this.prevMonthButtonElementRef.current.focus();
                    this.setState({ isFocusingHeader: true });
                }
                if (activeElement === this.prevMonthButtonElementRef.current) {
                    this.nextMonthButtonElementRef.current.focus();
                }
                if (activeElement === this.nextMonthButtonElementRef.current) {
                    this.clickableDateRef.current.focus();
                    this.setState({ isFocusingHeader: false });
                    this.forceUpdate();
                }
            }
        }
    };

    render() {
        const { calendar } = this.state;

        /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
        return (
            <div role="dialog" aria-modal={true}>
                <div
                    ref={c => {
                        this._wrapper = c;
                    }}
                    aria-labelledby={`${this.datepickerId}-title`}
                    className={this.props.calendarClassName || 'ffe-calendar'}
                    onFocus={this.focusHandler}
                    onBlur={this.wrapperBlurHandler}
                    role="application"
                    onKeyDown={this.focusTrap}
                >
                    <Header
                        datepickerId={this.datepickerId}
                        month={calendar.focusedMonth()}
                        nextMonthHandler={this.nextMonth}
                        nextMonthLabel={calendar.nextName()}
                        previousMonthHandler={this.previousMonth}
                        previousMonthLabel={calendar.previousName()}
                        year={calendar.focusedYear()}
                        prevMonthButtonElement={this.prevMonthButtonElementRef}
                        nextMonthButtonElement={this.nextMonthButtonElementRef}
                    />
                    <table
                        className="ffe-calendar__grid"
                        onKeyDown={this.keyDown}
                        role="presentation"
                    >
                        <thead>
                            <tr>{calendar.dayNames().map(this.renderDay)}</tr>
                        </thead>
                        <tbody>
                            {calendar.visibleDates().map(this.renderWeek)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
        /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    }
}

Calendar.propTypes = {
    calendarClassName: string,
    escKeyHandler: func,
    language: string.isRequired,
    maxDate: string,
    minDate: string,
    onBlurHandler: func,
    onDatePicked: func.isRequired,
    selectedDate: string,
    focusOnMount: bool,
};
