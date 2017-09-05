import React from 'react';
import { array } from 'prop-types';

export default function NumberedList({ children }) {
    return  <ol className="ffe-numbered-list">
                {children}
            </ol>;
}

NumberedList.propTypes = {
    children: array.isRequired,
};
