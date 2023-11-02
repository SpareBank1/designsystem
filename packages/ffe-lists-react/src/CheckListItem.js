import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';
import Symbol from '@sb1/ffe-symbols-react';

const CheckListItem = props => {
    const { className, isCross, ...rest } = props;
    return (
        <li className={classNames('ffe-check-list__item', className)} {...rest}>
            {isCross ? (
                <Symbol
                    className="ffe-check-list__icon ffe-check-list__icon--cross"
                    ariaLabel="kryss"
                    icon="close"
                    weight={400}
                    size="md"
                />
            ) : (
                <Symbol
                    className="ffe-check-list__icon ffe-check-list__icon--check"
                    size="md"
                    weight={400}
                    ariaLabel="hake"
                    icon="check"
                />
            )}
            {rest.children}
        </li>
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
