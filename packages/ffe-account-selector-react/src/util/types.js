import { shape, string, number, oneOf, oneOfType } from 'prop-types';

export const nb = 'nb';
export const en = 'en';
export const nn = 'nn';

export const currencyAffixNOK = {
    [nb]: 'kr',
    [nn]: 'kr',
    [en]: 'NOK',
};

export const KeyCodes = {
    TAB: 9,
    ENTER: 13,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PGUP: 33,
    PGDWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
};

export const Account = shape({
    accountNumber: string.isRequired,
    name: string.isRequired,
    currencyCode: string,
    balance: oneOfType([string, number]),
});

export const Locale = oneOf([nb, nn, en]);
