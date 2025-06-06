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
 * Generates year options based on min and max dates, or defaults to standard range
 */
export const getYearOptions = (minDate?: string | null, maxDate?: string | null) => {
    const currentYear = new Date().getFullYear();
    
    // Default range: 6 years backward and 2 years forward
    let minYear = currentYear - 6;
    let maxYear = currentYear + 2;
    
    // Use minDate year if provided
    if (minDate) {
        const minDateObj = getSimpleDateFromString(minDate);
        if (minDateObj) {
            minYear = minDateObj.year;
        }
    }

    // Use maxDate year if provided  
    if (maxDate) {
        const maxDateObj = getSimpleDateFromString(maxDate);
        if (maxDateObj) {
            maxYear = maxDateObj.year;
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


