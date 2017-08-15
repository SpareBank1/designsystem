import React from 'react';
import { func, number, string } from 'prop-types';
import ChevronIkon from 'ffe-icons-react/chevron-ikon';

export default function Header(props) {
  const {
    datepickerId,
    month,
    nextMonthHandler,
    nextMonthLabel,
    previousMonthHandler,
    previousMonthLabel,
    year,
  } = props;

  return (
    <div className="ffe-calendar__header">
      <div className="ffe-calendar__header-inner-wrapper">
        <button
          className="ffe-calendar__month-nav ffe-calendar__previous"
          onClick={ previousMonthHandler }
          tabIndex="-1"
          title={ previousMonthLabel }
          type="button"
        >
          <ChevronIkon className="ffe-calendar__icon-prev" />
        </button>
        <header
          aria-live="assertive"
          aria-atomic="true"
          className="ffe-calendar__title"
          id={`${datepickerId}-title`}
        >
          <div id={ `${datepickerId}__month-label` }>
            <span className="ffe-calendar__month">{ month }</span>
            <span className="ffe-calendar__year">{ year }</span>
          </div>
        </header>
        <button
          className="ffe-calendar__month-nav ffe-calendar__next"
          onClick={ nextMonthHandler }
          title={ nextMonthLabel }
          tabIndex="-1"
          type="button"
        >
          <ChevronIkon className="ffe-calendar__icon-next" />
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
};
