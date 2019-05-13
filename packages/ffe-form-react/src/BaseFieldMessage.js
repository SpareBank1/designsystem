import React from 'react';
import { node, string, oneOf } from 'prop-types';
import classNames from 'classnames';

/**
 * Internal factory component
 * @ignore
 */
const BaseFieldMessage = props => {
    const { children, className, element: Element, type, ...rest } = props;

    return (
        <Element
            className={classNames(`ffe-field-${type}-message`, className)}
            {...rest}
        >
            {children}
        </Element>
    );
};

BaseFieldMessage.defaultProps = {
    element: 'div',
};

BaseFieldMessage.propTypes = {
    children: node.isRequired,
    className: string,
    element: string,
    type: oneOf(['success', 'info', 'error']).isRequired,
};

export default BaseFieldMessage;
