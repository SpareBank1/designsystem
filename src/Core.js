import React, { PropTypes } from 'react';

export default function Core({ children }) {
    return (
        <div>
            <h1>Hello FFE!</h1>
            { children }
        </div>
    );
}

Core.propTypes = {
    children: PropTypes.node,
};
