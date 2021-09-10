import React from 'react';
import formatCurrency from '@sb1/ffe-formatters/lib/formatCurrency';

<React.Fragment>
    <div>{formatCurrency(100)}</div>
    <div>{formatCurrency(1000, { prefix: '', postfix: ' kroner' })}</div>
</React.Fragment>;