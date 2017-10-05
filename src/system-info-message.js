import React from 'react';
import { node, object } from 'prop-types';

import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import Base from './base';

export default function SystemInfoMessage({ style, children, ...rest }) {
    return (
        <Base
            modifier="info"
            icon={<InfoSirkelIkon />}
            style={style}
            {...rest}
        >
            {children}
        </Base>
    );
}

SystemInfoMessage.propTypes = {
    children: node.isRequired,
    style: object,
};
