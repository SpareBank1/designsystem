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
 * Generates year options for dropdown selection
 */
export const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    
    // Standard range: 6 years backward and 2 years forward
    const minYear = currentYear - 6;
    const maxYear = currentYear + 2;

    const years = [];
    for (let i = minYear; i <= maxYear; i++) {
        years.push({
            value: i,
            label: String(i),
        });
    }
    return years;
};


