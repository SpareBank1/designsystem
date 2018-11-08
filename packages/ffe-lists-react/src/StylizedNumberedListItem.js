import React from 'react';
import { node } from 'prop-types';
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
};

export default StylizedNumberedListItem;
