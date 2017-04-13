import React, { PropTypes } from 'react';

export default function ChartDonut({ children }) {
    return (
        <div>
            <h1>Hello FFE!</h1>
            { children }
        </div>
    );
}

ChartDonut.propTypes = {
    children: PropTypes.node,
};
