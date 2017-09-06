import React from 'react';
import { node } from 'prop-types';
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
    children: node.isRequired,
};
