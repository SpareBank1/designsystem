import React, { PropTypes } from 'react';
import Base from './base';

export default function ContextSuccessMessage({children, ...rest}) {
    return (
        <Base
            messageType="success"
            {...rest}
        >
            {children}
        </Base>
    );
}

ContextSuccessMessage.propTypes = {
    children: PropTypes.node.isRequired,
};
