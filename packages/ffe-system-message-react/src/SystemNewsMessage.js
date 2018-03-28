import React from 'react';
import InfoIkon from '@sb1/ffe-icons-react/lib/info-ikon';

import SystemMessage from './SystemMessage';

export default function SystemNewsMessage(props) {
    return (
        <SystemMessage
            modifier="news"
            icon={<InfoIkon />}
            {...props}
        />
    );
}
