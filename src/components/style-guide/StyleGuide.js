import React, { Fragment } from 'react';
import { node, shape, string } from 'prop-types';

import TopMenu from '../top-menu';
import Sidebar from '../sidebar';
import { Grid, GridRow, GridCol } from '../../../packages/ffe-grid-react';

export default function StyleGuide(props) {
    const { children, title, toc } = props;

    return (
        <Fragment>
            <Grid noTopPadding={true} className="sb1ds">
                <GridRow>
                    <GridCol lg={3} md={4} sm={12} noBottomPadding={true}>
                        <Sidebar toc={toc} title={title} />
                    </GridCol>
                    <GridCol lg={9} md={8} sm={12} noBottomPadding={true}>
                        <main className="sb1ds-main">{children}</main>
                    </GridCol>
                </GridRow>
            </Grid>
        </Fragment>
    );
}

StyleGuide.propTypes = {
    children: node.isRequired,
    title: string.isRequired,
    toc: shape({}).isRequired,
};
