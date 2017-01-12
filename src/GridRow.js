import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function GridRow({ bgBlue, children, reverse }) {
    return (
        <div
            className={
                classNames(
                    'ffe-grid__row',
                    { 'ffe-grid__row--bg-blue': bgBlue },
                    { 'ffe-grid__row--reverse': reverse },
                )
            }
        >
            {children}
        </div>
    );
}

GridRow.propTypes = {
    bgBlue: PropTypes.bool,
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
};
