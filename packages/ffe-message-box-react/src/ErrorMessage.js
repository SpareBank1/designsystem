import React from 'react';
import { node, string } from 'prop-types';

import UtropstegnIkon from '@sb1/ffe-icons-react/lib/utropstegn-ikon';

import BaseMessage from './BaseMessage';

const iconStyles = {
    width: '40px',
    height: '40px',
};

const ErrorMessage = props => (
    <BaseMessage
        type="error"
        icon={<UtropstegnIkon style={iconStyles} />}
        {...props}
    />
);

ErrorMessage.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /**
     * Deprecated. Use `children` instead.
     * @deprecated
     */
    content: node,
    /** The icon to show. Has a default value, but can be overridden */
    icon: node,
    /** An optional title for the message */
    title: node,
};

export default ErrorMessage;
