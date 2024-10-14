import { formatCurrency } from '@sb1/ffe-formatters';

<>
    <div>{formatCurrency(100, { locale: 'nb ' })}</div>
    <div>
        {formatCurrency(1000, { prefix: '', postfix: ' kroner', locale: 'nb' })}
    </div>
</>;
