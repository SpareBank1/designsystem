import React from 'react';
import classNames from 'classnames';

export interface IconProps extends React.ComponentPropsWithoutRef<'span'> {
    /** The path to the svg-file og base64 string */
    fileUrl: string;
    /** Size of the icon, default is the closest defined font-size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Symbols stroke weight. This can affect overall size of symbol, 400 is default */
    weight?: 300 | 500;
    /** Aria label text. If null/undefined, aria-hidden is automatically set to true */
    ariaLabel?: React.ComponentProps<'span'>['aria-label'];
}

export const Icon: React.FC<IconProps> = ({
    fileUrl,
    className,
    ariaLabel,
    size = 'md',
    style,
    ...rest
}) => {
    return (
        <span
            role="img"
            aria-label={ariaLabel}
            aria-hidden={!ariaLabel}
            className={classNames('ffe-icons', `ffe-icons--${size}`, className)}
            style={{
                maskImage: `url(${fileUrl})`,
                WebkitMaskImage: `url(${fileUrl})`,
                ...style,
            }}
            {...rest}
        />
    );
};
