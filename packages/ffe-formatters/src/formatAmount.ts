import { formatNumber } from './formatNumber';
import { Locale } from './types';

export const formatAmount = (
    amount: string | number,
    opts: {
        locale: Locale;
        decimals?: number;
    },
): string => {
    const formattedNumber = formatNumber(amount, opts);
    if (typeof formattedNumber === 'string') return formattedNumber;
    if (typeof formattedNumber === 'number' && isNaN(formattedNumber))
        return '';
    if (typeof formattedNumber === 'number') return formattedNumber.toString();
    return '';
};

export const formatAmountWithCurrency = (
    amount: number | string,
    opts: {
        locale: Locale;
        decimals?: number;
    },
): string => {
    // Define a type guard to check if a variable is a string or String object
    function isString(value: unknown): value is string | string {
        return typeof value === 'string' || value instanceof String;
    }

    // If amount is a string, we need to replace comma with dot to parse it correctly
    const parsedNumber = isString(amount)
        ? parseFloat((amount as string).replace(',', '.'))
        : amount;

    const currencyText = opts.locale === 'en' ? 'NOK' : 'kr';

    return `${formatAmount(parsedNumber, opts)} ${currencyText}`;
};

export const formatAmountV2 = (
    amount: number | string,
    opts: {
        locale: Locale;
        decimals?: number;
    },
): string => {
    // Define a type guard to check if a variable is a string or String object
    function isString(value: unknown): value is string | string {
        return typeof value === 'string' || value instanceof String;
    }

    // If amount is a string, we need to replace comma with dot to parse it correctly
    const parsedNumber = isString(amount)
        ? parseFloat((amount as string).replace(',', '.'))
        : amount;

    return formatAmount(parsedNumber, opts);
};
