import React from 'react';
import Symbol from '@sb1/ffe-symbols-react';

import SystemMessage from './SystemMessage';

export default function SystemNewsMessage(props) {
    return (
        <SystemMessage
            modifier="news"
            aria-label="Nyhetsmelding"
            icon={<Symbol ariaLabel="Infotegn">info_i</Symbol>}
            {...props}
        />
    );
}
