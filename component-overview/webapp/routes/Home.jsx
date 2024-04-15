import React from 'react';
import { Navigation } from '../components';

export default function Home() {
    return (
        <main className="sb1ex-page">
            <header className="sb1ex-page__header sb1ex-header">
                <h1 className="sb1ex-header__headline">
                    Designsystem eksempler
                </h1>
            </header>
            <Navigation />
        </main>
    );
}
