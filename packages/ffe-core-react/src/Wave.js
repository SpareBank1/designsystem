import React from 'react';
import { string, bool, oneOf, node } from 'prop-types';
import classNames from 'classnames';

export default function Wave(props) {
    const {
        position,
        flip,
        color,
        darkmodeColor,
        bgColor,
        bgDarkmodeColor,
        children,
        className,
        ...rest
    } = props;

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

Wave.propTypes = {
    /** Adds additional class */
    className: string,
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
    /** Set the background color of the wave container. Accepts ffe-color variables without the "ffe-farge-" bit of the name. */
    bgColor: oneOf([
        'hvit',
        'frost-30',
        'sand-30',
        'sand-70',
        'syrin-30',
        'syrin-70',
        'vann',
        'vann-30',
        'fjell',
    ]),
    /** Set the wave color in darkmode */
    darkmodeColor: oneOf(['svart', 'natt']),
    /** Set the background color of wave container in darkmode */
    bgDarkmodeColor: oneOf(['svart', 'natt']),
    children: node,
};
