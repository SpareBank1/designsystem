import React, { createContext, useState } from 'react';
import { Locale } from './types';

interface DatePickerContextInterface {
    day?: number | null;
    month?: number | null;
    year?: number | null;
    setDay: (value: number[], focusNext: () => void) => void;
    setMonth: (value: number[], focusNext: () => void) => void;
    setYear: (value: number[]) => void;
    locale: Locale;
}

export const DatePickerContext = createContext<DatePickerContextInterface>({
    day: null,
    month: null,
    year: null,
    setDay: () => null,
    setMonth: () => null,
    setYear: () => null,
    locale: 'nb',
});

interface Props {
    locale: Locale;
    children: React.ReactNode;
}

const MONTHS_PER_YEAR = 12;
const MAX_DAYS = 31;

export const DatePickerProvider: React.FC<Props> = ({ children, locale }) => {
    const [day, setDay] = useState<number>();
    const [month, setMonth] = useState<number>();
    const [year, setYear] = useState<number>();

    const getTotal = (numbers: (number | undefined)[]) => {
        const validNumbers = numbers.filter(it => typeof it === 'number');
        return validNumbers
            .map(
                (it, index) =>
                    it * Math.pow(10, validNumbers.length - index - 1),
            )
            .reduce((acc, curr) => acc + curr, 0);
    };

    return (
        <DatePickerContext.Provider
            value={{
                day,
                month,
                year,
                setDay: (value, focusNext) => {
                    const numbers = value.slice(-2);
                    const [first, second] = numbers;
                    const total = getTotal(numbers);
                    if (total > MAX_DAYS) {
                        focusNext();
                    } else if (first > 3) {
                        setDay(total);
                        focusNext();
                    } else {
                        setDay(total);
                        if (second !== undefined) {
                            focusNext();
                        }
                    }
                },
                setMonth: (value, focusNext) => {
                    const numbers = value.slice(-2);
                    const [first, second] = numbers;
                    const total = getTotal(numbers);

                    if (total > MONTHS_PER_YEAR) {
                        focusNext();
                    } else if (first > 1) {
                        setMonth(total);
                        focusNext();
                    } else {
                        setMonth(total);
                        if (second !== undefined) {
                            focusNext();
                        }
                    }
                },
                setYear: value => {
                    setYear(getTotal(value.slice(-4)));

                    /*   if (year === 'yyyy' || `${year}${value}`.length > 4) {
                        setYear(`${value}`);
                    } else {
                        setYear(`${year}${value}`);
                    }*/
                },
                locale,
            }}
        >
            {children}
        </DatePickerContext.Provider>
    );
};
