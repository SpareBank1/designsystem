import React from 'react';
import { HakeIkon } from '@sb1/ffe-icons-react';

import SystemMessage from './SystemMessage';

export default function SystemSuccessMessage(props) {
    return (
        <SystemMessage
            modifier="success"
            aria-label="Suksessmelding"
            icon={<HakeIkon title="Hake, ikon" />}
            {...props}
        />
    );
}
