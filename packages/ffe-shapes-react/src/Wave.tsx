import React from 'react';
import classNames from 'classnames';

type Color = 'default' | 'subtle';

export interface WaveProps {
    /** Sets the mask-position property, setting a px/rem value will move the starting position of the wave */
    position?: string;
    /** Rotate the wave 180 degrees :*/
    flip?: boolean;
    /** Set the background color of the wave container. */
    bgColor?: Color;
    //** Hide the wave in dark mode */
    hideInDarkMode?: boolean;
    /** Adds additional class */
    className?: string;
    children?: React.ReactNode;
}

export function Wave({
    position,
    flip,
    bgColor = 'default',
    hideInDarkMode = false,
    children,
    className,
    ...rest
}: WaveProps) {
    return (
        <div
            className={classNames(
                'ffe-wave',
                className,
                { 'ffe-wave--hide-in-dark-mode': hideInDarkMode },
                {
                    [`ffe-wave--bg-${bgColor}`]:
                        bgColor && bgColor !== 'default',
                },
            )}
        >
            {children ? (
                <div className="ffe-wave__content">{children}</div>
            ) : null}
            <div
                className={classNames('ffe-wave__wave', 'ffe-accent-mode', {
                    'ffe-wave__wave--flip': flip,
                })}
                aria-hidden="true"
                style={{
                    maskPosition: position,
                    WebkitMaskPosition: position,
                }}
                {...rest}
            />
        </div>
    );
}
