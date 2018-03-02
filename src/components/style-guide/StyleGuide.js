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
                        <main className="sb1ds-main">
                            <h1 className="ffe-h1 sb1ds-intro__heading">Komponenter</h1>
                            <div class="sb1ds-intro sb1ds-intro--section">
                                <p className="ffe-lead-paragraph sb1ds-intro__paragraph">
                                    Vårt bibliotek av felles komponenter, implementert i Less og React.
                                </p>
                            </div>

                            {children}
                        </main>
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
