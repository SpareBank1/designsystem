import React, { useEffect } from 'react';
import classNames from 'classnames';

export interface BaseMessageProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    /** HTML element for the title */
    titleElement?: string;
    /**
     * Internal type enum for specifying the style of message box. Should not be used directly
     * @ignore
     */
    type: 'success' | 'error' | 'tips' | 'info';
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
    ariaLabel?: string;
    role?: 'alert' | 'status';
    focusOnMount?: boolean;
}

export const BaseMessage: React.FC<BaseMessageProps> = ({
    type,
    title,
    titleElement = 'h2',
    icon,
    children,
    className = '',
    onColoredBg = false,
    ariaLabel,
    role = 'status',
    focusOnMount = true,
    ...rest
}) => {
    const element = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (focusOnMount) {
            element.current?.focus({ preventScroll: true });
            console.log(document.activeElement);
        }
    }, [focusOnMount]);
    return (
        <div
            className={classNames(
                'ffe-message-box',
                `ffe-message-box--${type}`,
                { 'ffe-message-box--coloredbg': onColoredBg },
                className,
            )}
            aria-label={ariaLabel}
            //aria-live="polite" //Dette kan også fungere hvis vi tar i mot en prop som avgjør om komponenten skal vises eller ikke
            role={role}
            {...rest}
        >
            <span className="ffe-message-box__icon">
                {React.isValidElement(icon) &&
                    React.cloneElement(icon, {
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
