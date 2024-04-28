import React from 'react';
import { bool, func, node, oneOfType, string, elementType } from 'prop-types';
import classNames from 'classnames';

const LinkText = props => {
    const {
        className,
        element: Element = 'a',
        underline = true,
        ...rest
    } = props;

    return (
        <Element
            className={classNames(
                'ffe-link-text',
                { 'ffe-link-text--no-underline': !underline },
                className,
            )}
            {...rest}
        />
    );
};

LinkText.propTypes = {
    children: node.isRequired,
    className: string,
    /** The rendered element, like a `react-router` `<Link />` */
    element: oneOfType([func, string, elementType]),
    underline: bool,
};

export default LinkText;
