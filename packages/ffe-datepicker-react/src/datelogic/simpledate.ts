import { validateDate } from '../util/dateUtil';

function isDate(value: unknown): value is Date {
    return (
        !!value &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Date]'
    );
}

function daysInMonth(year: number, month: number) {
    return 32 - new Date(year, month, 32).getDate();
}

export class SimpleDate {
    internalDate: Date;

    constructor(date?: Date) {
        if (isDate(date)) {
            this.internalDate = date;
        } else {
            this.internalDate = new Date();
        }
    }

    public get day() {
        return this.internalDate.getDay();
    }

    public get date() {
        return this.internalDate.getDate();
    }

    public get month() {
        return this.internalDate.getMonth();
    }

    public get year() {
        return this.internalDate.getFullYear();
    }

    public get daysInMonth() {
        return daysInMonth(this.year, this.month);
    }

    public get timestamp() {
        return this.internalDate.getTime();
    }

    public set date(date: number) {
        this.internalDate = new Date(this.year, this.month, date);
    }

    public set year(year: number) {
        this.internalDate = new Date(year, this.month, this.date);
    }

    public set month(month: number) {
        this.internalDate = new Date(this.year, month, this.date);
    }

    public adjust({
        period,
        offset,
    }: {
        period: 'D' | 'M' | 'Y';
        offset: number;
    }) {
        let date = period === 'D' ? this.date + offset : this.date;
        const month = period === 'M' ? this.month + offset : this.month;
        const year = period === 'Y' ? this.year + offset : this.year;

        if (period !== 'D') {
            date = Math.max(1, Math.min(date, daysInMonth(year, month)));
        }

        this.internalDate = new Date(year, month, date);
    }

    public equal(other: SimpleDate) {
        return (
            this.date === other.date &&
            this.month === other.month &&
            this.year === other.year
        );
    }

    public isBefore(other: SimpleDate) {
        return this.timestamp < other.timestamp;
    }

    public isAfter(other: SimpleDate) {
        return this.timestamp > other.timestamp;
    }

    public clone() {
        const date = new Date(this.year, this.month, this.date);
        return new SimpleDate(date);
    }

    public format() {
        const day = this.date < 10 ? `0${this.date}` : this.date;
        const normalizedMonthNumber = this.month + 1;
        const month =
            normalizedMonthNumber < 10
                ? `0${normalizedMonthNumber}`
                : normalizedMonthNumber;
        return `${day}.${month}.${this.year}`;
    }

    public toString() {
        return this.format();
    }
}

export const getSimpleDateToday = (): SimpleDate => new SimpleDate();

export const getSimpleDateFromTimestamp = (timestamp: number) =>
    new SimpleDate(new Date(timestamp));

function beforeYear(year: number, yearLimit: number) {
    return year < yearLimit;
}

/*
  If given a one- or two-digit year we assume this century.
  E.g: 01.01.17 will yield 01.01.2017, not 01.01.1917 (JS default)
  Else they'll have to use 4-digit year.
*/
function deriveOneOrTwoDigitYear(year: number) {
    const yearDate = new Date(year, 0);
    const fullYear = yearDate.getFullYear();
    if (beforeYear(fullYear, 2000)) {
        return yearDate.getFullYear() + 100;
    }

    return yearDate.getFullYear();
}

/*
  If given a three-digit year we assume this millennium.
  E.g: 0101017 will yield 01.01.2017, or 0101117 01.01.2117
  Else they'll have to use 4-digit year.
*/
function deriveThreeDigitYear(year: number) {
    return parseInt(`2${year}`, 10);
}

const noop = () => {};

/*ts ignore just for keeing old js implementation*/
export const getSimpleDateFromString = (
    value: string | undefined | null,
    onSuccess: (simpleDate: SimpleDate) => void = noop,
): SimpleDate | null => {
    const match = value && validateDate(value);

    if (!match) {
        return null;
    }

    const date = match[1];
    let month = match[3];
    let year = match[4];

    if (year.length === 1 || year.length === 2) {
        // @ts-ignore
        year = deriveOneOrTwoDigitYear(year);
    }
    if (year.length === 3) {
        // @ts-ignore
        year = deriveThreeDigitYear(year);
    }

    // If no year and/or month is input, use todays month and/or year
    const today = new Date();
    if (!month) {
        // @ts-ignore
        month = today.getMonth() + 1;
    }
    if (!year) {
        // @ts-ignore
        year = today.getFullYear();
    }

    // @ts-ignore
    const newDate = new SimpleDate(new Date(year, month - 1, date));

    if (
        // @ts-ignore
        newDate.date !== date * 1 ||
        // @ts-ignore
        newDate.month + 1 !== month * 1 ||
        // @ts-ignore
        newDate.year !== year * 1
    ) {
        return null;
    }

    onSuccess(newDate);
    return newDate;
};
