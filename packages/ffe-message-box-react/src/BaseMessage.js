import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';
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
        onColoredBg,
        ...rest
    } = props;

    return (
        <div
            className={classNames(
                'ffe-message-box',
                `ffe-message-box--${type}`,
                { 'ffe-message-box--coloredbg': onColoredBg },
                className,
            )}
            {...rest}
        >
            <span className="ffe-message-box__icon">
                {React.cloneElement(icon, { style: iconStyles, ...icon.props })}
            </span>
            <div className="ffe-message-box__box">
                {title && (
                    <div className="ffe-h4 ffe-message-box__title">{title}</div>
                )}
                {content && <p>{content}</p>}
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
    /* Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg: bool,
};

export default BaseMessage;
