import { formatDistance } from '@sb1/ffe-formatters';

<>
    <div>{formatDistance(160520)}</div>
    <div>{formatDistance(12345, { unit: 'mi' })}</div>
</>
