import React from 'react';
import ContextMessage from './ContextMessage';
import LyspareIkon from '@sb1/ffe-icons-react/lib/lyspare-ikon';

const ContextTipMessage = props => (
    <ContextMessage {...props} messageType="tip" icon={<LyspareIkon />} />
);

export default ContextTipMessage;
