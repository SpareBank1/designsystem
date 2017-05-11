import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

export default function ItalicText(props) {
    const {
        children,
        className,
        ...rest
    } = props;

    return (
        <em className={classNames('ffe-em-text', className)} {...rest}>
            {children}
        </em>
    );
}

ItalicText.propTypes = {
    children: node.isRequired,
    className: string,
};
