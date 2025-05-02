import React, { useState } from 'react';
import { MessageType, Locale } from './types.js';
import classNames from 'classnames';
import { MessageIcon } from './MessageIcon.js';
import { CloseButton } from './CloseButton.js';
import { MessageCollapse } from './MessageCollapse.js';
import { Content } from './Content.js';
import { txt } from './texts.js';

/*Remove me*/
export interface SystemMessageProps
    extends React.ComponentPropsWithoutRef<'div'> {
    /** info, success, tips, warning or error */
    type: MessageType;
    /** url to svg icon to override default*/
    iconFileUrl?: string;
    /** nn, nb or en */
    locale?: Locale;
    /** Called when closed */
    onClose?: () => void;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}

export const SystemMessage: React.FC<SystemMessageProps> = ({
    type,
    className,
    locale = 'nb',
    children,
    onClose,
    iconFileUrl,
    ...rest
}) => {
    const [isClosed, setIsClosed] = useState(false);

    return (
        <MessageCollapse isClosed={isClosed}>
            <div
                className={classNames(
                    `ffe-message`,
                    `ffe-message--system`,
                    `ffe-message--${type}`,
                    className,
                )}
                role={type === 'error' ? 'alert' : 'group'}
                aria-label={txt[locale][type].ariaLabel}
                {...rest}
            >
                <div className="ffe-message__background">
                    <MessageIcon iconFileUrl={iconFileUrl} />
                    <Content>{children}</Content>
                    <CloseButton
                        locale={locale}
                        onClick={() => {
                            setIsClosed(true);
                            onClose?.();
                        }}
                    />
                </div>
            </div>
        </MessageCollapse>
    );
};
