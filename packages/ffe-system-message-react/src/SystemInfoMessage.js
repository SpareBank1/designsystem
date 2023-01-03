import React from 'react';
import { InfoIkon } from '@sb1/ffe-icons-react';

import SystemMessage from './SystemMessage';

export default function SystemInfoMessage(props) {
    return (
        <SystemMessage
            modifier="info"
            aria-label="Infomelding"
            icon={<InfoIkon title="Infotegn, ikon" />}
            {...props}
        />
    );
}
