import React from 'react';
import formatDistance from '@sb1/ffe-formatters/lib/formatDistance';

<React.Fragment>
    <div>{formatDistance(160520)}</div>
    <div>{formatDistance(12345, { unit: 'mi' })}</div>
</React.Fragment>;