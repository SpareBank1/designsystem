import React, { useEffect, useRef } from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
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
    /** Tidligste tillatte dato (format: 'dd.mm.yyyy') */
    minDate?: string | null;
    /** Seneste tillatte dato (format: 'dd.mm.yyyy') */
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

    const monthDropdownRef = useRef<HTMLDivElement>(null);
    const yearDropdownRef = useRef<HTMLDivElement>(null);

    const monthOptions = getMonthOptions(locale);
    const yearOptions = getYearOptions(minDate, maxDate);

    const selectedMonthOption = monthOptions.find(option => option.value === monthNumber);
    const selectedYearOption = yearOptions.find(option => option.value === year);

    const handleMonthChange = (selectedItem: typeof monthOptions[0] | null) => {
        if (selectedItem) {
            onMonthYearChange?.(selectedItem.value, year);
        }
    };

    const handleYearChange = (selectedItem: typeof yearOptions[0] | null) => {
        if (selectedItem) {
            onMonthYearChange?.(monthNumber, selectedItem.value);
        }
    };
    
    // Prevent event propagation when interacting with dropdowns to avoid
    // closing the calendar when selecting from dropdowns
    const handleDropdownClick = (e: React.MouseEvent) => {
        // Add datepickerId flag to prevent calendar from closing
        (e.nativeEvent as any).__datepickerID = datepickerId;
        
        // Only stop propagation for input clicks, not option selections
        if ((e.target as HTMLElement).tagName === 'INPUT') {
            e.stopPropagation();
        }
    };
    
    const handleDropdownFocus = (e: React.FocusEvent) => {
        // Don't stop propagation to allow normal focus behavior
        (e.nativeEvent as any).__datepickerID = datepickerId;
    };

    // Handler for dropdown container to catch all clicks within dropdown area
    const handleDropdownContainerClick = (e: React.MouseEvent) => {
        // Add datepickerId flag to prevent calendar from closing on any click in dropdown area
        (e.nativeEvent as any).__datepickerID = datepickerId;
    };

    // Use useEffect to add event listeners to dropdown containers for robust event handling
    useEffect(() => {
        const addEventListeners = (ref: React.RefObject<HTMLDivElement>) => {
            const element = ref.current;
            if (element) {
                const handleClick = (e: Event) => {
                    // Only add flag, don't stop propagation for option clicks
                    (e as any).__datepickerID = datepickerId;
                };
                
                element.addEventListener('click', handleClick, true); // Use capture phase
                return () => {
                    element.removeEventListener('click', handleClick, true);
                };
            }
            return () => {};
        };

        const cleanupMonth = addEventListeners(monthDropdownRef);
        const cleanupYear = addEventListeners(yearDropdownRef);

        return () => {
            cleanupMonth();
            cleanupYear();
        };
    }, [datepickerId]);

    const handleDropdownOpen = () => {
        // Add a small delay to ensure the dropdown list is rendered before adding event listeners
        setTimeout(() => {
            const addClickHandler = (container: HTMLDivElement) => {
                const dropdownList = container.querySelector('.ffe-searchable-dropdown__list');
                if (dropdownList) {
                    const handleListClick = (e: Event) => {
                        (e as any).__datepickerID = datepickerId;
                        // Don't stop propagation to allow option selection
                    };
                    dropdownList.addEventListener('click', handleListClick, true);
                }
            };

            if (monthDropdownRef.current) {
                addClickHandler(monthDropdownRef.current);
            }
            if (yearDropdownRef.current) {
                addClickHandler(yearDropdownRef.current);
            }
        }, 0);
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
                            <div ref={monthDropdownRef} className="ffe-calendar__dropdown ffe-calendar__month-dropdown" onClick={handleDropdownContainerClick}>
                                <SearchableDropdown
                                    id={`${datepickerId}__month-select`}
                                    className="ffe-calendar__month-select"
                                    dropdownList={monthOptions}
                                    dropdownAttributes={['label']}
                                    searchAttributes={['label']}
                                    displayAttribute="label"
                                    selectedItem={selectedMonthOption}
                                    onChange={handleMonthChange}
                                    locale={locale}
                                    onOpen={handleDropdownOpen}
                                    inputProps={{
                                        'aria-label': `${month} ${year}`,
                                        onFocus: handleDropdownFocus,
                                        onClick: handleDropdownClick,
                                    }}
                                />
                            </div>
                            <div ref={yearDropdownRef} className="ffe-calendar__dropdown ffe-calendar__year-dropdown" onClick={handleDropdownContainerClick}>
                                <SearchableDropdown
                                    id={`${datepickerId}__year-select`}
                                    className="ffe-calendar__year-select"
                                    dropdownList={yearOptions}
                                    dropdownAttributes={['label']}
                                    searchAttributes={['label']}
                                    displayAttribute="label"
                                    selectedItem={selectedYearOption}
                                    onChange={handleYearChange}
                                    locale={locale}
                                    onOpen={handleDropdownOpen}
                                    inputProps={{
                                        'aria-label': `${year}`,
                                        onFocus: handleDropdownFocus,
                                        onClick: handleDropdownClick,
                                    }}
                                />
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
