import formatNumber from '../number';
import parseNumber from '../internal/parse-number';
import { NON_BREAKING_SPACE } from '../internal/unicode';

export default function formatCurrency(amount, opts = {}) {
    const {
        prefix,
        postfix,
    } = {
        prefix: `kr${NON_BREAKING_SPACE}`,
        postfix: ',–',
        ...opts,
    };

    // A ',-' postfix is not allowed for amounts with øre, see:
    // http://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/
    if (parseNumber(amount) % 1 !== 0) {
        return `${prefix}${formatNumber(amount, 2)}`;
    }

    return `${prefix}${formatNumber(amount)}${postfix}`;
}
