import React from 'react';
import classnames from 'classnames';

export const ModalBlock: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
    className,
    ...rest
}) => {
    return (
        <div className={classnames('ffe-modal__block', className)} {...rest} />
    );
};
