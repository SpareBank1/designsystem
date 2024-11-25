import React, { useState } from 'react';
import {
    lastDayOfMonth,
    eachDayOfInterval,
    startOfMonth,
    getWeekOfMonth,
    getWeeksInMonth,
} from 'date-fns';
import { Locale } from '../types';
import { txt } from './texts';
import { parseNsISO8601 } from '../date';
import { Day } from './Day';

export interface CalendarProps {
    locale?: Locale;
    initialValue?: `${string}.${string}.${string}` | null;
}

const DAYS_IN_WEEK = 7;

const norwegianIndex: Record<number, number> = {
    0: 6,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
};

export const Calendar: React.FC<CalendarProps> = ({
    locale = 'nb',
    initialValue = '10.05.2023',
}) => {
    const startOfWeek = locale === 'en' ? 0 : 1;

    const [value, setValue] = useState(
        initialValue ? parseNsISO8601(initialValue) : null,
    );

    const currentMonth = value ?? new Date();

    const weeksInMonth = Array.from(
        Array(getWeeksInMonth(currentMonth)).keys(),
    );
    const days = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: lastDayOfMonth(currentMonth),
    });

    const refs = Array.from(
        Array(weeksInMonth.length * DAYS_IN_WEEK).keys(),
    ).map(() => React.createRef<HTMLSpanElement>());

    const handeKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.key === 'ArrowDown') {
        }

        if (e.key === 'ArrowRight') {
        }
        if (e.key === 'ArrowLeft') {
        }

        console.log(e.key);
    };

    return (
        <div className="ffe-calendar" aria-colcount={days.length}>
            <div className="ffe-calendar__days" role="grid">
                <div role="rowgroup">
                    <div role="row">
                        {txt[locale].daysShort.map(it => (
                            <span
                                className="ffe-calendar__day-name"
                                role="columnheader"
                                key={it}
                            >
                                {it}
                            </span>
                        ))}
                    </div>
                </div>
                <div role="rowgroup">
                    {weeksInMonth.map(weekNumberInMonth => {
                        const daysOfWeek = days.filter(
                            dayInMonth =>
                                getWeekOfMonth(dayInMonth, {
                                    weekStartsOn: startOfWeek,
                                }) ===
                                weekNumberInMonth + 1,
                            { startOfWeek },
                        );

                        return (
                            <div key={weekNumberInMonth} role="row">
                                {Array.from(Array(DAYS_IN_WEEK).keys()).map(
                                    dayInWeekIndex => {
                                        const dayOfWeek = daysOfWeek.find(
                                            it =>
                                                (locale === 'en'
                                                    ? it.getDay()
                                                    : norwegianIndex[
                                                          it.getDay()
                                                      ]) === dayInWeekIndex,
                                        );

                                        if (!dayOfWeek) {
                                            return (
                                                <span key={dayInWeekIndex} />
                                            );
                                        }

                                        return (
                                            <Day
                                                key={dayInWeekIndex}
                                                onKeyDown={handeKeyDown}
                                                onClick={() => {
                                                    setValue(
                                                        new Date(
                                                            currentMonth.getFullYear(),
                                                            currentMonth.getMonth(),
                                                            dayOfWeek.getDate(),
                                                        ),
                                                    );
                                                }}
                                                isSelected={
                                                    dayOfWeek.getDate() ===
                                                    value?.getDate()
                                                }
                                                ref={
                                                    refs[
                                                        weekNumberInMonth *
                                                            DAYS_IN_WEEK +
                                                            dayInWeekIndex
                                                    ]
                                                }
                                            >
                                                {dayOfWeek.getDate()}
                                            </Day>
                                        );
                                    },
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
