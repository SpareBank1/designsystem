import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

export default function MicroText(props) {
    const { children, className, ...rest } = props;

    return (
        <span className={classNames('ffe-micro-text', className)} {...rest}>
            {children}
        </span>
    );
}

MicroText.propTypes = {
    children: node.isRequired,
    className: string,
};
