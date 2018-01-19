import React from 'react';
import { array } from 'prop-types';

export default function BulletList({ children }) {
    return  <ul className="ffe-bullet-list">
                {children}
            </ul>;
}

BulletList.propTypes = {
    children: array.isRequired,
};
