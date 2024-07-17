import React, { ElementType, ForwardedRef } from 'react';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import { fixedForwardRef } from '../fixedForwardRef';

export type GroupCardElementProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** No padding on the element */
    noPadding?: boolean;
    /** Visible border between the elements*/
    noSeparator?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function GroupCardElementWithForwardRef<As extends ElementType>(
    props: GroupCardElementProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        noPadding,
        noSeparator = false,
        children,
        ...rest
    } = props;

    return (
        <WithCardAction
            baseClassName="ffe-group-card__element"
            className={classNames('ffe-group-card__element', className, {
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

export const GroupCardElement = fixedForwardRef(GroupCardElementWithForwardRef);
