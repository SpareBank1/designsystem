import React from 'react';
import classNames from 'classnames';
import { string, bool } from 'prop-types';

import ComponentBase from './ComponentBase';

const Title = ({ className, overflowEllipsis, ...rest }) => (
    <ComponentBase
        className={classNames(
            'ffe-card-component--title',
            {
                'ffe-card-component--title--overflow-ellipsis': overflowEllipsis,
            },
            className,
        )}
        {...rest}
    />
);

Title.defaultProps = { overflowEllipsis: true };

Title.propTypes = {
    className: string,
    /** Disable wrapping and hide overflow with ellipsis */
    overflowEllipsis: bool,
};

export default Title;
