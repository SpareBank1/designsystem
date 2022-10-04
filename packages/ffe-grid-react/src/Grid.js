import React from 'react';
import classNames from 'classnames';
import { node, string, oneOf } from 'prop-types';

export default function Grid({ children, className, gap, element, ...rest }) {
    const Element = element || 'div';

    return (
        <Element
            className={classNames(className, 'ffe-grid', {
                [`ffe-grid--gap-${gap}`]: gap,
            })}
            {...rest}
        >
            {children}
        </Element>
    );
}

Grid.propTypes = {
    /** Any children of a Grid must be a GridRow */
    children: node,
    /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
    className: string,
    /** Specify the internal gutter of the grid */
    gap: oneOf(['none', '2xs', 'xs', 'sm', 'md', 'lg']),
    /** Specify the DOM element being used to create the Grid */
    element: string,
};
