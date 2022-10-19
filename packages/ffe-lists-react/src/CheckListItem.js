import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';
import { HakeIkon, KryssIkon } from '@sb1/ffe-icons-react';

const CheckListItem = props => {
    const { className, isCross, ...rest } = props;
    return (
        <li className={classNames('ffe-check-list__item', className)} {...rest}>
            {isCross ? (
                <KryssIkon
                    className="ffe-check-list__icon ffe-check-list__icon--cross"
                    role="img"
                    title="kryss"
                />
            ) : (
                <HakeIkon
                    className="ffe-check-list__icon ffe-check-list__icon--check"
                    role="img"
                    title="hake"
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
