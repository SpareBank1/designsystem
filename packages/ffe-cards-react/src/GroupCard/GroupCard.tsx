import classNames from 'classnames';
import React, { ElementType, ForwardedRef } from 'react';
import { fixedForwardRef } from '../fixedForwardRef.js';
import { ComponentAsPropParams, BackgroundColor } from '../types.js';

export type GroupCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
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
};

function GroupCardWithForwardRef<As extends ElementType>(
    props: GroupCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        children,
        bgColor = 'primary',
        noMargin,
        as: Comp = 'div',
        ...rest
    } = props;
    return (
        <Comp
            className={classNames(
                'ffe-group-card',
                {
                    'ffe-group-card--no-margin': noMargin,
                    [`ffe-group-card--bg-${bgColor}`]: bgColor,
                },
                className,
            )}
            role={Comp === 'div' ? 'group' : undefined}
            {...rest}
            ref={ref}
        >
            {children}
        </Comp>
    );
}
export const GroupCard = fixedForwardRef(GroupCardWithForwardRef);
