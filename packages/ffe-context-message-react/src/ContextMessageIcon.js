import React from 'react';
import { string } from 'prop-types';
import { Icon } from '@sb1/ffe-icons-react';

export const ContextMessageIcon = ({ smallIconUrl, largeIconUrl }) => {
    return (
        <>
            <Icon
                ariaLabel="Utropstegn"
                fileUrl={smallIconUrl}
                className="ffe-context-message-content__icon-span ffe-context-message-content__icon-span--small"
                size="sm"
            />
            <Icon
                ariaLabel="Utropstegn"
                fileUrl={largeIconUrl}
                className="ffe-context-message-content__icon-span ffe-context-message-content__icon-span--large"
                size="lg"
            />
        </>
    );
};

ContextMessageIcon.propTypes = {
    smallIconUrl: string.isRequired,
    largeIconUrl: string.isRequired,
    ariaLabel: string.isRequired,
};
