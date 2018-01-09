import React from 'react';
import Checkbox from '../src/Checkbox';

export const MainExample = (
    <Checkbox checked={false} name="Yellow" label="Yellow" />
);

export default props => <Checkbox {...props} />;
