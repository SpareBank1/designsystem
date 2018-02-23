import React from 'react';
import InfoSirkelIkon from '@sb1/ffe-icons-react/lib/info-sirkel-ikon';

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
