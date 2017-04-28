import React, { PropTypes } from 'react';

export default function Form({ children }) {
    return (
        <div>
            <h1>Hello FFE!</h1>
            { children }
        </div>
    );
}

Form.propTypes = {
    children: PropTypes.node,
};
