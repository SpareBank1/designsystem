import React from 'react';
import {
    bool,
    string
} from 'prop-types';
import classNames from 'classnames';

const Input = ({
    className,
    inline,
    textLike,
    ...rest
}) => {
    return (
        <input
            className={ classNames(
                'ffe-input-field',
                { 'ffe-input-field--inline': inline },
                { 'ffe-input-field--text-like': textLike },
                className
            ) }
            { ...rest }
        />
    );
};

Input.propTypes = {
    className: string,
    inline: bool,
    textLike: bool
};

export default Input;
