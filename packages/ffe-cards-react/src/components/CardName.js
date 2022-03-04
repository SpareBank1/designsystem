import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import ComponentBase from './ComponentBase';

const CardName = ({ className, ...rest }) => (
    <ComponentBase
        className={classNames('ffe-card-body__card-name', className)}
        {...rest}
    />
);

CardName.propTypes = { className: string };

export default CardName;
