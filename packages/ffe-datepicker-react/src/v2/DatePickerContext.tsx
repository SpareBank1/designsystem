import React, { createContext, useState } from 'react';

interface DatePickerContextInterface {
    day?: number | null;
    month?: number | null;
    year?: number | null;
    setDay: (value: number, focusNext: () => void) => void;
    setMonth: (value: number, focusNext: () => void) => void;
    setYear: (value: number) => void;
}

export const DatePickerContext = createContext<DatePickerContextInterface>({
    day: null,
    month: null,
    year: null,
    setDay: () => null,
    setMonth: () => null,
    setYear: () => null,
});

interface Props {
    children: React.ReactNode;
}

const MONTHS_PER_YEAR = 12;
const MAX_MONTH = 31; // TODO noen logik her avhenge av månad?

export const DatePickerProvider: React.FC<Props> = ({ children }) => {
    const [day, setDay] = useState<number>([]);
    const [month, setMonth] = useState<number>();
    const [year, setYear] = useState<number>();

    return (
        <DatePickerContext.Provider
            value={{
                day,
                month,
                year,
                setDay: (value, focusNext) => {
                    const next = parseInt(`${day ?? 0}${value}`);
                    if (next > MAX_MONTH) {
                        console.log('her nå', next);
                        setDay(value);
                        /* focusNext();*/
                    } else {
                        console.log(value, day, next);
                        setDay(next);
                    }

                    /* const parsedCurrent = parseInt(day);
                    const parsedNext = parseInt(`${value}${parsedCurrent}`);
                    if (day === 'dd' || parsedNext < 10) {
                        setDay(`0${value}`);
                    } else if (value >= 4 || parsedCurrent >= 4) {
                        setDay(`0${value}`);
                        focusNext();
                    } else {
                        setDay(`${parsedNext}`);
                        focusNext();
                    }*/
                },
                setMonth: (value, focusNext) => {
                    /* const current = parseInt(month);
                    if (
                        month === 'mm' ||
                        parseInt(`${current}${value}`) > MONTHS_PER_YEAR
                    ) {
                        setMonth(`0${value}`);
                    } else {
                        setMonth(`${current}${value}`);
                        focusNext();
                    }*/
                },
                setYear: value => {
                    /*   if (year === 'yyyy' || `${year}${value}`.length > 4) {
                        setYear(`${value}`);
                    } else {
                        setYear(`${year}${value}`);
                    }*/
                },
            }}
        >
            {children}
        </DatePickerContext.Provider>
    );
};
