import React from 'react';
import FieldMessage from './FieldMessage';

const ErrorFieldMessage = props => {
    return <FieldMessage {...props} type="error" />;
};

export default ErrorFieldMessage;
