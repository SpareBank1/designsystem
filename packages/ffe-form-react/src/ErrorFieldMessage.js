import React from 'react';
import { oneOf } from 'prop-types';
import BaseFieldMessage from './BaseFieldMessage';

const ErrorFieldMessage = ({ role = 'alert', ...rest }) => {
    return <BaseFieldMessage role={role} {...rest} type="error" />;
};

ErrorFieldMessage.propTypes = {
    role: oneOf(['status', 'alert', 'none']),
};

export default ErrorFieldMessage;
