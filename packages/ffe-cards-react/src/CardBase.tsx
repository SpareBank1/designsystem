import React from 'react';
import classNames from 'classnames';
import { WithCardActionProps, WithCardAction } from './components';

type BgColor = 'sand-30' | 'sand-70' | 'frost-30' | 'syrin-30' | 'syrin-70';
type BgColorDarkmode = 'natt' | 'svart' | 'koksgraa';

export interface CardBaseProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    shadow?: boolean;
    noMargin?: boolean;
    textCenter?: boolean;
    bgColor?: BgColor;
    bgDarkmodeColor?: BgColorDarkmode;
    noPadding?: boolean;
    children: WithCardActionProps['children'] | React.ReactNode;
}

export const CardBase: React.FC<CardBaseProps> = ({
    className,
    shadow,
    noMargin,
    textCenter,
    bgColor,
    bgDarkmodeColor,
    noPadding,
    children,
    ...rest
}) => {
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
            {...rest}
        >
            {({ CardAction }) =>
                typeof children === 'function'
                    ? children({ CardAction })
                    : children
            }
        </WithCardAction>
    );
};
