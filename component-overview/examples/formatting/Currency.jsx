import { formatCurrency } from '@sb1/ffe-formatters';

<>
    <div>{formatCurrency(100)}</div>
    <div>{formatCurrency(1000, { prefix: '', postfix: ' kroner' })}</div>
</>
