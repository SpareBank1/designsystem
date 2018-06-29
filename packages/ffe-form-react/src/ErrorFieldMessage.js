import React from 'react';
import BaseFieldMessage from './BaseFieldMessage';

const ErrorFieldMessage = props => {
    return <BaseFieldMessage {...props} type="error" />;
};

export default ErrorFieldMessage;
