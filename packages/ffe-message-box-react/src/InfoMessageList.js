import React from 'react';
import { string, node } from 'prop-types';

export const InfoMessageListItem = props => (
    <li>
        {props.href && (
            <a href={props.href} className="ffe-message-box__link">
                {props.children}
            </a>
        )}
        {!props.href && props.children}
    </li>
);
InfoMessageListItem.propTypes = {
    href: string,
    children: string.isRequired,
};

export const InfoMessageList = props => (
    <ul className="ffe-message-box__list">{props.children}</ul>
);

InfoMessageList.propTypes = {
    children: node.isRequired,
};
