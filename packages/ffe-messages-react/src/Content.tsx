import React from 'react';

export const Content: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <div className="ffe-message__content">{children}</div>;
};
