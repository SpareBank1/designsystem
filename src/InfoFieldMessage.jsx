import React from 'react';
import { node } from 'prop-types';
import FieldMessage from './FieldMessage';

const InfoFieldMessage = props => {
    return (
        <FieldMessage
            { ...props }
            type="info"
        />
    );
};

InfoFieldMessage.propTypes = {
    children: node.isRequired
};

export default InfoFieldMessage;
