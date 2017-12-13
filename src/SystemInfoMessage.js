import React from 'react';
import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import SystemMessage from './SystemMessage';

export default function SystemInfoMessage(props) {
    return (
        <SystemMessage
            modifier="info"
            icon={<InfoSirkelIkon />}
            {...props}
        />
    );
}