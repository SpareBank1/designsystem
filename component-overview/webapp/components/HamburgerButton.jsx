import React from 'react';
import { bool, func } from 'prop-types';
import classNames from 'classnames';

const HamburgerButton = ({ isOpen, onToggle }) => {
    const cns = classNames({
        'sb1ex-hamburger-button': true,
        'sb1ex-hamburger-button--expanded': isOpen,
    });

    return (
        <button
            className={cns}
            onClick={onToggle}
            aria-controls="navigation-overlay"
            aria-label="Meny"
            aria-expanded={isOpen}
        >
            <span className="sb1ex-hamburger-button-icon">
                <span className="sb1ex-hamburger-button-icon__bar" />
            </span>
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
