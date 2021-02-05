import * as React from 'react';

export interface CollapseProps extends React.HTMLProps<HTMLDivElement> {
    isOpen: boolean;
    onRest?: () => void;
}

declare class Collapse extends React.Component<CollapseProps, any> {}
