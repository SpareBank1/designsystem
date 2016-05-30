import { renderToStaticMarkup } from 'react-dom/server';
import { Example } from './example-component';
import React from 'react';

const example = (
<div>
    <div className="component-intro">
        <h2 className="component-intro__header">Message Box</h2>
        <div className="lozenge lozenge--success">I PRODUKSJON</div>
        <p className="ffe-micro-text" style={{ position: 'relative', bottom: '22px' }}>
            HENTET FRA <a href="***REMOVED***">STASH</a>
        </p>
        <p>Message box bør brukes når man skal vise informasjon til bruker, som at en oppdatering har feilet eller at tjenester er nede. </p>
    </div>
    <h3 className="ffe-h4">Eksempler</h3>
    <div className="example-container">
        <p className="example-container__header">Default</p>
        { Example }
    </div>
    <div className="expanding-field">
        <button className="expanding-field__toggle">Vis kode</button>
        <span className="expanding-field__icon"></span>
        <div className="expanding-field__content">
                <pre><code className="html hljs xml">
                    { renderToStaticMarkup(Example) }
                </code></pre>
            </div>
    </div>

    <div className="expanding-field">
        <button className="expanding-field__toggle">Vis API for React-komponent</button>
        <span className="expanding-field__icon"></span>
        <div className="expanding-field__content">
            <pre>
                <code className="html hljs js">{
                `<SuccessMessage 
                        title="Betalingen er gjennomført" 
                        content="Her står det en lengre melding, kanskje med HTML." 
                />`}</code>
            </pre>
        </div>
    </div>
</div>

);


export default renderToStaticMarkup(example);
