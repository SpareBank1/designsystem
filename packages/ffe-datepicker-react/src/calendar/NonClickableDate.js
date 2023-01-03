import React from 'react';
import { shape, number } from 'prop-types';

export default function NonClickableDate(props) {
    return (
        <td
            aria-disabled="true"
            aria-current="false"
            className="ffe-calendar__day"
            key={props.date.timestamp}
            role="button"
        />
    );
}

NonClickableDate.propTypes = {
    date: shape({
        timestamp: number.isRequired,
    }).isRequired,
};
