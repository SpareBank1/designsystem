import React, { useState } from 'react';
import { MessageHeader, MessageHeaderProps } from './MessageHeader';
import { MessageType, Locale } from './types';
import classNames from 'classnames';
import { CloseButton } from './CloseButton';
import { MessageIcon } from './MessageIcon';
import { MessageCollapse } from './MessageCollapse';
import { Content } from './Content';
import { txt } from './texts';

export interface ContextMessageProps
    extends React.ComponentPropsWithoutRef<'div'> {
    /** Renders a more compact version of the context message */
    compact?: boolean;
    /** url to svg icon to override default*/
    iconFileUrl?: string;
    /** Decides the language of the aria-label for the close icon */
    locale?: Locale;
    /** info, success, tips, warning or error */
    type: MessageType;
    /** Called when closed */
    onClose?: () => void;
    /** Show close button */
    closeButton?: boolean;
    /** The header */
    header?: React.ReactElement<MessageHeaderProps> | string;
}

export const ContextMessage: React.FC<ContextMessageProps> = ({
    type,
    className,
    locale = 'nb',
    children,
    onClose,
    iconFileUrl,
    header,
    compact,
    closeButton,
    ...rest
}) => {
    const [isClosed, setIsClosed] = useState(false);

    return (
        <MessageCollapse isClosed={isClosed}>
            <div
                className={classNames(
                    'ffe-default-mode',
                    `ffe-message`,
                    `ffe-message--context`,
                    `ffe-message--${type}`,
                    {
                        'ffe-message--context-compact': compact,
                    },
                    className,
                )}
                role={type === 'error' ? 'alert' : 'group'}
                aria-label={txt[locale][type].ariaLabel}
                {...rest}
            >
                <div className="ffe-message__background">
                    <MessageIcon iconFileUrl={iconFileUrl} />
                    <Content>
                        {typeof header === 'string' ? (
                            <MessageHeader as="h2">{header}</MessageHeader>
                        ) : (
                            header
                        )}
                        {children}
                    </Content>
                    {closeButton && (
                        <CloseButton
                            locale={locale}
                            onClick={() => {
                                setIsClosed(true);
                                onClose?.();
                            }}
                        />
                    )}
                </div>
            </div>
        </MessageCollapse>
    );
};
