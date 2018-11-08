import React from 'react';
import { node } from 'prop-types';
import classNames from 'classnames';

const DescriptionListTerm = props => {
    const { className, ...rest } = props;
    return (
        <dt
            className={classNames('ffe-description-list__term', className)}
            {...rest}
        />
    );
};

DescriptionListTerm.propTypes = {
    children: node,
};

export default DescriptionListTerm;
