import React from 'react';
import { node, object } from 'prop-types';

import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import Base from './base';

export default function SystemErrorMessage({ style, children }) {
    const ikon = (
        <InfoSirkelIkon style={{ transform: 'rotateX(180deg)' }} />
    );
    return (
        <Base modifier="error" icon={ikon} style={style}>
            {children}
        </Base>
    );
}

SystemErrorMessage.propTypes = {
    children: node.isRequired,
    style: object,
};
