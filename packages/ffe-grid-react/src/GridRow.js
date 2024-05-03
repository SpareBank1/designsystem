import React from 'react';
import { node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

import {
    backgroundColors,
    backgroundDarkColors,
    removedColors,
} from './background-colors';

export default function GridRow({
    background,
    backgroundDark,
    className,
    children,
    element,
    padding,
    margin,
    ...rest
}) {
    const hasBackgroundColor = backgroundColors.includes(background);
    const hasBackgroundDarkColor =
        backgroundDarkColors.includes(backgroundDark);
    const hasRemovedColor = removedColors.includes(background);
    const content =
        hasBackgroundColor || hasBackgroundDarkColor ? (
            <div className="ffe-grid__row-wrapper">{children}</div>
        ) : (
            children
        );

    if (hasRemovedColor) {
        throw new Error(
            `Support for the ${background} background on <GridRow> has been removed, please see the CHANGELOG`,
        );
    }

    const Element = element || 'div';

    return (
        <Element
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
        </Element>
    );
}

GridRow.propTypes = {
    /** Supported background colors */
    background: oneOf(backgroundColors),
    /** Supported dark background colors */
    backgroundDark: oneOf(backgroundDarkColors),
    /** Padding in the top and bottom of the row */
    padding: oneOf([
        '2xs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
    ]),
    /** Margin in the top and bottom of the row */
    margin: oneOf([
        '2xs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
    ]),
    /** Any extra classes are attached to the root node, in addition to ffe-grid__row classes */
    className: string,
    /** All children of a `<GridRow />` must be `<GridCol />`. */
    children: node,
    /** Specify the DOM element being used to create the GridRow */
    element: string,
};
