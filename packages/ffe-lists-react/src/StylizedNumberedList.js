import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const StylizedNumberedList = ({ className, ...rest }) => (
    <ol
        role="list"
        className={classNames('ffe-stylized-numbered-list', className)}
        {...rest}
    />
);

StylizedNumberedList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
};

export default StylizedNumberedList;
