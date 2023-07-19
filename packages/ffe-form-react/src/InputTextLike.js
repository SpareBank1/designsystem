import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

const InputTextLike = React.forwardRef((props, ref) => {
    const { className, ariaLabel, ...rest } = props;
    return (
        <input
            className={classNames(
                'ffe-input-field',
                'ffe-input-field--text-like',
                className,
            )}
            aria-label={ariaLabel}
            ref={ref}
            {...rest}
        />
    );
});

InputTextLike.propTypes = {
    ariaLabel: string.isRequired,
    className: string,
};

export default InputTextLike;
