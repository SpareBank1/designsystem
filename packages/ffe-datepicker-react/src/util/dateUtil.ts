const dateRegex = /^(\d{1,2})(\.| |-|\/)?(\d{0,2})\2?(\d{0,2}(\d{2})?)$/;

export function validateDate(date: string) {
    return dateRegex.exec(date);
}

export function isDateInputWithTwoDigitYear(value: string) {
    return validateDate(value)?.[4].length === 2;
}
