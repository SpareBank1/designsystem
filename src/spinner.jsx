import React, { PropTypes } from 'react';

const Spinner = ({ text, children, large = false, center = true }) => (
    <div className={ `ffe-content-container ${ !center ? 'ffe-content-container--text-left' : '' }` }>
        <div className={ `ffe-loading-spinner ${ large ? 'ffe-loading-spinner--large' : '' }` } />
        { (text || children) ?
            <div className="ffe-body-paragraph">
                { text || children }
            </div>
        : '' }
    </div>
);

Spinner.propTypes = {
    text: PropTypes.node,
    children: PropTypes.node,
    large: PropTypes.bool,
    center: PropTypes.bool
};

export default Spinner;
