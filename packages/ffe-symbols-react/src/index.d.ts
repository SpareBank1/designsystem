import * as React from 'react';
import { SymbolName } from './symbolNames.ts';

export interface SymbolProps {
    fill?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    weight?: 300 | 400 | 500;
    icon: SymbolName;
    className?: string;
    ariaLabel?: string;
}

declare class Symbol extends React.Component<SymbolProps, any> {}

export default Symbol;
