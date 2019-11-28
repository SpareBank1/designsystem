import React from 'react';
import { func, string } from 'prop-types';

export default function MonthPicker(props) {
    const { previousMonthHandler, nextMonthHandler, month } = props;

    function left(evt) {
        previousMonthHandler(evt);
    }

    function right(evt) {
        nextMonthHandler(evt);
    }

    return (
        <div className="ffe-calendar__monthpicker">
            <div className="ffe-calendar__monthpicker-center">{month}</div>
            <div
                role="none"
                onClick={left}
                className="ffe-calendar__monthpicker-left"
            >
                <div />
            </div>
            <div
                role="none"
                onClick={right}
                className="ffe-calendar__monthpicker-right"
            >
                <div />
            </div>
        </div>
    );
}

MonthPicker.propTypes = {
    previousMonthHandler: func.isRequired,
    nextMonthHandler: func.isRequired,
    month: string.isRequired,
};
