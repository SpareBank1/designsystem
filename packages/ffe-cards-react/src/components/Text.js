import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import ComponentBase from './ComponentBase';

const Text = ({ className, ...rest }) => (
    <ComponentBase
        className={classNames('ffe-card-body__text', className)}
        {...rest}
    />
);

Text.propTypes = { className: string };

export default Text;
