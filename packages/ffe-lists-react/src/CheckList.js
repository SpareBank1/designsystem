import React from 'react';
import { array, string } from 'prop-types';

export default function CheckList({ children, className = '' }) {
    return  <ul className={`ffe-check-list ${className}`}>
                {children}
            </ul>;
}

CheckList.propTypes = {
    children: array.isRequired,
    className: string,
};
