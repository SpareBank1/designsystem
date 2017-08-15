import React from 'react';
import PropTypes from 'prop-types';
import ChevronIkon from 'ffe-icons-react/chevron-ikon';

function Header(props) {
  return (
    <div className="ffe-calendar__header">
      <div className="ffe-calendar__header-inner-wrapper">
        <button
          tabIndex="-1"
          className="ffe-calendar__month-nav ffe-calendar__previous"
          title={ props.previousMonthLabel }
          onClick={ props.previousMonthHandler }
          type="button"
        >
          <ChevronIkon className="ffe-calendar__icon-prev" />
        </button>
        <header
          id={`${props.datepickerId}-title`}
          className="ffe-calendar__title"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div id={ `${props.datepickerId}__month-label` }>
            <span className="ffe-calendar__month">{ props.month }</span>
            <span className="ffe-calendar__year">{ props.year }</span>
          </div>
        </header>
        <button
          tabIndex="-1"
          className="ffe-calendar__month-nav ffe-calendar__next"
          title={ props.nextMonthLabel }
          onClick={ props.nextMonthHandler }
          type="button"
        >
          <ChevronIkon className="ffe-calendar__icon-next" />
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  month: string.isRequired,
  year: number.isRequired,
  previousMonthLabel: string.isRequired,
  nextMonthLabel: string.isRequired,
  datepickerId: string.isRequired,
  previousMonthHandler: func.isRequired,
  nextMonthHandler: func.isRequired,
};

export default Header;
