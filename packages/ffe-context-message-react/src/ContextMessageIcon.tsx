import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

export const ContextMessageIcon: React.FC<{
    smallIconUrl: string;
    largeIconUrl: string;
}> = ({ smallIconUrl, largeIconUrl }) => {
    return (
        <>
            <Icon
                fileUrl={smallIconUrl}
                className="ffe-context-message-content__icon-span ffe-context-message-content__icon-span--small"
                size="sm"
            />
            <Icon
                fileUrl={largeIconUrl}
                className="ffe-context-message-content__icon-span ffe-context-message-content__icon-span--large"
                size="lg"
            />
        </>
    );
};
