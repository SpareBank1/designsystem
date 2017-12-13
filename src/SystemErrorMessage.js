import React from 'react';
import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

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
