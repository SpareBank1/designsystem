import React from 'react';
import { node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

const iconStyles = {
    width: '40px',
    height: '40px',
};

const BaseMessage = props => {
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
                {React.cloneElement(icon, { style: iconStyles, ...icon.props })}
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
                            `ffe-message-box__title`,
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

BaseMessage.propTypes = {
    children: node,
    className: string,
    content: node,
    icon: node.isRequired,
    title: node,
    /**
     * Internal type enum for specifying the style of message box. Should not be used directly
     * @ignore
     */
    type: oneOf(['success', 'error', 'tips', 'info']).isRequired,
};

export default BaseMessage;
