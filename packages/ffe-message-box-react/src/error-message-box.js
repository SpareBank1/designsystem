import React from 'react';
import { UtropstegnIkon } from 'ffe-icons-react';
import MessageBox from './message-box';

const iconStyles = {
    width: '40px',
    height: '40px',
};

const ErrorMessage = props => (
    <MessageBox
        type="error"
        icon={<UtropstegnIkon style={iconStyles} />}
        {...props}
    />
);

export default ErrorMessage;
