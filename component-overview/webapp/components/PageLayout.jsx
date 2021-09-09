import React from 'react';

export default function PageLayout({ title, children }) {
    return (
        <>
            <header className="sb1ex-header">
                <h1 className="sb1ex-header__headline">{title}</h1>
            </header>
            <main className="sb1ex-main">{children}</main>
        </>
    );
}
