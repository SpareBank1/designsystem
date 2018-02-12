import React from 'react';
import PropTypes from 'prop-types';

export function ToolbarButtonRenderer({ onClick, href, title, children }) {
    if (href !== undefined) {
        return (
            <a href={href} title={title} className="sb1ds-toolbar-button">
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            title={title}
            className="sb1ds-toolbar-button"
        >
            {children}
        </button>
    );
}

ToolbarButtonRenderer.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.node,
};

export default ToolbarButtonRenderer;
