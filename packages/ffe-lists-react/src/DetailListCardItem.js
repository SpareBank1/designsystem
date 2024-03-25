import React from 'react';
import classNames from 'classnames';
import { string, node } from 'prop-types';

const DetailListCardItem = ({ className, label, value, ...rest }) => {
    return (
        <div
            className={classNames('ffe-detail-list-card__item', className)}
            {...rest}
        >
            <dt className="ffe-detail-list-card__item-label">
                {typeof label === 'string'
                    ? label
                    : React.cloneElement(label, { ...label.props })}
            </dt>
            <dd className="ffe-detail-list-card__item-value">
                {typeof value === 'string'
                    ? value
                    : React.cloneElement(value, { ...value.props })}
            </dd>
        </div>
    );
};

DetailListCardItem.propTypes = {
    /** Additional classnames */
    className: string,
    /** Content of the label / left column */
    label: node.isRequired,
    /** Content of the value / right column */
    value: node.isRequired,
};

export default DetailListCardItem;
