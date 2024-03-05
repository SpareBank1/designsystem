import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

const BaseMessage = props => {
    const {
        type,
        title,
        titleElement,
        icon,
        children,
        className = '',
        onColoredBg,
        ariaLabel,
        role,
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
            aria-label={ariaLabel}
            role={role}
            {...rest}
        >
            <span className="ffe-message-box__icon">
                {React.cloneElement(icon, {
                    ...icon.props,
                    size: 'xl',
                    weight: 300,
                })}
            </span>
            <div className="ffe-message-box__box">
                {title &&
                    React.createElement(
                        titleElement,
                        {
                            className: 'ffe-message-box__title',
                        },
                        title,
                    )}
                {children}
            </div>
        </div>
    );
};

BaseMessage.propTypes = {
    children: node,
    className: string,
    icon: node.isRequired,
    title: node,
    /** HTML element for the title */
    titleElement: string,
    /**
     * Internal type enum for specifying the style of message box. Should not be used directly
     * @ignore
     */
    type: oneOf(['success', 'error', 'tips', 'info']).isRequired,
    /* Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg: bool,
    ariaLabel: string,
    role: oneOf(['alert', 'group']),
};

BaseMessage.defaultProps = {
    titleElement: 'h2',
    onColoredBg: false,
    role: 'group',
};
export default BaseMessage;
