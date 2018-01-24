import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function LinkRenderer({ children, noUnderline, ...props }) {
    return (
        <a
            {...props}
            className={classNames(
                'ffe-link-text',
                { 'ffe-link-text--no-underline': noUnderline },
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
    noUnderline: PropTypes.bool,
};

export default LinkRenderer;
