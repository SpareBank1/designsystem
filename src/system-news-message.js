import React, { PropTypes } from 'react';

import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import Base from './base';

export default function SystemNewsMessage({ children }) {
    return (
        <Base modifier="news" icon={<InfoSirkelIkon />}>
            {children}
        </Base>
    );
}

SystemNewsMessage.propTypes = {
    children: PropTypes.node.isRequired,
};
