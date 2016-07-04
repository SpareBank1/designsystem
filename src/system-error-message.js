import React, { PropTypes } from 'react';

import UtropstegnIkon from 'ffe-icons-react/utropstegn-ikon';

import Base from './base';

export default function SystemErrorMessage({ children, header }) {
    return (
        <Base header={header} modifier="error" icon={<UtropstegnIkon />}>
            {children}
        </Base>
    );
}

SystemErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
};
