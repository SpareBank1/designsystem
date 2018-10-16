import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

const TextArea = React.forwardRef((props, ref) => {
    const { className, ...rest } = props;
    return (
        <textarea
            className={classNames('ffe-textarea', className)}
            ref={ref}
            {...rest}
        />
    );
});

TextArea.propTypes = {
    className: string,
};

export default TextArea;
