import React from 'react';

export interface InfoMessageListItemProps {
    href: string;
    children: NonNullable<React.ReactNode>;
}

export const InfoMessageListItem: React.FC<InfoMessageListItemProps> = ({
    children,
    href,
}) => (
    <li>
        {href ? (
            <a href={href} className="ffe-message-box__link">
                {children}
            </a>
        ) : (
            children
        )}
    </li>
);

export interface InfoMessageListProps {
    children: NonNullable<React.ReactNode>;
}

export const InfoMessageList: React.FC<InfoMessageListProps> = ({
    children,
}) => <ul className="ffe-message-box__list">{children}</ul>;
