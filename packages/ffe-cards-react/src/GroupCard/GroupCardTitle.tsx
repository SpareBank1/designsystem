import React, { ElementType, ForwardedRef } from 'react';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import { fixedForwardRef } from '../fixedForwardRef';

export type GroupCardTitleProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** No padding on the element */
    noPadding?: boolean;
    /** Visible border underneath title*/
    noSeparator?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function GroupCardTitleWithForwardRef<As extends ElementType>(
    props: GroupCardTitleProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        noPadding = false,
        noSeparator = false,
        children,
        ...rest
    } = props;

    return (
        <WithCardAction
            baseClassName="ffe-group-card__title"
            className={classNames('ffe-group-card__title', className, {
                'ffe-group-card__element--no-padding': noPadding,
                'ffe-group-card__element--no-separator': noSeparator,
            })}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }) =>
                typeof children === 'function'
                    ? children({ Text, Subtext, Title, CardName, CardAction })
                    : children
            }
        </WithCardAction>
    );
}

export const GroupCardTitle = fixedForwardRef(GroupCardTitleWithForwardRef);
