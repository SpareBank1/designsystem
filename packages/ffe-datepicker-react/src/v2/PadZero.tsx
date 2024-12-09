import React from 'react';

interface Props {
    value: number;
}

export const PadZero: React.FC<Props> = ({ value }) => {
    if (value < 10) {
        return `0${value}`;
    }
    return value;
};
