import React from 'react';
import { node, string, oneOf } from 'prop-types';
import classNames from 'classnames';

const FieldMessage = ({
    children,
    className,
    type,
    ...rest
}) => {
    return (
        <div
            className={ classNames(`ffe-field-${type}-message`, className) }
            { ...rest }
        >
            { children }
        </div>
    );
};

FieldMessage.propTypes = {
    children: node.isRequired,
    className: string,
    type: oneOf(['success', 'info', 'error']).isRequired,
};

export default FieldMessage;
