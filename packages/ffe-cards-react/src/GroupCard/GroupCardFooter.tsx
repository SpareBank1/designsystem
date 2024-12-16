import React, { ElementType, ForwardedRef } from 'react';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';
import {
    CardRenderProps,
    ComponentAsPropParams,
    CardActionRenderProps,
} from '../types';
import { fixedForwardRef } from '../fixedForwardRef';

export type GroupCardFooterProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** No padding on the element */
    noPadding?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function GroupCardFooterWithForwardRef<As extends ElementType>(
    props: GroupCardFooterProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, noPadding = false, children, ...rest } = props;

    return (
        <WithCardAction
            baseClassName="ffe-group-card__footer"
            className={classNames('ffe-group-card__footer', className, {
                'ffe-group-card__element--no-padding': noPadding,
            })}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }: CardActionRenderProps) =>
                typeof children === 'function'
                    ? children({ Text, Subtext, Title, CardName, CardAction })
                    : children
            }
        </WithCardAction>
    );
}

export const GroupCardFooter = fixedForwardRef(GroupCardFooterWithForwardRef);
