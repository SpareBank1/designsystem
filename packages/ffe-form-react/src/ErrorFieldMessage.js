import React from 'react';
import BaseFieldMessage from './BaseFieldMessage';

const ErrorFieldMessage = props => {
    return <BaseFieldMessage {...props} type="error" role="alert" />;
};

export default ErrorFieldMessage;
