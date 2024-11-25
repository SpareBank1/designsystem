import React, { Component } from 'react';
import classNames from 'classnames';
import { CalendarButtonState } from '../datelogic/types';
import i18n from '..//i18n';

interface ClickableDateProps {
    calendarButtonState: CalendarButtonState;
    month: number;
    year: number;
    headers: string;
    onClick: (date: CalendarButtonState) => void;
    locale: 'nb' | 'nn' | 'en';
    dateButtonRef?: React.RefObject<HTMLTableCellElement>;
    isFocusingHeader: boolean;
    focusOnMount?: boolean;
}

export class ClickableDate extends Component<ClickableDateProps> {
    componentDidMount() {
        if (this.props.focusOnMount) {
            this.focusIfNeeded();
        }
    }

    componentDidUpdate() {
        this.focusIfNeeded();
    }

    focusIfNeeded() {
        const { calendarButtonState, isFocusingHeader, dateButtonRef } =
            this.props;
        if (calendarButtonState.isFocus && !isFocusingHeader) {
            dateButtonRef?.current?.focus();
        }
    }

    dateClassName() {
        const { calendarButtonState, isFocusingHeader } = this.props;
        const { isEnabled, isFocus, isSelected, isToday } = calendarButtonState;

        return classNames({
            'ffe-calendar__date': true,
            'ffe-calendar__date--today': isToday,
            'ffe-calendar__date--focus': isFocus && !isFocusingHeader,
            'ffe-calendar__date--disabled': !isEnabled,
            'ffe-calendar__date--selected': isSelected,
            'ffe-calendar__date--disabled-focus': !isEnabled && isFocus,
        });
    }

    tabIndex() {
        return this.props.calendarButtonState.isFocus ? 0 : -1;
    }

    render() {
        const {
            calendarButtonState,
            headers,
            onClick,
            locale,
            dateButtonRef,
            month,
            year,
        } = this.props;

        const monthName = '';
        //const monthName = locale === 'en' ? month : month.toLowerCase();

        return (
            <td
                className="ffe-calendar__day"
                headers={headers}
                role="button"
                ref={dateButtonRef}
                aria-disabled={!calendarButtonState.isEnabled}
                aria-current={calendarButtonState.isSelected}
                aria-label={`${calendarButtonState.dayInMonth}. ${monthName} ${year}`}
                tabIndex={this.tabIndex()}
                onClick={() => onClick(calendarButtonState)}
            >
                <span className={this.dateClassName()} aria-hidden="true">
                    {calendarButtonState.dayInMonth}
                </span>
            </td>
        );
    }
}
