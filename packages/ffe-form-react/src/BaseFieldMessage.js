import React from 'react';
import { node, string, oneOf } from 'prop-types';
import Symbol from '@sb1/ffe-symbols-react';
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
                                <Symbol
                                    ariaLabel="Utropstegn"
                                    icon="priority_high"
                                    size="xs"
                                />
                            );
                        case 'success':
                            return (
                                <Symbol
                                    ariaLabel="hake-ikon"
                                    icon="check"
                                    size="sm"
                                />
                            );
                        case 'info':
                            return (
                                <Symbol
                                    ariaLabel="info-ikon"
                                    icon="info_i"
                                    size="xs"
                                />
                            );
                        default:
                            return (
                                <Symbol
                                    ariaLabel="info-ikon"
                                    icon="info_i"
                                    size="xs"
                                />
                            );
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
