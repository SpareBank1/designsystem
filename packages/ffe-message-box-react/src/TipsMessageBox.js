import React from 'react';
import { LyspareIkon } from 'ffe-icons-react';
import MessageBox from './MessageBox';

const iconStyles = {
    width: '40px',
    height: '40px',
};

const TipsMessage = props => (
    <MessageBox
        type="tips"
        icon={<LyspareIkon style={iconStyles} />}
        {...props}
    />
);

export default TipsMessage;
