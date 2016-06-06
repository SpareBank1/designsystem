import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import CreateCheckbox, { MainExample, YellowExample, PurpleExample, WhiteExample } from './example-component';

const example = (
<div>
    <div className="component-intro">
        <h2 className="component-intro__header">Checkbox</h2>
        <div className="lozenge lozenge--success">I PRODUKSJON</div>
        <p className="ffe-micro-text" style={{ position: 'relative', bottom: '22px' }}>
            HENTET FRA <a href="***REMOVED***">STASH</a>
        </p>
        <p>Brukes når det er flere mulige valg. Har en standard og en inline variant.</p>
    </div>
    <h3 className="ffe-h4">Eksempler</h3>

    <div className="example-container">
        <p className="example-container__header">Default</p>

        <div className="ffe-input-group" aria-live="polite">
            <label id="checkbox-ibf-label" className="ffe-form-label" htmlFor="checkbox-ibf1">
                What colors do you like on unicorns?
            </label>
            <fieldset id="checkbox-ibf1">
                <div>
                    { CreateCheckbox({ name: 'yellow-block', label: 'Yellow', checked: true }) }
                </div>
                <div>
                    { CreateCheckbox({ name: 'purple-block', label: 'Purple' }) }
                </div>
                <div>
                    { CreateCheckbox({ name: 'white-block', label: 'White' }) }
                </div>
            </fieldset>
        </div>
    </div>


    <div className="example-container">
        <p className="example-container__header">Inline</p>
        
        <div className="ffe-input-group" aria-live="polite">
            <label id="checkbox-ibf-label" className="ffe-form-label" htmlFor="checkbox-inline-ibf1">
                Favorite unicorn foods?
            </label>
            <fieldset id="checkbox-inline-ibf1">
                { CreateCheckbox({ name: 'yellow-inline', label: 'Yellow', checked: true }) }
                { CreateCheckbox({ name: 'purple-inline', label: 'Purple' }) }
                { CreateCheckbox({ name: 'white-inline', label: 'White' }) }
            </fieldset>
        </div>
    </div>



    <div className="expanding-field">
        <button className="expanding-field__toggle">Vis kode</button>
        <span className="expanding-field__icon"></span>
        <div className="expanding-field__content">
                <pre><code className="html hljs xml">
                    { renderToStaticMarkup(MainExample) }
                </code></pre>
            </div>
    </div>

    <div className="expanding-field">
        <button className="expanding-field__toggle">Vis API for React-komponent</button>
        <span className="expanding-field__icon"></span>
        <div className="expanding-field__content">
                <pre>
<code className="html hljs js">{
`<Checkbox
onChange={ () => {} }
checked={false}
name="my-checkbox-label"
label="Yellow"
/>`}</code></pre>
            </div>
    </div>
</div>

);


export default renderToStaticMarkup(example);
