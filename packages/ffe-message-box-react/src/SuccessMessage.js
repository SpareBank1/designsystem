import React from 'react';
import { node, string } from 'prop-types';
import Symbol from '@sb1/ffe-symbols-react';

import BaseMessage from './BaseMessage';

const SuccessMessage = props => (
    <BaseMessage
        type="success"
        aria-label="Suksessmelding"
        icon={<Symbol ariaLabel="Hake" icon="check" />}
        {...props}
    />
);

SuccessMessage.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /** The icon to show. Has a default value, but can be overridden */
    icon: node,
    /** An optional title for the message */
    title: node,
};

export default SuccessMessage;
