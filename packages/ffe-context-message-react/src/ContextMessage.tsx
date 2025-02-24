import React, { useState, cloneElement } from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import { texts } from './texts';
import { Collapse } from '@sb1/ffe-collapse-react';

export interface ContextMessageProps
    extends React.ComponentPropsWithoutRef<'div'> {
    /** Renders a more compact version of the context message */
    compact?: boolean;
    /** ID for the children container */
    contentElementId?: string;
    headerText?: string;
    /** ID for the header container */
    headerElementId?: string;
    /** HTML element for the header */
    headerElement?: string;
    icon: React.ReactNode;
    /** Decides the language of the aria-label for the close icon */
    locale?: 'nb' | 'nn' | 'en';
    /** Provided by the wrapper component */
    messageType: 'info' | 'tips' | 'success' | 'error';
    /** Callback for when the context message has been closed (after the animation) */
    onCloseRest?: () => void;
    showCloseButton?: boolean;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}

/**
 * Base component for all four types of context messages.
 *
 * *Should never be used directly!*
 * Please use one of the four versions exported from this package.
 */
export const ContextMessage: React.FC<ContextMessageProps> = ({
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
    onCloseRest,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const closeIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg0NyAzMDkuMDc2LTI3MS45MjRxLTguMzA3IDguMzA4LTE3Ljg4NCA4LTkuNTc2LS4zMDctMTguMjY4LTktOC42OTMtOC42OTItOC42OTMtMTguNTc2dDguNjkzLTE4LjU3Nkw0NDIuODQ3LTQ4MCAyNzEuOTI0LTY1MC45MjRxLTguMzA4LTguMzA3LTgtMTguMzg0LjMwNy0xMC4wNzYgOS0xOC43NjggOC42OTItOC42OTMgMTguNTc2LTguNjkzdDE4LjU3NiA4LjY5M0w0ODAtNTE3LjE1M2wxNzAuOTI0LTE3MC45MjNxOC4zMDctOC4zMDggMTguMzg0LTguNSAxMC4wNzYtLjE5MyAxOC43NjggOC41IDguNjkzIDguNjkyIDguNjkzIDE4LjU3NnQtOC42OTMgMTguNTc2TDUxNy4xNTMtNDgwbDE3MC45MjMgMTcwLjkyNHE4LjMwOCA4LjMwNyA4LjUgMTcuODg0LjE5MyA5LjU3Ni04LjUgMTguMjY4LTguNjkyIDguNjkzLTE4LjU3NiA4LjY5M3QtMTguNTc2LTguNjkzTDQ4MC00NDIuODQ3WiIvPjwvc3ZnPg==';

    return (
        <Collapse isOpen={isOpen} onRest={onCloseRest}>
            <div
                className={classNames(
                    'ffe-context-message',
                    `ffe-context-message--${messageType}`,
                    {
                        'ffe-context-message--compact': compact,
                        'ffe-context-message--coloredbg': onColoredBg,
                    },
                    className,
                )}
                {...rest}
            >
                <div className="ffe-context-message-content">
                    {React.isValidElement(icon) && (
                        <div className="ffe-context-message-content__icon">
                            {cloneElement(icon, {
                                ...icon.props,
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
                                    className:
                                        'ffe-context-message-content__header',
                                },
                                headerText,
                            )}
                        <div className="ffe-body-text">{children}</div>
                    </div>
                </div>
                {showCloseButton && (
                    <button
                        aria-label={`${texts[locale].close} ${
                            headerText || ''
                        }`}
                        className="ffe-context-message-content__close-button"
                        onClick={() => setIsOpen(false)}
                        type="button"
                    >
                        <Icon fileUrl={closeIcon} weight={300} size="sm" />
                    </button>
                )}
            </div>
        </Collapse>
    );
};
