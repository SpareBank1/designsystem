import React from 'react';
import { GridCol, GridRow } from '@sb1/ffe-grid-react';

export interface DetailProps {
    /**
     * A set of `DetailsContent` components to render for this row
     */
    children: React.ReactNode;
    /**
     * A label for the data
     */
    label: string;
}

export const Detail: React.FC<DetailProps> = ({ children, label }) => {
    const childCount = React.Children.count(children);

    return (
        <>
            <GridRow>
                <GridCol
                    sm={12}
                    md={{ cols: 8, offset: 2 }}
                    lg={{ cols: 2, offset: 2 }}
                    className="ffe-details-list-react__content"
                >
                    <div className="ffe-h6 ffe-h6--no-margin">{label}</div>
                </GridCol>
                {React.Children.map(children, (child, index) =>
                    // @ts-ignore
                    React.cloneElement(child, { childCount, index }),
                )}
            </GridRow>
            <GridRow>
                <GridCol sm={12} md={{ cols: 8, offset: 2 }}>
                    <hr className="ffe-divider-line" />
                </GridCol>
            </GridRow>
        </>
    );
};
