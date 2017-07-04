import React from 'react';
import classNames from 'classnames';
import { bool, node, string } from 'prop-types';

export default function Grid({ children, className, element, noTopPadding, ...rest }) {
    const Element = element || 'div';
    return (
        <Element
            className={
                classNames(
                    className,
                    'ffe-grid',
                    { 'ffe-grid--no-top-padding': noTopPadding },
                )
            }
            {...rest}
        >
            {children}
        </Element>
    );
}

Grid.propTypes = {
    children: node.isRequired,
    className: string,
    element: string,
    noTopPadding: bool,
};
