import React from 'react';
import Icon from 'ffe-icons-react/hake-ikon';
import MessageBox from './message-box';

const iconStyles = {
    width: '40px',
    height: '40px'
};

const SuccessMessage = ({ title, content, style, children }) => MessageBox({
    type: 'success',
    icon: <Icon style={ iconStyles }/>,
    title,
    content,
    style,
    children
});

export default SuccessMessage;
