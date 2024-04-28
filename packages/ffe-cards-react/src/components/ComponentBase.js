import React from 'react';
import classNames from 'classnames';
import { string, node, oneOfType, func, elementType } from 'prop-types';

const ComponentBase = ({ className, element: Element = 'p', ...rest }) => (
    <Element className={classNames(className)} {...rest} />
);

ComponentBase.propTypes = {
    className: string,
    element: oneOfType([func, string, elementType]),
    children: node,
};

export default ComponentBase;
