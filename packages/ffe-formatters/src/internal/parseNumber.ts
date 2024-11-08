import { Locale } from '../types';
// https://observablehq.com/@mbostock/localized-number-parsing
class NumberParser {
    private readonly _group: RegExp;
    private readonly _decimal: RegExp;
    private readonly _numeral: RegExp;
    private readonly _index: (substring: string, ...args: any[]) => string;

    constructor(locale: Locale) {
        const parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
        const numerals = new Intl.NumberFormat(locale, { useGrouping: false })
            .format(9876543210)
            .split('')
            .reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._group = new RegExp(
            `[${parts.find(d => d.type === 'group')?.value}]`,
            'g',
        );
        this._decimal = new RegExp(
            `[${parts.find(d => d.type === 'decimal')?.value}]`,
        );
        this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        this._index = d => `${index.get(d)}`;
    }
    parse(input: string) {
        const string = input
            .trim()
            .replace(this._group, '')
            .replace(this._decimal, '.')
            .replace(this._numeral, this._index);

        return string ? +string : Number.NaN;
    }
}

export const parseNumber = (
    number: number | string | null | undefined,
    locale: Locale,
) => {
    const parsed = new NumberParser(locale === 'en' ? 'en' : 'nb').parse(
        `${number}`.replace(/\s/g, ''),
    );
    return Number.isNaN(parsed) ? null : parsed;
};
