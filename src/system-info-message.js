import React, { PropTypes } from 'react';

import Base from './base';

export default function SystemInfoMessage({ children, header }) {
    return (
        <Base header={header} modifier="info">
            {children}
        </Base>
    );
}

SystemInfoMessage.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
};
