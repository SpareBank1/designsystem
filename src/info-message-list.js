import React from 'react';
import PropTypes from 'prop-types';

export const InfoMessageListItem = (props) => (
    <li>
        {props.href && <a href={props.href} className="ffe-message-box__link">{props.children}</a>}
        {!props.href && props.children}
    </li>
);

export const InfoMessageList = (props) => (
    <ul className='ffe-message-box__list'>
        {props.children}
    </ul>
);

InfoMessageList.propTypes = {
    children: PropTypes.node.isRequired,
};

InfoMessageListItem.propTypes = {
    href: PropTypes.string,
    children: PropTypes.string.isRequired,
};
