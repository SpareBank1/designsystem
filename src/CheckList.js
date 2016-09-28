import React from 'react';

export default function CheckList({ children }) {
    return  <ul className="ffe-check-list">
                {children}
            </ul>;
}

CheckList.propTypes = {
    children: React.PropTypes.array.isRequired,
};