import React from 'react';
import { string, bool } from 'prop-types';
import classNames from 'classnames';

const TextArea = React.forwardRef((props, ref) => {
    const { className, dark, ...rest } = props;
    return (
        <textarea
            className={classNames(
                'ffe-textarea',
                { 'ffe-textarea--dark': dark },
                className,
            )}
            ref={ref}
            {...rest}
        />
    );
});

TextArea.propTypes = {
    className: string,
    /** Dark variant */
    dark: bool,
};

TextArea.defaultProps = {
    dark: false,
};

export default TextArea;
