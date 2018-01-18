import React from 'react';
import { HakeIkon } from 'ffe-icons-react';
import MessageBox from './message-box';

const iconStyles = {
    width: '40px',
    height: '40px',
};

const SuccessMessage = props => (
    <MessageBox
        type="success"
        icon={<HakeIkon style={iconStyles} />}
        {...props}
    />
);

export default SuccessMessage;
