import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { getAllYears, SimpleCalendar } from '../datelogic/simplecalendar';
import classNames from 'classnames';

interface HeaderProps {
    calendar: SimpleCalendar;
    datepickerId: string;
    monthHandler: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
    nextMonthHandler: React.MouseEventHandler<HTMLButtonElement>;
    nextMonthLabel: string;
    previousMonthHandler: React.MouseEventHandler<HTMLButtonElement>;
    previousMonthLabel: string;
    getAllMonths: Array<{
        name: string;
        index: number;
    }>;
    yearHandler: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
    prevMonthButtonElement: React.RefObject<HTMLButtonElement>;
    nextMonthButtonElement: React.RefObject<HTMLButtonElement>;
}

export const Header: React.FC<HeaderProps> = ({
    calendar,
    datepickerId,
    monthHandler,
    nextMonthHandler,
    nextMonthLabel,
    previousMonthHandler,
    previousMonthLabel,
    getAllMonths,
    yearHandler,
    prevMonthButtonElement,
    nextMonthButtonElement,
}) => {
    const arrowBackIosIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0zNjcuMzg0LTQ4MCAzMDEuMzA4IDMwMS4zMDhxMTEuOTIzIDExLjkyMyAxMS42MTUgMjguMDc3LS4zMDggMTYuMTUzLTEyLjIzMSAyOC4wNzYtMTEuOTIyIDExLjkyMy0yOC4wNzYgMTEuOTIzdC0yOC4wNzYtMTEuOTIzTDMwNS4wNzgtNDI4Ljc3cS0xMC44NDctMTAuODQ2LTE2LjA3Ny0yNC4zMDctNS4yMzEtMTMuNDYyLTUuMjMxLTI2LjkyMyAwLTEzLjQ2MSA1LjIzMS0yNi45MjMgNS4yMy0xMy40NjEgMTYuMDc3LTI0LjMwN2wzMDYuODQ2LTMwNi44NDZxMTEuOTIyLTExLjkyMyAyOC4zODQtMTEuNjE2IDE2LjQ2MS4zMDggMjguMzg0IDEyLjIzMSAxMS45MjMgMTEuOTIzIDExLjkyMyAyOC4wNzYgMCAxNi4xNTQtMTEuOTIzIDI4LjA3N0wzNjcuMzg0LTQ4MFoiLz48L3N2Zz4=';

    return (
        <div className="ffe-calendar__header">
            <div className="ffe-calendar__header-inner-wrapper">
                <button
                    className={classNames(
                        'ffe-calendar__month-nav',
                        'ffe-calendar__previous',
                        {
                            [`ffe-calendar__month-nav--hidden`]:
                                calendar.focusedDate.year ===
                                    calendar.minDate?.year &&
                                calendar.focusedDate.month ===
                                    calendar.minDate?.month,
                        },
                    )}
                    onClick={previousMonthHandler}
                    aria-label={previousMonthLabel}
                    type="button"
                    ref={prevMonthButtonElement}
                    tabIndex={-1}
                >
                    <Icon
                        fileUrl={arrowBackIosIcon}
                        size="md"
                        className="ffe-calendar__icon-prev"
                    />
                </button>
                <header
                    aria-live="polite"
                    className="ffe-calendar__title"
                    id={`${datepickerId}-title`}
                >
                    <div
                        id={`${datepickerId}__month-label`}
                        className="ffe-calendar__month-label"
                    >
                        <span className="ffe-calendar__month">
                            <Dropdown
                                value={calendar.focusedDate.month}
                                inline={true}
                                onChange={monthHandler}
                            >
                                {getAllMonths.map(({ name, index }) => (
                                    <option key={index} value={index - 1}>
                                        {name}
                                    </option>
                                ))}
                            </Dropdown>
                        </span>
                        <span className="ffe-calendar__year">
                            <Dropdown
                                value={calendar.focusedYear}
                                inline={true}
                                onChange={yearHandler}
                            >
                                {getAllYears(
                                    calendar.minDate?.year ??
                                        new Date().getFullYear() - 100,
                                    calendar.maxDate?.year ??
                                        new Date().getFullYear(),
                                ).map(yearOption => {
                                    return (
                                        <option
                                            key={yearOption}
                                            value={yearOption}
                                        >
                                            {yearOption}
                                        </option>
                                    );
                                })}
                            </Dropdown>
                        </span>
                    </div>
                </header>
                <button
                    className={classNames(
                        'ffe-calendar__month-nav',
                        'ffe-calendar__next',
                        {
                            [`ffe-calendar__month-nav--hidden`]:
                                calendar.focusedDate.year ===
                                    calendar.maxDate?.year &&
                                calendar.focusedDate.month ===
                                    calendar.maxDate?.month,
                        },
                    )}
                    onClick={nextMonthHandler}
                    aria-label={nextMonthLabel}
                    type="button"
                    ref={nextMonthButtonElement}
                    tabIndex={-1}
                >
                    <Icon
                        fileUrl={arrowBackIosIcon}
                        size="md"
                        className="ffe-calendar__icon-next"
                    />
                </button>
            </div>
        </div>
    );
};
