import React from 'react';
import classNames from 'classnames';
import { string, node, oneOfType, func } from 'prop-types';

const ComponentBase = ({ className, element: Element, ...rest }) => (
    <Element
        className={classNames('ffe-card-component', className)}
        {...rest}
    />
);

ComponentBase.defaultProps = { element: 'p' };

ComponentBase.propTypes = {
    className: string,
    element: oneOfType([func, string]),
    children: node,
};

export default ComponentBase;
