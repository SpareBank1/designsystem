import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function GridRow({ bgBlueCobalt, bgBluePale, bgSand, className, children, reverse, topPadding }) {
    let content = children;

    if (bgBluePale || bgBlueCobalt || bgSand) {
        content = <div className="ffe-grid__row-wrapper">{children}</div>;
    }

    return (
        <div
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
        >
            {content}
        </div>
    );
}

GridRow.propTypes = {
    bgBlueCobalt: PropTypes.bool,
    bgBluePale: PropTypes.bool,
    bgSand: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
    topPadding: PropTypes.bool,
};
