import React from 'react';
import classNames from 'classnames';
import { node, string } from 'prop-types';

const DetailListCard = props => {
    const { className, children, ...rest } = props;

    return (
        <dl className={classNames('ffe-detail-list-card', className)} {...rest}>
            {children}
        </dl>
    );
};

DetailListCard.propTypes = {
    /** Additional classnames */
    className: string,
    children: node,
};

export default DetailListCard;
