import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
    SystemErrorMessage,
    SystemInfoMessage,
    SystemNewsMessage,
    SystemSuccessMessage,
} from '../lib';

const example = (
    <div>
        <div className="component-intro">
            <h2 className="component-intro__header">System Message</h2>
            <div className="lozenge lozenge--success">I PRODUKSJON</div>
            <p className="ffe-micro-text ffe-external-docs-text">
                HENTET FRA <a href="***REMOVED***">STASH</a>
            </p>
            <p>Denne typen meldinger skal kun benyttes til kritiske systemmeldinger som skal eksponeres til brukeren. Kan lukkes om brukeren klikker på "x".</p>
        </div>

        <h3 className="ffe-h4">Eksempler</h3>

        <div className="example-container">
            <h4 className="example-container__header">Feil</h4>
            <SystemErrorMessage>
                Feilmelding :(
            </SystemErrorMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Informasjon</h4>
            <SystemInfoMessage>
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
            </SystemInfoMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Nyheter</h4>
            <SystemNewsMessage>
                Velkommen til betaversjonen av nye Sparebank1.no. En egen farge for nyheter som dette.
            </SystemNewsMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Success</h4>
            <SystemSuccessMessage>
                Gladmelding :)
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
                                <SystemInfoMessage>
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
