import React from 'react';
import { shape, number } from 'prop-types';

export default function LeadDate(props) {
  return (
    <td
      aria-disabled="true"
      aria-selected="false"
      className="ffe-calendar__day"
      key={ props.date.timestamp }
      role="gridcell"
    />
  );
}

LeadDate.propTypes = {
  date: shape({
    timestamp: number.isRequired,
  }).isRequired,
};
