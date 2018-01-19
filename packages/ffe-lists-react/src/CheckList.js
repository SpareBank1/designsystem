import React from 'react';
import classNames from 'classnames';
import { node, string } from 'prop-types';

const CheckList = ({ className, ...rest }) => (
    <ul className={classNames('ffe-check-list', className)} {...rest} />
);

CheckList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
};

export default CheckList;
