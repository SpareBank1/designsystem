import React from 'react';
import UtropstegnIkon from '@sb1/ffe-icons-react/lib/utropstegn-ikon';

import SystemMessage from './SystemMessage';

export default function SystemErrorMessage(props) {
    return (
        <SystemMessage
            modifier="error"
            icon={<UtropstegnIkon />}
            {...props}
        />
    );
}
