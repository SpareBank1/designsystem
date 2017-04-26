import formatNumber from '~/number';
import { parse } from '~/number/number';
import { NON_BREAKING_SPACE } from '~/unicode';

export default function formatAmount(amount, opts = {}) {
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
    if (parse(amount) % 1 !== 0) {
        return `${prefix}${formatNumber(amount, 2)}`;
    }

    return `${prefix}${formatNumber(amount)}${postfix}`;
}
