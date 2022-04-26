import { formatPercentage } from '@sb1/ffe-formatters';

<>
    <div>{formatPercentage(10.00001)}</div>
    <div>{formatPercentage(12.34567, { maxDecimals: 4 })}</div>
    <div>{formatPercentage(1, { minDecimals: 2 })}</div>
</>
