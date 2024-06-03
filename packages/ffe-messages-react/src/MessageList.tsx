import React from 'react';

export interface InfoMessageListItemProps {
    children: NonNullable<React.ReactNode>;
}

export const MessageListItem: React.FC<InfoMessageListItemProps> = ({
    children,
}) => <li>{children}</li>;

export interface InfoMessageListProps {
    children: NonNullable<React.ReactNode>;
}

export const MessageList: React.FC<InfoMessageListProps> = ({ children }) => (
    <ul className="ffe-message__list">{children}</ul>
);
