import React from 'react';
import { bool, node } from 'prop-types';
import classNames from 'classnames';

const CheckListItem = props => {
    const { className, isCross, ...rest } = props;
    return (
        <li
            className={classNames(
                'ffe-check-list__item',
                { 'ffe-check-list__item--cross': isCross },
                className,
            )}
            {...rest}
        />
    );
};

CheckListItem.propTypes = {
    children: node,
    /** If true, render a red cross instead of a green checkmark */
    isCross: bool,
};

CheckListItem.defaultProps = {
    isCross: false,
};

export default CheckListItem;
