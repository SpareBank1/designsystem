import React, { PropTypes } from 'react';

export default function DisabledDate({ date }) {
  return (<td
    key={ date.timestamp } role="gridcell"
    aria-selected="false" aria-disabled="true"
  ></td>);
}

DisabledDate.propTypes = {
  date: PropTypes.object.isRequired,
};
