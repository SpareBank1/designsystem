import React from 'react';
import LyspareIkon from '@sb1/ffe-icons-react/lib/lyspare-ikon';
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
