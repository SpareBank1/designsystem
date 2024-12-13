import React, { createContext, useState } from 'react';
import { Locale } from '../datelogic/types';
import { validateDate } from '../util/dateUtil';
import { getSimpleDateFromString } from '../datelogic/simpledate';

interface DatepickerContextInterface {
    day?: number | null;
    month?: number | null;
    year?: number | null;
    setDay: (value: number[], focusNext?: () => void) => void;
    setMonth: (value: number[], focusNext?: () => void) => void;
    setYear: (value: number[]) => void;
    locale: Locale;
    calendarActiveDate?: string;
    setCalendarActiveDate: (date: string) => void;
}

export const DatepickerContext = createContext<DatepickerContextInterface>({
    day: null,
    month: null,
    year: null,
    setDay: () => null,
    setMonth: () => null,
    setYear: () => null,
    locale: 'nb',
    calendarActiveDate: '',
    setCalendarActiveDate: () => null,
});

interface Props {
    locale: Locale;
    value?: string;
    children: React.ReactNode;
}

const MONTHS_PER_YEAR = 12;
const MAX_DAYS = 31;

export const DatepickerProvider: React.FC<Props> = ({
    children,
    value = '',
    locale,
}) => {
    const newDate = validateDate(value) ? getSimpleDateFromString(value) : '';
    const [day, setDay] = useState<number | null>(
        newDate ? newDate.date : null,
    );
    const [month, setMonth] = useState<number | null>(
        newDate ? newDate.month + 1 : null,
    );
    const [year, setYear] = useState<number | null>(
        newDate ? newDate.year : null,
    );
    const [calendarActiveDate, setCalendarActiveDate] = useState<string>(
        newDate?.toString() ?? '',
    );

    const getTotal = (numbers: (number | undefined)[]) => {
        const validNumbers = numbers.filter(it => typeof it === 'number');
        return validNumbers
            .map(
                (it, index) =>
                    (it ?? 1) * Math.pow(10, validNumbers.length - index - 1),
            )
            .reduce((acc, curr) => acc + curr, 0);
    };

    return (
        <DatepickerContext.Provider
            value={{
                day,
                month,
                year,
                setDay: (newValue, focusNext = undefined) => {
                    const numbers = newValue.slice(-2);
                    const [first, second] = numbers;
                    const total = getTotal(numbers);
                    if (total > MAX_DAYS) {
                        focusNext?.();
                    } else if (first > 3) {
                        setDay(total);
                        focusNext?.();
                    } else {
                        setDay(total);
                        if (second !== undefined) {
                            focusNext?.();
                        }
                    }
                },
                setMonth: (newValue, focusNext = undefined) => {
                    const numbers = newValue.slice(-2);
                    const [first, second] = numbers;
                    const total = getTotal(numbers);

                    if (total > MONTHS_PER_YEAR) {
                        focusNext?.();
                    } else if (first > 1) {
                        setMonth(total);
                        focusNext?.();
                    } else {
                        setMonth(total);
                        if (second !== undefined) {
                            focusNext?.();
                        }
                    }
                },
                setYear: newValue => {
                    setYear(getTotal(newValue.slice(-4)));
                },
                calendarActiveDate,
                setCalendarActiveDate: date => {
                    setCalendarActiveDate(date);
                },
                locale,
            }}
        >
            {children}
        </DatepickerContext.Provider>
    );
};
