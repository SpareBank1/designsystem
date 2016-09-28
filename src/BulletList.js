import React from 'react';

export default function BulletList({ children }) {
    return  <ul className="ffe-bullet-list">
                {children}
            </ul>;
}

BulletList.propTypes = {
    children: React.PropTypes.array.isRequired,
};