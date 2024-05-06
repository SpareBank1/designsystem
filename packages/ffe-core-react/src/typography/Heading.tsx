import React from 'react';
import classNames from 'classnames';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends React.ComponentProps<'header'> {
    error?: boolean;
    inline?: boolean;
    lookLike?: HeadingLevel;
    noMargin?: boolean;
    withBorder?: boolean;
    textCenter?: boolean;
}

const Heading = React.forwardRef<
    HTMLHeadingElement,
    HeadingProps & { level: HeadingLevel }
>(
    (
        {
            children,
            className,
            error,
            inline,
            noMargin,
            withBorder,
            lookLike,
            textCenter,
            level,
            ...rest
        },
        ref,
    ) => {
        const headingClass = `ffe-h${lookLike ? lookLike : level}`;

        return React.createElement(
            `h${level}`,
            {
                ...rest,
                ref,
                className: classNames(
                    headingClass,
                    { [`${headingClass}--error`]: error },
                    { [`${headingClass}--inline`]: inline },
                    { [`${headingClass}--no-margin`]: noMargin },
                    { [`${headingClass}--with-border`]: withBorder },
                    { [`${headingClass}--text-center`]: textCenter },
                    className,
                ),
            },
            children,
        );
    },
);

export const Heading1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props, ref) => <Heading {...props} ref={ref} level={1} />,
);

export const Heading2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props, ref) => <Heading {...props} ref={ref} level={2} />,
);

export const Heading3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props, ref) => <Heading {...props} ref={ref} level={3} />,
);

export const Heading4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props, ref) => <Heading {...props} ref={ref} level={4} />,
);

export const Heading5 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props, ref) => <Heading {...props} ref={ref} level={5} />,
);
export const Heading6 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props, ref) => <Heading {...props} ref={ref} level={6} />,
);
