import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const StylizedNumberedListItem = props => {
    const { className, ...rest } = props;
    return (
        <li
            className={classNames(
                'ffe-stylized-numbered-list__item',
                className,
            )}
            {...rest}
        />
    );
};

StylizedNumberedListItem.propTypes = {
    children: node,
    /** Any extra classes */
    className: string,
};

export default StylizedNumberedListItem;
