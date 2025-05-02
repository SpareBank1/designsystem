import React from 'react';
import classNames from 'classnames';
import { SymbolName } from './symbolNames.js';

export interface SymbolProps extends React.ComponentPropsWithoutRef<'span'> {
    /**  Fills the icon with color */
    fill?: boolean;
    /** The name of the icon that should be shown */
    icon: SymbolName;
    /** Size of the icon, default is the closest defined font-size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Symbols stroke weight. This can affect overall size of symbol, 400 is default */
    weight?: 300 | 500;
    /** Aria label text. If null/undefined, aria-hidden is automatically set to true */
    ariaLabel?: React.ComponentProps<'span'>['aria-label'] | null;
}

export const Symbol: React.FC<SymbolProps> = ({
    className,
    size,
    weight = 300,
    fill = false,
    ariaLabel,
    icon,
    ...rest
}) => {
    return (
        <span
            className={classNames(
                'ffe-symbol',
                fill ? `ffe-symbol--filled-${weight}` : `ffe-symbol--${weight}`,
                size && `ffe-symbol--${size}`,
                className,
            )}
            role="graphics-symbol img"
            aria-label={ariaLabel ?? undefined}
            aria-hidden={!ariaLabel}
            {...rest}
        >
            {icon}
        </span>
    );
};
