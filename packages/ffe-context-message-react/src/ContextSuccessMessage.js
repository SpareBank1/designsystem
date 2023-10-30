import React from 'react';
import ContextMessage from './ContextMessage';
import { Symbol } from '@sb1/ffe-symbols-react';

const ContextSuccessMessage = props => (
    <ContextMessage
        {...props}
        messageType="success"
        aria-label="Suksessmelding"
        role="group"
        icon={<Symbol ariaLabel="hake" icon="check" />}
    />
);

export default ContextSuccessMessage;
