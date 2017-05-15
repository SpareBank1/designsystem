import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

export default function ContentContainer(props) {
    const {
        bgGrey,
        bgSand,
        children,
        className,
        large,
        small,
        textLeft,
        noSpace,
        ...rest
    } = props;
    return (
        <div
            className={classNames(
                'ffe-content-container',
                { 'ffe-content-container--sm': small },
                { 'ffe-content-container--lg': large },
                { 'ffe-content-container--text-left': textLeft },
                { 'ffe-content-container--no-space': noSpace },
                { 'ffe-content-container--bg-grey': bgGrey },
                { 'ffe-content-container--bg-sand': bgSand },
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}

ContentContainer.propTypes = {
    bgGrey: bool,
    bgSand: bool,
    children: node.isRequired,
    className: string,
    large: bool,
    noSpace: bool,
    small: bool,
    textLeft: bool,
};
