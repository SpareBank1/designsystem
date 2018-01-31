import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function HeadingRenderer({ classes, level, children, ...props }) {
    const Tag = `h${level}`;
    const headingClasses = classes;

    return (
        <Tag {...props} className={classNames(headingClasses, `ffe-h${level}`)}>
            {children}
        </Tag>
    );
}

HeadingRenderer.propTypes = {
    classes: PropTypes.object,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children: PropTypes.node,
};

export default HeadingRenderer;
