import React from 'react';
import ContextMessage from './ContextMessage';
import { LyspareIkon } from '@sb1/ffe-icons-react';

const ContextTipsMessage = props => (
    <ContextMessage
        {...props}
        messageType="tips"
        aria-label="Tipsmelding"
        role="group"
        icon={<LyspareIkon title="Lyspære, ikon" />}
    />
);

export default ContextTipsMessage;
