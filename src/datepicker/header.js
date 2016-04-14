import React, { PropTypes } from 'react';

import ArrowLeft from '../icons/arrowLeft.js';
import ArrowRight from '../icons/arrowRight.js';

export default function Header({ calendar, datepickerId, previousHandler, nextHandler }) {
  return (<div className="ffe-datepicker__header">
    <button
      className="ffe-datepicker__previous" title={ calendar.previousName() }
      onClick={ previousHandler }
    >
      <ArrowLeft />
    </button>
    <button className="ffe-datepicker__next" title={ calendar.nextName() }
      onClick={ nextHandler }
    >
      <ArrowRight />
    </button>
    <div role="header" id={`${datepickerId}-title`} className="ffe-datepicker__title">
      <div id={ `${datepickerId}__month-label` }>
        <span className="ffe-datepicker__month">{ calendar.focusedMonth() }</span>
        <span className="ffe-datepicker__year">{ calendar.focusedYear() }</span>
      </div>
      <span className="ffe-datepicker__accessible-text">, date picker</span>
    </div>
  </div>);
}

Header.propTypes = {
  calendar: PropTypes.object.isRequired,
  datepickerId: PropTypes.string.isRequired,
  previousHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
};
