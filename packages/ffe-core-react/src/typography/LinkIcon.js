import React from 'react';
import { func, node, oneOfType, string, elementType } from 'prop-types';
import classNames from 'classnames';

const LinkIcon = props => {
    const { className, element: Element, ...rest } = props;

    return (
        <Element className={classNames('ffe-link-icon', className)} {...rest} />
    );
};

LinkIcon.defaultProps = {
    element: 'a',
};

LinkIcon.propTypes = {
    children: node.isRequired,
    className: string,
    /** The rendered element, like a `react-router` `<Link />` */
    element: oneOfType([func, string, elementType]),
};

export default LinkIcon;
