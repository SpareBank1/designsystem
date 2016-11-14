import React, { PropTypes } from 'react';
import InfoIcon from 'ffe-icons-react/info-ikon';
import Base from './base';

export default function ContextInfoMessage({ style, children, header, icon, onClose, locale }) {
    return (
        <Base
            messageType="info"
            locale={locale}
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
    locale : PropTypes.oneOf(['nb', 'ny', 'en']).isRequired,
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
