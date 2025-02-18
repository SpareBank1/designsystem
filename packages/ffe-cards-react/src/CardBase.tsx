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
    /**
     * Property has new values that work with dark and accent mode as part of the Semantic Color update
     * Possible values: `primary` `secondary` `tertiary`
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)
     */
    bgColor?: BackgroundColor;
    /** @deprecated as part of update to Semantic Colors
     *
     * Property is replaced by the updated values for `bgColor` that works on dark mode
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    bgDarkmodeColor?: never;
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
        bgColor = 'primary',
        noPadding,
        children,
        ...rest
    } = props;

    return (
        <WithCardAction
            baseClassName="ffe-card-base"
            className={classNames('ffe-card-base', className, {
                [`ffe-card-base--bg-${bgColor}`]: bgColor,
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
