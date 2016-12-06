import React, { PropTypes } from 'react';
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
    children: PropTypes.node.isRequired,
};

