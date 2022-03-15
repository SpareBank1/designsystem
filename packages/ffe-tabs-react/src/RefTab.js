import React, { forwardRef } from 'react';
import Tab from './Tab';

const RefTab = forwardRef((props, ref) => {
    return <Tab ref={ref} {...props} />;
});

export default RefTab;
