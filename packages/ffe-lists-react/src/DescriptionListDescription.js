import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const DescriptionListDescription = props => {
    const { className, ...rest } = props;
    return (
        <dd
            className={classNames(
                'ffe-description-list__description',
                className,
            )}
            {...rest}
        />
    );
};

DescriptionListDescription.propTypes = {
    children: node,
    /** Any extra classes */
    className: string,
};

export default DescriptionListDescription;
