import React from 'react';
import formatDate from '@sb1/ffe-formatters/lib/formatDate';

<React.Fragment>
    <div>{formatDate(new Date('2000', 0, 1))}</div>
    <div>{formatDate(946681200000)}</div>
</React.Fragment>;