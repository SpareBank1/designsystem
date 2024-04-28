import React, { useState, useRef, cloneElement } from 'react';
import {
    number,
    node,
    string,
    bool,
    element,
    oneOf,
    func,
    object,
} from 'prop-types';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import acceptedLocales from './locale/accepted-locales';
import texts from './locale/texts';
import { v4 as uuid } from 'uuid';

/**
 * Base component for all four types of context messages.
 *
 * *Should never be used directly!*
 * Please use one of the four versions exported from this package.
 */
const ContextMessage = ({
    animationLengthMs = 300,
    onClose = () => {},
    icon,
    headerText,
    compact = false,
    messageType,
    style = {},
    showCloseButton = false,
    headerElement = 'h2',
    headerElementId,
    contentElementId,
    children,
    className,
    locale = 'nb',
    onColoredBg,
    ...rest
}) => {
    const [isClosed, setIsClosed] = useState();
    const container = useRef(null);
    const _headerElementId = useRef(headerElementId || uuid());
    const _contentElementId = useRef(contentElementId || uuid());
    const closeIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg0NyAzMDkuMDc2LTI3MS45MjRxLTguMzA3IDguMzA4LTE3Ljg4NCA4LTkuNTc2LS4zMDctMTguMjY4LTktOC42OTMtOC42OTItOC42OTMtMTguNTc2dDguNjkzLTE4LjU3Nkw0NDIuODQ3LTQ4MCAyNzEuOTI0LTY1MC45MjRxLTguMzA4LTguMzA3LTgtMTguMzg0LjMwNy0xMC4wNzYgOS0xOC43NjggOC42OTItOC42OTMgMTguNTc2LTguNjkzdDE4LjU3NiA4LjY5M0w0ODAtNTE3LjE1M2wxNzAuOTI0LTE3MC45MjNxOC4zMDctOC4zMDggMTguMzg0LTguNSAxMC4wNzYtLjE5MyAxOC43NjggOC41IDguNjkzIDguNjkyIDguNjkzIDE4LjU3NnQtOC42OTMgMTguNTc2TDUxNy4xNTMtNDgwbDE3MC45MjMgMTcwLjkyNHE4LjMwOCA4LjMwNyA4LjUgMTcuODg0LjE5MyA5LjU3Ni04LjUgMTguMjY4LTguNjkyIDguNjkzLTE4LjU3NiA4LjY5M3QtMTguNTc2LTguNjkzTDQ4MC00NDIuODQ3WiIvPjwvc3ZnPg==';
    const handleClose = event => {
        container.current.style.height = `${container.current.offsetHeight}px`;
        setTimeout(() => {
            container.current.style.height = 0;
        }, 0);
        setTimeout(() => {
            setIsClosed(true);
            onClose(event);
        }, animationLengthMs);
        return false;
    };

    if (isClosed) {
        return null;
    }

    return (
        <div
            ref={container}
            className={classNames(
                'ffe-context-message',
                `ffe-context-message--${messageType}`,
                {
                    'ffe-context-message--compact': compact,
                    'ffe-context-message--coloredbg': onColoredBg,
                },
                className,
            )}
            style={{
                ...style,
                transition: `height ${animationLengthMs / 1000}s`,
            }}
            {...rest}
        >
            <div className="ffe-context-message-content">
                {icon && (
                    <div className="ffe-context-message-content__icon">
                        {cloneElement(icon, {
                            className: classNames(
                                'ffe-context-message-content__icon-span',
                                icon.props.className,
                            ),
                            weight: 300,
                        })}
                    </div>
                )}
                <div>
                    {headerText &&
                        React.createElement(
                            headerElement,
                            {
                                id: _headerElementId.current,
                                className:
                                    'ffe-context-message-content__header',
                            },
                            headerText,
                        )}
                    <div
                        className="ffe-body-text"
                        id={_contentElementId.current}
                    >
                        {children}
                    </div>
                </div>
            </div>
            {showCloseButton && (
                <button
                    aria-label={`${texts[locale].close} ${headerText || ''}`}
                    className="ffe-context-message-content__close-button"
                    onClick={handleClose}
                    type="button"
                >
                    <Icon fileUrl={closeIcon} weight={300} size="sm" />
                </button>
            )}
        </div>
    );
};

export default ContextMessage;

ContextMessage.propTypes = {
    animationLengthMs: number,
    /** The content shown in the context box */
    children: node.isRequired,
    /** Classes are added in addition to the relevant context message classes */
    className: string,
    /** Renders a more compact version of the context message */
    compact: bool,
    /** ID for the children container */
    contentElementId: string,
    headerText: string,
    /** ID for the header container */
    headerElementId: string,
    /* HTML element for the header */
    headerElement: string,
    icon: element.isRequired,
    /** Decides the language of the aria-label for the close icon */
    locale: oneOf(acceptedLocales),
    /** Provided by the wrapper component */
    messageType: oneOf(['info', 'tips', 'success', 'error']),
    /** Callback for when the context message has been closed (after the animation) */
    onClose: func,
    showCloseButton: bool,
    /** Styles applied to the outermost element. `height` will be overridden */
    style: object,
    /* Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg: bool,
};
