import React from 'react';
import { Navigation, DarkmodeButton } from '../components';

export default function Home() {
    return (
        <>
            <header className="sb1ex-header sb1ex-header--with-background">
                <h1 className="sb1ex-header__headline">
                    @sb1/ffe-*-react by example
                </h1>
                <DarkmodeButton />
            </header>
            <Navigation />
        </>
    );
}
