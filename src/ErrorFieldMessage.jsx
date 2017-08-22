import React from 'react';
import { node } from 'prop-types';
import FieldMessage from './FieldMessage';

const ErrorFieldMessage = props => {
    return (
        <FieldMessage
            { ...props }
            type="error"
        />
    );
};

ErrorFieldMessage.propTypes = {
    children: node.isRequired
};

export default ErrorFieldMessage;
