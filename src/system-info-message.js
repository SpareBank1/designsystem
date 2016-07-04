import React, { PropTypes } from 'react';

import InfoIkon from 'ffe-icons-react/info-ikon';

import Base from './base';

export default function SystemInfoMessage({ children, header }) {
    return (
        <Base header={header} modifier="info" icon={<InfoIkon />}>
            {children}
        </Base>
    );
}

SystemInfoMessage.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
};
