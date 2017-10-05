import React from 'react';
import { node, object } from 'prop-types';

import HakeSirkelIkon from 'ffe-icons-react/hake-sirkel-ikon';

import Base from './base';

export default function SystemSuccessMessage({ style, children, ...rest }) {
    return (
        <Base
            modifier="success"
            icon={<HakeSirkelIkon />}
            style={style}
            {...rest}
        >
            {children}
        </Base>
    );
}

SystemSuccessMessage.propTypes = {
    children: node.isRequired,
    style: object,
};
