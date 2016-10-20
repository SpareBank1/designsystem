import React from 'react';

export default function NumberedList({ children }) {
    return  <ol className="ffe-numbered-list">
                {children}
            </ol>;
}

NumberedList.propTypes = {
    children: React.PropTypes.array.isRequired,
};