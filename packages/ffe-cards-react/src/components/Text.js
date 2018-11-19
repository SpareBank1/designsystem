import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import ComponentBase from './ComponentBase';

const Text = ({ className, ...rest }) => (
    <ComponentBase
        className={classNames('ffe-card-component--text', className)}
        {...rest}
    />
);

Text.propTypes = { className: string };

export default Text;
