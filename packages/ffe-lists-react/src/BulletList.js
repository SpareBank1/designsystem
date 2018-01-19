import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const BulletList = ({ className, ...rest }) => (
    <ul className={classNames('ffe-bullet-list', className)} {...rest} />
);

BulletList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
};

export default BulletList;
