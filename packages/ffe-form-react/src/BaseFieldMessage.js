import React from 'react';
import { node, string, oneOf } from 'prop-types';
import { InfoIkon, HakeIkon, UtropstegnIkon } from '@sb1/ffe-icons-react';
import classNames from 'classnames';

/**
 * Internal factory component
 * @ignore
 */
const BaseFieldMessage = props => {
    const {
        children,
        className,
        element: Element,
        type,
        role,
        ...rest
    } = props;

    return (
        <Element
            className={classNames(
                `ffe-field-message`,
                `ffe-field-message--${type}`,
                className,
            )}
            role={role}
            {...rest}
        >
            <span
                className={classNames(
                    `ffe-field-message__icon`,
                    `ffe-field-message__icon--${type}'`,
                )}
            >
                {(() => {
                    switch (type) {
                        case 'error':
                            return (
                                <UtropstegnIkon
                                    role="img"
                                    title="utropstegn-ikon"
                                />
                            );
                        case 'success':
                            return <HakeIkon role="img" title="hake-ikon" />;
                        case 'info':
                            return <InfoIkon role="img" title="info-ikon" />;
                        default:
                            return <InfoIkon role="img" title="info-ikon" />;
                    }
                })()}
            </span>
            {children}
        </Element>
    );
};

BaseFieldMessage.defaultProps = {
    element: 'div',
    role: 'status',
};

BaseFieldMessage.propTypes = {
    children: node.isRequired,
    className: string,
    element: string,
    role: oneOf(['status', 'alert', 'none']),
    type: oneOf(['success', 'info', 'error']).isRequired,
};

export default BaseFieldMessage;
