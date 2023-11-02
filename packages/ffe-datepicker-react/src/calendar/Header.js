import React from 'react';
import { func, number, object, string } from 'prop-types';
import Symbol from '@sb1/ffe-symbols-react';

export default function Header(props) {
    const {
        datepickerId,
        month,
        nextMonthHandler,
        nextMonthLabel,
        previousMonthHandler,
        previousMonthLabel,
        year,
        prevMonthButtonElement,
        nextMonthButtonElement,
    } = props;

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
                    <Symbol
                        icon="arrow_back_ios"
                        size="md"
                        className="ffe-calendar__icon-prev"
                    />
                </button>
                <header
                    aria-live="polite"
                    className="ffe-calendar__title"
                    id={`${datepickerId}-title`}
                >
                    <div id={`${datepickerId}__month-label`}>
                        <span className="ffe-calendar__month">{month}</span>
                        <span className="ffe-calendar__year">{year}</span>
                    </div>
                </header>
                <button
                    className="ffe-calendar__month-nav ffe-calendar__next"
                    onClick={nextMonthHandler}
                    aria-label={nextMonthLabel}
                    type="button"
                    ref={nextMonthButtonElement}
                    tabIndex={-1}
                >
                    <Symbol
                        icon="arrow_forward_ios"
                        size="md"
                        className="ffe-calendar__icon-next"
                    />
                </button>
            </div>
        </div>
    );
}

Header.propTypes = {
    datepickerId: string.isRequired,
    month: string.isRequired,
    nextMonthHandler: func.isRequired,
    nextMonthLabel: string.isRequired,
    previousMonthHandler: func.isRequired,
    previousMonthLabel: string.isRequired,
    year: number.isRequired,
    prevMonthButtonElement: object.isRequired,
    nextMonthButtonElement: object.isRequired,
};
