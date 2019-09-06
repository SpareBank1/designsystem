import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const NumberedListItem = props => {
    const { className, ...rest } = props;
    return (
        <li
            className={classNames('ffe-numbered-list__item', className)}
            {...rest}
        />
    );
};

NumberedListItem.propTypes = {
    children: node,
    /** Any extra classes */
    className: string,
};

export default NumberedListItem;
