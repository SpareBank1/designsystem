import React, { createContext, useContext, useState } from 'react';
import { getSimpleDateFromString } from './simpledate';

interface CalendarContextProps {
    day: string;
    month: string;
    year: string;
    visibleMonth: number;
    setVisibleMonth: (month: number) => void;
    visibleYear: number;
    setVisibleYear: (year: number) => void;
    updateDay: (day: number) => void;
    updateMonth: (month: number) => void;
    setYear: (year: string) => void;
}

const CalendarContext = createContext<CalendarContextProps | undefined>(
    undefined,
);

interface CalendarProviderProps {
    children: React.ReactNode;
    initialDate?: string;
}

export const CalendarProvider: React.FC<CalendarProviderProps> = ({
    children,
    initialDate,
}) => {
    const newDate = getSimpleDateFromString(initialDate);

    const [day, setDay] = useState(newDate?.day.toString() ?? 'dd');
    const [month, setMonth] = useState(newDate?.month.toString() ?? 'mm');
    const [year, setYear] = useState(newDate?.year.toString() ?? 'yyyy');
    const [visibleMonth, setVisibleMonth] = useState(
        isNaN(parseInt(month)) ? new Date().getMonth() : parseInt(month),
    );
    const [visibleYear, setVisibleYear] = useState(
        isNaN(parseInt(year)) ? new Date().getFullYear() : parseInt(year),
    );

    function updateDay(newDay: number) {
        const existingDay = parseInt(day.length === 1 ? day : day.slice(1));
        if (isNaN(existingDay)) {
            setDay(`0${newDay}`);
        } else if (existingDay <= 2 || (newDay <= 1 && existingDay <= 3)) {
            setDay(`${existingDay}${newDay}`);
        } else {
            setDay(`0${newDay}`);
        }
    }

    function updateMonth(newMonth: number) {
        const existingMonth = parseInt(
            month.length === 1 ? month : month.slice(1),
        );
        let newMonthValue = `0${newMonth}`;
        if (isNaN(existingMonth)) {
            newMonthValue = `0${newMonth}`;
        } else if (
            existingMonth <= 1 ||
            (newMonth <= 2 && existingMonth <= 1)
        ) {
            newMonthValue = `${existingMonth}${newMonth}`;
            //Add scenario for 0
        }
        setMonth(newMonthValue);
        setVisibleMonth(parseInt(newMonthValue));
    }

    return (
        <CalendarContext.Provider
            value={{
                month,
                year,
                updateMonth,
                setYear,
                day,
                updateDay,
                visibleYear,
                visibleMonth,
                setVisibleMonth,
                setVisibleYear,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};

export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendar must be used within a CalendarProvider');
    }

    return context;
};
