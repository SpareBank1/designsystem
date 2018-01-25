import React from 'react';
import { Grid, GridRow, GridCol } from '../../../packages/ffe-grid-react';
import classNames from 'classnames';
import Link from 'rsg-components/Link';
import Logo from './Logo';

export default function TopMenu() {
    return (
        <div className="sb1ds-top-menu">
            <Grid noTopPadding={true} className="sb1ds-header-grid">
                <GridRow className="sb1ds-header-grid__row">
                    <GridCol
                        md={3}
                        sm={12}
                        start={true}
                        middle={true}
                        noBottomPadding={true}
                    >
                        <a href="/">
                            <Logo />
                        </a>
                    </GridCol>
                    <GridCol
                        md={9}
                        sm={12}
                        middle={true}
                        end={true}
                        noBottomPadding={true}
                        className="sb1ds-top-menu__wrapper"
                    >
                        <nav className="sb1ds-top-menu__site-nav">
                            <ul className="sb1ds-top-menu__list">
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#kom-i-gang"
                                    >
                                        Kom i gang
                                    </Link>
                                </li>
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#merkevare"
                                    >
                                        Merkevare
                                    </Link>
                                </li>
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#visuell-stil"
                                    >
                                        Visuell stil
                                    </Link>
                                </li>
                                <li className="sb1ds-top-menu__item">
                                    <Link
                                        noUnderline={true}
                                        className="sb1ds-top-menu__link ffe-strong-text"
                                        href="#komponenter"
                                    >
                                        Komponenter
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </GridCol>
                </GridRow>
            </Grid>
        </div>
    );
}
