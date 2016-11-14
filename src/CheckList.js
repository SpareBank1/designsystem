import React from 'react';

export default function CheckList({ children, className = '' }) {
    return  <ul className={`ffe-check-list ${className}`}>
                {children}
            </ul>;
}

CheckList.propTypes = {
    children: React.PropTypes.array.isRequired,
    className: React.PropTypes.string,
};