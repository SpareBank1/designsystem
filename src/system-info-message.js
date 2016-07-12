import React, { PropTypes } from 'react';

import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import Base from './base';

export default function SystemInfoMessage({ children }) {
    return (
        <Base modifier="info" icon={<InfoSirkelIkon />}>
            {children}
        </Base>
    );
}

SystemInfoMessage.propTypes = {
    children: PropTypes.node.isRequired,
};
