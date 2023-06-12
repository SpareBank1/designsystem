import React, { Fragment } from 'react';
import { node, string } from 'prop-types';

import { GridCol, GridRow } from '@sb1/ffe-grid-react';

export default function Detail(props) {
    const { children, label } = props;

    const childCount = React.Children.count(children);

    return (
        <Fragment>
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
                    React.cloneElement(child, { childCount, index }),
                )}
            </GridRow>
            <GridRow>
                <GridCol sm={12} md={{ cols: 8, offset: 2 }}>
                    <hr className="ffe-divider-line" />
                </GridCol>
            </GridRow>
        </Fragment>
    );
}

Detail.propTypes = {
    /**
     * A set of `DetailsContent` components to render for this row
     */
    children: node.isRequired,
    /**
     * A label for the data
     */
    label: string.isRequired,
};
