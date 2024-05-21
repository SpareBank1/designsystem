import { formatNumber } from './formatNumber';
import { parseNumber } from './internal/parseNumber';
import { NON_BREAKING_SPACE } from './internal/unicode';

interface Opts {
    prefix?: string;
    postfix?: string;
}

export const formatCurrency = (amount: number | string, opts?: Opts) => {
    const { prefix, postfix } = {
        prefix: `kr${NON_BREAKING_SPACE}`,
        postfix: ',–',
        ...opts,
    };

    const parsed = parseNumber(amount);
    // A ',-' postfix is not allowed for amounts with øre, see:
    // http://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/
    if (typeof parsed === 'number' && parsed % 1 !== 0) {
        const decimalPostfix = ![',–', ',-'].includes(postfix) ? postfix : '';
        return `${prefix}${formatNumber(amount, {
            decimals: 2,
        })}${decimalPostfix}`;
    }

    return `${prefix}${formatNumber(amount)}${postfix}`;
};
