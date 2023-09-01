import React from 'react';
import ContextMessage from './ContextMessage';
import Symbol from '@sb1/ffe-symbols-react';

const ContextInfoMessage = props => (
    <ContextMessage
        {...props}
        messageType="info"
        aria-label="Infomelding"
        role="group"
        icon={<Symbol ariaLabel="Infotegn">info_i</Symbol>}
    />
);

export default ContextInfoMessage;
