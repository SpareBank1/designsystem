import React from 'react';
import { number, node, string, bool, oneOf, func, object } from 'prop-types';
import acceptedLocales from './locale/accepted-locales';
import ContextMessage from './ContextMessage';
import Symbol from '@sb1/ffe-symbols-react';

const ContextErrorMessage = props => {
    const { alert, ...rest } = props;

    return (
        <ContextMessage
            {...rest}
            messageType="error"
            aria-label="Feilmelding"
            role={alert ? 'alert' : 'group'}
            icon={<Symbol ariaLabel="Utropstegn" icon="priority_high" />}
        />
    );
};

ContextErrorMessage.propTypes = {
    animationLengthMs: number,
    /** The content shown in the context box */
    children: node.isRequired,
    /** Classes are added in addition to the relevant context message classes */
    className: string,
    /** Renders a more compact version of the context message */
    compact: bool,
    /** ID for the children container */
    contentElementId: string,
    header: string,
    /** ID for the header container */
    headerElementId: string,
    /** Decides the language of the aria-label for the close icon */
    locale: oneOf(acceptedLocales),
    /** Callback for when the context message has been closed (after the animation) */
    onClose: func,
    showCloseButton: bool,
    /** Styles applied to the outermost element. `height` will be overridden */
    style: object,
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert: bool,
};

ContextErrorMessage.defaultProps = {
    animationLengthMs: 300,
    compact: false,
    locale: 'nb',
    onClose: () => {},
    showCloseButton: false,
    style: {},
    alert: true,
};

export default ContextErrorMessage;
