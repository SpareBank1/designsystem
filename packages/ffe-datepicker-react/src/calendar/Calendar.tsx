import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { ClickableDate } from './ClickableDate';
import { NonClickableDate } from './NonClickableDate';
import { Header } from './Header';
import {
    getSimpleDateFromString,
    getSimpleDateFromTimestamp,
} from '../datelogic/simpledate';
import { SimpleCalendar } from '../datelogic/simplecalendar';
import { CalendarButtonState } from '../datelogic/types';

export interface CalendarProps {
    calendarClassName?: string;
    escKeyHandler?: React.KeyboardEventHandler<HTMLDivElement>;
    locale: 'nb' | 'nn' | 'en';
    onDatePicked: (date: string) => void;
    selectedDate?: string | null;
    focusOnMount?: boolean;
    /** Om måned- og år-dropdown skal vises i kalenderen */
    dropdownCaption?: boolean;
    /** Tidligste tillatte dato (format: 'dd.mm.yyyy') - brukes kun til å bestemme år-intervall i dropdown */
    minDate?: string | null;
    /** Seneste tillatte dato (format: 'dd.mm.yyyy') - brukes kun til å bestemme år-intervall i dropdown */
    maxDate?: string | null;
}

interface State {
    calendar: SimpleCalendar;
    isFocusingHeader: boolean;
}

export class Calendar extends Component<CalendarProps, State> {
    private readonly datepickerId: string;

    constructor(props: CalendarProps) {
        super(props);

        this.state = {
            calendar: new SimpleCalendar(
                getSimpleDateFromString(props?.selectedDate),
                props.locale,
            ),
            isFocusingHeader: false,
        };

        this.datepickerId = `ffe-calendar-${uuid()}`;

        this.keyDown = this.keyDown.bind(this);
        this.mouseClick = this.mouseClick.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.previousMonth = this.previousMonth.bind(this);
        this.navigateToMonthYear = this.navigateToMonthYear.bind(this);

        this.renderDate = this.renderDate.bind(this);
        this.renderWeek = this.renderWeek.bind(this);
        this.renderDay = this.renderDay.bind(this);
    }

    clickableDateRef = React.createRef<HTMLTableCellElement>();
    prevMonthButtonElementRef = React.createRef<HTMLButtonElement>();
    nextMonthButtonElementRef = React.createRef<HTMLButtonElement>();

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps: CalendarProps) {
        if (prevProps.selectedDate !== this.props.selectedDate) {
            this.setState(
                {
                    calendar: new SimpleCalendar(
                        getSimpleDateFromString(this.props.selectedDate),
                        this.props.locale,
                    ),
                },
                this.forceUpdate,
            );
        }
    }

    shouldComponentUpdate(nextProps: CalendarProps) {
        return nextProps.selectedDate !== this.props.selectedDate;
    }

    keyDown(event: React.KeyboardEvent<HTMLTableElement>) {
        const calendar = this.state.calendar;

        const scrollableEvents: string[] = [
            'PageUp',
            'PageDown',
            'End',
            'Home',
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
        ] as const;
        if (scrollableEvents.includes(event.key)) {
            event.preventDefault();
        }

        switch (event.key) {
            case 'Enter':
                if (calendar.isDateWithinDateRange(calendar.focusedDate)) {
                    calendar.selectFocusedDate();
                    this.props.onDatePicked(calendar.selected());
                }
                event.preventDefault();
                break;
            case 'Escape':
                this.props.escKeyHandler?.(event);
                break;
            case 'Tab':
                break;
            case 'PageUp':
                if (event.altKey) {
                    calendar.previousYear();
                } else {
                    calendar.previousMonth();
                }
                break;
            case 'PageDown':
                if (event.altKey) {
                    calendar.nextYear();
                } else {
                    calendar.nextMonth();
                }
                break;
            case 'End':
                calendar.lastDateOfMonth();
                break;
            case 'Home':
                calendar.firstDateOfMonth();
                break;
            case 'ArrowLeft':
                calendar.previousDay();
                break;
            case 'ArrowUp':
                calendar.previousWeek();
                break;
            case 'ArrowRight':
                calendar.nextDay();
                break;
            case 'ArrowDown':
                calendar.nextWeek();
                break;
            default:
                return;
        }

        this.forceUpdate();
    }

    mouseClick(date: CalendarButtonState) {
        const pickedDate = getSimpleDateFromTimestamp(date.timestamp);
        if (this.state.calendar.isDateWithinDateRange(pickedDate)) {
            this.state.calendar.selectTimestamp(date.timestamp);
            this.props.onDatePicked(this.state.calendar.selected());
        }
    }

    nextMonth(evt: React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        this.state.calendar.nextMonth();
        this.forceUpdate();
    }

    previousMonth(evt: React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        this.state.calendar.previousMonth();
        this.forceUpdate();
    }

    renderDate(calendarButtonState: CalendarButtonState, index: number) {
        const { calendar } = this.state;

        if (calendarButtonState.isNonClickableDate) {
            return (
                <NonClickableDate
                    key={calendarButtonState.dayInMonth}
                    date={{ timestamp: calendarButtonState.timestamp }}
                />
            );
        }

        return (
            <ClickableDate
                calendarButtonState={calendarButtonState}
                month={calendar.focusedMonth}
                year={calendar.focusedYear}
                headers={`header__${this.datepickerId}__${index}`}
                key={calendarButtonState.timestamp}
                onClick={this.mouseClick}
                locale={this.props.locale}
                dateButtonRef={
                    calendarButtonState.isFocus
                        ? this.clickableDateRef
                        : undefined
                }
                isFocusingHeader={this.state.isFocusingHeader}
                focusOnMount={this.props.focusOnMount}
            />
        );
    }

    renderWeek(week: { dates: CalendarButtonState[]; number: number }) {
        return (
            <tr key={`week-${week.number}`} role="presentation">
                {week.dates.map(this.renderDate)}
            </tr>
        );
    }

    renderDay(day: { name: string; shortName: string }, index: number) {
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

    focusTrap = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const activeElement = document.activeElement;

        if (event.key === 'Tab') {
            event.preventDefault();
            if (event.shiftKey) {
                if (activeElement === this.clickableDateRef.current) {
                    this.nextMonthButtonElementRef.current?.focus();
                    this.setState({ isFocusingHeader: true });
                }
                if (activeElement === this.nextMonthButtonElementRef.current) {
                    this.prevMonthButtonElementRef.current?.focus();
                }
                if (activeElement === this.prevMonthButtonElementRef.current) {
                    this.clickableDateRef.current?.focus();
                    this.setState({ isFocusingHeader: false });
                    this.forceUpdate();
                }
            } else {
                if (activeElement === this.clickableDateRef.current) {
                    this.prevMonthButtonElementRef.current?.focus();
                    this.setState({ isFocusingHeader: true });
                }
                if (activeElement === this.prevMonthButtonElementRef.current) {
                    this.nextMonthButtonElementRef.current?.focus();
                }
                if (activeElement === this.nextMonthButtonElementRef.current) {
                    this.clickableDateRef.current?.focus();
                    this.setState({ isFocusingHeader: false });
                    this.forceUpdate();
                }
            }
        }
    };

    /**
     * Navigate to a specific month and year
     */
    navigateToMonthYear(month: number, year: number) {
        const { calendar } = this.state;
        let currentMonth = calendar.focusedDate.month + 1; // 1-indexed month
        let currentYear = calendar.focusedYear;
        
        // Calculate how many months to move based on current and target date
        const monthsDiff = (year - currentYear) * 12 + (month - currentMonth);
        
        if (monthsDiff < 0) {
            // Go backward
            for (let i = 0; i > monthsDiff; i--) {
                calendar.previousMonth();
            }
        } else if (monthsDiff > 0) {
            // Go forward
            for (let i = 0; i < monthsDiff; i++) {
                calendar.nextMonth();
            }
        }
        
        this.forceUpdate();
    }

    render() {
        const { calendar } = this.state;

        /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
        return (
            <div
                role="dialog"
                aria-modal={true}
                aria-labelledby={`${this.datepickerId}-title`}
                className="ffe-default-mode"
            >
                <div
                    className={this.props.calendarClassName || 'ffe-calendar'}
                    role="application"
                    onKeyDown={this.focusTrap}
                >
                    <Header
                        datepickerId={this.datepickerId}
                        month={calendar.focusedMonth}
                        nextMonthHandler={this.nextMonth}
                        nextMonthLabel={calendar.nextName}
                        previousMonthHandler={this.previousMonth}
                        previousMonthLabel={calendar.previousName}
                        year={calendar.focusedYear}
                        prevMonthButtonElement={this.prevMonthButtonElementRef}
                        nextMonthButtonElement={this.nextMonthButtonElementRef}
                        monthNumber={calendar.focusedDate.month + 1} // Convert to 1-indexed month
                        locale={this.props.locale}
                        dropdownCaption={this.props.dropdownCaption}
                        onMonthYearChange={(month, year) => this.navigateToMonthYear(month, year)}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate}
                    />
                    <table
                        className="ffe-calendar__grid"
                        onKeyDown={this.keyDown}
                        role="presentation"
                    >
                        <thead>
                            <tr>{calendar.dayNames.map(this.renderDay)}</tr>
                        </thead>
                        <tbody>
                            {calendar.visibleDates.map(this.renderWeek)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
        /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    }
}
