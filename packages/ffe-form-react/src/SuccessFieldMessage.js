import React from 'react';
import BaseFieldMessage from './BaseFieldMessage';

const SuccessFieldMessage = props => {
    return <BaseFieldMessage {...props} type="success" />;
};

export default SuccessFieldMessage;
