import React from 'react';
import { InfoIkon } from '@sb1/ffe-icons-react';

import SystemMessage from './SystemMessage';

export default function SystemNewsMessage(props) {
    return (
        <SystemMessage
            modifier="news"
            aria-label="Nyhetsmelding"
            icon={<InfoIkon title="Infotegn, ikon" />}
            {...props}
        />
    );
}
