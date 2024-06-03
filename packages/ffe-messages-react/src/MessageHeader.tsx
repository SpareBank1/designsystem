import React, { ElementType } from 'react';
import { ComponentWithoutRefAsPropParams } from './types';
import classNames from 'classnames';

export type MessageHeaderProps<As extends ElementType = any> =
    ComponentWithoutRefAsPropParams<As>;

export const MessageHeader: React.FC<MessageHeaderProps> = props => {
    const { children, as: Comp = 'h2', className, ...rest } = props;

    return (
        <Comp
            {...rest}
            className={classNames(
                'ffe-message__heading ffe-body-text',
                className,
            )}
        >
            {children}
        </Comp>
    );
};
