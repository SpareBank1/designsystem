import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { getMonthOptions, getYearOptions } from '../util/dateRangeUtils';
import { Locale } from '../datelogic/types';

interface HeaderProps {
    datepickerId: string;
    month: string;
    nextMonthHandler: React.MouseEventHandler<HTMLButtonElement>;
    nextMonthLabel: string;
    previousMonthHandler: React.MouseEventHandler<HTMLButtonElement>;
    previousMonthLabel: string;
    year: number;
    prevMonthButtonElement: React.RefObject<HTMLButtonElement>;
    nextMonthButtonElement: React.RefObject<HTMLButtonElement>;
    /** Nåværende månedsnummer (1-12) */
    monthNumber: number;
    /** Om måned- og år-dropdown skal vises i kalenderen */
    dropdownCaption?: boolean;
    /** Nåværende språkkode */
    locale: Locale;
    /** Navigasjons-handler når måned/år endres direkte */
    onMonthYearChange?: (month: number, year: number) => void;
    /** Tidligste tillatte dato (format: 'dd.mm.yyyy') - brukes kun til å bestemme år-intervall i dropdown */
    minDate?: string | null;
    /** Seneste tillatte dato (format: 'dd.mm.yyyy') - brukes kun til å bestemme år-intervall i dropdown */
    maxDate?: string | null;
}

export const Header: React.FC<HeaderProps> = ({
    datepickerId,
    month,
    nextMonthHandler,
    nextMonthLabel,
    previousMonthHandler,
    previousMonthLabel,
    year,
    prevMonthButtonElement,
    nextMonthButtonElement,
    monthNumber,
    dropdownCaption = false,
    locale,
    onMonthYearChange,
    minDate,
    maxDate,
}) => {
    const arrowBackIosIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0zNjcuMzg0LTQ4MCAzMDEuMzA4IDMwMS4zMDhxMTEuOTIzIDExLjkyMyAxMS42MTUgMjguMDc3LS4zMDggMTYuMTUzLTEyLjIzMSAyOC4wNzZxLTExLjkyMiAxMS45MjMtMjguMDc2IDExLjkyM3QtMjguMDc2LTExLjkyM0wzMDUuMDc4LTQyOC43N3EtMTAuODQ3LTEwLjg0Ni0xNi4wNzctMjQuMzA3LTUuMjMxLTEzLjQ2Mi01LjIzMS0yNi45MjMgMC0xMy40NjEgNS4yMzEtMjYuOTIzIDUuMjMtMTMuNDYxIDE2LjA3Ny0yNC4zMDdsMzA2Ljg0Ni0zMDYuODQ2cTExLjkyMi0xMS45MjMgMjguMzg0LTExLjYxNiAxNi40NjEuMzA4IDI4LjM4NCAxMi4yMzEgMTEuOTIzIDExLjkyMyAxMS45MjMgMjguMDc2IDAgMTYuMTU0LTExLjkyMyAyOC4wNzdMMzY3LjM4NC00ODBaIi8+PC9zdmc+';

    const monthOptions = getMonthOptions(locale);
    const yearOptions = getYearOptions(minDate, maxDate);

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(e.target.value, 10);
        onMonthYearChange?.(selectedMonth, year);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = parseInt(e.target.value, 10);
        onMonthYearChange?.(monthNumber, selectedYear);
    };
    
    // Prevent event propagation when interacting with dropdowns to avoid
    // closing the calendar when selecting from dropdowns
    const handleDropdownClick = (e: React.MouseEvent) => {
        // Add datepickerId flag to prevent calendar from closing
        (e.nativeEvent as any).__datepickerID = datepickerId;
        e.stopPropagation();
    };
    
    const handleDropdownFocus = (e: React.FocusEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="ffe-calendar__header">
            <div className="ffe-calendar__header-inner-wrapper">
                <button
                    className="ffe-calendar__month-nav ffe-calendar__previous"
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
                    {dropdownCaption ? (
                        <div className="ffe-calendar__dropdown-container">
                            <div className="ffe-calendar__dropdown ffe-calendar__month-dropdown">
                                <Dropdown
                                    id={`${datepickerId}__month-select`}
                                    className="ffe-calendar__month-select"
                                    value={monthNumber}
                                    onChange={handleMonthChange}
                                    aria-label={`${month} ${year}`}
                                    onClick={handleDropdownClick}
                                    onFocus={handleDropdownFocus}
                                >
                                    {monthOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Dropdown>
                            </div>
                            <div className="ffe-calendar__dropdown ffe-calendar__year-dropdown">
                                <Dropdown
                                    id={`${datepickerId}__year-select`}
                                    className="ffe-calendar__year-select"
                                    value={year}
                                    onChange={handleYearChange}
                                    aria-label={`${year}`}
                                    onClick={handleDropdownClick}
                                    onFocus={handleDropdownFocus}
                                >
                                    {yearOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Dropdown>
                            </div>
                        </div>
                    ) : (
                        <div 
                            id={`${datepickerId}__month-label`}
                            data-testid={`${datepickerId}__month-label`}
                        >
                            <span className="ffe-calendar__month">{month}</span>
                            <span className="ffe-calendar__year">{year}</span>
                        </div>
                    )}
                </header>
                <button
                    className="ffe-calendar__month-nav ffe-calendar__next"
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
