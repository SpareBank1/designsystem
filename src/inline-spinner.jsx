import React, { PropTypes } from 'react';

const InlineSpinner = ({ large = false }) => (
    <span className={ `ffe-loading-spinner ${ large ? 'ffe-loading-spinner--large' : '' }` } />
);

InlineSpinner.propTypes = {
    large: PropTypes.bool
};

export default InlineSpinner;
