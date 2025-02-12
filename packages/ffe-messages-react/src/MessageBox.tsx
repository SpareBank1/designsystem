import React from 'react';
import { MessageHeader, MessageHeaderProps } from './MessageHeader';
import { Locale, MessageType } from './types';
import { MessageIcon } from './MessageIcon';
import classNames from 'classnames';
import { Content } from './Content';
import { txt } from './texts';

export interface MessageBoxProps extends React.ComponentPropsWithoutRef<'div'> {
    /** url to svg icon to override default*/
    iconFileUrl?: string;
    /** The header */
    header?: React.ReactElement<MessageHeaderProps> | string;
    /** info, success, tips, warning or error */
    type: MessageType;
    /** Decides the language of the aria-label for the close icon */
    locale?: Locale;
}

export const MessageBox: React.FC<MessageBoxProps> = ({
    type,
    header,
    iconFileUrl,
    children,
    locale = 'nb',
    className,
    ...rest
}) => {
    return (
        <div
            className={classNames(
                `ffe-message`,
                `ffe-message--box`,
                `ffe-message--${type}`,
                className,
            )}
            role={type === 'error' ? 'alert' : 'group'}
            aria-label={txt[locale][type].ariaLabel}
            {...rest}
        >
            <div className="ffe-message__background">
                <Content>
                    {typeof header === 'string' ? (
                        <MessageHeader as="h2">{header}</MessageHeader>
                    ) : (
                        header
                    )}
                    {children}
                </Content>
            </div>
            <MessageIcon iconFileUrl={iconFileUrl} />
        </div>
    );
};
