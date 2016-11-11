import React, { PropTypes } from 'react';
import InfoIcon from 'ffe-icons-react/info-ikon';
import Base from './base';

export default function ContextInfoMessage({ style, children, header, icon, onClose }) {
    return (
        <Base
            messageType="info"
            icon={icon}
            header={header}
            style={style}
            onCloseed={onClose}
        >
            {children}
        </Base>
    );
}

ContextInfoMessage.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
    icon: PropTypes.element,
};

ContextInfoMessage.defaultProps = {
    icon: <InfoIcon />,
    onClose: () => {
    },
};
