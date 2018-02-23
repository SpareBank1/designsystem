import React from 'react';
import InfoSirkelIkon from '@sb1/ffe-icons-react/lib/info-sirkel-ikon';

import SystemMessage from './SystemMessage';

export default function SystemErrorMessage(props) {
    return (
        <SystemMessage
            modifier="error"
            icon={<InfoSirkelIkon style={{ transform: 'rotateX(180deg)' }} />}
            {...props}
        />
    );
}
