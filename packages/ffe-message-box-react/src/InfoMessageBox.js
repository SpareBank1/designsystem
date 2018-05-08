import React from 'react';
import InfoIkon from '@sb1/ffe-icons-react/lib/info-ikon';
import MessageBox from './MessageBox';

const iconStyles = {
    width: '40px',
    height: '40px',
};
const InfoMessage = props => (
    <MessageBox
        type="info"
        icon={<InfoIkon style={iconStyles} />}
        {...props}
    />
);

export default InfoMessage;
