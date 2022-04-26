import { formatNumber } from '@sb1/ffe-formatters';

<>
    <div>{formatNumber(1000000)}</div>
    <div>{formatNumber(1234.567)}</div>
    <div>{formatNumber(1234.567, { decimals: 2 })}</div>
    <div>
        {formatNumber(1234.567, {
            decimals: 2,
            thousandSeparator: ',',
            decimalMark: '.',
        })}
    </div>
</>
