import React, { PropTypes } from 'react';

export default function LeadDate({ date }) {
  return (<td
    className="ffe-calendar__day"
    key={ date.timestamp }
    role="gridcell"
    aria-selected="false"
    aria-disabled="true"
  >
  </td>);
}

LeadDate.propTypes = {
  date: PropTypes.object.isRequired,
};
