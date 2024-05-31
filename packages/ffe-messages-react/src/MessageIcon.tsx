import React from 'react';

export interface MessageIconProps {
    iconFileUrl?: string;
}

export const MessageIcon: React.FC<MessageIconProps> = ({ iconFileUrl }) => {
    return (
        <div className="ffe-message__icon-container">
            <div
                className="ffe-message__icon"
                style={
                    iconFileUrl
                        ? {
                              maskImage: `url(${iconFileUrl})`,
                              WebkitMaskImage: `url(${iconFileUrl})`,
                          }
                        : undefined
                }
            />
        </div>
    );
};
