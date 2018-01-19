import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';

const NumberedList = ({ className, ...rest }) => (
    <ol className={classNames('ffe-numbered-list', className)} {...rest} />
);

NumberedList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
};

export default NumberedList;
