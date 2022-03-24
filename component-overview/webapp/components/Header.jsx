import React from 'react';
import DarkmodeButton from './DarkmodeButton';
import PropTypes from 'prop-types';

export default function Header({ title, children }) {
    return (
        <header className="sb1ex-header">
            <h1 className="sb1ex-header__headline">{title}</h1>
            {children}
            <DarkmodeButton />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};
