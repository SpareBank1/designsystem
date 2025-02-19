import classNames from 'classnames';
import React, { ForwardedRef } from 'react';
import { fixedForwardRef } from '../fixedForwardRef';
import { BackgroundColor } from '../types';

export interface GroupCardProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** The children of the GroupCard component */
    children: React.ReactNode;
    /**
     * The background color of the whole groupcard element
     *
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
    /** No margin on card */
    noMargin?: boolean;
}

function GroupCardWithForwardRef(
    {
        className,
        children,
        bgColor = 'primary',
        noMargin,
        ...rest
    }: GroupCardProps,
    ref: ForwardedRef<any>,
) {
    return (
        <div
            className={classNames(
                'ffe-group-card',
                {
                    'ffe-group-card--no-margin': noMargin,
                    [`ffe-group-card--bg-${bgColor}`]: bgColor,
                },
                className,
            )}
            role="group"
            {...rest}
            ref={ref}
        >
            {children}
        </div>
    );
}
export const GroupCard = fixedForwardRef(GroupCardWithForwardRef);
