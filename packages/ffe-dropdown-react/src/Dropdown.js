import React from 'react';
import { bool, node, string, object, func, shape, oneOfType } from 'prop-types';
import classNames from 'classnames';

const Dropdown = props => {
    const { className, inline, innerRef, ...rest } = props;

    return (
        <select
            className={classNames(
                'ffe-dropdown',
                { 'ffe-dropdown--inline': inline },
                className,
            )}
            ref={innerRef}
            {...rest}
        />
    );
};

Dropdown.propTypes = {
    children: node,
    inline: bool,
    className: string,
    /** Ref-setting function, or ref created by useRef, passed to the select element */
    innerRef: oneOfType([func, shape({ current: object })]),
};

export default Dropdown;
