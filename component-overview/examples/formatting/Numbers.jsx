import { formatNumber } from '@sb1/ffe-formatters';

<>
    <div>{formatNumber(1000000, { locale: 'nb' })}</div>
    <div>{formatNumber(1234.567, { locale: 'nb' })}</div>
    <div>{formatNumber(1234.567, { decimals: 2, locale: 'nb' })}</div>
    <div>
        {formatNumber(1234.567, {
            decimals: 2,
            locale: 'en',
        })}
    </div>
</>;
