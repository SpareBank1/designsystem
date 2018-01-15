import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

import { Grid, GridCol, GridRow } from 'ffe-grid-react';

export default function Detail(props) {
    const { children, label } = props;

    const childCount = React.Children.count(children);

    return (
        <Fragment>
            <GridRow>
                <GridCol
                    sm={12}
                    md={{ cols: 2, offset: 2 }}
                    className="ffe-grid-details-react__content"
                    noBottomPadding={true}
                >
                    <div className="ffe-h5 ffe-h5--no-margin">{label}</div>
                </GridCol>
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child, { childCount, index }),
                )}
            </GridRow>
            <GridRow>
                <GridCol
                    sm={12}
                    md={{ cols: 8, offset: 2 }}
                    noBottomPadding={true}
                >
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
