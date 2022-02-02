import React from 'react';
import ContextMessage from './ContextMessage';
import { LyspareIkon } from '@sb1/ffe-icons-react';

const ContextTipMessage = props => (
    <ContextMessage messageType="tip" icon={<LyspareIkon />} {...props} />
);

export default ContextTipMessage;
