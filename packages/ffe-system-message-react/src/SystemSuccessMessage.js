import React from 'react';
import Symbol from '@sb1/ffe-symbols-react';

import SystemMessage from './SystemMessage';

export default function SystemSuccessMessage(props) {
    return (
        <SystemMessage
            modifier="success"
            aria-label="Suksessmelding"
            icon={<Symbol ariaLabel="Hake">check</Symbol>}
            {...props}
        />
    );
}
