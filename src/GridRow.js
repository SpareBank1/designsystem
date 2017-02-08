import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function GridRow({ bgBlue, bgSand, children, reverse, topPadding }) {
    return (
        <div
            className={
                classNames(
                    'ffe-grid__row',
                    { 'ffe-grid__row--bg-blue': bgBlue },
                    { 'ffe-grid__row--bg-sand': bgSand },
                    { 'ffe-grid__row--reverse': reverse },
                    { 'ffe-grid__row--top-padding': topPadding },
                )
            }
        >
            {children}
        </div>
    );
}

GridRow.propTypes = {
    bgBlue: PropTypes.bool,
    bgSand: PropTypes.bool,
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
    topPadding: PropTypes.bool,
};
