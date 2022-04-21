import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import HamburgerButton from './HamburgerButton';
import DarkmodeButton from './DarkmodeButton';

export default function OverlayMenu({ title, close }) {
    return (
        <div className="sb1ex-wrapper">
            <header className="sb1ex-header sb1ex-header--with-background">
                <h1 className="sb1ex-header__headline">{title}</h1>
                <DarkmodeButton />
                <HamburgerButton isOpen={true} onToggle={close} />
            </header>
            <Navigation />
        </div>
    );
}

OverlayMenu.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    close: PropTypes.func,
};
