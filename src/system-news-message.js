import React from 'react';
import { node, object } from 'prop-types';

import InfoSirkelIkon from 'ffe-icons-react/info-sirkel-ikon';

import Base from './base';

export default function SystemNewsMessage({ style, children, ...rest }) {
    return (
        <Base
            modifier="news"
            icon={<InfoSirkelIkon />}
            style={style}
            {...rest}
        >
            {children}
        </Base>
    );
}

SystemNewsMessage.propTypes = {
    children: node.isRequired,
    style: object,
};
