import React, { PropTypes } from 'react';
import Base from './base';

export default function ContextErrorMessage({children, ...rest}) {
    return (
        <Base
            messageType="error"
            {...rest}
        >
            {children}
        </Base>
    );
}

ContextErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
};
