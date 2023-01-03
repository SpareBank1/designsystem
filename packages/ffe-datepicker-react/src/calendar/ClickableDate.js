import React, { Component } from 'react';
import {
    bool,
    func,
    number,
    object,
    oneOfType,
    shape,
    string,
} from 'prop-types';
import classNames from 'classnames';

export default class ClickableDate extends Component {
    componentDidMount() {
        this.focusIfNeeded();
    }

    componentDidUpdate() {
        this.focusIfNeeded();
    }

    focusIfNeeded() {
        const { date, isFocusingHeader, dateButtonRef } = this.props;
        if (date.isFocus && !isFocusingHeader) {
            dateButtonRef.current.focus();
        }
    }

    dateClassName() {
        const { date, isFocusingHeader } = this.props;
        const { isEnabled, isFocus, isSelected, isToday } = date;

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
        return this.props.date.isFocus ? 0 : -1;
    }

    render() {
        const {
            date,
            headers,
            onClick,
            language,
            dateButtonRef,
            month,
            year,
        } = this.props;

        const monthName = language === 'en' ? month : month.toLowerCase();

        return (
            <td
                className="ffe-calendar__day"
                headers={headers}
                role="button"
                ref={dateButtonRef}
                aria-disabled={!date.isEnabled}
                aria-current={date.isSelected}
                aria-label={`${date.date}. ${monthName} ${year}`}
                tabIndex={this.tabIndex()}
                onClick={() => onClick(date)}
            >
                <span className={this.dateClassName()} aria-hidden="true">
                    {date.date}
                </span>
            </td>
        );
    }
}

ClickableDate.propTypes = {
    date: shape({
        date: oneOfType([func, number]),
        isEnabled: bool,
        isFocus: bool,
        isSelected: bool,
        isToday: bool,
    }).isRequired,
    month: string.isRequired,
    year: number.isRequired,
    headers: string.isRequired,
    onClick: func.isRequired,
    language: string.isRequired,
    dateButtonRef: object,
    isFocusingHeader: bool.isRequired,
};
