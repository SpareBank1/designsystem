import React from 'react';
import classNames from 'classnames';

export interface ProgressbarProps
    extends React.ProgressHTMLAttributes<HTMLProgressElement> {
    success?: boolean;
}

export const Progressbar: React.FC<ProgressbarProps> = ({
    success = false,
    className,
    ...props
}) => {
    return (
        <progress
            className={classNames(
                'ffe-progressbar',
                {
                    'ffe-progressbar--theme-success': success,
                },
                className,
            )}
            {...props}
        ></progress>
    );
};
