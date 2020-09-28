import React from 'react';
import ContextMessage from './ContextMessage';

const ContextErrorMessage = props => (
    <ContextMessage messageType="error" role="alert" {...props} />
);

export default ContextErrorMessage;
