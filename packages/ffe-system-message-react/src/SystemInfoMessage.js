import React from 'react';
import InfoIkon from '@sb1/ffe-icons-react/lib/info-ikon';

import SystemMessage from './SystemMessage';

export default function SystemInfoMessage(props) {
    return (
        <SystemMessage
            modifier="info"
            icon={<InfoIkon />}
            {...props}
        />
    );
}
