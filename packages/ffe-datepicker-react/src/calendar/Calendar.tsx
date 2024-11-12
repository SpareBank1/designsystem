import React, { useEffect, useId, useState } from 'react';
import { Header } from './Header';
import {
    getSimpleDateFromString,
    getSimpleDateFromTimestamp,
} from '../datelogic/simpledate';
import { SimpleCalendar } from '../datelogic/simplecalendar';
import { CalendarButtonState } from '../datelogic/types';
import { useCalendar } from '../datelogic/CalendarContext';
import { NonClickableDate } from './NonClickableDate';
import { ClickableDate } from './ClickableDate';

export interface CalendarProps {
    calendarClassName?: string;
    escKeyHandler?: React.KeyboardEventHandler<HTMLDivElement>;
    locale: 'nb' | 'nn' | 'en';
    maxDate?: string | null;
    minDate?: string | null;
    onDatePicked: (date: string) => void;
    selectedDate?: string | null;
    focusOnMount?: boolean;
}

// interface State {
//     calendar: SimpleCalendar;
//     isFocusingHeader: boolean;
// }

export const Calendar: React.FC<CalendarProps> = props => {
    const { visibleMonth, visibleYear, month, updateMonth, year, setYear } =
        useCalendar();
    const datepickerId = `ffe-calendar-${useId()}`;
    const [isFocusingHeader, setIsFocusingHeader] = useState(false);

    const clickableDateRef = React.createRef<HTMLTableCellElement>();
    const prevMonthButtonElementRef = React.createRef<HTMLButtonElement>();
    const nextMonthButtonElementRef = React.createRef<HTMLButtonElement>();

    const [calendar, setCalendar] = useState(
        new SimpleCalendar(
            getSimpleDateFromString(props?.selectedDate),
            props.minDate,
            props.maxDate,
            props.locale,
        ),
    );

    useEffect(() => {
        setCalendar(
            new SimpleCalendar(
                getSimpleDateFromString(props?.selectedDate),
                props.minDate,
                props.maxDate,
                props.locale,
            ),
        );
    }, [props.selectedDate, props.minDate, props.maxDate, props.locale]);

    function keyDown(event: React.KeyboardEvent<HTMLTableElement>) {
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
        if (!scrollableEvents.includes(event.key)) {
            event.preventDefault();
        }

        switch (event.key) {
            case 'Enter':
                if (calendar.isDateWithinDateRange(calendar.focusedDate)) {
                    calendar.selectFocusedDate();
                    props.onDatePicked(calendar.selected());
                }
                event.preventDefault();
                break;
            case 'Escape':
                props.escKeyHandler?.(event);
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
        //this.forceUpdate();
    }

    function mouseClick(date: CalendarButtonState) {
        const pickedDate = getSimpleDateFromTimestamp(date.timestamp);
        if (calendar.isDateWithinDateRange(pickedDate)) {
            calendar.selectTimestamp(date.timestamp);
            props.onDatePicked(calendar.selected());
            updateMonth(pickedDate.month);
            setYear(pickedDate.year.toString());
        }
    }
    const nextMonth = (evt: React.MouseEvent<HTMLButtonElement>) => {
        updateMonth((parseInt(month) + 1) % 12);
    };

    const previousMonth = (evt: React.MouseEvent<HTMLButtonElement>) => {
        updateMonth((parseInt(month) - 1 + 12) % 12);
    };

    const changeMonth = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        updateMonth(parseInt(evt.target.value));
    };

    function renderDate(
        calendarButtonState: CalendarButtonState,
        index: number,
    ) {
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
                //month={visibleMonth}
                month={calendar.focusedMonth}
                year={calendar.focusedYear}
                headers={`header__${datepickerId}__${index}`}
                key={calendarButtonState.timestamp}
                onClick={mouseClick}
                locale={props.locale}
                dateButtonRef={
                    calendarButtonState.isFocus ? clickableDateRef : undefined
                }
                isFocusingHeader={isFocusingHeader}
                focusOnMount={props.focusOnMount}
            />
        );
    }

    function renderWeek(week: {
        dates: CalendarButtonState[];
        number: number;
    }) {
        return (
            <tr key={`week-${week.number}`} role="presentation">
                {week.dates.map(renderDate)}
            </tr>
        );
    }

    function renderDay(
        newDay: { name: string; shortName: string },
        index: number,
    ) {
        return (
            <th
                aria-label={newDay.name}
                className="ffe-calendar__weekday"
                id={`header__${datepickerId}__${index}`}
                key={newDay.name}
            >
                <span title={newDay.name}>{newDay.shortName}</span>
            </th>
        );
    }

    const focusTrap = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const activeElement = document.activeElement;

        if (event.key === 'Tab') {
            event.preventDefault();
            if (event.shiftKey) {
                if (activeElement === clickableDateRef.current) {
                    nextMonthButtonElementRef.current?.focus();
                    setIsFocusingHeader(true);
                }
                if (activeElement === nextMonthButtonElementRef.current) {
                    prevMonthButtonElementRef.current?.focus();
                }
                if (activeElement === prevMonthButtonElementRef.current) {
                    clickableDateRef.current?.focus();
                    setIsFocusingHeader(false);
                    //this.forceUpdate();
                }
            } else {
                if (activeElement === clickableDateRef.current) {
                    prevMonthButtonElementRef.current?.focus();
                    setIsFocusingHeader(true);
                }
                if (activeElement === prevMonthButtonElementRef.current) {
                    nextMonthButtonElementRef.current?.focus();
                }
                if (activeElement === nextMonthButtonElementRef.current) {
                    clickableDateRef.current?.focus();
                    setIsFocusingHeader(false);
                    //this.forceUpdate();
                }
            }
        }
    };

    return (
        <div
            role="dialog"
            aria-modal={true}
            aria-labelledby={`${datepickerId}-title`}
        >
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <div
                className={props.calendarClassName || 'ffe-calendar'}
                role="application"
                onKeyDown={focusTrap}
            >
                <Header
                    datepickerId={datepickerId}
                    nextMonthHandler={nextMonth}
                    nextMonthLabel="Next month"
                    previousMonthHandler={previousMonth}
                    previousMonthLabel="Previous month"
                    changeMonthHandler={changeMonth}
                    startYear={new Date().getFullYear() - 100}
                    endYear={new Date().getFullYear()}
                    prevMonthButtonElement={prevMonthButtonElementRef}
                    nextMonthButtonElement={nextMonthButtonElementRef}
                />
                <table
                    className="ffe-calendar__grid"
                    onKeyDown={keyDown}
                    role="presentation"
                >
                    <thead>
                        <tr>{calendar.dayNames.map(renderDay)}</tr>
                    </thead>
                    <tbody>{calendar.visibleDates.map(renderWeek)}</tbody>
                </table>
            </div>
        </div>
    );
};
