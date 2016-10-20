import React from 'react';

export default function StylizedNumberedList({ children }) {
    return  <ol className="ffe-stylized-numbered-list">
                {children}
            </ol>;
}

StylizedNumberedList.propTypes = {
    children: React.PropTypes.array.isRequired,
};