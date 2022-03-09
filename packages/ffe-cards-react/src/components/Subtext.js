import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import ComponentBase from './ComponentBase';

const Subtext = ({ className, ...rest }) => (
    <ComponentBase
        className={classNames('ffe-card-body__subtext', className)}
        {...rest}
    />
);

Subtext.propTypes = { className: string };

export default Subtext;
