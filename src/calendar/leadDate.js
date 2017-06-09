import React from 'react';
import PropTypes from 'prop-types';

export default function LeadDate({ date }) {
  return (
    <td
      className="ffe-calendar__day"
      key={ date.timestamp }
      role="gridcell"
      aria-selected="false"
      aria-disabled="true"
    />
  );
}

LeadDate.propTypes = {
  date: PropTypes.object.isRequired,
};
