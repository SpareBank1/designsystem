import React from 'react';
import { node } from 'prop-types';
import Base from './base';

export default function ContextInfoMessage({ children, ...rest }) {
    return (
        <Base
            messageType="tip"
            {...rest}
        >
            {children}
        </Base>
    );
}

ContextInfoMessage.propTypes = {
    children: node.isRequired,
};

