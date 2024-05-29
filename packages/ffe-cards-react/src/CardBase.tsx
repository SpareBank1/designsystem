import React, { ElementType, ForwardedRef } from 'react';
import { fixedForwardRef } from './fixedForwardRef';
import { ComponentAsPropParams } from './types';
import classNames from 'classnames';

type BgColor = 'sand-30' | 'sand-70' | 'frost-30' | 'syrin-30' | 'syrin-70';
type BgColorDarkmode = 'natt' | 'svart' | 'koksgraa';

export type CardBaseProps<As extends ElementType = 'a'> =
    ComponentAsPropParams<As> & {
        shadow?: boolean;
        noMargin?: boolean;
        textCenter?: boolean;
        clickable?: boolean;
        bgColor?: BgColor;
        bgDarkmodeColor?: BgColorDarkmode;
        noPadding?: boolean;
    };

function CardBaseWithForwardRef<As extends ElementType>(
    props: CardBaseProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        as: Comp = 'a',
        className,
        shadow,
        noMargin,
        textCenter,
        bgColor,
        bgDarkmodeColor,
        clickable,
        noPadding,
        ...rest
    } = props;

    return (
        <Comp
            className={classNames('ffe-card-base', className, {
                [`ffe-card-base--bg-${bgColor}`]: bgColor,
                [`ffe-card-base--dm-bg-${bgDarkmodeColor}`]: bgDarkmodeColor,
                'ffe-card-base--box-shadow': shadow,
                'ffe-card-base--no-margin': noMargin,
                'ffe-card-base--text-center': textCenter,
                'ffe-card-base--no-padding': noPadding,
                'ffe-card-base--clickable': clickable,
            })}
            {...rest}
            ref={ref}
        />
    );
}

export const CardBase = fixedForwardRef(CardBaseWithForwardRef);
