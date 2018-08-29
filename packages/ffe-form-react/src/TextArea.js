import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

const TextArea = forwardRef((props, ref) => {
    const { className, ...rest } = props;
    return (
        <textarea
            className={classNames('ffe-textarea', className)}
            {...rest}
            ref={ref}
        />
    );
});

TextArea.propTypes = {
    className: string,
};

export default TextArea;
