import React from 'react';
import ContextMessage from './ContextMessage';
import { LyspareIkon } from '@sb1/ffe-icons-react';

const ContextTipsMessage = props => (
    <ContextMessage {...props} messageType="tips" icon={<LyspareIkon />} />
);

export default ContextTipsMessage;
