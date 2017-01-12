import React, { PropTypes } from 'react';

export default function Grid({ children }) {
    return (
        <div className="ffe-grid">
            {children}
        </div>
    );
}

Grid.propTypes = {
    children: PropTypes.node.isRequired,
};
