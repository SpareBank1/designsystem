import React from 'react';
import { bool, string, node } from 'prop-types';
import classNames from 'classnames';

const DescriptionList = ({ medium, large, className, horizontal, ...rest }) => (
    <dl
        className={classNames(
            'ffe-description-list',
            { 'ffe-description-list--horizontal': horizontal },
            { 'ffe-description-list--md': medium },
            { 'ffe-description-list--lg': large },
            className,
        )}
        {...rest}
    />
);

DescriptionList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
    /** Medium list. Can't be used with `large` prop */
    medium: bool,
    /** Large list. Can't be used with `medium` prop */
    large: bool,
    /** Displays dts and dds inline*/
    horizontal: bool,
};

export default DescriptionList;
