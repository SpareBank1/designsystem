import i18n from '../i18n/i18n.js';
import {
    getSimpleDateFromString,
    getSimpleDateFromTimestamp,
    getSimpleDateToday,
    SimpleDate,
} from './simpledate.js';
import { CalendarButtonState } from './types.js';

const msInADay = 86400000;
const supportedLocales = ['nb', 'nn', 'en'] as const;
type Locale = (typeof supportedLocales)[number];

function iso8601Week(date: SimpleDate) {
    // Clone date
    const checkDate = date.clone();

    // Find Thursday of this week starting on Monday
    checkDate.date = date.date + 4 - (date.day || 7);

    // Copy time of Thursday of this week
    const time = checkDate.timestamp;

    // Adjust to Jan 1
    checkDate.month = 0;
    checkDate.date = 1;

    const daysSince1Jan = (time - checkDate.timestamp) / msInADay;

    // Return the correct weeknumber
    return Math.floor(Math.round(daysSince1Jan / 7) + 1);
}

function firstDayOfMonth(simpledate: SimpleDate) {
    const clone = simpledate.clone();
    clone.date = 1;
    return clone.day;
}

function isDateWithinMinMax(
    date: SimpleDate,
    minDate: SimpleDate | null,
    maxDate: SimpleDate | null,
) {
    if (minDate && date.isBefore(minDate)) {
        return false;
    }
    return !(maxDate && date.isAfter(maxDate));
}

export class SimpleCalendar {
    locale: Locale;
    focusedDate: SimpleDate;
    selectedDate?: SimpleDate | null;
    minDate: SimpleDate | null;
    maxDate: SimpleDate | null;
    firstDay: number;

    constructor(
        initialDate?: SimpleDate | null,
        minDate?: string | null,
        maxDate?: string | null,
        locale: Locale = 'nb',
    ) {
        this.locale = locale;
        this.focusedDate = initialDate
            ? initialDate.clone()
            : getSimpleDateToday();
        this.selectedDate = initialDate ? initialDate.clone() : initialDate;
        this.minDate = minDate ? getSimpleDateFromString(minDate) : null;
        this.maxDate = maxDate ? getSimpleDateFromString(maxDate) : null;

        // Settings
        this.firstDay = i18n[locale].FIRST_DAY_OF_WEEK;
    }

    public get focusedMonth() {
        // @ts-ignore
        return i18n[this.locale][`MONTH_${this.focusedDate.month + 1}`];
    }

    public get focusedYear() {
        return this.focusedDate.year;
    }

    public get dayNames() {
        const result = [];
        for (let i = this.firstDay; i < this.firstDay + 7; i++) {
            result.push({
                // @ts-ignore
                name: i18n[this.locale][`DAY_${i % 7}`],
                // @ts-ignore
                shortName: i18n[this.locale][`DAY_${i % 7}_SHORT`],
            });
        }
        return result;
    }

    public get previousName() {
        return i18n[this.locale].PREVIOUS_MONTH;
    }

    public get nextName() {
        return i18n[this.locale].NEXT_MONTH;
    }

    public previousYear() {
        this.focusedDate.adjust({ period: 'Y', offset: -1 });
    }

    public nextYear() {
        this.focusedDate.adjust({ period: 'Y', offset: 1 });
    }

    public nextMonth() {
        this.focusedDate.adjust({ period: 'M', offset: 1 });
    }

    public previousMonth() {
        this.focusedDate.adjust({ period: 'M', offset: -1 });
    }

    public nextWeek() {
        this.focusedDate.adjust({ period: 'D', offset: 7 });
    }

    public previousWeek() {
        this.focusedDate.adjust({ period: 'D', offset: -7 });
    }

    public nextDay() {
        this.focusedDate.adjust({ period: 'D', offset: 1 });
    }

    public previousDay() {
        this.focusedDate.adjust({ period: 'D', offset: -1 });
    }

    public firstDateOfMonth() {
        this.focusedDate.date = 1;
    }

    public lastDateOfMonth() {
        this.focusedDate.date = this.focusedDate.daysInMonth;
    }

    public selectFocusedDate() {
        this.selectedDate = this.focusedDate.clone();
    }

    public isDateWithinDateRange(date: SimpleDate) {
        return isDateWithinMinMax(date, this.minDate, this.maxDate);
    }

    public selectTimestamp(timestamp: number) {
        this.focusedDate = getSimpleDateFromTimestamp(timestamp);
        this.selectFocusedDate();
    }

    public selected() {
        return this.selectedDate ? this.selectedDate.format() : '';
    }

    public focused() {
        return this.focusedDate ? this.focusedDate.format() : '';
    }

    public selectDateString(date: string) {
        const newDate = getSimpleDateFromString(date);

        if (!newDate) {
            return;
        }

        this.selectedDate = newDate.clone();
        this.focusedDate = newDate.clone();
    }

    public get visibleDates(): Week[] {
        const result: Week[] = [];

        const leadDays =
            (firstDayOfMonth(this.focusedDate) - this.firstDay + 7) % 7;

        const currentDate = this.focusedDate.clone();
        currentDate.date = 1 - leadDays;

        const rows = Math.ceil((leadDays + this.focusedDate.daysInMonth) / 7);

        for (let row = 0; row < rows; row++) {
            const week: Week = {
                number: iso8601Week(currentDate),
                dates: [],
            };

            result.push(week);

            for (let dayx = 0; dayx < 7; dayx++) {
                const date: CalendarButtonState = {
                    dayInMonth: currentDate.date,
                    timestamp: currentDate.timestamp,
                    isNonClickableDate:
                        currentDate.month !== this.focusedDate.month,
                    isToday: currentDate.equal(getSimpleDateToday()),
                    isFocus: currentDate.equal(this.focusedDate),
                    isSelected:
                        !!this.selectedDate &&
                        currentDate.equal(this.selectedDate),
                    isEnabled: isDateWithinMinMax(
                        currentDate,
                        this.minDate,
                        this.maxDate,
                    ),
                };
                week.dates.push(date);
                currentDate.adjust({ period: 'D', offset: 1 });
            }
        }
        return result;
    }
}

type Week = { dates: CalendarButtonState[]; number: number };
