import React, { ElementType } from 'react';
import classNames from 'classnames';
import {
    ComponentWithoutRefAsPropParams,
    BackgroundColor,
    BackgroundColorDark,
    Margin,
    Padding,
} from './types';

interface GridRowSize {
    margin?: Margin;
    padding?: Padding;
}

type SizeModifier = GridRowSize | Margin | Padding;

export type GridRowProps<As extends ElementType = any> =
    ComponentWithoutRefAsPropParams<As> & {
        /** Padding in the top and bottom of the row */
        padding?: Padding;
        /** Margin in the top and bottom of the row */
        margin?: Margin;
        /** Supported background colors */
        background?: BackgroundColor;
        /** Supported dark background colors */
        backgroundDark?: BackgroundColorDark;
        /** Size modifiers for small screen sizes */
        sm?: SizeModifier;
        /** Size modifiers for medium screen sizes */
        md?: SizeModifier;
        /** Size modifiers for large screen sizes */
        lg?: SizeModifier;
    };

const sizeClasses = (size: 'sm' | 'md' | 'lg', def?: SizeModifier) => {
    if (def === undefined) {
        return null;
    } else if (typeof def === 'string') {
        return `ffe-grid__row--${size}-${def}`;
    }

    return classNames({
        [`ffe-grid__row--${size}-margin-${def.margin}`]: def.margin,
        [`ffe-grid__row--${size}-padding-${def.padding}`]: def.padding,
    });
};

export const GridRow: React.FC<GridRowProps> = ({
    background,
    backgroundDark,
    className,
    children,
    as: Comp = 'div',
    sm,
    md,
    lg,
    padding,
    margin,
    ...rest
}) => {
    const hasBackgroundColor = !!background;
    const hasBackgroundDarkColor = !!backgroundDark;
    const content =
        hasBackgroundColor || hasBackgroundDarkColor ? (
            <div className="ffe-grid__row-wrapper">{children}</div>
        ) : (
            children
        );

    return (
        <Comp
            className={classNames(
                className,
                sizeClasses('lg', lg),
                sizeClasses('md', md),
                sizeClasses('sm', sm),
                'ffe-grid__row',
                { [`ffe-grid__row--bg-${background}`]: hasBackgroundColor },
                {
                    [`ffe-grid__row--bg-dark-${backgroundDark}`]:
                        hasBackgroundDarkColor,
                },
                { [`ffe-grid__row--padding-${padding}`]: padding },
                { [`ffe-grid__row--margin-${margin}`]: margin },
            )}
            {...rest}
        >
            {content}
        </Comp>
    );
};
