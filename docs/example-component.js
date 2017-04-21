import Checkbox from '../src/checkbox';
import React from 'react';

export const MainExample = (
    <Checkbox
        checked={false}
        name="Yellow"
        label="Yellow"
        onChange={ () => {} }
    />
);

export default props => <Checkbox {...props} />;
