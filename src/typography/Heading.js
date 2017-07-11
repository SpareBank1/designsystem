import React from 'react';
import classNames from 'classnames';

import { bool, oneOf, node, string } from 'prop-types';

const makeHeading = level => {
    const Heading = (props) => {
        const {
            children,
            className,
            error,
            noMargin,
            withBorder,
            lookLike,
            ...rest
        } = props;

        const H = `h${level}`;
        const headingClass = `ffe-h${lookLike ? lookLike : level}`;

        return (
            <H
                {...rest}
                className={classNames(
                    headingClass,
                    { [`${headingClass}--error`]: error },
                    { [`${headingClass}--no-margin`]: noMargin },
                    { [`${headingClass}--with-border`]: withBorder },
                    className
                )}
            >
                {children}
            </H>
        );
    };

    Heading.propTypes = {
        children: node.isRequired,
        className: string,
        error: bool,
        lookLike: oneOf([1, 2, 3, 4, 5, 6]),
        noMargin: bool,
        withBorder: bool,
    };

    return Heading;
};

export const Heading1 = makeHeading(1);
export const Heading2 = makeHeading(2);
export const Heading3 = makeHeading(3);
export const Heading4 = makeHeading(4);
export const Heading5 = makeHeading(5);
export const Heading6 = makeHeading(6);
