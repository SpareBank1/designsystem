import React from 'react';
import { func, string, number, node, oneOf, bool } from 'prop-types';
import Symbol from '@sb1/ffe-symbols-react';

import SystemMessage from './SystemMessage';

export default function SystemErrorMessage(props) {
    const { alert, ...rest } = props;

    return (
        <SystemMessage
            modifier="error"
            aria-label="Feilmelding"
            icon={<Symbol ariaLabel="Utropstegn">priority_high</Symbol>}
            role={alert ? 'alert' : 'group'}
            {...rest}
        />
    );
}

SystemErrorMessage.defaultProps = {
    animationLengthMs: 300,
    locale: 'nb',
    onClose: f => f,
    alert: true,
};

SystemErrorMessage.propTypes = {
    animationLengthMs: number,
    /** The content of the system message */
    children: node.isRequired,
    /** Additional classes added to the surrounding div */
    className: string,
    /** 'nb', 'nn', or 'en' */
    locale: oneOf(['en', 'nb', 'nn']),
    /**
     * The type of system message. Used internally only-
     * @ignore
     **/
    modifier: oneOf(['error', 'info', 'success', 'news']),
    /** Callback for when the system message has been closed (after animation ends) */
    onClose: func,
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert: bool,
};
