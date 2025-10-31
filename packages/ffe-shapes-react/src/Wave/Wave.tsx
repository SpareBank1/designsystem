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
    /** Adds additional class */
    className?: string;
    children?: React.ReactNode;
}

export function Wave({
    position,
    flip,
    bgColor = 'default',
    children,
    className,
    ...rest
}: WaveProps) {
    return (
        <div
            className={classNames(
                'ffe-wave',
                className,
                { 'ffe-accent-mode': flip },
                { 'ffe-default-mode': !flip },
                {
                    [`ffe-wave--bg-${bgColor}`]:
                        bgColor && bgColor !== 'default' && !flip,
                },
            )}
        >
            {children ? (
                <div className="ffe-wave__content">{children}</div>
            ) : null}
            <div
                className={classNames(
                    'ffe-wave__wave',
                    { 'ffe-accent-mode': !flip },
                    { 'ffe-default-mode': flip },
                    {
                        [`ffe-wave__wave--bg-${bgColor}`]:
                            bgColor && bgColor !== 'default' && flip,
                    },
                )}
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
