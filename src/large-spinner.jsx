import React, { PropTypes } from 'react';
import Spinner from './spinner';

const LargeSpinner = ({ text, children, center = true }) => (
    <Spinner large text={ text } center={ center }>
        { children }
    </Spinner>
);

LargeSpinner.propTypes = {
    text: PropTypes.node,
    children: PropTypes.node,
    center: PropTypes.bool
};

export default LargeSpinner;
