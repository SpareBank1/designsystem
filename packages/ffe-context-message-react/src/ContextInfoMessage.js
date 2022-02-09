import React from 'react';
import ContextMessage from './ContextMessage';
import { InfoIkon } from '@sb1/ffe-icons-react';

const ContextInfoMessage = props => (
    <ContextMessage messageType="info" icon={<InfoIkon />} {...props} />
);

export default ContextInfoMessage;
