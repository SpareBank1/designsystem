import React from 'react';
import HakeIkon from '@sb1/ffe-icons-react/lib/hake-ikon';
import MessageBox from './MessageBox';

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
