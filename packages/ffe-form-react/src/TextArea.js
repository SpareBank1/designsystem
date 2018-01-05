import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

const TextArea = ({
    className,
    ...rest
}) => {
    return (
        <textarea
            className={ classNames('ffe-textarea', className) }
            { ...rest }
        />
    );
};

TextArea.propTypes = {
    className: string
};

export default TextArea;
