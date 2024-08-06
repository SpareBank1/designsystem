import React from 'react';

interface Props {
    date: {
        timestamp: number;
    };
}

export const NonClickableDate: React.FC<Props> = ({ date }) => {
    return (
        <td
            aria-hidden={true}
            className="ffe-calendar__day"
            key={date.timestamp}
            role="button"
        />
    );
};
