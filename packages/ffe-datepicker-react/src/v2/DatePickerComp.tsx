import React, { useContext, useRef, useState } from 'react';
import { DatePickerContext } from './DatePickerContext';
import { SpinnButton } from './SpinnButton';
import { PadZero } from './PadZero';
import { Button } from '../button';
import { Calendar } from './calendar';
import { CalendarWrapper, CalendarWrapperHandle } from './CalenderWrapper';

export const DatePickerComp: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const monthRef = useRef<HTMLSpanElement>(null);
    const yearRef = useRef<HTMLSpanElement>(null);
    const { day, setDay, year, setYear, month, setMonth, locale } =
        useContext(DatePickerContext);
    const calendarRef = useRef<CalendarWrapperHandle>(null);

    return (
        <div className="ffe-datepicker" ref={containerRef}>
            <div className="ffe-input-field ffe-dateinput">
                <SpinnButton
                    onChange={value => {
                        setDay(value, () =>
                            monthRef.current?.focus({ preventScroll: true }),
                        );
                    }}
                    maxLength={2}
                >
                    {day ? <PadZero value={day} /> : 'dd'}
                </SpinnButton>
                .
                <SpinnButton
                    ref={monthRef}
                    onChange={value => {
                        setMonth(value, () =>
                            yearRef.current?.focus({ preventScroll: true }),
                        );
                    }}
                    maxLength={2}
                >
                    {month ? <PadZero value={month} /> : 'mm'}
                </SpinnButton>
                .
                <SpinnButton
                    ref={yearRef}
                    onChange={value => {
                        setYear(value);
                    }}
                    maxLength={4}
                >
                    {year ? year : 'yyyy'}
                </SpinnButton>
            </div>
            <Button
                onClick={() => {
                    const rect = containerRef.current?.getBoundingClientRect();
                    calendarRef.current?.open({
                        top: rect?.bottom ?? 0,
                        left: rect?.left ?? 0,
                    });
                }}
                value={'TODO'}
                locale={locale}
            />
            <CalendarWrapper ref={calendarRef}>
                <Calendar />
            </CalendarWrapper>
        </div>
    );
};
