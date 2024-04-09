import * as React from 'react';

export interface CollapseProps extends React.ComponentProps<'div'> {
    isOpen: boolean;
    onRest?: () => void;
}

declare class Collapse extends React.Component<CollapseProps, any> {}

export { Collapse };
