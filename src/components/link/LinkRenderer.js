import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function LinkRenderer({ classes, children, ...props }) {
    return (
        <a
            {...props}
            className={classNames(
                'ffe-link-text',
                'ffe-link-text--no-underline',
                props.className,
            )}
        >
            {children}
        </a>
    );
}

LinkRenderer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
};

export default LinkRenderer;
