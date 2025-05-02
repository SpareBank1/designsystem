import React from 'react';
import { MessageHeader, MessageHeaderProps } from './MessageHeader.js';
import { Locale, MessageType } from './types.js';
import { MessageIcon } from './MessageIcon.js';
import classNames from 'classnames';
import { Content } from './Content.js';
import { txt } from './texts.js';

export interface MessageBoxProps extends React.ComponentPropsWithoutRef<'div'> {
    /** url to svg icon to override default*/
    iconFileUrl?: string;
    /** The header */
    header?: React.ReactElement<MessageHeaderProps> | string;
    /** info, success, tips, warning or error */
    type: MessageType;
    /** Decides the language of the aria-label for the close icon */
    locale?: Locale;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
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
