import * as React from 'react';

export interface DropdownProps extends React.ComponentProps<'select'> {
    children?: React.ReactNode;
    className?: string;
    inline?: boolean;
    innerRef?: React.Ref<HTMLSelectElement>;
}

declare class Dropdown extends React.Component<DropdownProps, any> {}

export default Dropdown;
