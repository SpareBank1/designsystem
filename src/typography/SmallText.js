import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

export default function SmallText(props) {
    const {
        children,
        className,
        ...rest
    } = props;

    return (
        <span className={classNames('ffe-small-text', className)} {...rest}>
            {children}
        </span>
    );
}

SmallText.propTypes = {
    children: node.isRequired,
    className: string,
};
