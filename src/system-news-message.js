import React, { PropTypes } from 'react';

import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import Base from './base';

export default function SystemNewsMessage({ style, children }) {
    return (
        <Base modifier="news" icon={<InfoSirkelIkon />} style={style}>
            {children}
        </Base>
    );
}

SystemNewsMessage.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};
