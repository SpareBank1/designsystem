import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

export default function PreformattedText(props) {
    const { children, className, ...rest } = props;

    return (
        <pre className={classNames('ffe-pre-text', className)} {...rest}>
            {children}
        </pre>
    );
}

PreformattedText.propTypes = {
    children: node.isRequired,
    className: string,
};
