import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const StylizedNumberedListItem = props => {
    const { className, children, ...rest } = props;
    return (
        <li
            className={classNames(
                'ffe-stylized-numbered-list__item',
                className,
            )}
            {...rest}
        >
            <div className="ffe-stylized-numbered-list__item-content">
                {children}
            </div>
        </li>
    );
};

StylizedNumberedListItem.propTypes = {
    children: node,
    /** Any extra classes */
    className: string,
};

export default StylizedNumberedListItem;
