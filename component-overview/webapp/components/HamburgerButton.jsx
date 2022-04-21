import { bool, func } from 'prop-types';
import React from 'react';
import { KryssIkon } from '@sb1/ffe-icons-react';

const HamburgerButton = ({ isOpen, onToggle }) => {
    return (
        <button className="sb1ex-hamburger-button" onClick={onToggle}>
            {isOpen ? (
                <KryssIkon className="sb1ex-hamburger-button__close-icon" />
            ) : (
                <span className="sb1ex-hamburger-button-icon">
                    <span className="sb1ex-hamburger-button-icon__bar" />
                </span>
            )}
        </button>
    );
};

HamburgerButton.propTypes = {
    isOpen: bool,
    onToggle: func.isRequired,
};

HamburgerButton.defaultProps = {
    isOpen: false,
};

export default HamburgerButton;
