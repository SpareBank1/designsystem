import React from 'react';
import { InfoSirkelIkon } from 'ffe-icons-react';
import MessageBox from './message-box';

const iconStyles = {
    width: '40px',
    height: '40px',
};
const InfoMessage = props => (
    <MessageBox
        type="info"
        icon={<InfoSirkelIkon style={iconStyles} />}
        {...props}
    />
);

export default InfoMessage;
