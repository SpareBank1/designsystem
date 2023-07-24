import React from 'react';
import { oneOf } from 'prop-types';
import BaseFieldMessage from './BaseFieldMessage';

const ErrorFieldMessage = props => {
    return <BaseFieldMessage {...props} type="error" />;
};

ErrorFieldMessage.propTypes = {
    role: oneOf(['status', 'alert', 'none']),
};

ErrorFieldMessage.defaultProps = {
    role: 'alert',
};

export default ErrorFieldMessage;
