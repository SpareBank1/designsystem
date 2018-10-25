import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

const Label = ({ block, children, className, htmlFor, dark, ...rest }) => (
    <label
        className={classNames('ffe-form-label', className, {
            'ffe-form-label--block': block,
            'ffe-form-label--dark': dark,
        })}
        htmlFor={htmlFor}
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
    htmlFor: string,
    /** Dark variant */
    dark: bool,
};

Label.defaultProps = {
    dark: false,
};

export default Label;
