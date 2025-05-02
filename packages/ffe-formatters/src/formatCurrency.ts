import { formatNumber } from './formatNumber.js';
import { parseNumber } from './internal/parseNumber.js';
import { NON_BREAKING_SPACE } from './internal/unicode.js';
import { Locale } from './types.js';

interface Opts {
    prefix?: string;
    postfix?: string;
    locale: Locale;
}

export const formatCurrency = (amount: number | string, opts: Opts) => {
    const { locale } = opts;
    const { prefix = `kr${NON_BREAKING_SPACE}`, postfix = ',–' } = {
        ...opts,
    };

    const parsed = parseNumber(amount, locale);
    // A ',-' postfix is not allowed for amounts with øre, see:
    // http://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/
    if (typeof parsed === 'number' && parsed % 1 !== 0) {
        const decimalPostfix = ![',–', ',-'].includes(postfix) ? postfix : '';
        return `${prefix}${formatNumber(amount, {
            decimals: 2,
            locale,
        })}${decimalPostfix}`;
    }

    return `${prefix}${formatNumber(amount, { locale })}${postfix}`;
};
