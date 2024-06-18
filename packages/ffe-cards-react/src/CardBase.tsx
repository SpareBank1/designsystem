import React, { ElementType, ForwardedRef } from 'react';
import classNames from 'classnames';
import { WithCardActionProps, WithCardAction } from './components';
import { ComponentAsPropParams } from './types';
import { fixedForwardRef } from './fixedForwardRef';

type BgColor = 'sand-30' | 'sand-70' | 'frost-30' | 'syrin-30' | 'syrin-70';
type BgColorDarkmode = 'natt' | 'svart' | 'koksgraa';

export type CardBaseProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    shadow?: boolean;
    noMargin?: boolean;
    textCenter?: boolean;
    bgColor?: BgColor;
    bgDarkmodeColor?: BgColorDarkmode;
    noPadding?: boolean;
    children: WithCardActionProps['children'] | React.ReactNode;
};

function CardBaseWithForwardRef<As extends ElementType>(
    props: CardBaseProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        shadow,
        noMargin,
        textCenter,
        bgColor,
        bgDarkmodeColor,
        noPadding,
        children,
        ...rest
    } = props;

    const withCardActionProps: React.ComponentProps<typeof WithCardAction> = {
        ...rest,
    };

    return (
        <WithCardAction
            className={classNames('ffe-card-base', className, {
                [`ffe-card-base--bg-${bgColor}`]: bgColor,
                [`ffe-card-base--dm-bg-${bgDarkmodeColor}`]: bgDarkmodeColor,
                'ffe-card-base--box-shadow': shadow,
                'ffe-card-base--no-margin': noMargin,
                'ffe-card-base--text-center': textCenter,
                'ffe-card-base--no-padding': noPadding,
            })}
            {...withCardActionProps}
            ref={ref}
        >
            {({ CardAction }) =>
                typeof children === 'function'
                    ? children({ CardAction })
                    : children
            }
        </WithCardAction>
    );
}

export const CardBase = fixedForwardRef(CardBaseWithForwardRef);
