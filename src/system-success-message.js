import React, { PropTypes } from 'react';

import HakeIkon from 'ffe-icons-react/hake-ikon';

import Base from './base';

export default function SystemSuccessMessage({ children, header }) {
    return (
        <Base header={header} modifier="success" icon={<HakeIkon />}>
            {children}
        </Base>
    );
}

SystemSuccessMessage.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
};
