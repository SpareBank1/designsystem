import React, { PropTypes } from 'react';

import HakeSirkelIkon from 'ffe-icons-react/hake-sirkel-ikon';

import Base from './base';

export default function SystemSuccessMessage({ children }) {
    return (
        <Base modifier="success" icon={<HakeSirkelIkon />}>
            {children}
        </Base>
    );
}

SystemSuccessMessage.propTypes = {
    children: PropTypes.node.isRequired,
};
