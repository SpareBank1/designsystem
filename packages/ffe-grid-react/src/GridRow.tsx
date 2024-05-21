import React, { ElementType } from 'react';
import classNames from 'classnames';
import {
    ComponentWithoutRefAsPropParams,
    BackgroundColor,
    BackgroundColorDark,
    Margin,
    Padding,
} from './types';

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
    };

export const GridRow: React.FC<GridRowProps> = ({
    background,
    backgroundDark,
    className,
    children,
    as: Comp = 'div',
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
