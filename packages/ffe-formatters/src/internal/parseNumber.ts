export const parseNumber = (
    number: number | string | null | undefined,
    language?: string,
) => {
    if (!number || typeof number === 'number') {
        return number;
    }

    let numberString: string;

    if (language === 'en') {
        numberString = number.replace(/[^\d,.-]/g, '').replace(/,/g, '.');
    } else {
        numberString = number
            .replace(/[^\d,.-]/g, '')
            .replace(/,(?=[^.]*$)/, '.');
    }

    const parsed = parseFloat(numberString);
    if (Number.isNaN(parsed)) {
        return null;
    }

    return parsed;
};
