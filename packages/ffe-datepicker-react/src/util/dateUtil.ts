import { padZero } from '../datepicker/padZero.js';

const dateRegex = /^(\d{1,2})(\.| |-|\/)?(\d{0,2})\2?(\d{0,2}(\d{2})?)$/;

export function validateDate(date: string) {
    return dateRegex.exec(date);
}

export function isDateInputWithTwoDigitYear(value: string) {
    return validateDate(value)?.[4].length === 2;
}

export function getPaddedDateString(
    day: null | undefined | number,
    month: null | undefined | number,
    year: null | undefined | number,
) {
    return `${padZero(day ?? 0)}.${padZero(month ?? 0)}.${year}`;
}
