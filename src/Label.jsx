import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

const Label = ({
    block,
    children,
    className,
    htmlFor,
    ...rest
}) => (
    <label
        className={ classNames(
            'ffe-form-label',
            { 'ffe-form-label--block': block },
            className
        )}
        htmlFor={ htmlFor }
        { ...rest }
    >
        { children }
    </label>
);

Label.propTypes = {
    block: bool,
    children: node.isRequired,
    className: string,
    htmlFor: string.isRequired
};

export default Label;
