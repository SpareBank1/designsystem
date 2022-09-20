import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

import backgroundColors, { removedColors } from './background-colors';

export default function GridRow({
    background,
    className,
    children,
    element,
    padding,
    margin,
    ...rest
}) {
    const hasBackgroundColor = backgroundColors.includes(background);
    const hasRemovedColor = removedColors.includes(background);

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
                { 'ffe-grid__row--padding': padding },
                { 'ffe-grid__row--margin': margin },
            )}
            {...rest}
        >
            {children}
        </Element>
    );
}

GridRow.defaultProps = {
    padding: false,
    margin: false,
};

GridRow.propTypes = {
    /** Supported background colors */
    background: oneOf([
        'frost-30',
        'sand',
        'sand-70',
        'sand-30',
        'syrin-70',
        'syrin-30',
        'vann',
        'vann-30',
        'fjell',
        'hvit',
    ]),
    /** Any extra classes are attached to the root node, in addition to ffe-grid__row classes */
    className: string,
    /** All children of a `<GridRow />` must be `<GridCol />`. */
    children: node,
    /** Specify the DOM element being used to create the GridRow */
    element: string,
    /** Padding in the top and bottom of the row */
    padding: bool,
    /** Margin in the top and bottom of the row */
    margin: bool,
};
