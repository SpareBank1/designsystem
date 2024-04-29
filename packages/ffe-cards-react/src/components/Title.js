import React from 'react';
import classNames from 'classnames';
import { string, bool } from 'prop-types';

import ComponentBase from './ComponentBase';

const Title = ({ className, overflowEllipsis = false, ...rest }) => (
    <ComponentBase
        className={classNames(
            'ffe-card-body__title',
            {
                'ffe-card-body__title--overflow-ellipsis': overflowEllipsis,
            },
            className,
        )}
        {...rest}
    />
);

Title.propTypes = {
    className: string,
    /** Disable wrapping and hide overflow with ellipsis */
    overflowEllipsis: bool,
};

export default Title;
