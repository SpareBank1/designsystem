import React from 'react';
import { node, string, bool } from 'prop-types';

import { UtropstegnIkon } from '@sb1/ffe-icons-react';

import BaseMessage from './BaseMessage';

const ErrorMessage = props => {
    const { alert, ...rest } = props;

    return (
        <BaseMessage
            type="error"
            aria-label="Feilmelding"
            icon={<UtropstegnIkon title="Utropstegn, ikon" />}
            role={alert ? 'alert' : 'group'}
            {...rest}
        />
    );
};

ErrorMessage.defaultProps = {
    alert: true,
};

ErrorMessage.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /** The icon to show. Has a default value, but can be overridden */
    icon: node,
    /** An optional title for the message */
    title: node,
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert: bool,
};

export default ErrorMessage;
