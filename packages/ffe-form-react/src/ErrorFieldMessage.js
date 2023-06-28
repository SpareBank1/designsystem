import React from 'react';
import BaseFieldMessage from './BaseFieldMessage';

const ErrorFieldMessage = props => {
    return <BaseFieldMessage {...props} type="error" />;
};

ErrorFieldMessage.defaultProps = {
    role: 'alert',
};

export default ErrorFieldMessage;
