import React, { Component, Fragment } from 'react';
import { bool, node, shape, string } from 'prop-types';

import Sidebar from '../sidebar';
import { Grid, GridRow, GridCol } from '../../../packages/ffe-grid-react';

class StyleGuide extends Component {
    componentDidUpdate(prevProps) {
        if (
            prevProps.displayMode === 'all' &&
            this.props.displayMode === 'component'
        ) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        const { children, title, toc } = this.props;

        return (
            <Fragment>
                <Grid topPadding={false} className="sb1ds">
                    <GridRow>
                        <GridCol lg={3} md={4} sm={12} bottomPadding={false}>
                            <Sidebar toc={toc} title={title} />
                        </GridCol>
                        <GridCol lg={9} md={8} sm={12} bottomPadding={false}>
                            <main className="sb1ds-main">
                                <h1 className="ffe-h1 sb1ds-intro__heading">
                                    Komponenter
                                </h1>
                                <div className="sb1ds-intro sb1ds-intro--section">
                                    <p className="ffe-lead-paragraph sb1ds-intro__paragraph">
                                        Vårt bibliotek av felles komponenter,
                                        implementert i Less og React.
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
}

StyleGuide.propTypes = {
    children: node.isRequired,
    displayMode: bool,
    title: string.isRequired,
    toc: shape({}).isRequired,
};

export default StyleGuide;
