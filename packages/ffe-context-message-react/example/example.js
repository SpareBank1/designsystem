import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import prettyHtml from 'pretty';
import ThumbUpIcon from 'ffe-icons-react/tommel-opp-ikon';
import {
    ContextInfoMessage,
    ContextTipMessage,
    ContextSuccessMessage,
    ContextErrorMessage,
} from '../lib';

const example = (
    <div>
        <div className="component-intro">
            <h2 className="component-intro__header">Kontekst Meldinger</h2>
            <div className="lozenge lozenge--success">I PRODUKSJON</div>
            <p className="ffe-micro-text ffe-external-docs-text">
                RELATERTE PAKKER PÅ STASH:
                <a href="https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-context-message">LESS</a>&nbsp;
                <a href="https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-context-message-react">REACT</a>
            </p>
            <p>Gir side eller produktspesifikk informasjon av ikke kritisk art</p>
        </div>

        <h3 className="ffe-h4">Eksempler</h3>

        <div className="example-container">
            <h4 className="example-container__header">Info</h4>
            <ContextInfoMessage
                header='Info'
                locale='nb'
                showCloseButton={true}
            >
                Info om en spennede side eller produkt.
            </ContextInfoMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Tips</h4>
            <ContextTipMessage
                header='Tips'
                locale='nb'
                icon={<ThumbUpIcon />}
                showCloseButton={true}
            >
                Tips om en spenndee side eller produkt.
            </ContextTipMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Success</h4>
            <ContextSuccessMessage
                header='Success'
                locale='nb'
                icon={<ThumbUpIcon />}
                showCloseButton={true}
            >
                Alt gikk bra!
            </ContextSuccessMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">Error</h4>
            <ContextErrorMessage
                header='Error'
                locale='nb'
                showCloseButton={true}
            >
                Whoops! Noe gikk feil.
            </ContextErrorMessage>
        </div>

        <div className="expanding-field">
            <button className="expanding-field__toggle">Vis HTML</button>
            <span className="expanding-field__icon"></span>
            <div className="expanding-field__content">
                <pre>
                    <code className="html hljs xml">
                        {
                            prettyHtml(renderToStaticMarkup(
                                <ContextInfoMessage
                                    header='Info'
                                    locale='nb'
                                    showCloseButton={true}
                                >
                                    Info om en spennede side eller produkt.
                                </ContextInfoMessage>
                            ))
                        }
                    </code>
                </pre>
            </div>
        </div>
    </div>
);

export default renderToStaticMarkup(example);
