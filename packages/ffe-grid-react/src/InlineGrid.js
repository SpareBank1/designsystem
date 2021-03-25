import React from 'react';
import classNames from 'classnames';
import { node, string } from 'prop-types';

export default function InlineGrid({ className, element: Element, ...rest }) {
    return (
        <Element
            className={classNames(className, 'ffe-grid', 'ffe-grid--inline')}
            {...rest}
        />
    );
}

InlineGrid.propTypes = {
    /** Any children of a InlineGrid must be a GridRow */
    children: node,
    /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
    className: string,
    /** Specify the DOM element being used to create the Grid */
    element: string,
};

InlineGrid.defaultProps = {
    element: 'div',
};
