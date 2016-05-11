import { renderToString } from 'react-dom/server';
import { Example } from './example-component';
import React from 'react';

const example = (
<div>
    <div className="component-intro">
        <h2 className="component-intro__header">Dropdown</h2>
        <div className="lozenge lozenge--success">I PRODUKSJON</div>
        <p className="ffe-micro-text" style={{ position: 'relative', bottom: '22px' }}>
            HENTET FRA <a href="***REMOVED***">STASH</a>
        </p>
        <p>Select box bør brukes hvis man har et sett med predefinerte valg å velge fra. Radioknapper er et godt
            alternativ hvis det er få valg. Vi bruker native elementet slik at mobil/nettbrett får riktig GUI.    </p>
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
                    { renderToString(Example) }
                </code></pre>
            </div>
    </div>

    <div className="expanding-field">
        <button className="expanding-field__toggle">Vis API for React-komponent</button>
        <span className="expanding-field__icon"></span>
        <div className="expanding-field__content">
                <pre>
<code className="html hljs js">{ 
`<Dropdown label="Velg måned" id="month">
    <option value="0">Januar</option>
    <option value="1">Februar</option>
    <option value="2">Mars</option>
    <option value="3">April</option>
</Dropdown>`}</code></pre>
            </div>
    </div>
</div>

);


export default renderToString(example);