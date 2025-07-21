import React from 'react';
import classNames from 'classnames';

export interface ProgressbarProps
    extends React.ProgressHTMLAttributes<HTMLProgressElement> {
    green?: boolean;
}

export const Progressbar: React.FC<ProgressbarProps> = ({
    green = false,
    className,
    ...props
}) => {
    return (
        <progress
            className={classNames(
                'ffe-progressbar',
                {
                    'ffe-progressbar--theme-green': green,
                },
                className,
            )}
            {...props}
        ></progress>
    );
};
