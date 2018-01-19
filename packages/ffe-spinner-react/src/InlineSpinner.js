import React from 'react';
import { bool } from 'prop-types';
import classNames from 'classnames';

const InlineSpinner = props => (
    <span
        className={classNames(
            'ffe-loading-spinner',
            { 'ffe-loading-spinner--large' : props.large }
        )}
    />
);

InlineSpinner.propTypes = {
    large: bool
};

InlineSpinner.defaultProps = {
    large: false,
};

export default InlineSpinner;
