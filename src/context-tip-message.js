import React, {PropTypes} from 'react';
import InfoCircleIcon from 'ffe-icons-react/info-sirkel-ikon';
import Base from './base';

export default function ContextTipMessage({style, children, icon, closeDurationMs, onCloseStart, onCloseEnd}) {
    return (
        <Base
            messageType='tip'
            icon={icon}
            style={style}
            closeDurationMs={closeDurationMs}
            onCloseStart={onCloseStart}
            onCloseEnd={onCloseEnd}
        >
            {children}
        </Base>
    );
}

ContextTipMessage.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    closeDurationMs: PropTypes.number,
};

ContextTipMessage.defaultProps = {
    icon: <InfoCircleIcon />,
    closeDurationMs: 50,
    onCloseStart: ()=> {
    },
    onCloseEnd: ()=> {
    },
};
