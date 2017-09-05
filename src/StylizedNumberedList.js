import React from 'react';
import { array } from 'prop-types';

export default function StylizedNumberedList({ children }) {
    return  <ol className="ffe-stylized-numbered-list">
                {children}
            </ol>;
}

StylizedNumberedList.propTypes = {
    children: array.isRequired,
};
