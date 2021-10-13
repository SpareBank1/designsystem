import React from 'react';
import DarkmodeButton from './DarkmodeButton';
// eslint-disable-next-line react/prop-types
export default function PageLayout({ title, children }) {
    return (
        <>
            <header className="sb1ex-header">
                <h1 className="sb1ex-header__headline">{title}</h1>
                <DarkmodeButton />
            </header>
            <main className="sb1ex-main">{children}</main>
        </>
    );
}
