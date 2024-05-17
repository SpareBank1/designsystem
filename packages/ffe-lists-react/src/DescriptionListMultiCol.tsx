import React from 'react';
import classNames from 'classnames';

export interface DescriptionListMultiColProps
    extends React.ComponentPropsWithoutRef<'dl'> {}

export const DescriptionListMultiCol: React.FC<
    DescriptionListMultiColProps
> = ({ children, className, ...rest }) => {
    const pairs: React.ReactNode[][] = [];

    React.Children.forEach(children, (child, i) => {
        const j = i % 2;
        if (j === 0) {
            pairs.push([]);
        }
        pairs[Math.floor(i / 2)][j] = child;
    });

    return (
        <dl
            className={classNames('ffe-description-list-multicol', className)}
            {...rest}
        >
            {pairs.map((pair, idx) => (
                <div
                    className="ffe-description-list-multicol__avoid-break"
                    key={idx}
                >
                    {pair[0]}
                    {pair[1]}
                </div>
            ))}
        </dl>
    );
};
