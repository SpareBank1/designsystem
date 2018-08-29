import React, { forwardRef } from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

const Input = forwardRef((props, ref) => {
    const { className, inline, textLike, ...rest } = props;
    return (
        <input
            className={classNames(
                'ffe-input-field',
                { 'ffe-input-field--inline': inline },
                { 'ffe-input-field--text-like': textLike },
                className,
            )}
            {...rest}
            ref={ref}
        />
    );
});

Input.propTypes = {
    className: string,
    /** Input fields default to `display: block;`. Set this to `true` to apply the inline modifier. */
    inline: bool,
    /** Apply the text-like modifier by setting this to `true`. */
    textLike: bool,
};

export default Input;
