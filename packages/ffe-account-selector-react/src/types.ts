export type Locale = 'nb' | 'nn' | 'en';

type AutoComplete<T extends string> = T | (string & {});

export interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: AutoComplete<'NOK' | 'EUR'>;
    balance?: number | string;
}
