import classNames from 'classnames';
import React, { ElementType, ForwardedRef } from 'react';
import { WithCardAction, WithCardActionProps } from './components';
import { fixedForwardRef } from './fixedForwardRef';
import {
    BackgroundColor,
    CardActionRenderProps,
    ComponentAsPropParams,
} from './types';

export type CardBaseProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** No margin on card */
    noMargin?: boolean;
    textCenter?: boolean;
    backgroundColor?: BackgroundColor;
    noPadding?: boolean;
    children: WithCardActionProps['children'] | React.ReactNode;
};

function CardBaseWithForwardRef<As extends ElementType>(
    props: CardBaseProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        noMargin,
        textCenter,
        backgroundColor = 'primary',
        noPadding,
        children,
        ...rest
    } = props;

    return (
        <WithCardAction
            baseClassName="ffe-card-base"
            className={classNames('ffe-card-base', className, {
                [`ffe-card-base--bg-${backgroundColor}`]: backgroundColor,
                'ffe-card-base--no-margin': noMargin,
                'ffe-card-base--text-center': textCenter,
                'ffe-card-base--no-padding': noPadding,
            })}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }: CardActionRenderProps) =>
                typeof children === 'function'
                    ? children({ CardAction })
                    : children
            }
        </WithCardAction>
    );
}

export const CardBase = fixedForwardRef(CardBaseWithForwardRef);
