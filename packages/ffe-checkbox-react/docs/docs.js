import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import CreateCheckbox, { MainExample } from './example-component';

const example = (
<div>
    <div className="component-intro">
        <h2 className="component-intro__header">Checkbox</h2>
        <div className="lozenge lozenge--success">I PRODUKSJON</div>
        <p className="ffe-micro-text" style={{ position: 'relative', bottom: '22px' }}>
            HENTET FRA <a href="https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-checkbox-react">STASH</a>
        </p>
        <p>Brukes når det er flere mulige valg. Har en standard og en inline variant.</p>
    </div>
    <h3 className="ffe-h4">Eksempler</h3>

    <div className="example-container">
        <p className="example-container__header">Default</p>

        <div className="ffe-input-group" aria-live="polite">
            <fieldset class="ffe-fieldset">
                <legend className="ffe-form-label">
                    What colors do you like on unicorns?
                </legend>
                <div>
                    { CreateCheckbox({ name: 'yellow-block', label: 'Yellow', checked: true, onChange: () => {} }) }
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
            <fieldset class="ffe-fieldset">
                <legend className="ffe-form-label">
                    Favorite unicorn foods?
                </legend>
                { CreateCheckbox({ name: 'yellow-inline', label: 'Yellow', checked: true, onChange: () => {} }) }
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
