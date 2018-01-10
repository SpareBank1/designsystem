import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

const Label = ({ block, children, className, ...rest }) => (
    <label
        className={classNames(
            'ffe-form-label',
            { 'ffe-form-label--block': block },
            className,
        )}
        {...rest}
    >
        {children}
    </label>
);

Label.propTypes = {
    /**
     * Labels default to `display: inline-block;` to have tooltips appear immediately to the right.
     * Set this to `true` if you don't use tooltips and need the label to be `display: block;`.
     */
    block: bool,
    children: node.isRequired,
    className: string,
};

export default Label;
