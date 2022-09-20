import React from 'react';
import classNames from 'classnames';
import { bool, node, string } from 'prop-types';

export default function Grid({
    children,
    className,
    condensed,
    element,
    ...rest
}) {
    const Element = element || 'div';

    return (
        <Element
            className={classNames(className, 'ffe-grid', {
                'ffe-grid--condensed': condensed,
            })}
            {...rest}
        >
            {children}
        </Element>
    );
}

Grid.defaultProps = {
    topPadding: true,
};

Grid.propTypes = {
    /** Any children of a Grid must be a GridRow */
    children: node,
    /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
    className: string,
    /** For a more compact grid */
    condensed: bool,
    /** Specify the DOM element being used to create the Grid */
    element: string,
};
