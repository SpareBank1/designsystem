import React from 'react';
import Icon from 'ffe-icons-react/info-sirkel-ikon';
import MessageBox from './message-box';

const iconStyles = { 
    width: '40px', 
    height: '40px'
};

export default ({ title, content, children }) => MessageBox({
    type: 'info',
    icon: <Icon style={ iconStyles } />,
    title,
    content,
    children
});