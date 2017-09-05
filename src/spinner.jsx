import React from 'react';
import { bool, node } from 'prop-types'

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
    text: node,
    children: node,
    large: bool,
    center: bool
};

export default Spinner;
