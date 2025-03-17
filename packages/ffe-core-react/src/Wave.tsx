import React from 'react';
import classNames from 'classnames';

type Color =
    | 'hvit'
    | 'frost-30'
    | 'sand-30'
    | 'sand-70'
    | 'syrin-30'
    | 'syrin-70'
    | 'vann'
    | 'vann-30'
    | 'fjell';

type ColorDarkMode = 'svart' | 'natt';

export interface WaveProps {
    /** Adds additional class */
    className?: string;
    /** Sets the mask-position property, setting a px/rem value will move the starting position of the wave */
    position?: string;
    /** Rotate the wave 180 degrees :*/
    flip?: boolean;
    /** Sets the color of the wave. Accepts ffe-color variables without the "ffe-farge-" bit of the name. */
    color: Color;
    /** Set the background color of the wave container. Accepts ffe-color variables without the "ffe-farge-" bit of the name. */
    bgColor?: Color;
    /** Set the wave color in darkmode */
    darkmodeColor?: ColorDarkMode;
    /** Set the background color of wave container in darkmode */
    bgDarkmodeColor?: ColorDarkMode;
    children?: React.ReactNode;
}

/**
 * @deprecated Use the Wave component in `ffe-shapes-react` instead.
 */
export function Wave({
    position,
    flip,
    color,
    darkmodeColor,
    bgColor,
    bgDarkmodeColor,
    children,
    className,
    ...rest
}: WaveProps) {
    return (
        <div
            className={classNames('ffe-wave', className, {
                [`ffe-wave--bg-${bgColor}`]: bgColor,
                [`ffe-wave--dm-bg-${bgDarkmodeColor}`]: bgDarkmodeColor,
            })}
        >
            {children ? (
                <div className="ffe-wave__content">{children}</div>
            ) : null}
            <div
                className={classNames(
                    'ffe-wave__wave',
                    `ffe-wave--bg-${color}`,
                    {
                        [`ffe-wave--dm-bg-${darkmodeColor}`]: darkmodeColor,
                        'ffe-wave__wave--flip': flip,
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
