import React, { ElementType } from 'react';
import classNames from 'classnames';
import {
    BackgroundColor,
    ComponentWithoutRefAsPropParams,
    SizeModifier,
} from './types';

export type GridColProps<As extends ElementType = any> =
    ComponentWithoutRefAsPropParams<As> & {
        /** Supported background colors */
        bgColor?: BackgroundColor;
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

const backgroundClass = (bgColor?: BackgroundColor) =>
    bgColor ? `ffe-grid__col--bg-${bgColor}` : null;

export const GridCol: React.FC<GridColProps> = ({
    bgColor,
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
                backgroundClass(bgColor),
            ]
                .filter(x => x)
                .join(' ')}
            {...rest}
        >
            {children}
        </Comp>
    );
};
