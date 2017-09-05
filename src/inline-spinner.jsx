import React from 'react';
import { bool } from 'prop-types'

const InlineSpinner = ({ large = false }) => (
    <span className={ `ffe-loading-spinner ${ large ? 'ffe-loading-spinner--large' : '' }` } />
);

InlineSpinner.propTypes = {
    large: bool
};

export default InlineSpinner;
