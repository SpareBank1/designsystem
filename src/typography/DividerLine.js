import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

export default function DividerLine(props) {
    const {
        className,
        ...rest
    } = props;

    return (
        <hr className={classNames('ffe-divider-line', className)} {...rest} />
    );
}

DividerLine.propTypes = {
    className: string,
};
