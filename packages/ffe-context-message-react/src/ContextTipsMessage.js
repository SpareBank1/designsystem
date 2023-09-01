import React from 'react';
import ContextMessage from './ContextMessage';
import { Symbol } from '@sb1/ffe-symbols-react';

const ContextTipsMessage = props => (
    <ContextMessage
        {...props}
        messageType="tips"
        aria-label="Tipsmelding"
        role="group"
        icon={<Symbol ariaLabel="Lyspære">lightbulb</Symbol>}
    />
);

export default ContextTipsMessage;
