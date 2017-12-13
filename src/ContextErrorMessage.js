import React from 'react';
import ContextMessage from './ContextMessage';

const ContextErrorMessage = props => (
    <ContextMessage messageType="error" {...props} />
);

export default ContextErrorMessage;
