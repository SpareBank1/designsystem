import React, { PropTypes } from 'react';

import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import Base from './base';

export default function SystemInfoMessage({ style, children }) {
    return (
        <Base modifier="info" icon={<InfoSirkelIkon />} style={style}>
            {children}
        </Base>
    );
}

SystemInfoMessage.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};
