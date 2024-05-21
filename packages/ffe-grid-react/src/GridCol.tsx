import React, { ElementType } from 'react';
import classNames from 'classnames';
import {
    BackgroundColor,
    BackgroundColorDark,
    ComponentWithoutRefAsPropParams,
} from './types';

type ColumnsRange =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

interface GridColSize {
    cols: ColumnsRange;
    offset?: ColumnsRange;
}

type SizeModifier = ColumnsRange | GridColSize;

export type GridColProps<As extends ElementType = any> =
    ComponentWithoutRefAsPropParams<As> & {
        /** Supported background colors */
        background?: BackgroundColor;
        /** Supported dark background colors */
        backgroundDark?: BackgroundColorDark;
        /** Center text content horizontally */
        centerText?: boolean;
        /** Center content vertically */
        center?: boolean;
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
    } else if (typeof def === 'number' || typeof def === 'string') {
        return `ffe-grid__col--${size}-${def}`;
    }

    return classNames({
        [`ffe-grid__col--${size}-${def.cols}`]: def.cols || def.cols === 0,
        [`ffe-grid__col--${size}-offset-${def.offset}`]:
            def.offset || def.offset === 0,
    });
};

const centerTextClass = (centerText?: boolean) =>
    centerText ? 'ffe-grid__col--center-text' : null;

const centerClass = (center?: boolean) =>
    center ? 'ffe-grid__col--center' : null;

const backgroundClass = (background?: BackgroundColor) =>
    background ? `ffe-grid__col--bg-${background}` : null;

const backgroundDarkClass = (backgroundDark?: BackgroundColorDark) =>
    backgroundDark ? `ffe-grid__col--bg-dark-${backgroundDark}` : null;

export const GridCol: React.FC<GridColProps> = ({
    background,
    backgroundDark,
    className,
    as: Comp = 'div',
    centerText,
    center,
    children,
    sm,
    md,
    lg,
    ...rest
}) => {
    return (
        <Comp
            className={[
                'ffe-grid__col',
                className,
                sizeClasses('lg', lg),
                sizeClasses('md', md),
                sizeClasses('sm', !sm && !lg && !md ? 12 : sm),
                centerTextClass(centerText),
                centerClass(center),
                backgroundClass(background),
                backgroundDarkClass(backgroundDark),
            ]
                .filter(x => x)
                .join(' ')}
            {...rest}
        >
            {children}
        </Comp>
    );
};
