import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

export default function SectionWrapper(props) {
    const {
        bgBlue,
        bgBlueFlat,
        bgGrey,
        bgSand,
        children,
        className,
        ...rest
    } = props;
    return (
        <div
            className={classNames(
                'ffe-section-wrapper',
                { 'ffe-section-wrapper--bg-blue': bgBlue },
                { 'ffe-section-wrapper--bg-blue-flat': bgBlueFlat },
                { 'ffe-section-wrapper--bg-grey': bgGrey },
                { 'ffe-section-wrapper--bg-sand': bgSand },
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}

SectionWrapper.propTypes = {
    bgBlue: bool,
    bgBlueFlat: bool,
    bgGrey: bool,
    bgSand: bool,
    children: node.isRequired,
    className: string,
};
