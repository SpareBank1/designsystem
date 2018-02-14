import React from 'react';
import { node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

const MessageBox = props => {
    const {
        type,
        title,
        icon,
        content,
        children,
        className = '',
        ...rest
    } = props;

    return (
        <div className={classNames('ffe-message-box', className)} {...rest}>
            <span
                className={classNames(
                    'ffe-message-box__icon',
                    `ffe-message-box__icon--${type}`,
                )}
            >
                {icon}
            </span>
            <div
                className={classNames(
                    'ffe-message-box__box',
                    `ffe-message-box__box--${type}`,
                )}
            >
                {title && (
                    <div
                        className={classNames(
                            'ffe-h4',
                            `ffe-message-box__title--${type}`,
                        )}
                    >
                        {title}
                    </div>
                )}
                {content && <p className="ffe-body-text">{content}</p>}
                {!content && children}
            </div>
        </div>
    );
};

MessageBox.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /**
     * Deprecated. Use `children` instead.
     * @deprecated
     */
    content: node,
    /** The icon to show. Has a default value for each message box type, but can be overridden */
    icon: node.isRequired,
    title: node,
    /**
     * Internal type enum for specifying the style of message box. Should not be used directly
     * @ignore
     */
    type: oneOf(['success', 'error', 'tips', 'info']).isRequired,
};

export default MessageBox;
