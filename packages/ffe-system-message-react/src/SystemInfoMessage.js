import React from 'react';
import Symbol from '@sb1/ffe-symbols-react';

import SystemMessage from './SystemMessage';

export default function SystemInfoMessage(props) {
    return (
        <SystemMessage
            modifier="info"
            aria-label="Infomelding"
            icon={<Symbol ariaLabel="Infotegn" icon="info_i" />}
            {...props}
        />
    );
}
