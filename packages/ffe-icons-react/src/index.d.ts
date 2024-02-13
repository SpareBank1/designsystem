import * as React from 'react';

export interface IconProps {
    fileUrl: string;
    className?: string;
    ariaLabel?: string;
    size: 'sm' | 'md' | 'lg' | 'xl';
}

declare class Icon extends React.Component<IconProps, any> {}

export { Icon };
