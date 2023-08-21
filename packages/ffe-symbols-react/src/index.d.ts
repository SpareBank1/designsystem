export interface SymbolProps {
    fill?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    weight?: 300 | 400 | 500 | 600;
    color?: string;
    children: string;
    className?: string;
    ariaLabel: string;
}