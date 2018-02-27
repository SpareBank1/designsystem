import React from 'react';
import { Grid, GridRow, GridCol } from '../../../packages/ffe-grid-react';
import classNames from 'classnames';
import Link from 'rsg-components/Link';
import Logo from './Logo';
import Scrollspy from 'react-scrollspy';

export default function TopMenu() {
    return (
        <div className="sb1ds-top-menu">
            <Grid noTopPadding={true} className="sb1ds-header-grid">
                <GridRow className="sb1ds-header-grid__row">
                    <GridCol
                        md={4}
                        sm={12}
                        start={true}
                        middle={true}
                        noBottomPadding={true}
                    >
                        <a href="./">
                            <Logo />
                        </a>
                    </GridCol>
                    <GridCol
                        md={8}
                        sm={12}
                        middle={true}
                        end={true}
                        noBottomPadding={true}
                        className="sb1ds-top-menu__wrapper"
                    >
                        <nav className="sb1ds-top-menu__site-nav">
                            <Scrollspy
                                className="sb1ds-top-menu__list"
                                offset={-70}
                                items={[
                                    'section-kom-i-gang',
                                    'section-merkevare',
                                    'section-visuell-stil',
                                    'section-universell-utforming',
                                    'section-komponenter',
                                ]}
                                currentClassName="sb1ds-top-menu__item--active"
                            >
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#section-kom-i-gang"
                                    >
                                        Kom i gang
                                    </Link>
                                </li>
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#section-merkevare"
                                    >
                                        Merkevare
                                    </Link>
                                </li>
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#section-visuell-identitet"
                                    >
                                        Visuell identitet
                                    </Link>
                                </li>
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#section-universell-utforming"
                                    >
                                        Universell utforming
                                    </Link>
                                </li>
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#section-komponenter"
                                    >
                                        Komponenter
                                    </Link>
                                </li>
                            </Scrollspy>
                        </nav>
                    </GridCol>
                </GridRow>
            </Grid>
        </div>
    );
}
