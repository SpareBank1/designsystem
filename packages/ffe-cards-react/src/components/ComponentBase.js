import React from 'react';
import classNames from 'classnames';
import { string, node, oneOfType, func, elementType } from 'prop-types';

const ComponentBase = ({ className, element: Element, ...rest }) => (
    <Element className={classNames(className)} {...rest} />
);

ComponentBase.defaultProps = { element: 'p' };

ComponentBase.propTypes = {
    className: string,
    element: oneOfType([func, string, elementType]),
    children: node,
};

export default ComponentBase;
