import React from 'react';
import { Grid } from '@sb1/ffe-grid-react';

export interface DetailListProps {
    /**
     * A set of `Detail` components where each will be rendered as a row item
     */
    children: React.ReactNode;
}

export const DetailList: React.FC<DetailListProps> = ({ children }) => {
    return <Grid>{children}</Grid>;
};
