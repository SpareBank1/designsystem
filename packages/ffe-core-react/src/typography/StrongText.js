import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

export default function StrongText(props) {
    const { children, className, ...rest } = props;

    return (
        <strong className={classNames('ffe-strong-text', className)} {...rest}>
            {children}
        </strong>
    );
}

StrongText.propTypes = {
    children: node.isRequired,
    className: string,
};
