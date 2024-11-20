import React, { useContext, useRef } from 'react';
import { DatePickerContext } from './DatePickerContext';
import { SpinnButton } from './SpinnButton';

export const DatePickerComp: React.FC = () => {
    /*
    const dayRef = useRef<HTMLSpanElement>(null);
*/
    const monthRef = useRef<HTMLSpanElement>(null);
    const yearRef = useRef<HTMLSpanElement>(null);
    const { day, setDay, year, setYear, month, setMonth } =
        useContext(DatePickerContext);

    const handleDayChange = (evt: React.KeyboardEvent<HTMLSpanElement>) => {
        evt.stopPropagation();
        if (/\d/.test(evt.key)) {
            setDay(parseInt(evt.key), () =>
                monthRef.current?.focus({ preventScroll: true }),
            );
        }
    };

    const handleMonthChange = (evt: React.KeyboardEvent<HTMLSpanElement>) => {
        evt.stopPropagation();
        if (/\d/.test(evt.key)) {
            setMonth(parseInt(evt.key), () =>
                yearRef.current?.focus({ preventScroll: true }),
            );
        }
    };

    const handleYearChange = (evt: React.KeyboardEvent<HTMLSpanElement>) => {
        evt.stopPropagation();
        if (/\d/.test(evt.key)) {
            setYear(parseInt(evt.key));
        }
    };

    return (
        <div className="ffe-datepicker--wrapper">
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                className="ffe-input-field ffe-dateinput"
                /*  tabIndex={0}*/
            >
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                {/* <span
                    className="ffe-dateinput__field"
                    tabIndex={0}
                    onKeyDown={handleDayChange}
                >
                    {typeof day === 'number'
                        ? `${day < 10 ? '0' : ''}${day}`
                        : 'dd'}
                </span>*/}
                <SpinnButton
                    onChange={history => {
                        console.log(history);
                    }}
                >
                    {typeof day === 'number'
                        ? `${day < 10 ? '0' : ''}${day}`
                        : 'dd'}
                </SpinnButton>
                .
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <span
                    className="ffe-dateinput__field"
                    tabIndex={0}
                    ref={monthRef}
                    onKeyDown={handleMonthChange}
                >
                    {month ?? 'mm'}
                </span>
                .
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <span
                    className="ffe-dateinput__field"
                    tabIndex={0}
                    ref={yearRef}
                    onKeyDown={handleYearChange}
                >
                    {year ?? 'yyyy'}
                </span>
            </div>
            {/* <Button
                    onClick={calendarButtonClickHandler}
                    value={value}
                    locale={locale}
                    ref={buttonRef}
                />*/}
        </div>
    );
};
