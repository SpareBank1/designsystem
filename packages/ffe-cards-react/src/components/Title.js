import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import ComponentBase from './ComponentBase';

const Title = ({ className, ...rest }) => (
    <ComponentBase
        className={classNames('ffe-card-component--title', className)}
        {...rest}
    />
);

Title.propTypes = { className: string };

export default Title;
