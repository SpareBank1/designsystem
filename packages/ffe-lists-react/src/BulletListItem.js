import React from 'react';
import { node } from 'prop-types';
import classNames from 'classnames';

const BulletListItem = props => {
    const { className, ...rest } = props;
    return (
        <li
            className={classNames('ffe-bullet-list__item', className)}
            {...rest}
        />
    );
};

BulletListItem.propTypes = {
    children: node,
};

export default BulletListItem;
