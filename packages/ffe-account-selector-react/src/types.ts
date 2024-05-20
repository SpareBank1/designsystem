export type Locale = 'nb' | 'nn' | 'en';

export interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: 'NOK' | 'EUR';
    balance?: number;
}
