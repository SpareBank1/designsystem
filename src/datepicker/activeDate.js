import React, { PropTypes } from 'react';

export default function ActiveDate({ date, datepickerId }) {
  let className = 'ffe-datepicker__date';
  className += date.isToday ? ' ffe-datepicker__date--today' : '';
  className += date.isFocus ? ' ffe-datepicker__date--focus' : '';
  className += date.isSelected ? ' ffe-datepicker__date--selected' : '';

  const id = `${datepickerId}__${date.date}`;

  return (<td id={ id } role="gridcell" aria-selected="false">
    <button
      className={ className } tabIndex="-1"
      data-timestamp={ date.timestamp }
    >{ date.date }</button>
  </td>);
}

ActiveDate.propTypes = {
  date: PropTypes.object.isRequired,
  datepickerId: PropTypes.string.isRequired,
};
