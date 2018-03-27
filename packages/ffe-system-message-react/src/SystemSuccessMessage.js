import React from 'react';
import HakeIkon from '@sb1/ffe-icons-react/lib/hake-ikon';

import SystemMessage from './SystemMessage';

export default function SystemSuccessMessage(props) {
    return (
        <SystemMessage
            modifier="success"
            icon={<HakeIkon />}
            {...props}
        />
    );
}
