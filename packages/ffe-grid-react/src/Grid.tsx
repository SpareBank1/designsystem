import React, { ElementType } from 'react';
import classNames from 'classnames';
import { ComponentWithoutRefAsPropParams, Gap } from './types.js';

type SizeModifier = GridGapSize | Gap;

interface GridGapSize {
    gap?: Gap;
}

export type GridProps<As extends ElementType = any> =
    ComponentWithoutRefAsPropParams<As> & {
        /** Specify the internal gutter of the grid */
        gap?: Gap;
        /** Size modifiers for small screen sizes */
        sm?: SizeModifier;
        /** Size modifiers for medium screen sizes */
        md?: SizeModifier;
        /** Size modifiers for large screen sizes */
        lg?: SizeModifier;
    };

const sizeClasses = (size: 'none' | 'sm' | 'md' | 'lg', def?: SizeModifier) => {
    if (def === undefined) {
        return null;
    } else if (typeof def === 'string') {
        return `ffe-grid--gap-${size}-${def}`;
    }

    return classNames({
        [`ffe-grid--${size}-gap-${def.gap}`]: def.gap,
    });
};

export const Grid: React.FC<GridProps> = ({
    children,
    className,
    gap,
    sm,
    md,
    lg,
    as: Comp = 'div',
    ...rest
}) => {
    return (
        <Comp
            className={classNames(
                className,
                'ffe-grid',
                {
                    [`ffe-grid--gap-${gap}`]: gap,
                },
                sizeClasses('lg', lg),
                sizeClasses('md', md),
                sizeClasses('sm', sm),
            )}
            {...rest}
        >
            {children}
        </Comp>
    );
};
