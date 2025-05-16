import { Locale } from '../datelogic/types';
import { getSimpleDateFromString } from '../datelogic/simpledate';
import i18n from '../i18n/i18n';

type MonthKey = 
  | 'MONTH_1' | 'MONTH_2' | 'MONTH_3' | 'MONTH_4' | 'MONTH_5' | 'MONTH_6'
  | 'MONTH_7' | 'MONTH_8' | 'MONTH_9' | 'MONTH_10' | 'MONTH_11' | 'MONTH_12';

/**
 * Generates month options for dropdown selection
 */
export const getMonthOptions = (locale: Locale) => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
        const monthKey = `MONTH_${i}` as MonthKey;
        months.push({
            value: i,
            label: i18n[locale][monthKey],
        });
    }
    return months;
};

/**
 * Generates year options based on min and max dates
 */
export const getYearOptions = (minDate: string | null | undefined, maxDate: string | null | undefined) => {
    const currentYear = new Date().getFullYear();
    
    // Default ranges when no min/max dates are specified
    let minYear = currentYear - 6; // Default is 6 years backward
    let maxYear = currentYear + 2; // Default is 2 years forward
    
    // Handle min date logic
    if (minDate) {
        const minDateObj = getSimpleDateFromString(minDate);
        if (minDateObj) {
            // If min date is more than 10 years back, limit to 10 years back
            if (currentYear - minDateObj.year > 10) {
                minYear = currentYear - 10;
            } else {
                minYear = minDateObj.year;
            }
        }
    }

    // Handle max date logic
    if (maxDate) {
        const maxDateObj = getSimpleDateFromString(maxDate);
        if (maxDateObj) {
            // If max date is more than 10 years forward, limit to 10 years forward
            if (maxDateObj.year - currentYear > 10) {
                maxYear = currentYear + 10;
            } else {
                maxYear = maxDateObj.year;
            }
        }
    }

    const years = [];
    for (let i = minYear; i <= maxYear; i++) {
        years.push({
            value: i,
            label: String(i),
        });
    }
    return years;
};

/**
 * Check if a given year/month combination is within the min/max date range
 */
export const isMonthInRange = (
    year: number, 
    month: number, 
    minDate: string | null | undefined, 
    maxDate: string | null | undefined
) => {
    if (!minDate && !maxDate) return true;

    const current = new Date(year, month - 1, 1);
    
    if (minDate) {
        const minDateObj = getSimpleDateFromString(minDate);
        if (minDateObj) {
            const minDateTime = new Date(minDateObj.year, minDateObj.month, 1).getTime();
            if (current.getTime() < minDateTime) return false;
        }
    }

    if (maxDate) {
        const maxDateObj = getSimpleDateFromString(maxDate);
        if (maxDateObj) {
            const maxDateTime = new Date(maxDateObj.year, maxDateObj.month, 1).getTime();
            if (current.getTime() > maxDateTime) return false;
        }
    }

    return true;
};


