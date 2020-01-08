import * as React from 'react';

export interface DropdownProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    className?: string;
    inline?: boolean;
    dark?: boolean;
    innerRef?: React.RefObject<T>;
}

declare class Dropdown extends React.Component<DropdownProps, any> {}

export default Dropdown;
