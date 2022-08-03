import React from 'react';
import { bool, node, string } from 'prop-types';
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
            aria-label={isCross ? 'kryss' : 'hake'}
            {...rest}
        />
    );
};

CheckListItem.propTypes = {
    children: node,
    /** Any extra classes */
    className: string,
    /** If true, render a red cross instead of a green checkmark */
    isCross: bool,
};

CheckListItem.defaultProps = {
    isCross: false,
};

export default CheckListItem;
