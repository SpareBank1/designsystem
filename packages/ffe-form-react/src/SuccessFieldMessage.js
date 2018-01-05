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

export default SuccessFieldMessage;
