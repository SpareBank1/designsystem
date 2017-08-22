import React from 'react';
import { node } from 'prop-types';
import FieldMessage from './FieldMessage';

const SuccessFieldMessage = props => {
    return (
        <FieldMessage
            { ...props }
            type="success"
        />
    );
};

SuccessFieldMessage.propTypes = {
    children: node.isRequired
};

export default SuccessFieldMessage;
