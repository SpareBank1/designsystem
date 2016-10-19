import React, { PropTypes } from 'react';

import HakeSirkelIkon from 'ffe-icons-react/hake-sirkel-ikon';

import Base from './base';

export default function SystemSuccessMessage({ style, children }) {
    return (
        <Base modifier="success" icon={<HakeSirkelIkon />} style={style}>
            {children}
        </Base>
    );
}

SystemSuccessMessage.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};
