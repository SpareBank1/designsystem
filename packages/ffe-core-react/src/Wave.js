import React from 'react';
import { string, bool, oneOf, node } from 'prop-types';
import classNames from 'classnames';

export default function Wave(props) {
    const {
        waveHeight,
        position,
        flip,
        color,
        darkmodeColor,
        children,
        ...rest
    } = props;

    return (
        <div
            className={classNames(
                'ffe-wave',
                `ffe-wave--${waveHeight}`,
                `ffe-wave--bg-${color}`,
                {
                    [`ffe-wave--dm-bg-${darkmodeColor}`]: darkmodeColor,
                    'ffe-wave--flip': flip,
                },
            )}
        >
            {children ? (
                <div className="ffe-wave__content">{children}</div>
            ) : null}
            <div
                className="ffe-wave__wave"
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

Wave.propTypes = {
    /** Choose between small, medium and large intensity of the wave */
    waveHeight: oneOf(['small', 'medium', 'large']).isRequired,
    /** Sets the mask-position property, setting a px/rem value will move the starting position of the wave */
    position: string,
    /** Rotate the wave 180 degrees :*/
    flip: bool,
    /** Sets the color of the wave. Accepts ffe-color variables without the "ffe-farge-" bit of the name. */
    color: oneOf([
        'hvit',
        'frost-30',
        'sand-30',
        'sand-70',
        'syrin-30',
        'syrin-70',
        'vann',
        'vann-30',
        'fjell',
    ]).isRequired,
    /** Set the background color in darkmode */
    darkmodeColor: oneOf(['svart', 'natt']),
    children: node,
};
