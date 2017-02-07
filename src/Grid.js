import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Grid({ children, noTopPadding }) {
    return (
        <div
            className={
                classNames(
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
    noTopPadding: PropTypes.bool,
};
