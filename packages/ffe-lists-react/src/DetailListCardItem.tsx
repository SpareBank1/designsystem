import React from 'react';
import classNames from 'classnames';

export interface DetailListCardItemProps
    extends React.ComponentPropsWithoutRef<'div'> {
    /** Content of the label / left column */
    label: React.ReactNode;
    /** Content of the value / right column */
    value: React.ReactNode;
}

export const DetailListCardItem: React.FC<DetailListCardItemProps> = ({
    className,
    label,
    value,
    ...rest
}) => {
    return (
        <div
            role="listitem"
            className={classNames('ffe-detail-list-card__item', className)}
            {...rest}
        >
            <div
                role="term"
                className="ffe-detail-list-card__item-label">
                {React.isValidElement(label)
                    ? React.cloneElement(label, { ...label.props })
                    : label}
            </div>
            <div
                role="definition"
                className="ffe-detail-list-card__item-value">
                {React.isValidElement(value)
                    ? React.cloneElement(value, { ...value.props })
                    : value}
            </div>
        </div>
    );
};
