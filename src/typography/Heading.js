import React from 'react';
import classNames from 'classnames';

import { bool, oneOf, node, string } from 'prop-types';

function Heading(props) {
    const {
        children,
        className,
        error,
        noMargin,
        withBorder,
        lookLike,
        level,
        ...rest
    } = props;

    const H = `h${level}`;
    const headingClass = `ffe-h${lookLike ? lookLike : level}`;

    return (
        <H
            className={classNames(
                headingClass,
                [`${headingClass}--error`]: error,
                [`${headingClass}--no-margin`]: noMargin,
                [`${headingClass}--with-border`]: withBorder,
                className
            )}
            {...rest}
        >
            {children}
        </H>
    );
}

Heading.propTypes = {
    children: node.isRequired,
    className: string,
    error: bool,
    lookLike: oneOf([1, 2, 3, 4, 5, 6]),
    level: oneOf([1, 2, 3, 4, 5, 6]),
    noMargin: bool,
    withBorder: bool,
};

export const Heading1 = props => <Heading level={1} {...props} />;
export const Heading2 = props => <Heading level={2} {...props} />;
export const Heading3 = props => <Heading level={3} {...props} />;
export const Heading4 = props => <Heading level={4} {...props} />;
export const Heading5 = props => <Heading level={5} {...props} />;
export const Heading6 = props => <Heading level={6} {...props} />;
