import React, { useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import { texts } from './texts';
import { Collapse } from '@sb1/ffe-collapse-react';

export interface SystemMessageProps
    extends React.ComponentPropsWithoutRef<'div'> {
    icon?: React.ReactNode;
    locale?: 'en' | 'nb' | 'nn';
    /** Callback for when the system message has been closed (after animation ends) */
    onCloseRest?: () => void;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
    /**
     * The type of system message. Used internally only-
     * @ignore
     **/
    modifier: 'error' | 'info' | 'success' | 'news';
}

export const SystemMessage: React.FC<SystemMessageProps> = ({
    children,
    className,
    icon,
    locale = 'nb',
    modifier,
    onColoredBg,
    onClick,
    onCloseRest,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Collapse isOpen={isOpen} onRest={onCloseRest}>
            <div
                className={classNames(
                    'ffe-system-message-wrapper',
                    `ffe-system-message-wrapper--${modifier}`,
                    { 'ffe-system-message-wrapper--coloredbg': onColoredBg },
                    className,
                )}
                role="group"
                {...rest}
            >
                <div className="ffe-system-message">
                    <span className="ffe-system-message__icon">
                        {React.isValidElement(icon) &&
                            React.cloneElement(icon, {
                                ...icon.props,
                            })}
                    </span>
                    <p className="ffe-system-message__content">{children}</p>
                    <button
                        aria-label={texts[locale].close}
                        className="ffe-system-message__close"
                        onClick={event => setIsOpen(false)}
                        type="button"
                    >
                        <Icon
                            fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg0NyAzMDkuMDc2LTI3MS45MjRxLTguMzA3IDguMzA4LTE3Ljg4NCA4LTkuNTc2LS4zMDctMTguMjY4LTktOC42OTMtOC42OTItOC42OTMtMTguNTc2dDguNjkzLTE4LjU3Nkw0NDIuODQ3LTQ4MCAyNzEuOTI0LTY1MC45MjRxLTguMzA4LTguMzA3LTgtMTguMzg0LjMwNy0xMC4wNzYgOS0xOC43NjggOC42OTItOC42OTMgMTguNTc2LTguNjkzdDE4LjU3NiA4LjY5M0w0ODAtNTE3LjE1M2wxNzAuOTI0LTE3MC45MjNxOC4zMDctOC4zMDggMTguMzg0LTguNSAxMC4wNzYtLjE5MyAxOC43NjggOC41IDguNjkzIDguNjkyIDguNjkzIDE4LjU3NnQtOC42OTMgMTguNTc2TDUxNy4xNTMtNDgwbDE3MC45MjMgMTcwLjkyNHE4LjMwOCA4LjMwNyA4LjUgMTcuODg0LjE5MyA5LjU3Ni04LjUgMTguMjY4LTguNjkyIDguNjkzLTE4LjU3NiA4LjY5M3QtMTguNTc2LTguNjkzTDQ4MC00NDIuODQ3WiIvPjwvc3ZnPg=="
                            size="sm"
                        />
                    </button>
                </div>
            </div>
        </Collapse>
    );
};
