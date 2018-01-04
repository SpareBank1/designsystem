import React from 'react';
import ContextMessage from './ContextMessage';

const ContextSuccessMessage = props => (
    <ContextMessage messageType="success" {...props} />
);

export default ContextSuccessMessage;
