import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
    SystemErrorMessage,
    SystemInfoMessage,
    SystemSuccessMessage,
} from '../lib';

const example = (
    <div>
        <div className="component-intro">
            <h2 className="component-intro__header">System Message</h2>
            <div className="lozenge lozenge-success">I PRODUKSJON</div>
            <p className="ffe-micro-text ffe-external-docs-text">
                HENTET FRA <a href="***REMOVED***">STASH</a>
            </p>
            <p>Systemmeldinger</p>
        </div>

        <h3 className="ffe-h4">Eksempler</h3>

        <div className="example-container">
            <h4 className="example-container__header">Success</h4>
            <SystemErrorMessage header="Feilmelding">
                Bacon ipsum dolor amet lorem cupim pork belly jowl strip steak minim ham boudin nulla
                incididunt shoulder. In meatball turkey, sed in strip steak enim rump cupidatat dolore
                cupim sunt spare ribs labore short ribs.
            </SystemErrorMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Info</h4>
            <SystemInfoMessage header="Informasjon">
                Bacon ipsum dolor amet lorem cupim pork belly jowl strip steak minim ham boudin nulla
                incididunt shoulder. In meatball turkey, sed in strip steak enim rump cupidatat dolore
                cupim sunt spare ribs labore short ribs.
            </SystemInfoMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Success</h4>
            <SystemSuccessMessage header="Gladmelding">
                Bacon ipsum dolor amet lorem cupim pork belly jowl strip steak minim ham boudin nulla
                incididunt shoulder. In meatball turkey, sed in strip steak enim rump cupidatat dolore
                cupim sunt spare ribs labore short ribs.
            </SystemSuccessMessage>
        </div>

        <div className="expanding-field">
            <button className="expanding-field__toggle">Vis kode</button>
            <span className="expanding-field__icon"></span>
            <div className="expanding-field__content">
                <pre>
                    <code className="html hljs xml">
                        {
                            renderToStaticMarkup(
                                <SystemInfoMessage header="Headeren sendes inn her">
                                    Send innholdet her. Alt pakkes i et &lt;p&gt; element så unngå bruk av
                                    feks &lt;div&gt;, &lt;p&gt; og &lt;ul&gt;.
                                </SystemInfoMessage>
                            ).replace(/</, '\n<')
                        }
                    </code>
                </pre>
            </div>
        </div>

    </div>
);

export default renderToStaticMarkup(example);
