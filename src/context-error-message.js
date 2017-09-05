import React from 'react';
import { node } from 'prop-types';
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
    children: node.isRequired,
};
