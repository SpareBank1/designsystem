import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Grid({ children, className, noTopPadding }) {
    return (
        <div
            className={
                classNames(
                    className,
                    'ffe-grid',
                    { 'ffe-grid--no-top-padding': noTopPadding },
                )
            }
        >
            {children}
        </div>
    );
}

Grid.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    noTopPadding: PropTypes.bool,
};
