import React, {PropTypes} from 'react';
import InfoCircleIcon from 'ffe-icons-react/info-sirkel-ikon';
import Base from './base';

export default function ContextInfoMessage({style, children, icon, closeDurationMs, onCloseStart, onCloseEnd}) {
    return (
        <Base
            messageType='info'
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

ContextInfoMessage.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    closeDurationMs: PropTypes.number,
    onCloseStart: PropTypes.func.isRequired,
    onCloseEnd: PropTypes.func.isRequired,
};

ContextInfoMessage.defaultProps = {
    icon: <InfoCircleIcon />,
    closeDurationMs: 50,
    onCloseStart: ()=> {
    },
    onCloseEnd: ()=> {
    },
};
