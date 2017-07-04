import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

export default function GridRow({
    bgBlueCobalt,
    bgBluePale,
    bgSand,
    className,
    children,
    element,
    reverse,
    topPadding,
    ...rest
}) {
    let content = children;
    if (bgBluePale || bgBlueCobalt || bgSand) {
        content = <div className="ffe-grid__row-wrapper">{children}</div>;
    }

    const Element = element || 'div';

    return (
        <Element
            className={
                classNames(
                    className,
                    'ffe-grid__row',
                    { 'ffe-grid__row--bg-blue-cobalt': bgBlueCobalt },
                    { 'ffe-grid__row--bg-blue-pale': bgBluePale },
                    { 'ffe-grid__row--bg-sand': bgSand },
                    { 'ffe-grid__row--reverse': reverse },
                    { 'ffe-grid__row--top-padding': topPadding },
                )
            }
            {...rest}
        >
            {content}
        </Element>
    );
}

GridRow.propTypes = {
    bgBlueCobalt: bool,
    bgBluePale: bool,
    bgSand: bool,
    className: string,
    children: node.isRequired,
    element: string,
    reverse: bool,
    topPadding: bool,
};
