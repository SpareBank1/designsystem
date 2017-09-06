import React from 'react';
import { bool, node } from 'prop-types';
import Spinner from './spinner';

const LargeSpinner = ({ text, children, center = true }) => (
    <Spinner large text={ text } center={ center }>
        { children }
    </Spinner>
);

LargeSpinner.propTypes = {
    text: node,
    children: node,
    center: bool
};

export default LargeSpinner;
