import React from 'react';
import Icon from 'ffe-icons-react/lyspare-ikon';
import MessageBox from './message-box';

const iconStyles = {
    width: '40px',
    height: '40px'
};

const TipsMessage = ({ title, content, style, className, children }) => MessageBox({
    type: 'tips',
    icon: <Icon style={ iconStyles }/>,
    title,
    content,
    style,
    className,
    children
});

export default TipsMessage;
